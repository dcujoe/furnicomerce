import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


connectDb()

export default async (req, res) => {
    const { name, email, password } = req.body



    try {
        // 1. check to see if the user already exists in the database
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User already exists with ${email}`)
        }

        // 2. if not, hash their password. This involves taking a normal password and encrypting items
        // use bcrypt to hash password
       const hash = await bcrypt.hash(password, 10)

        // 3. Create user 

        const newUser = await new User({
            name, 
            email, 
            password: hash
        }).save()

        console.log({newUser})

       // 4. Create token for new user. 
       // The jsonwebtoken is signed in within a specific period of time using ExpiresIn function
       // 7d means token cannot be used after 7 days
       const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { ExpiresIn: '7d' })
       
       
       // 5. Send back token
       res.status(201).json(token) 

    } catch (error) {
        console.error(error)
        res.status(500).send("Error signup user. Please try again later")
    } 



}