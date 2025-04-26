import { Box, Button, Typography } from '@mui/material';
import React from 'react';
//import stars from "./images/star.png";
import { AppData } from '../../context/GlobalContext';


const CheckItem = ({title, price, image, id, rating, quantity}) => {
  const {dispatch} = AppData()
  const removeFromBasket = ()=> {
    dispatch({
      type: "remove_from_basket",
      id: id,
    })
  }

  return (
  
    <div>
        <div className='parentProductBuys d-flex mb-3 p-2'>
            <div className='broductBuysImg'>
                <img src={image} />
            </div>

            <div className='broductBuysInfo p-3'>
                <p className='title'> {title} </p>
                <strong> price: <small>$</small> {price * quantity}</strong>
                <p>quantity: ({quantity} product)</p>

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
            <Button onClick={removeFromBasket} className='btnCheck'>remove from basket</Button>
            </div>
        </div>

    </div>
  )
}

export default CheckItem