import { Button, Typography } from '@mui/material';
import React from 'react';
import "./Home.css";
import stars from "./images/star.png";
import {AppData} from "../context/GlobalContext"

const Products = ({title, price, image, id, rating}) => {
  const {dispatch} = AppData()
  // this function add item in basket when click in buton
  const addToBasket = ()=> {
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        title: title,
        price: price,
        image: image,
        rating: rating,
        id: id,
      }
    })
  }
 
  return (
    <Typography  className="content" key={id} component='div'>

    <Typography component="div" className='imageContent'>
      <img src={ image} alt='product image'/>
    </Typography>
    <Typography className="infoHome" component="div">
      <Typography className="category">
        {title}
      </Typography>
      <Typography component="div">
        <Typography component="small">$</Typography>
      <Typography className='price' component="strong"> {price} </Typography>
      </Typography>
      <Typography className='parentStars'>
        {Array(rating).fill().map((_, i) => {
          return(
            <Typography className='rating'>
              <img src={stars}  alt='rating'/>
              </Typography>
          )
        })
        }
        </Typography>
      
      
      <Button onClick={addToBasket} className='d-block m-auto mb-3' sx={{textTransform: "capitalize"}} variant="contained">add to basket</Button>
    </Typography>

</Typography>
  )
}

export default Products;