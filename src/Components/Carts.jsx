import React from 'react'
import { getSingleCart } from '../API/Index'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Cart({token}) {
    const { id } = useParams();
    const [myCart, setCart] = useState([]);
    const [cart, setAddCart] = useState([]);

    useEffect(() => {
        async function fetchSingleCart() {
            try{ 
                const myCart = await getSingleCart(id);
                console.log(id);
                console.log('hi');
                setCart(myCart);
            }catch(err){
                console.log(err);
            }
        }
        fetchSingleCart();
        console.log("token-cart" + token);
    }, []);

        useEffect(() => {
            async function addedToCart(){
                try{
                    const cart = await addCart();
                    setAddCart(cart);
                }catch(err){
                    console.log(err);
                }
            }
            addedToCart();
        })


    return (
        <div>
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
        </div>
    )

}
