import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import stars from "./images/star.png";
import { AppData } from '../context/GlobalContext';

const CheckItem = ({title, price, image, id, rating}) => {
  const {dispatch} = AppData()
  const removeFromBasket = ()=> {
    dispatch({
      type: "remove_from_basket",
      id: id,
    })
  }
  return (
    <Box>
        <Typography className='parentProductBuys d-flex mb-3 p-2'>
            <Typography  component="div" className='broductBuysImg'>
                <img src={image} />
            </Typography>

            <Typography component="div" className='broductBuysInfo p-3'>
                <Typography className='title'> {title} </Typography>
                <Typography> price: <small>$</small> {price}</Typography>

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
            <Button onClick={removeFromBasket} className='btnCheck'>remove from basket</Button>
            </Typography>
        </Typography>

    </Box>
  )
}

export default CheckItem