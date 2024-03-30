import React from 'react'

const Card = ({title,price}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text">${price}</div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card