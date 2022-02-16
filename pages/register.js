import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

export default function register({ user }) {
  

  
  

  function isActive(route) {
    return route === router.pathname;
  }
    
    return (
  <Segment placeholder className="information" stackable>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Register' icon='signup' size='big' />
      </Grid.Column>
    </Grid>
    <Grid.Column className="space">
    </Grid.Column>

    <Divider vertical>Or</Divider>
  </Segment>
)
}
