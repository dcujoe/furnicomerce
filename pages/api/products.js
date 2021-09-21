// importing product models from mongoose created product model to manipulate all data
import Product from '../../models/Product'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
    //.find method is used to return a return function that can be used with await
    const products = await Product.find()

    res.status(200).json(products);
};