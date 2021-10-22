import { Header, Segment, Button, Item } from 'semantic-ui-react'
import { useRouter } from 'next/router'

function CartItemList({ products, user, handleRemoveFromCart }) {
  const router = useRouter();

  function mapCartProductsToItems(products) {
    return products.map(p => ({ 
      childKey: p.product._id,
      header: (
        <Item.Header as="a" 
        onClick={() => router.push(`/product?_id=${p.product._id}`)}>
          {p.product.name}
        </Item.Header>
      ),
      image: p.product.mediaUrl,
      meta: `${p.quantity} x $${p.product.price}`,
      fluid: "true",
      extra: (
        <Button
        basic
        icon="remove"
        floated="right"
        onClick={() => handleRemoveFromCart(p.product._id)}
        />
      )
    }))
  }


  if (products.length === 0) {
    return(
      <Segment secondary color="teal" inverted textAlign="center" placeholder
  >
    <Header icon>
    <i className="shopping basket icon"></i>
      No products in your cart. Add some!
    </Header>
  
    <div>
      {user ? (
        <Button color="orange" onClick={() => router.push('/')}>
          View Products
        </Button>
      ) : (
        <Button color="blue" onClick={() => router.push('/login')}>Login to Add Products</Button>
      )}
    </div>
  </Segment>    )
  } 
  // divided: prop used to divide products into two rows vertically
  return <Item.Group divided items={mapCartProductsToItems(products)} />
  

  
}

export default CartItemList;
