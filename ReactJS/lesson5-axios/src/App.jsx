import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("http://127.0.0.1:5500/src/data/jewelery.json")
    .then(res=>setData(res.data))
  },[])
  return (
    <ul>
        {data.map(item=><li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default App