import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'
const App = () => {
  const [user,setUser] = useState([]);

  const workApiWithSearch=(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>setUser(res.data.items))
  }
  
  return (
    <div>
      <Header />
      <Search comingkey={workApiWithSearch}/>
      <Users switchdata={user} />
    </div>
  )
}

export default App