import { useState } from 'react'
import { useEffect } from 'react'
import { getAllProducts } from '../API/index';

export default function Products(){
    const [ product, setProducts ] = useState([]);
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
        <h1> Products </h1>
        {product.map((obj) => {
            return (
                <div key={obj.id} id="products">
                <p id="product-title" className="product-item">Product: {obj.title}</p>
                <img src={obj.image} id="product-img" className="product-item"/>
                <p id="product-price" className="product-item"> Price: {obj.price} </p>
                <p id="product-rating" className="product-item"> Rating: {obj.rating.rate}</p>
                </div>
            );
        })}
        </div> 
    )
}