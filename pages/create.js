import { Form, Input, TextArea, Button, Image, Message, 
  Header, Icon } from 'semantic-ui-react'
  import React, { useState } from 'react'


  const INITIAL_PRODUCT = {
    name: "",
    price: "",
    media: '',
    description: ""
  }



function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);

  const [mediaPreview, setMediaPreview] = React.useState('')
  


  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === 'media') {
      setProduct(prevState => ({ ...prevState, media: files[0]}
        ))
        setMediaPreview(window.URL.createObjectURL(files[0]))
    } else {
      setProduct((prevState) => ({ ...prevState, [name]: value }))
   
    }
    
  }

  function handleSubmit(event) {

    // this prevents the default settings happening when event is submitted
    event.preventDefault();

    console.log(product);
    setProduct(INITIAL_PRODUCT);
  }




  return (
    <>
    <Header as="h2" block>
      <Icon name="add" color="orange"/>
      Create New Product
    </Header>
    <Form success={true} onSubmit={handleSubmit}>
      <Message 
      success
      icon="check"
      header="Success"
      content="Your product has been posted"
      />
      <Form.Group widths="equal">
        <Form.Field
        control={Input} 
        name="name" 
        label="Name"
        placeholder="Name"
        value={product.name}
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
        value={product.price}
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
      <Image src={mediaPreview} rounded centered size="small" />
      <Form.Field
        control={TextArea} 
        name="description"
        label="Description"
        value={product.description}
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
