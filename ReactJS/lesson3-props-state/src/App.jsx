import React, { Component } from 'react'
import SingleCard from './components/SingleCard'
import phoneProducts from './data/product'
import Header from './components/Header'
import Counter from './components/Counter'

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Counter />
                <div className='container'>
                    <h1 className='text-center my-5'>Product list</h1>
                    <div className="row g-5">
                        {phoneProducts.map((item,c) => (
                            <SingleCard
                                key={c}
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