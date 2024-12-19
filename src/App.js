
import {React, useEffect} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import {Route, Routes}from "react-router-dom";
import Orders from "./components/Orders";

import { auth } from "./components/firebase";
import { AppData } from "./context/GlobalContext";
import CheckProuduct from "./components/CheckProuduct"
import Payment from "./components/Payment";




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
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/CheckProuduct" element={<CheckProuduct/>} />
        
        <Route path="/Payment" element={ <Payment/>}/>
        
      </Routes>
  
    </div>
  );
}

export default App;
