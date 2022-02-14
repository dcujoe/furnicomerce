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
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive('/')}>
            <Image
              size="mini"
              src="/static/logo.svg"
              //in line style props style
              style={{ marginRight: "1em" }}
            />
            Alladin
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header active={isActive('/cart')}>
            <Icon name="cart" size="large" />
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
                <Icon name="user" size="large" />
                Account
              </Menu.Item>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <Menu.Item header active={isActive('/login')}>
                <Icon name="sign in" size="large" />
                Login
              </Menu.Item>
            </Link>

          
          </>
        )}
      </Container>
    </Menu>
    </Container>
  )
}