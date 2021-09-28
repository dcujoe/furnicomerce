import React from 'react'
import axios from "axios"



function Home(products) {
  console.log(products)
 //React.useEffect(() => { 
  // getProducts()
 //}, [])

  //async function getProducts() {

    // fetch data from server
    //const url = "http://localhost:3000/api/products";
    //const response = await axios.get(url);
    //console.log(response.data)
  //}


  // return response data as an object
  // note: this object will be merged with existing props
  return <>Home</>

}

Home.getInitialProps = async () => {
  // fetch datas on server
  // return response data as an object
    const url = "http://localhost:3000/api/products";
    const response = await axios.get(url);
    return { products: response.data };
  
  // note: this object would be merged with existing props

}


export default Home;
