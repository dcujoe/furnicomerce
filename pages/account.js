import AccountHeader from '../components/Account/AccountHeader';
import AccountOrders from '../components/Account/AccountOrders';
import AccountHeader from '../components/Account/AccountHeader'




function Account({ user }) {
  return 
  <>
  <AccountHeader {...user}/>
  <AccountOrders />
  </>;
}



export default Account;
