import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from 'react-use-cart';
import { ImSearch } from "react-icons/im";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import slugify from "slugify";
import { useState } from "react";
import { LangContext } from "../context/LangContext";
const Header = () => {
    const { totalItems } = useCart();
    const [product] = useContext(ProductContext);
    const [lang,setLang] = useContext(LangContext);
    const [keyword, setKeyword] = useState();
    
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">TechTopia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">{lang==="EN"?"Home":"Ana Sehife"}</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">{lang==="EN"?"About":"Haqqimizda"}</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">{lang==="EN"?"Products":"Mehsullar"}</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/cart" className="btn btn-outline-warning position-relative">
                    <TiShoppingCart />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                    </span>
                </Link>

                <button type="button" className="btn btn-outline-warning ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <ImSearch />
                </button>


                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Search product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter product" />
                                    <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                                </div>

                                <ul className="list-group">
                                    {!keyword ? "" : product.filter(p => p.title.toLocaleLowerCase().includes(keyword)).map(item => (

                                        <span data-bs-dismiss="modal">  <Link to={`/products/${slugify(item.title)}`} className="list-group-item" ><img height={70} width={70} style={{ objectFit: "contain" }} src={item.images[0]} alt="img" /><span className="ms-4">{item.title}</span></Link></span>
                                    ))}
                                    {keyword && product.filter(p => p.title.toLocaleLowerCase().includes(keyword)).length === 0 && (
                                        <li className="list-group-item">Not found product</li>
                                    )}
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>


                <button className="btn btn-outline-warning ms-3" onClick={()=>{
                    lang==="EN"?setLang("AZ"):setLang("EN"); 
                    lang==="EN"?localStorage.setItem("lang","AZ"):localStorage.setItem("lang","EN"); 
            
            }}>{lang==="EN"?"AZ":"EN"}</button>

            </div>
        </nav>

    )
}

export default Header