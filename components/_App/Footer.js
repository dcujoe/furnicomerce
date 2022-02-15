import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import { handleLogout } from '../../utils/auth'
import NProgress from 'nprogress';


Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default function Footer({ user }) {
  const router = useRouter()

  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  
  

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Container className="footer">
    <Menu stackable fluid id="menu" inverted width={200} height={200} className="footer">
      <Container stackable fluid>
        <Link href="/" header active={isActive('/')}>
           
            Alladin
          
        </Link>
        <Link href="/" header active={isActive('/')}>
           
           Alladin
         
       </Link>
       <Link href="/" header active={isActive('/')}>
           
           Alladin
         
       </Link>
       <Link href="/" header active={isActive('/')}>
           
           Alladin
         
       </Link>
       <Link href="/" header active={isActive('/')}>
           
           Alladin
         
       </Link>

     

        
      </Container>
    </Menu>
    </Container>
  )
}