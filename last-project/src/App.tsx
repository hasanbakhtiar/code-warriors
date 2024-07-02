import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Brands from "./pages/Brands";
import BrandCreate from "./pages/dashboard/brand/Create";
import BrandRead from "./pages/dashboard/brand/Read";
import BrandUpdate from "./pages/dashboard/brand/Update";

import CarCreate from "./pages/dashboard/car/Create";
import CarRead from "./pages/dashboard/car/Read";
import CarUpdate from "./pages/dashboard/car/Update";
import Login from "./pages/auth/Login";
import Regsiter from "./pages/auth/Regsiter";
import Account from "./pages/auth/Account";
import Basket from "./pages/Basket";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    <div className="container">
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/brands" element={<Brands />}></Route>
        <Route path="/basket" element={<Basket />}></Route>

        {/* Brand Start */}
        <Route path="/dashboard/brand/read" element={<BrandRead />}></Route>
        <Route path="/dashboard/brand/add" element={<BrandCreate/>}></Route>
        <Route path="/dashboard/brand/update/:id" element={<BrandUpdate />}></Route>
        {/* Brand End */}

        {/* Brand Start */}
        <Route path="/dashboard/car/read" element={<CarRead />}></Route>
        <Route path="/dashboard/car/add" element={<CarCreate />}></Route>
        <Route path="/dashboard/car/update/:id" element={<CarUpdate />}></Route>
        {/* Brand End */}

        {/* Auth Start */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Regsiter />}></Route>
        <Route path="/account/:token" element={<Account />}></Route>
        {/* Auth End */}
        

      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
