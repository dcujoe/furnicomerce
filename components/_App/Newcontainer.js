import React from 'react'
import { Container } from 'semantic-ui-react'

const Newcontainer = () => (
  <Container style={{ 
      padding: "1px", 
      height: "600px",
      width: "100%", 
      backgroundColor: "rgb(255, 255, 255)", 
      margin: "2px"
      }}>
    <p style={{ 
        fontSize: "20px",
        position: "relative",
        justifyContent: "center",
        marginTop: "-50%",
        marginLeft: "-50%"
     }}>
     Hello I am daniel
    </p>
  </Container>
)

export default Newcontainer;