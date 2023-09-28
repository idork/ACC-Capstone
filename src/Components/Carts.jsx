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

                const cart = JSON.stringify(localStorage.getItem('cart'))

                    setCart(cart);

            }catch(err){
                console.log(err);
            }


        }
        fetchSingleProducts();
    }, []);


    let arrayLocalStorage = JSON.parse(localStorage.getItem("cart"));
    let arrayLocalLength = arrayLocalStorage.length;
    let cartLength = arrayLocalLength;

    console.log ("Cart is working");
    const myCart = JSON.stringify(localStorage.getItem('cart'));

    const removeItem = (productId) => {
        const removedItems = [...arrayLocalStorage];
        console.log(removedItems);
        removedItems.splice(productId, 1); 

        console.log(productId);
        setCart(removedItems);

        localStorage.setItem('cart', JSON.stringify(removedItems));

    }





    return(
         <div>
        <header> Cart ({cartLength})</header>
        <div>
        {arrayLocalStorage.map((item, index) =>(
        <div> {/* setting the key to item, so that it is unique for the key's (what it is using to loop through */}
        <p>{item.title}</p>
        <img src={item.image} />
        <button onClick={() => removeItem(index)}> Remove </button> {/*passing i so that it knows which one to remove */}
        </div>
        ))}
        </div>

        <button> Check Out </button>

        </div>
    )

}
