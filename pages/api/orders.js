import Order from '../../models/Order';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';


connectDb();


export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization,
        process.env.JWT_SECRET)

        // .sort() method used to identify how the products are sorted
        // desc  or -1 - it means products are sorted in descending order 
        // asc  or 1 - this sorts according to ascending order of

        const orders = await Order.find({ user: userId }).sort({ createdAt: 'desc'})
        .populate({
            path: 'products.product',
            model: "Product"
        })
        res.status(200).json({ orders });
    } catch (error) {
        console.error(error);
        res.status(403).send("Please login again");
    }
}