import { getSingleProduct } from '../API/index'
import { useState } from 'react'
import { useEffect } from 'react'
import Carts from './Carts'
//import { useNavigate} from 'react'
import { useParams } from 'react-router-dom'

import React from 'react'

export default function SingleProduct(){
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        async function fetchSingleProducts() {
            try{
                const product = await getSingleProduct(id);
                console.log(id);
                console.log('hi');
                setProduct(product);

                const cart = localStorage.getItem('cart');
                if (cart){
                    setCart(JSON.parse(cart));
                }

            }catch(err){
                console.log(err);
            }


        }
        fetchSingleProducts();
    }, []);

    const addToCart = (product) => {

        const addedProducts = [...cart, product];
        setCart(addedProducts);

        localStorage.setItem('cart', JSON.stringify(addedProducts));

/*         setCart([...cart, product ]);
        localStorage.setItem("cart", JSON.stringify(cart)); */
    }

    console.log(cart);


    return (
        
        <div>

            <h4 id='allPlayerName'>{product.title} </h4>
            <div id="single-product-img"> <img src={product.image} /></div>
            <div id="single-product-price"> {product.price}</div>
            <div id="single-product-description"> {product.description}</div>
            <button onClick={() => addToCart(product)} id="cart-button"> Add to Cart </button>
        </div>

    )
}

//want to make it so that <button> goes to the other component (AddCart)
//trying to figure out how to go from singleproduct to app to addcart
//will need to get all the data from singleproduct to add it to the localStorage

//click button --> add price, image, and quantity to the local storage, token
//cart will now have the item in it



//declare cart in useEffect
//in addtocart pass in a single product as an argument, filter through and find the id of product we want to find
//- save that into a variable, and update setCart by updating we will use spread operator to ge the previous item
//- that we've added, updated cart will be like an array [spreadoperator (of old cart), newProductPadded]

// we can pass the addCart button to onClick
// pass in items as props
// in cart component just display every item that we have added

//then navigate to cart


/ * another idea */

//another component and be made parents (single products and allproducts)