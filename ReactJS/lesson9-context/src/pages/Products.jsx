import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import SingleProduct from '../components/SingleProduct';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
const Products = () => {

  const [product] = useContext(ProductContext);
  
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