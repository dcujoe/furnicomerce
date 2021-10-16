import mongoose from 'mongoose'
import shortid from 'shortid'
//shortid is a package used to generate random ids for products

//String property is a mongoose property that is destructred from mongoose schema
const { String, Number } = mongoose.Schema.Types;


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        required: true,
        default: shortid.generate()
    },
    description: {
        type: String,
        required: true
    }, 
    mediaUrl: {
        type: String,
        required: true
    },

});


//This is to make sure that the model has not been already generated
// mongoose.models.Product is to check if product models are already avaialable
export default mongoose.models.Product || 
mongoose.model("Product", ProductSchema)