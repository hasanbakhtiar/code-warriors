import React, { Component } from 'react'
import SingleCard from './components/SingleCard'
import phoneProducts from './data/product'
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <h1 className='text-center my-5'>Product list</h1>
                    <div className="row g-5">
                        {phoneProducts.map(item => (
                            <SingleCard
                                title={item.name}
                                price={item.price}
                                photo={item.img}
                                stock={item.stock}
                            />
                        ))}


                    </div>

                </div>
            </>

        )
    }
}

export default App