import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify';
const SingleProduct = ({alldata}) => {
    return (
        <div className='col-12 col-sm-6 col-md-3'>
            <div className="card">
                <img height={300} style={{objectFit:"contain"}} src={alldata.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{alldata.title.slice(0,10)}</h5>
                    <p className="card-text">{alldata.description.slice(0,30)}</p>
                    <Link to={`/products/${slugify(alldata.title)}`} className="btn btn-dark">Read more</Link>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct