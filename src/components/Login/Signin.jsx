import React, { useState } from 'react';
import "./Signin.css"

// import imgeHome from "images/home-bg.jpg"
import {Button, Card,CardTitle, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {Swal} from "sweetalert2"


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = (e)=> {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((auth)=> {
      if(auth) {
        navigate("/")
      }
    })
  }
 
  const register = (e)=> {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((auth)=>{
      
        if(auth) {
        navigate("/")
        
      }
    }).catch((error)=> {
      // Swal.fire({
      //   title: "error",
      //   text: {error},
      //   icon: "success"
      // });
      alert(error)
    })

  }
  return (
    <div className='parentSignin'> 
      <div className='d-flex justify-content-center'>
        <div className='contentSign '>
          <div className= ' logoSign '>
            <img src="images/logo-white.jpeg" alt='logo amazon' />
            </div>
          <div className='contentForm'>
          <Card className='p-2'>
            <CardTitle className=' text-center fs-2'>sign in</CardTitle>
            <Form>
            <FormGroup className='mb-2'>
              <FormLabel>E-mail</FormLabel>
              <FormControl type="email" placeholder='m@gmail.com'
                value={email}
               //reset value email in state when write in input
                onChange={(e)=> { setEmail(e.target.value)}}
                ></FormControl>
            </FormGroup>

            <FormGroup className='mb-4'>
              <FormLabel>password</FormLabel>
              <FormControl type="password" 
              value={password}
              //reset value pasword in state when write in input
              onChange={(e)=> { setPassword(e.target.value)}}
              ></FormControl>
            </FormGroup>
            <Button type='submit' onClick={handleLogin} 
            className='btnLogin w-100 p-1  '>Sign In
            </Button>

            <p className='mt-3 textSigin'>by continuing your agree to amazon's 
              fake clone conditions use privacy notice.</p>
              <Button onClick={register} className='w-100 p-2 btnSign' type="submit">create your amazon acount</Button>
            </Form>
          </Card>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Signin;