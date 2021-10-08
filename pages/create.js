import { Form, Input, TextArea, Button, Image, Message, 
  Header, Icon } from 'semantic-ui-react'
  import React, { useState } from 'react'
  import axios from 'axios'
  import baseUrl from '../utils/baseUrl'


  const INITIAL_PRODUCT = {
    name: "",
    price: "",
    media: '',
    description: ""
  }



function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);

  const [mediaPreview, setMediaPreview] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  


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

// setting a function to upload data and making a post request to the remote server
  async function handleImageUpload() {
    const data = new FormData();

    data.append('file', product.media)
    data.append('upload_preset', 'furnicommerce')
    data.append('clould_name', 'dauy2gohl')

    // made the post request using the API key from cloudinary.com 
    // API key for cloudinary is contained in the next.config.js file

    const response = await axios.post
    (process.env.CLOUDINARY_URL, data)
    const mediaUrl = response.data.url
    return mediaUrl;

  }


  async function handleSubmit(event) {

    // this prevents the default settings happening when event is submitted
    event.preventDefault();
    const mediaUrl = await handleImageUpload();
    setProduct(INITIAL_PRODUCT);
    setSuccess(true);
  }




  return (
    <>
    <Header as="h2" block>
      <Icon name="add" color="orange"/>
      Create New Product
    </Header>
    <Form success={success} onSubmit={handleSubmit}>
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
        onChange={handleChange}
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
