import axios from 'axios'
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'


function Product({ product }) {
  return (
    <>
    <ProductSummary {...product} />
    <ProductAttributes {...product} />

    </>
  )
}

Product.getInitialProps = async ({ query : { _id } }) => {
  const url = 'http://localhost:3000/api/product';
  //using _id as an endpoint to be used as a query string to fetch data
  const payload = { params: { _id } }
  const response = await axios.get(url, payload)

  return { product: response.data }
};

export default Product;
