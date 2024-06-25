import React from 'react'
import { Link } from 'react-router-dom'

const Home:React.FC = () => {
  return (
<div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold text-body-emphasis">Car Show</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">Best, Sport, Luxury, Classic and more cars are here! </p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/cars" type="button" className="btn btn-dark btn-lg px-4 gap-3">Cars list</Link>
    </div>
  </div>
</div>

  )
}

export default Home