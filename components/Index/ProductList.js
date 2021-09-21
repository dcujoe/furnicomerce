import { Card } from 'semantic-ui-react'

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.Url,
      meta: `$${product.price}`,
      color: 'teal',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }))
    
  }
  // items to be represented per row (CSS) and items should be centered
  return <Card.Group itemsPerRow="3" centered items=
  {mapProductsToItems(products)} />
  
}

export default ProductList;
