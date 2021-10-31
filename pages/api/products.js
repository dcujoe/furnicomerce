import Product from '../../models/Product'
//import products from '../../static/products.json'
// change fetching data from static products.json to remote mongoDB server
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => { 
    const { page, size } = req.query;

    // convert querystring values to numbers
    const pageNum = Number(page);
    const pageSize = Number(size);
    let products = [];

    // how to return first page number
    if (pageNum === 1) {
        products = await Product.find().limit(pageSize);
    } else {
        const skips = pageSize * (pageNum - 1)
        products = await Product.find().skip(skips).limit(pageSize)
    }
    // const products = await Product.find();
    res.status(200).json(products);
};


