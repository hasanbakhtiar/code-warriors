import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const {slug} = useParams();
    useEffect(() => {
          axios.get('https://dummyjson.com/products')
          .then(res=>setProduct(res.data.products))
    }, [])
    const productDetails = product.find(p=>slugify(p.title)===slug);
    
  return (
    <div>
        {product.length ===0?<h1>Loading...</h1>:<h1>{productDetails.title}</h1>}
    </div>
  )
}

export default ProductDetails