import { addNews } from "./tools/actions/newsActions";
import newsStore from "./tools/store/newsStore"

const store = newsStore();

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addNews({title:"news one",desc:"news desc one",img:"1.jpg"}))
store.dispatch(addNews({title:"news two",desc:"news desc two",img:"2.jpg"}))


const App = () => {
  return (
    <div className='container'>
      <h1> News Core</h1>
    </div>
  )
}

export default App