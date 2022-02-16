import axios from 'axios'
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'
import baseUrl from '../utils/baseUrl'


function Product({ product, user }) {

  return (
      <>
      <Container style={{ marginRight: '2', marginLeft: '2' }}>
      <ProductSummary user={user} {...product} />
      <ProductAttributes user={user} {...product} />
      </Container>
      </>
    );
}

Product.getInitialProps = async ({ query : { _id } }) => {
  const url = `${baseUrl}/api/product`;
  //using _id as an endpoint to be used as a query string to fetch data
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { product: response.data }
};

export default Product;


