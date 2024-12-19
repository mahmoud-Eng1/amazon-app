import { Box, Button, Checkbox, Typography } from '@mui/material';
import React from 'react';
import image from "./images/declaration.jpg";
import "./CheckProuduct.css";
import CurrencyFormat from "react-currency-format";
import {AppData} from "../context/GlobalContext";
import CheckItem from './CheckItem';
import {getTotalBasket} from "../context/reducerApp"
import {useNavigate} from "react-router-dom"
const CheckProuduct = () => {
  const navigate = useNavigate()
  const {basket, user} = AppData()
  return (
    <Box className="parentPage">
      <Typography component="div" className='declarationParent d-flex'>

        <Typography component="div" className='userInfo'>
          <img src={image} alt='declaration image'/>
          <Typography >Hello, {user?.email}</Typography>
          <Typography  >your shopping Basket</Typography>
        </Typography>

        <Typography component="div" className='productInfo'>
          
          <CurrencyFormat
          renderText={(value)=> (
            <>
            <Typography className='subtotal' component="span">Subtotal ({basket.length} items)</Typography>
            <Typography variant='strong' className='value'  component="strong"> {value}</Typography>
               </>
          )}
          decimalScale={2}
          value={getTotalBasket(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          />


          <Typography className='check'> <Checkbox className='checkBox'></Checkbox> this order contains a gift</Typography>
          <Button className='btnCheck m-auto w-100' onClick={()=> navigate("/Payment")}>proceed to Checkout</Button>
        </Typography>
      </Typography>
<hr></hr>

      <Typography component="div" className='broductBuys   m-3'>
        {
          basket.length > 0 ? 
          (basket?.map((item)=> {
            return(
              <CheckItem
                key={item.id}
                title={item.title} 
                image={item.image} 
                price={item.price} 
                id={item.id}
                rating={item.rating}
                />
            )

          })):
          <Typography>you have't items to buy one or more items, click Add to bssket</Typography>
        }
        
          
        
      </Typography>
    </Box>
  )
}

export default CheckProuduct;