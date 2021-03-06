import React from 'react';
import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';


const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};


function Signup() {
  // setting the states
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');


  
 



  React.useEffect(() => {
    // disables the submit form if the user information is not entered
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
   setUser(prevState => ({ ...prevState, [name]: value }));
  }


  async function handleSubmit(event) {
    event.preventDefault()


    try {
      // make a request to signup user
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/signup`
      const payload = { ...user }
      const response = await axios.post(url, payload)

      // use the handleLogin function to pass a response.data when the login is done using tokens generated
      // in the local storage
      handleLogin(response.data);

    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
 // practice with
 


 
 }

    
  
  
  

  return (
  <>
  <Message 
   attached
   icon="settings"
   header="Get Started"
   content="Create a new account..."
   color="teal"
  />
  <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
    <Message
     error
     header="Oops!"
     content={error}
     />
    <Segment>
      <Form.Input
       fluid
       icon="user"
       iconPosition="left"
       label="Name"
       placeholder="Name"
       name="name"
       value={user.name}
       onChange={handleChange}
       />
       <Form.Input
       fluid
       icon="user"
       iconPosition="left"
       label="Email"
       placeholder="Email"
       name="email"
       type="email"
       value={user.email}
       onChange={handleChange}
       />
       <Form.Input
       fluid
       icon="user"
       iconPosition="left"
       label="Password"
       placeholder="Password"
       name="password"
       type="password"
       value={user.password}
       onChange={handleChange}
       />
       <Button
       disabled={disabled || loading}
        icon="signup"
        type="submit"
        color="orange"
        content="Signup"
        onChange={handleChange}
        />


    </Segment>
  </Form>
  <Message attached="bottom" warning>
    <Icon name="help"/>
    Existing user? {""}
<Link href="/login">
  <a>Log in here </a>
</Link> {""} instead
  </Message>
  </>
  );

}



export default Signup;

