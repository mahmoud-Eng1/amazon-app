import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Signin from "./components/Login/Signin.jsx";
import CheckProuduct from "./components/Checproduct/CheckProuduct.jsx";
import Payment from "./components/Payment/Payment.jsx";
import {React, useEffect } from "react";
import {Route, Routes}from "react-router-dom";
import { auth } from "./components/firebase.js";
import { AppData } from "./context/GlobalContext";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"

const promisStripe = loadStripe("pk_test_51Pk7DeRv7if2NQ0S69WnxUodjxx7AKZNTCVCXDOkLv6c3RU1xgxinAREGuxkXLngt7y9InH5uF1ezaZPNBtgKlP5004tYc5rAn")

function App() {
  const {dispatch} = AppData()
  
 
 
  useEffect(()=> {
    auth.onAuthStateChanged((useUser)=> {
      if(useUser) {
        dispatch({
          type: "SET_USER",
          user: useUser,
        })
      }else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }

    })
  }, []);
  

  return (
    
    <div className="App">
      
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/CheckProuduct" element={<CheckProuduct/>} />
        
        <Route path="/Payment" element={
          <>
          <Elements stripe={promisStripe}>
          <Payment/>
          </Elements> 

          </>
          }/>
        
      </Routes>
      
    </div>
  );
}

export default App;
