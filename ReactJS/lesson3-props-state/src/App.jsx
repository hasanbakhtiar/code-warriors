import React, { Component } from 'react'
import SingleCard from './components/SingleCard'
import phoneProducts from './data/product'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>Product list</h1>
        <div className="row g-5">
            {phoneProducts.map(item=>(
                <SingleCard 
                title={item.name} 
                price={item.price} 
                photo={item.img} />
            ))}
            
        
        </div>

      </div>
    )
  }
}

export default App