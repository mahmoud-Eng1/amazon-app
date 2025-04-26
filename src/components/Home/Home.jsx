import React, { useState }  from 'react'
import "./Home.css"
import Products from '../products/Products';
import dataProduct from "../data.json"

const Home = () => {
  const[data, setData] = useState(dataProduct)
  return (
    <div className="mainHome" >
      <p className='imgeHome'>
        <img src="images/home-bg.jpg"/>
      </p>
      
      <div className='parent container ' >
        
          {
          
          data.map((item, index)=> {
              return(
                <Products 
                key={item.id || index}
                image={item.image}
                desc={item.desc}
                title={item.title}
                  price={item.price}
                id={item.id}
                rating={item.star}
                />
                
              )
            })
          }
      </div>
    </div>
  )
}

export default Home;