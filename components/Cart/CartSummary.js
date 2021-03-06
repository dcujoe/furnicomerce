import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Divider, Segment, Button } from 'semantic-ui-react'
import calculateCartTotal from '../../utils/calculateCartTotal'

function CartSummary({ products, handleCheckout }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [success, setSuccess] = React.useState(false);
  
  // this is used to check the state of our cart to know if its empty or not
  const [isCartEmpty, setCartEmpty] = React.useState(false)



  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);

  }, [products])


  return (
    <>
    <Divider/>
    <Segment clearing size="large">
      <strong>Sub total</strong> ${cartAmount}
      <StripeCheckout
       name="Furnicommerce"
       amount={stripeAmount}
       image={products.length > 0 ? products[0].product.mediaUrl : ""}
       currency="EUR"
       shippingAddress={true}
       billAddress={true}
       zipCode={true}
       stripeKey="pk_test_pIjIeW6GeqJljjHAvrRFXQ5t00Xo3PKcsS"
       token={handleCheckout}
       triggerEvent="onClick"
       //when the button is clicked for pay. The handleCheckout is executed
      >
      <Button
      icon="cart"
      color="teal"
      disabled={isCartEmpty || success}
      floated="right"
      content="Checkout"
      />
      </StripeCheckout>
      
    </Segment>
    </>
  );
}

export default CartSummary;
