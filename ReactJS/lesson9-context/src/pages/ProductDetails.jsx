import React from 'react'
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
const ProductDetails = () => {
  const [product] = useContext(ProductContext);
  const { slug } = useParams();
  const productDetails = product.find(p => slugify(p.title) === slug);

  return (
    <div>
      {product.length === 0 ? <div className='d-flex align-items-center justify-content-center'><img width={1000} src="https://2.bp.blogspot.com/-JiCTZL0TIt4/WMkrMCODCcI/AAAAAAAAA9g/1hG3JJpnO0EWXNLQwDFoyAu13f6Ks4H8QCLcB/s1600/animation.gif" alt="img" /></div> : <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
            
                {productDetails.images.map((item,c) => (
                  <div className={`carousel-item ${c===0?"active":""}`}>
                    <img style={{'height':"300px","objectFit":"contain"}} src={item} className="d-block w-100" alt="..." />
                  </div>
                ))}
              </div>
                
                  {productDetails.images.length===1?"":  <div>  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button></div>}
                
            </div>

          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.title}</h1>
            <p className="lead">{productDetails.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/products" className="btn btn-dark btn-lg px-4 me-md-2">Back</Link>
              <button type="button" className="btn btn-warning btn-lg px-4">Add to cart</button>
            </div>
          </div>
        </div>
      </div>}


    </div>
  )
}

export default ProductDetails