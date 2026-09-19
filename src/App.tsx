import { Suspense, useState } from "react";
import Navbar from "./components/Navbar"
import Products from "./components/products/products";


function App() {

  const productsPromiseData = async () => {
    const res = await fetch('/mobile.json');
    const data = await res.json();
    return data;
  }
  
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>Loading...</p>} >
        <Products productsPromiseData={productsPromiseData()} ></Products>
      </Suspense>
    </>
  )
}

export default App
