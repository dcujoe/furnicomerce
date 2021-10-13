import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react'


function Signup() {
  return <>
  <Message 
   attached
   icon="settings"
   header="Get Started"
   content="Create a new account..."
   color="teal"
  />
  <Form>
    <Segment>
      <Form.Input
       fluid
       icon="user"
       iconPosition="left"
       label="Name"
       placeholder="Name"
       name="name"
       />
    </Segment>
  </Form>
  </>;
}

export default Signup;
