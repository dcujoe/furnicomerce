import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Divider, Segment, Button } from 'semantic-ui-react'
import calculateCartTotal from '../../utils/calculateCartTotal'

function CartSummary({ products }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  
  // this is used to check the state of our cart to know if its empty or not
  const [isCartEmpty, setCartEmpty] = React.useState(false)



  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products)
    setCartAmount(cartTotal)
    setStripeAmount(stripeTotal)
    setCartEmpty(products.length === 0);

  }, [products])


  return (
    <>
    <Divider/>
    <Segment clearing size="large">
      <strong>Sub total</strong> ${cartAmount}
      <StripeCheckout>
      <Button
      icon="cart"
      color="teal"
      disabled={isCartEmpty}
      floated="right"
      content="Checkout"
      />
      </StripeCheckout>
      
    </Segment>
    </>
  )
}

export default CartSummary;
