import cookie from 'js-cookie'
import Router from 'next/router'

// we can use the Router directly since we are inside a function and not a function component


export function handleLogin(token) {

// key for cookie is 'token'. value for is token
cookie.set('token', token)
window.localStorage.setItem('login', Date.now());
Router.push('/account')

}

export function redirectUser(ctx, location) {
    if (ctx.req) {
        ctx.res.writeHead(302, { location: location })
        ctx.res.end();
    } else {
        Router.push(location)
    }
}


export function handleLogout() {
    cookie.remove('token');
    window.localStorage.setItem('logout', Date.now())
    Router.push('/login');
}