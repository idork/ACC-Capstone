import { useState, useEffect } from 'react'
import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Products from './Components/Products'
import SingleProduct from './Components/SingleProduct'
import Register from './Components/Register'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Carts from './Components/Carts'
import Checkout from './Components/Checkout'
import { getSingleUser } from './API/index'
import './App.css'



export default function App() {
  const [token, setToken] = useState('');
  const auth_token = localStorage.getItem('auth_token');
 // JSON.stringify(localStorage.setItem('cart', []))

  console.log("the token" + auth_token);

  const remove =  () =>{
    localStorage.clear(auth_token);
    window.location.reload();
}

  return (
<>

<div id="top-nav">
{auth_token ? (

<button className="cart-button top-nav-button">
<Link to="/Carts" className="top-nav-link"> Cart </Link>
</button>

          ) : (
          <span></span>
          ) }


{auth_token ? (
            <button id="logOut-button" className="top-nav-button">
              <Link to="/Logout" onClick={remove} className="top-nav-link"> Logout </Link>
              </button>
            
          ) : (
          <div>
          <button className="top-nav-button"><Link to="/Login"> Login </Link></button>
          <button className="top-nav-button"><Link to="/Register"> Register </Link></button>
          </div>
          ) }
</div>
    <div id="home">

      <Link to="/"><h1> Daily Shop </h1> </Link>
      <div id="block"></div>
        <div id="nav">
          <Link to="/Products"> Products </Link>
        </div>

    </div>
    <Routes>
      <Route path="/" element={<Products />} /> 
      <Route path="Products" element={<Products token={token}/>} />
      <Route path="Register" element={<Register setToken={setToken}/>} />
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />
      <Route path="/Login" element={<Login setToken={setToken}/>} />
      <Route path="/Carts/" element={<Carts/>} />
      <Route path="/Checkout/" element={<Checkout/>} />
    </Routes>
    </>
  )

  
}

/* if (the token is not null){
  then show logout instead of Login

} */
