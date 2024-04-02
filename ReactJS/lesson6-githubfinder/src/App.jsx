import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'
const App = () => {
  const [user,setUser] = useState([]);
  const [alert,setAlert] = useState();
  const workApiWithSearch=(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUser(res.data.items))
  }
  
  return (
    <div>
      <Header />
      <Search comingkey={workApiWithSearch} comingAlert={(item)=>{setAlert(item)}}/>
      {user.length ===0?<h3 className='text-center'>{alert}</h3>:<Users switchdata={user} />}
    </div>
  )
}

export default App