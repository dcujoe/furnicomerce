import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Grid stackable columns={1} rows={4}>
    <Grid.Row>
      <Segment stackable>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
      <Segment stackable>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
      <Segment stackable>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
      <Segment stackable>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Row>
  </Grid>
)

export default Footer;