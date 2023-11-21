import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Contact(){
const [userinfo,setUserInfo]=useState({
  username:'',
  password:'',
  email:'',
  message:''

});
const Submit=(e)=>{
  console.log(userinfo)
}
const Handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserInfo({...userinfo,[name]:value});
    
  }
  return(
    < >
<div className='ccolor'>
         <br />
         
     <div className="my-5 container">
      <div className='my-3 row'>
        <div className=" justify-content-center text-center col-lg-6 col-md-12 col-sm-12">
     <h1 className='left conhead fw-bold'> lets work Together</h1>
    
         </div>
        <div className="justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={userinfo.username} onChange={Handleinput} name='username' type="text" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control value={userinfo.password} onChange={Handleinput} name='password' type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control value={userinfo.email} onChange={Handleinput} name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>
       <InputGroup>
        
      <Form.Control value={userinfo.message} onChange={Handleinput} name='message' as="textarea" placeholder='type your message here'  />
      </InputGroup>
      <InputGroup>
      <Button onClick={Submit} className='my-5 button1' variant="dark" >
        Send
      </Button>
      
      </InputGroup>
      
      </Form>
        </div>
        </div>
        </div>   
        </div>

    </>
)


}