import {Button, Checkbox } from '@mui/material';
import React, { useState, useRef } from 'react';
import {Link} from "react-router-dom"
//import image from "./images/declaration.jpg";
import "./CheckProuduct.css";
import CurrencyFormat from "react-currency-format";
import {AppData} from "../../context/GlobalContext";
import CheckItem from './CheckItem';
import {getTotalBasket} from "../../context/reducerApp"
import { useNavigate} from "react-router-dom"
const CheckProuduct = () => {
  const addtion = useRef()
  const navigate = useNavigate()
  const {basket, user} = AppData()
  const [addProduct,setAddProuduct] = useState()
  return (
    <div className="parentPage">
      <div className='declarationParent'>

        <div className='userInfo'>
          <img src="images/declaration.jpg" alt='declaration image'/>
          <p >Hello, {user?.email}</p>
          <p  >your shopping Basket</p>
        </div>

        <div className='productInfo'>
          
          <CurrencyFormat
          renderText={(value)=> (
            <>
            <p className='subtotal' >Subtotal ({basket.length} items)</p>
            <strong className='value'  > {value}</strong>
               </>
          )}
          decimalScale={2}
          value={getTotalBasket(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          />


          <div className='check'> <Checkbox className='checkBox'></Checkbox> this order contains a gift</div>
          <Button
            className='btnCheck m-auto w-100'
            onClick={()=> {if(basket.length > 0){
              navigate("/Payment")
            }else {
              addtion.current.display = "block"
            }

            }}>proceed to Checkout</Button>
        </div>
      </div>
<hr></hr>

      <div className='broductBuys   m-3'>
        {
          basket.length > 0 ? 
          (basket?.map((item, index)=> {
            return(
              <CheckItem
                key={item.id ||index}
                title={item.title} 
                image={item.image} 
                price={item.price} 
                id={item.id}
                rating={item.rating}
                quantity={item.quantity}
                />
            )

          })):
          <div>
            <p>you have't items to buy one or more items, click Add to basket</p>
            <span ref={addtion} className='addtion'>please add some product <Link to="/"> go to home</Link>  </span>
          </div>
         

       
        }
      </div>
    </div>
  )
}

export default CheckProuduct;