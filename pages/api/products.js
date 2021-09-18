import products from '../../static/products'
import connectDB from '../../utils/connectDb'

connectDB()

export default products = (req, res) => {
    res.status(200).json(products);

};