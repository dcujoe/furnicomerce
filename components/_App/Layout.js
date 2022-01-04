import Head from "next/head";
import { Container } from "semantic-ui-react";
import ImageSlider from ".."
import Header from "./Header";
import HeadContent from "./HeadContent";
import ProductList from "../../components/Index/ProductList"


export default function Layout ({ children, user }) {
  return (
    <>
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
      <Header user={user} />
      <Container text style={{ paddingTop: "1em" }}>
        
    {children}
     <ImageSlider />

     //create ImageSlider component
      </Container>
    </>
  );
}


