import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../API/index';
import { getSortedProduct } from '../API/index'

export default function Products(){
    const [ product, setProducts ] = useState([]);
    const [sortProduct, setSortProduct ] = useState([]);
    const [value, setValue] = [];
    const [asc, setAsc] = [];
    const [desc, setDesc] = [];

    const navigate = useNavigate();
    useEffect (() => {
        async function fetchProducts(){
            try {
                const product = await getAllProducts();
                setProducts(product);
                console.log("Products Working");
            } catch(error){
                console.log("sorry its not working");

            }
        }

            async function sortProducts(){
                try{
                    const sort = await getSortedProduct();
                    setSortProduct(sort);
                }catch(err){
                    console.log(err);
                }

        }
        fetchProducts();
        sortDescending(product);
    }, []);

    async function handleSortChange(e) {
        e.preventDefault();
        if (e === "asc"){
            sortAscending();
        } else if (e === "asc"){
            sortDescending();
        }

    }

    async function sortAscending(){
        //e.preventDefault();
        let tempProduct = [...product];
        console.log(tempProduct);
        tempProduct.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
        setProducts[tempProduct];

        tempProduct.map(obj => {
            return(
                <div>{obj.title}</div>
            )
        })
        console.log("This means sortAscending is working")

    }


    async function sortDescending(){
        let tempProduct = [...product];
        console.log(tempProduct);
        tempProduct.sort((a,b) => parseFloat(b.price) - parseFloat(a.price));
        setProducts[tempProduct];

        tempProduct.map(obj => {
            return(
                <div></div>
            )
        })
        console.log("This means SortDescending is working")


    }
  //  onChange={handleSortChange(e.target.value)}
    return(
        <div className="allProducts">
        <div>

            <button id="asc-button" value="asc" onClick={sortAscending}> Ascending </button>
            <button id ="desc-button" value="desc" onClick={sortDescending} > Descending  </button>

        </div>
        <h1 id="product-h1"> Products </h1>


        <div className="grid">
        {
        product.map((obj) => {
            return (
                <div key={obj.id} id="products" style={{ cursor: 'pointer'}} onClick={()=> 
                navigate(`/SingleProduct/${obj.id}`)}>
                <img src={obj.image} id="product-img" className="product-item column"/>
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