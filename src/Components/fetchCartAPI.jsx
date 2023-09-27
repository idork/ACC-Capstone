import React from 'react'
import SingleProduct from './SingleProduct'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../API/index'

export default function fetchCartAPI() {
    const { id } = useParams();
    const [singleCart, setSingleCart] = useState([]);
    //const [myCart, setMyCart] = useState([]);


    
        console.log(data);

        const myCart = JSON.stringify(ocalStorage.getItem('data'));

    return(
        <div className="allProducts">
        <h1 id="product-h1"> Products </h1>
        

        <div className="grid">
        {myCart.map((obj) => {
            return (
                <div key={obj.id} id="products" style={{ cursor: 'pointer'}} onClick={()=> 
                navigate(`/SingleProduct/${obj.id}`)}>
                <img src={obj.image} id="product-img" className="product-item"/>
                <p id="product-title" className="product-item column">{obj.title}</p>
                <p id="product-price" className="product-item column"> Price: {obj.price} </p>
                <p id="product-rating" className="product-item column"> Rating: {obj.rating.rate}</p>
                </div>
            );
        })}
        </div>
        </div> 
    )

/*         <div>
            <h4 id='cartId'>{myCart.id} </h4>
            <div id="single-cart-date"> Date: {myCart.date}</div>

            {myCart != null && myCart.products != null && myCart.products.map((obj) => { //jsx if statement syntax, mainly to check if products array is there (only way it worked)
                    return (
                        <div key={obj.productId}>
                            <div id="single-cart-product"> Product ID: {obj.productId}</div>
                            <div id="single-cart-quantity"> Quantity: {obj.quantity}</div>
                        </div>
                    );
                }
            )}
        </div> */
    //)

}
