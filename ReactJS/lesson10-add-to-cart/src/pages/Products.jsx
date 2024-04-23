import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import SingleProduct from '../components/SingleProduct';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
const Products = () => {
  const [product] = useContext(ProductContext);
  const [category, setCategory] = useState([]);
  const [filterData,setFilterData] = useState([]);
  const [active,setActive] = useState("");
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(res => setCategory(res.data))
  }, [])

  const filterProduct =(cat)=>{
    const result = product.filter(p=>p.category === cat);
    setFilterData(result);
    setActive(cat)

  }

  return (
    <div className='container'>
      <h1 className='text-center my-5'>{active?active:"ProductList"}</h1>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3">
          <ul className="list-group">
            {category.slice(0,6).map((item, c) => (
              <li key={c} className={`list-group-item ${active===category[c]?"active":""}`} onClick={()=>{filterProduct(category[c])}}>{category[c]}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-9">
          <div className="row g-5">
            {filterData.length===0?product.map(item => (
              <SingleProduct alldata={item} key={item.id} />

            )):filterData.map(item => (
              <SingleProduct alldata={item} key={item.id} />

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products