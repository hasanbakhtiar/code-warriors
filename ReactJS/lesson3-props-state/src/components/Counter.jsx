import React, { Component } from 'react'

class List extends Component{
  componentWillUnmount(){
    alert('component is deleted')
  }
  render(){
    return(
      <ul>
        <li>Miko</li>
        <li>Miko</li>
        <li>Miko</li>
      </ul>
    )
  }
}



class Counter extends Component {
  componentDidMount(){
    console.log('component is running');
    document.querySelector('.btn').style.color = 'red';
  }
  componentDidUpdate(){
    console.log('update is running');
  }
    constructor(){
      console.log('constructor is running');
        super();
        // this.increment = this.increment.bind(this);
        this.state={
            count:0,
            photo:"https://wallup.net/wp-content/uploads/2016/04/06/338054-landscape-Sun.jpg",
            display:true
        }
    }
     increment=()=>{
        this.setState({
            count:this.state.count+1,
            photo:"https://wallup.net/wp-content/uploads/2016/04/06/338054-landscape-Sun.jpg"
        })
    }
    decrement=()=>{
    if (this.state.count>0) {
        this.setState({
            count:this.state.count-1
            ,photo:"https://wallup.net/wp-content/uploads/2019/09/56899-landscapes-nature.jpg"
        })
    }
    }

  
  render() {
    let info;
    if (this.state.display) {
    info  = <List />
    }
    return (
      <div className='container mt-3'>
        {info}
        <button onClick={()=>{
          this.setState({
            display:false
          })
        }}>delete</button>
        <img width={200} src={this.state.photo} alt="" />
        <button onClick={this.decrement} className='btn btn-danger'>-</button>
        <span className='mx-3'>{this.state.count}</span>
        <button onClick={this.increment} className='btn btn-primary'>+</button>
      </div>
    )
  }
}

export default Counter