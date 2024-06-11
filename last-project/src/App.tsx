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

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/brands" element={<Brands />}></Route>

        {/* Brand Start */}
        <Route path="/dashboard/brand/read" element={<BrandRead />}></Route>
        <Route path="/dashboard/brand/add" element={<BrandCreate/>}></Route>
        <Route path="/dashboard/brand/update" element={<BrandUpdate />}></Route>
        {/* Brand End */}

        {/* Brand Start */}
        <Route path="/dashboard/car/read" element={<CarRead />}></Route>
        <Route path="/dashboard/car/add" element={<CarCreate />}></Route>
        <Route path="/dashboard/car/update" element={<CarUpdate />}></Route>
        {/* Brand End */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
