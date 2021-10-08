import { Form, Input, TextArea, Button, Image, Message, 
  Header, Icon } from 'semantic-ui-react'
  import React, { useState } from 'react'

function CreateProduct() {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    media: '',
    description: ""
  })


  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === 'media') {
      setProduct(prevState => ({ ...prevState, media: files[0]}
        ))
    } else {
      setProduct((prevState) => ({ ...prevState, [name]: value }))
   
    }
    
  }




  return (
    <>
    <Header as="h2" block>
      <Icon name="add" color="orange"/>
      Create New Product
    </Header>
    <Form>
      <Form.Group widths="equal">
        <Form.Field
        control={Input} 
        name="name" 
        label="Name"
        placeholder="Name"
        onChange={handleChange}
        />
        <Form.Field
        control={Input} 
        name="price" 
        label="Price"
        placeholder="Price"
        min="0.00"
        step="0.01"
        type="number"
        onChange={handleChange}
        />
        <Form.Field
        control={Input} 
        name="media" 
        type="file"
        label="Media"
        accept="image/*"
        content="Select Image"
        onChange={handleChange}
        />


        
      </Form.Group>
      <Form.Field
        control={TextArea} 
        name="description"
        label="Description"
        placeholder="Description"
      />
      <Form.Field
        control={Button} 
        color="blue"
        icon="pencil alternate"
        content="Submit"
        type="submit"
        />

    </Form>
    </>
  )
}

export default CreateProduct;
