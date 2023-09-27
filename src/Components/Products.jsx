import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../API/index';

export default function Products(){
    const [ product, setProducts ] = useState([]);
    const navigate = useNavigate();
    useEffect (() => {
        async function fetchProducts(){
            try {
                const product = await getAllProducts();
                setProducts(product);
                console.log("IT'S WORKING!");
                console.log(product);
            } catch(error){
                console.log("sorry its not working");

            }
        }
        fetchProducts();
    }, []);

    

    return(
        <div className="allProducts">
        <h1 id="product-h1"> Products </h1>
        

        <div className="grid">
        {product.map((obj) => {
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


}