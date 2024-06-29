import { useCookies } from "react-cookie";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [cookie,setCookie,removeCookie] = useCookies();
  console.log(cookie);
  
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Last Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cars">
                Cars
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/brands">
                Brands
              </NavLink>
            </li>
          </ul>

        {/* <Link to="/login" className="btn btn-warning">Login</Link> */}
        {cookie['admintoken'] === "j1n312jn31j"? 
        <>
        <li className="nav-item dropdown btn btn-warning">
            <a
              className="nav-link dropdown-toggle "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dashbaord
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="dashboard/car/read">
                  Cars
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dashboard/brand/read">
                  Brands
                </Link>
              </li>
            
          
            </ul>
          </li>
          <li><button className="btn btn-danger" onClick={()=>{
            removeCookie('admintoken');
            window.location.assign('/');
          }}>Log out</button></li>
        </>:  cookie['cookie-car']?<li>
        <Link to={`/account/${cookie['cookie-car']}`} className="btn btn-warning me-3">{localStorage.getItem('username')}</Link>
        <button onClick={()=>{
            removeCookie('cookie-car');
            window.location.assign('/');
          }} className="btn btn-danger">Log out</button>
        </li>:<li>
            <Link to="/register" className="btn btn-warning me-3">Regsiter</Link>
            <Link to="/login" className="btn btn-light ">Login</Link>
          </li>}
      
        </div>
      </div>
    </nav>
  );
};

export default Header;
