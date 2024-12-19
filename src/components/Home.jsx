import React from 'react'
import "./Home.css";
import imgeHome from "../components/images/home-bg.jpg"
import { Box, Button, Typography } from '@mui/material';
import imge from "./images/product1.png";
import dataProduct from "./data.json"
import Products from './Products';
const Home = () => {
  return (
    <Box className="mainHome" component= "main">
      <Typography className='imgeHome' component="div">
        <img src={imgeHome}/>
      </Typography>
      <Typography className='parent container  ' component="div">
        {
          dataProduct.map((item)=> {
            return(
              <Products image={item.image}
              title={item.title}
                price={item.price}
              id={item.id}
              rating={item.star}
               />
              
            )
          })
        }
       

      </Typography>
    </Box>
  )
}

export default Home;