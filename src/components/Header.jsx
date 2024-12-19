import React from 'react'
import "./Header.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import logo from "./images/logo-black.png"
import { AppData } from '../context/GlobalContext';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {auth} from "./firebase";

const Header = () => {
  const {user, basket} = AppData()
  const handleSignout = () => {
    auth.signOut()
  }
  return (
     <Box className="fixed-top">
      <AppBar position="static" className='appbar'>
        <Toolbar>
        
          <Typography component="div" >
            <Link to="/"><img src={logo} className='logo'/></Link>
          </Typography>

          <Typography component="div" sx={{ flexGrow: 1, d:"flex",position: "relative" }}>
          <input type='search' placeholder='Search' className='search'/>
          <Typography component="span">
            <SearchIcon className='iconsearch'/>
          </Typography>

          </Typography>
          
          <Link className='links' onClick={handleSignout} to={!user && "/Signin"}> {user? "Sign Out" : "Sign In"} </Link>
          <Typography className='links' component="div">
            <Typography className="hello" component="span">Hello</Typography>
            <Typography className="links nameUser">{user?`${user.email.charAt(0,2) }`: "Guest"}</Typography>
          </Typography>
          <Link to="CheckProuduct" className='check'>
          <Typography className='links' component="div">
            <ShoppingBasketIcon className='shopingCart' />
            <Typography className='count' component="span">{basket?.length}</Typography>
          </Typography>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header