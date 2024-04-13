import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Products from './pages/Products'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
    return (
        <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/products' element={<Products/>}></Route>
                    <Route path='*' element={<NotFoundPage/>}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App