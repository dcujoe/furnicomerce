import React from 'react'
import axios from "axios"
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'



function Home({ products }) {
  console.log(products)
 
 
  return <ProductList products={products} />

}

Home.getInitialProps = async ctx => {
  // creating pagination using a query string of the pages
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9;
  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };


    
    const response = await axios.get(url, payload);
    return { products: response.data };
  
  // note: this object would be merged with existing props

}


export default Home;
