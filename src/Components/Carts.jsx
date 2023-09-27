import React from 'react'
import { getSingleProduct } from '../API/index'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../API/index'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    //const [myCart, setMyCart] = useState([]);
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


    console.log ("is cart working?");
    const myCart = JSON.stringify(localStorage.getItem('cart'));

    const removeItem = (removingProduct) => {
        Object.entries(cart).forEach(([key,value])=>{
            localStorage.setItem(key,value)
          })
    }



    var arrayLocalStorage = JSON.parse(localStorage.getItem("cart"));
    var arrayLocalLength = arrayLocalStorage.length;

    return(
         <div>
        <header> Cart ({arrayLocalLength -1})</header>
        <div>
        {arrayLocalStorage.map((item) =>(
        <div>
        <p>{item.title}</p>
        <img src={item.image} />
        <button onClick={removeItem}> Remove </button>
        </div>
        ))}
        </div>

        <button> Check Out </button>

        </div>
    )

}
