import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import Cart from '../../models/Cart'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'


connectDb()

export default async (req, res) => {
    const { name, email, password } = req.body



    try {
        // 1. validate name/ email / password values
        if (!isLength(name, { min: 3, max: 10 })) {
            return res.status(422).send("Name must be 3-10 characters long")
        } else if (!isLength(email, { min: 6 })) {
            return res.status(422).send("Name must be at least characters long")
        } else if (!isEmail(email)) {
            return res.status(422).send("Email must be valid")
        }
        // 2. check to see if the user already exists in the database
        const user = await User.findOne({ email })
        if (user) {
            return res.status(422).send(`User already exists with ${email}`)
        }

        // 3. if not, hash their password. This involves taking a normal password and encrypting items
        // use bcrypt to hash password
       const hash = await bcrypt.hash(password, 10)

        // 4. Create user 
        const newUser = await new User({
            name, 
            email, 
            password: hash
        }).save();

        console.log({newUser});

        // 5. Create a cart for a new user
        await new Cart({ user: newUser._id }).save();

       // 6. Create token for new user. 
       // The jsonwebtoken is signed in within a specific period of time using ExpiresIn function
       // 7. means token cannot be used after 7 days
       const token = jwt.sign({ userId: newUser._id }, 
        process.env.JWT_SECRET, { ExpiresIn: '7d' });
       
       
       // 7. Send back token
       res.status(201).json(token) 

    } catch (error) {
        console.error(error)
        res.status(500).send("Error signup user. Please try again later")
    } 



}