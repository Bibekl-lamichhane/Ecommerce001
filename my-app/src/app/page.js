'use client'
import React from 'react'
import NavBar from '@/components/navbar/navbar'
import ProductCard from '@/components/productCard/productCard'
// pages/index.js
import { useEffect, useState } from "react";
  
const page = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (<>
    <div><NavBar/></div>
    <div></div>
    <div><main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main></div></>
  )
}

export default page



 