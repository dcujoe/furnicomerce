import Head from "next/head";
import { Container } from "semantic-ui-react";
import Footer from "./Footer"
import Pagination from "./Pagination"
import Header from "./Header";
import Information from "./Information"
import HeadContent from "./HeadContent";
import ProductList from "../../components/Index/ProductList"
import Product from "../../pages/product";



export default function Layout ({ children, user }) {

  return (
  
  <Container style={{ padding: '0 0', width: '100%'}} vertical>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>Alladin</title>
      </Head>
      <Container style={{ padding: '2px', width: '100%'}}/>
      <Header user={user} /> 
      {children}
      <Information />
      <Footer />
      </Container>
      
    )
  }
    
 
    
