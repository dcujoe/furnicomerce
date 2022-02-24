import { Segment, Container, Image } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
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
        <Container className="carousel" style={{ marginRight: "0", marginLeft: "0", width: "100%" }}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={4}
        interval={5}
        intervalDuration={4}
        className="carousel"
        style={{ marginRight: "0", marginLeft: "0" }}
      >
        <Slider>
          <Slide index={1}><Image
              size="150"
              //src="/static/images/img111.png"
              //in line style props style
              style={{ marginRight: "1em" }}
            />I am the first slide</Slide>
          <Slide index={2}><Image
              size="150"
             // src="/static/images/img112.png"
              //in line style props style
              style={{ marginRight: "1em" }}
            />I am the second Slide.</Slide>
          <Slide index={3}><Image
              size="150"
             // src="/static/images/img113.png"
              //in line style props style
              style={{ marginRight: "1em" }}
            />
            I am the third Slide.</Slide>
          <Slide index={3}>
          <Image
              size="150"
              //src="/static/images/img114.png"
              //in line style props style
              style={{ marginRight: "1em" }}
            />I am the third Slide.</Slide>
        </Slider>
        <ButtonPlay />
        <Container className="buttonclick" style={{ marginLeft: "50%" }}>
        <ButtonBack >Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </Container>
        <ButtonPlay />
      </CarouselProvider>
      </Container>
    );
  
}