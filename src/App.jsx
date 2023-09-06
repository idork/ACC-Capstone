import { useState } from 'react'
import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Products from './Components/Products'
import SingleProduct from './Components/SingleProduct'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
<>
    <div>
      <Link to="/"><h1> Avrge </h1> </Link>
      <div id="block"></div>
        <div id="nav">
          <Link to="/Products"> Products </Link>
          <Link to="/Sign-in"> Sign In </Link>
          <Link> Search </Link>
        </div>

    </div>
    <Routes>
      {/*<Route path="/" element={<Home />} /> */}
      <Route path="Products" element={<Products />} />
      <Route path="/Sign-in" element={<Sign-in />} />
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />
    </Routes>
    </>
  )
}

export default App

/*

     <Link> Sanrio </Link>
          <Link> Shein-Ei </Link>
          <Link> Miffy </Link>
          <Link> Home </Link>

*/