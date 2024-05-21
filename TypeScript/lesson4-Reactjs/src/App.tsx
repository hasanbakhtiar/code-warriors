import { useContext, useRef, useState } from "react"
import { DataContext } from "./context/DataContext";

const App:React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null); 
  const [state,setState] = useState<string>("Hello");
    const formSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        setState(inputRef.current!.value);
    }
    const basicdata = useContext(DataContext); 
  return (
    <div>
      <h1>{state}</h1>
      <p>{basicdata[0].title}</p>
    <form onSubmit={formSubmit}>
    <input type="text" ref={inputRef} />
    <button>send</button>
    </form>

    </div>
  )
}

export default App