import mongoose from 'mongoose'

const { String } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        // enum gives an array of options where only 1 option can be chosen at a time
        // users given a cart and can checkout products 
        // admin has user privileges, can create and delete products 
        // root user has all admin privileges as well as change who is in admin or not
        enum: ["user", "admin", "root"]
    }
}, {
    // this timestamps enable us know when users and admins joined

    timestamps: true
})



export default mongoose.models.User || mongoose.model("User", UserSchema)