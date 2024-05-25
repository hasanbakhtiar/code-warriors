import { add } from './features/todoSlice';
import { useAppDispatch, useAppSelector } from './store';

const App = () => {
    const data = useAppSelector((p:any)=>p.todos);
    const dispatch = useAppDispatch();
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