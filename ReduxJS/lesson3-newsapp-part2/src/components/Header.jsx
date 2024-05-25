import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand" href="#">News Paper</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/news" className="nav-link" >News</NavLink>
                        </li>

                    </ul>
                    <LinkContainer to="/dashboard/add"><Button variant='dark'>Add</Button></LinkContainer>
                </div>
            </div>
        </nav>

    )
}

export default Header