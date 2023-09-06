import { getSingleProduct } from '../API/index'
import { useState } from 'react'
import { useEffect } from 'react'
//import { useNavigate} from 'react'
import { useParams } from 'react-router-dom'
import React from 'react'

export default function SingleProduct(){
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchSingleProducts() {
            try{
                const product = await getSingleProduct(id);
                console.log(id);
                console.log('hi');
                setProduct(product);
            }catch(err){
                console.log(err);
            }
        }
        fetchSingleProducts();
    }, []);

    return (
        <div>
            <h4 id='allPlayerName'>{product.title} </h4>
            <div id="single-product-img"> <img src={product.image} /></div>
            <div id="single-product-price"> {product.price}</div>
            <div id="single-product-description"> {product.description}</div>


        </div>
    )
}