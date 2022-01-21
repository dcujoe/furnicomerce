import AccountHeader from '../components/Account/AccountHeader';
import AccountOrders from '../components/Account/AccountOrders';
import AccountPermissions from '../components/Account/AccountPermissions';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { AccountLinks } from 'stripe/lib/resources';


function Account({ user, orders }) {
  return (
  <>
  <AccountHeader {...user}/>
  <AccountOrders orders={orders}/>
  {user.role === 'root' && <AccountPermissions 
  currentUserId={user._id}/>}
  </>
  );
}

Account.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return { orders: [] }
  }

  const payload = { headers: { Authorization: token } }
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  await response.data;

}


//practice on account AccountPermissions
AccountLinks.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx)
  if(!token) {
    return { orders: [] }
  }

  const payload = { headers: { Authorization: token } }
  const url = `${baseUrl}/api/orders`;
  const response = await axios.get(url, payload);
  await response.data;
}


export default Account;
