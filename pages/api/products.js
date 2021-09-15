import products from '../../static/products.json'

export default products = (req, res) => {
    res.status(200).json(products);

};