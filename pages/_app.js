import App from "next/app";
import Layout from "../components/_App/Layout";


class MyApp extends App {
  
  static async getInitialProps({ getDerivedStateFromProps, ctx }) {
    let pageProps = {};

    if(getDerivedStateFromProps) {
      pageProps = await getDerivedStateFromProps.getInitialProps(ctx)
    }

    return { pageProps }


  }


  render() {
    const { getDerivedStateFromProps, pageProps } = this.props;
    return (
      
      <Layout>
      
        <getDerivedStateFromProps {...pageProps} />
      
      </Layout>
      
    );
  }
}

export default MyApp;
