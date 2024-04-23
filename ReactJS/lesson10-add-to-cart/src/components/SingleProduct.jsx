import { Button } from 'bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast,Bounce } from 'react-toastify';

const SingleProduct = ({ alldata }) => {
    const { addItem } = useCart();
    const notify = () => toast.success('Product added to cart', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
    });
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card">
                <img height={300} style={{ objectFit: "contain" }} src={alldata.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title.slice(0, 10)}</h5>
                    <p className="card-text">{alldata.description.slice(0, 30)}</p>
                    <Link to={`/products/${slugify(alldata.title)}`} className="btn btn-dark">Read more</Link>
                    <button className='btn btn-warning ms-3'  onClick={()=>{addItem(alldata);notify();setTimeout(()=>{window.location.reload()},2000)}}>Add to cart</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct