import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


connectDb()


export default async (res, req) => {
    const { email, password } = req.body

    try {

        // 1. check to see if the user exists with the provided Email
        const user = await User.findOne({ email }).select('+password')
        // 2. If not, return errorMsg
        if (!user) {
            return res.status(404).send("No user exists with that email")
        }
        // 3. check to see if users password matches the one in db
        const passwordsMatch = await bcrypt.compare(password, user.password)
        // 4. If so, generate a token and return
        if (passwordsMatch) { 
             
           const token = jwt.sign({ userId: user._id }, 
            process.env.JWT_SECRET, { expiresIn: '7d' })
        
        // 5. send that token to the client
        res.status(200).json(token)
        } else {
        res.status(401).send("Passwords do not match")
        }


    } catch (error) {
        console.error(error)
        res.status(500).send("Error logging in user");
    }

}