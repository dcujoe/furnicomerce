import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import FooterContent from "./FooterContent"
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


function Footer({ user }) {
  const router = useRouter();

  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  
  

  function isActive(route) {
    return route === router.pathname;
  }

  return (
      
    <Menu fluid id="footer" color="blue" shadowSize={2}>
        <FooterContent />
      <Container >
        <Link href="/">
          <Menu.Item footer active={isActive('/')}>
            <Image
              size="mini"
              src="/static/logo.svg"
              //in line style props style
              style={{ marginRight: "1em", marginLeft: "10em" }}
            />
           
           
          </Menu.Item>
        </Link>

      </Container>
    </Menu>
  );
}

export default Footer;

