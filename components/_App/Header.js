import { Input, Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import { handleLogout } from '../../utils/auth'
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default function Header({ user }) {
  const router = useRouter();

  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  
  

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu fluid id="menu" inverted borderless>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive('/')}>
            <Image
             // size="mini"
             // src="/static/logo.svg"
              //in line style props style
             
            />
            Alladin
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header active={isActive('/cart')}>
            <Icon name="" size="large" />
            Cart
          </Menu.Item>
        </Link>


        {isRootOrAdmin && (
          <Link href="/create">
            <Menu.Item header active={isActive('/create')}>
              <Icon name="add square" size="large" />
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
          
            <Link href="/account">
              <Menu.Item header active={isActive('/account')}>
                <Icon name="" size="large" />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item onClick={handleLogout} header>
              <Icon name="" size="large" />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href="/login">
              <Menu.Item header active={isActive('/login')}>
                <Icon name="" size="large" />
                Login
              </Menu.Item>
            </Link>

            <Link href="/signup">
              <Menu.Item header active={isActive('/signup')}>
                <Icon name="" size="large" />
                Signup
              </Menu.Item>
            </Link>

            <Link href="/register">
              <Menu.Item header active={isActive('/register')}>
                <Icon name="" size="large" />
                Register
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
     
    

    <Menu.Item fluid id="menu" position='right'>
      <Input
        action={{ type: 'submit', content: 'Go' }}
        placeholder='Navigate to...'
      />
    </Menu.Item>
  </Menu>
   
    
  )
}

