import { Form, Input, Textarea, Button, Image, Message, 
  Header, Icon } from 'semantic-ui-react'

function CreateProduct() {
  return (
    <Header as="h2" block>
      <Icon name="add" color="orange"/>
      Create New Product
    </Header>
  )
}

export default CreateProduct;
