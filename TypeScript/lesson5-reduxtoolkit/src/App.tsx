import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './features/todoSlice';

const App = () => {
    const data = useSelector((p:any)=>p.todos);
    const dispatch = useDispatch();
  return (
    <div>
        {data.map((item:any)=>(
            <li>{item.text}</li>
        ))}
        <button onClick={()=>{
            dispatch(add('new value'))
        }}>add</button>
    </div>
  )
}

export default App