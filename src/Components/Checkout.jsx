import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Checkout(){
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);





    const clearCart = () => {

    //        const array = [];
    //    const empty = [{
     //       "title": "Your Cart is Empty"
       // }]


        localStorage.removeItem('cart');
      //  array.push(empty);
       // localStorage.setItem('cart', JSON.stringify(empty));

    }

    clearCart();

    return (
        <div>
        <h1> Thank you for your purchase! </h1>

        <p> Return <span style={{ cursor: 'pointer'}} onClick={()=> 
                navigate('/Products/')}> home </span></p>
        </div>
    )
}