import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import "./payment.css";
import { Button, FormGroup, Typography } from '@mui/material';
import {AppData} from "../context/GlobalContext";
import { Link} from "react-router-dom"
import { FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Payment() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [phoneWhats, setPhoneWhats] = useState();
  const [email, setEmail] = useState()
  const refAddress = useRef();
  const refPhone = useRef();
  const refPhoneWhats = useRef();
  const reEmail = useRef();
  const { basket } = AppData();
  const navigate = useNavigate()

  useEffect(()=> {
    const userData = {address, phone, phoneWhats, email}

    localStorage.setItem("data", JSON.stringify(userData))
  }, [address, phone, phoneWhats, email])
  function handleData(e) {
    e.preventDefault();
    if(refAddress.current.value ==="" && refPhone.current.value ==="" && refPhoneWhats.current.value ==="" && reEmail.current.value === ""){
      alert("enter your data")
      
      
    }else{
      setAddress(refAddress.current.value);
    setPhone(refPhone.current.value );
    setPhoneWhats(refPhoneWhats.current.value );
    setEmail(reEmail.current.value);
    
    refAddress.current.value = "";
    refPhone.current.value = "";
    refPhoneWhats.current.value = "";
    reEmail.current.value = "";
    navigate("/")
    }
    
  }


  return (
    <Box className="payment">
      <Typography component="div">
        <Typography className='paymentCheckOute' variant="h5" component="h5"> Checkout(<Link to="/Checkproduct">{basket.length} items</Link> )</Typography>
      </Typography>
      <Typography  className='infoPaymentParent container m-auto' component="div">

        <Typography>
          <FormGroup>
            
            <FormControl className='inputForm' ref={refAddress} type='text' required placeholder='Enter your Address'></FormControl>
          </FormGroup>

          <FormGroup >
            <FormControl className='inputForm' ref={refPhone} type='number' required placeholder='Enter your phone number'></FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl className='inputForm' ref={refPhoneWhats} type='number' required placeholder='Enter your number whatsApp'></FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl className='inputForm' ref={reEmail} type='email' required placeholder='Enter your Email'></FormControl>
          </FormGroup>
        </Typography>
        <Typography className=' d-flex justify-content-center mt-3'>
          <Button onClick={handleData} className='btnCheck' type='submit'>send</Button>
        </Typography>
       
        
        
      
      </Typography>
    </Box>
  );
}

export default Payment