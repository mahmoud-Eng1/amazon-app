import React, { useState } from 'react'
import "./Header.css";

import {Link} from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {auth} from "../firebase";
import { AppData } from '../../context/GlobalContext';

const Header = () => {

  const {user, basket} = AppData()
  const handleSignout = () => {
    auth.signOut()
  } 

  return (
     <div className="fixed-top">
      <div position="static" className='appbar'>
        <div className='parentHeader'>
        
          <div >
            <Link to="/"><img src="images/logo-black.png" alt='logo amazon' className='logo'/></Link>
          </div>

          <ul className='parentLinks'>
            <div className='login'>
              <Link className='links' onClick={handleSignout} to={!user && "/Signin"}> {user? "Sign Out" : "Sign In"} </Link>
            </div>
          
          <div className='links linkUser'
            style={{display: user? "block": "none" }}>
         
            <div className="links nameUser" >
              {/* show first later in user name */}
              {user&& user.email.charAt(0,1).toUpperCase()}</div>
          </div>
          <Link to="CheckProuduct" className='check'>
           <div className='links'>
            <ShoppingBasketIcon className='shopingCart' />
            <span className='count' >{basket?.length}</span>
          </div>
          </Link>
          </ul>
          

        </div>
        <div className='parentSearch' >
          <input type='search' placeholder="Search"  className='search'/>
          
          </div> 
      </div>
     

    </div>
  )
}

export default Header