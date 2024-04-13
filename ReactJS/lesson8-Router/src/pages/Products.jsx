import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import SingleProduct from '../components/SingleProduct';
const Products = () => {
  const [product, setProduct] = useState([]);
  
  
  useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res=>setProduct(res.data.products))
  }, [])

  return (
    <div className='container'>
      <h1 className='text-center my-5'>Product List</h1>
      <div className="row g-5">
        {product.map(item=>(
          <SingleProduct  alldata={item} key={item.id}/>

        ))}
      </div>
    </div>
  )
}

export default Products