import React, { Component } from 'react'

class SingleCard extends Component {
    render() {
        return (
        <div className="col-12 col-sm-6 col-md-4">
                <div className="card" >
                <img height={300} style={{objectFit:"contain"}} src={this.props.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">${this.props.price}</p>
                    <button className={` ${this.props.stock<=5?"btn btn-danger disabled":"btn btn-dark"}`}>Add to cart</button>
                </div>
            </div>
        </div>

        )
    }
}

export default SingleCard