import React, { useRef, useState } from 'react';
import "./payment.css";
import {  FormGroup } from '@mui/material';
import {AppData} from "../../context/GlobalContext";
import { Link, useNavigate} from "react-router-dom"
import { Form, FormControl, FormLabel } from 'react-bootstrap';
import {useElements, useStripe, CardElement} from "@stripe/react-stripe-js";
import axios from "axios"
import {getTotalBasket} from "../../context/reducerApp"


function Payment() {
  const refName = useRef();
  const refLastName = useRef();
  const refEmail = useRef();
  const refAdressOne = useRef();
  const refAdressTwo = useRef();
  const { basket,dispatch } = AppData();
  const navigate = useNavigate()
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] =  useState(false);
const elements = useElements();
const stripe = useStripe()
const [clientSecret, setClientSecret] =useState();

const handleSubmit = async (e)=> {
  e.preventDefault();
  setProcessing(true);
 
  // store all input value 
    const userInfo = {
      total: getTotalBasket(basket),
      firstName: refName.current.value,
      lastName: refLastName.current.value,
      email: refEmail.current.value,
      address: {
        address1: refAdressOne.current.value,
        address2: refAdressTwo.current.value || "none",
      }
      
    }
    // request data 
      try{
        const response = await axios.post("https://amazon-app-production.up.railway.app/payment/create",userInfo);
        const clientSecret = response.data.clientSecret
      setClientSecret(clientSecret);
    
      const payment = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
          card: elements.getElement(CardElement),
        }
      })
      if(payment.error){
        setError(payment.error.message)
        setProcessing(false);

      }else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/", {replace: true});
      }
      
      }catch(error) {
        console.error("faild to request data", error);
        setError("faild to contact the server")
        
      }
  
  

};

const handleChange = (e)=> {
  setDisabled(e.empty);
  setError(error ? error.message : "")
}

  return (
    <div className="payment">
      <div className='container m-auto'>
      <div>
        <h3 className='paymentCheckOute mt-4'> Checkout</h3>
        <h5 className='text-center my-4'> you chose (<Link to="/Checkproduct">{basket.length} products</Link> ) </h5>
      </div>
      <Form onSubmit={handleSubmit} className='paymentForm'>
        <div className='headerPayment '> Billing address</div>
        <div className='p-4'>
        <div className='d-flex gap-4'>
        <FormGroup>
          <FormLabel>First Name</FormLabel>
          <FormControl required ref={refName} type='text'></FormControl>
        </FormGroup>
        
        <FormGroup>
        <FormLabel>last Name</FormLabel>
        <FormControl required ref={refLastName} type='text'></FormControl>
        </FormGroup>

        </div>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl required ref={refEmail} type='email' placeholder='you@example.com'></FormControl>
        </FormGroup>

        <FormGroup>
          <FormLabel>Address</FormLabel>
          <FormControl required ref={refAdressOne} type='text' placeholder='1234Main St'></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Address 2 (Optinal)</FormLabel>
          <FormControl ref={refAdressTwo} type='text' placeholder='Apartment or suite'></FormControl>
        </FormGroup>
      <hr/>
      <h2>Payment</h2>

        <CardElement onChange={handleChange}/>
        
      <button 
        disabled={processing || succeeded ||disabled}
        type='submit' className='btnPayment'>
         {processing? "processing": "Buy Now"}
      </button>
      </div>
      {error && <div>{error}</div>}
      </Form>
      </div>
    </div>
  );
}

export default Payment