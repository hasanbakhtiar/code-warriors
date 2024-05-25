import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import News from "./pages/News"
import NewsDetails from "./pages/NewsDetails"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddNews from "./pages/dashboard/AddNews"
import Dashboard from "./pages/dashboard/Dashboard"
import EditNews from "./pages/dashboard/EditNews"
import Login from "./pages/Login"



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/news/:slug" element={<NewsDetails />}></Route>
        <Route path="/login" element={<Login />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/add" element={<AddNews />}></Route>
          <Route path="/dashboard/edit/:slug" element={<EditNews />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App