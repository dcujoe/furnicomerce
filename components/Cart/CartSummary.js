import React from 'react';
import { Divider, Segment, Button } from 'semantic-ui-react'

function CartSummary({ products }) {
  // this is used to check the state of our cart to know if its empty or not
  const [isCartEmpty, setCartEmpty] = React.useState(false)



  React.useEffect(() => {
    setCartEmpty(products.length === 0);

  }, [products])


  return (
    <>
    <Divider/>
    <Segment clearing size="large">
      <strong>Sub total</strong> $0.00
      <Button
      icon="cart"
      color="teal"
      disabled={isCartEmpty}
      floated="right"
      content="Checkout"
      />
    </Segment>
    </>
  )
}

export default CartSummary;
