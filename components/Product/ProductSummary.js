import { Item, Label } from 'semantic-ui-react'
import AddProductToCart from './AddProductToCart'

function ProductSummary({ name, image, _id, price, sku, user }) {
  return (
  <>
  <Item.Group>
    <Item>
      <Item.Image size="medium" src={image}/>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>€{price}</p>
          <Label>SKU: {sku}</Label>
        </Item.Description>
        <Item.Extra>
          <AddProductToCart productId={_id} user={user} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>

  </>
  )
}

export default ProductSummary;
