import { useState, useEffect } from 'react'
import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Products from './Components/Products'
import SingleProduct from './Components/SingleProduct'
import Register from './Components/Register'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Carts from './Components/Carts'
import { getSingleUser } from './API/index'
import './App.css'



export default function App() {
  const [token, setToken] = useState('');
  const auth_token = localStorage.getItem('auth_token');

  console.log("the token" + auth_token);

  const remove =  () =>{
    localStorage.clear(auth_token);
    window.location.reload();
}

  return (
<>


{auth_token ? (

<button>
<Link to="/Carts"> Cart </Link>
</button>

          ) : (
          <span></span>
          ) }
    <div id="home">

      <Link to="/"><h1> Daily Shop </h1> </Link>
      <div id="block"></div>
        <div id="nav">
          <Link to="/Products"> Products </Link>
          <Link> Search </Link>
          <Link to="/Register"> Register </Link>

          {auth_token ? (
            <Link to="/Logout" onClick={remove}> Logout </Link>
            
          ) : (
          <Link to="/Login"> Login </Link>
          ) }
        </div>

    </div>
    <Routes>
      <Route path="/" element={<Products />} /> 
      <Route path="Products" element={<Products token={token}/>} />
      <Route path="Register" element={<Register setToken={setToken}/>} />
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />
      <Route path="/Login" element={<Login setToken={setToken}/>} />
      <Route path="/Carts/" element={<Carts/>} />
    </Routes>
    </>
  )

  
}

function theCart(){
  return (
    <button id='cart'> 
    <Link to="/Carts"> Cart </Link> 
    </button>
    )
}

/* if (the token is not null){
  then show logout instead of Login

} */
