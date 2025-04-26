import { Button, Typography } from '@mui/material';
import React from 'react';
import "../Home/Home.css";
import {AppData} from "../../context/GlobalContext"
import { useNavigate } from 'react-router-dom';


const Products = ({title, price, desc, image, id, rating}) => {
  const {dispatch,user} = AppData()
  const navigation = useNavigate()
  // this function add item in basket when click in buton
  const addToBasket = ()=> {
    user?
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        title: title,
        desc:desc,
        price: price,
        image: image,
        rating: rating,
        id: id,
      }
    })
    : navigation("/Signin")
  }
 
  return (
    <div  className="content" key={id} >

    <div className='imageContent'>
      <img src={image} alt='product image'/>
    </div>
    <div className="infoHome">
    <h5>{title}</h5>
      <div className="category">
        {desc}
      </div>

      <div>
        <small>$</small>
      <strong className='price'> {price} </strong>
      </div>
      <div className='parentStars'>
        {Array(rating).fill().map((_, i) => {
          return(
            <div className='rating'>
              <img src="images/star.png"  alt='rating'/>
              </div>
          )
        })
        }
        </div>
      
      
      <Button onClick={addToBasket} className='d-block m-auto mb-3' sx={{textTransform: "capitalize"}} variant="contained">add to basket</Button>
    </div>

</div>
  )
}

export default Products;