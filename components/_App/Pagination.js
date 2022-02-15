import { Segment, Container, Header, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import { handleLogout } from '../../utils/auth'
import NProgress from 'nprogress';
import ImageCarousel from './ImageCarousel'
import "pure-react-carousel/dist/react-carousel.es.css";


Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default function Pagination({ user }) {
  const router = useRouter()

  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  
  

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Container className="pagination-top">
    <Segment attached="top">
        <Header as="h2" content="Image carousel" />
        <p>
          Carousel
        </p>
      </Segment>
      <Segment attached="bottom">
        <ImageCarousel />
      </Segment>
    </Container>
  )
}