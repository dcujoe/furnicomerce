import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Grid stackable columns={1}>
    <Grid.Column>
      <Segment stackable columns={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Footer;