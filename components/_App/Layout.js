import Head from "next/head";
import { Container } from "semantic-ui-react";
import Footer from "./Footer"
import Pagination from "./Pagination"
import Header from "./Header";
import HeadContent from "./HeadContent";
import ProductList from "../../components/Index/ProductList"
import Product from "../../pages/product";
import Newrow from "./Newrow"
import Newcontainer from "./Newcontainer"
import Sectionunderow from "./Sectionunderow"



export default function Layout ({ children, user }) {

  return (
  
  <Container style={{ width: '100%'}} vertical>
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
      <Container />
      <Header user={user} /> 
      {children}
      <Newrow />
      <Sectionunderow />
      <Newcontainer />
      <Footer />
      </Container>
      
    )
  }
    
 
    
