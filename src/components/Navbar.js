import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1" to={'/'}>GoFood</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                   
                      {
                        (localStorage.getItem("authToken")) ? 
                        <li className="nav-item">
                        <Link className="nav-link fs-5" to="">My Orders</Link>
                        </li>
                        :
                        ""
                      }
                </ul>
                {
                  (localStorage.getItem("authToken")) ?
                  <div className='d-flex'>
                    <Link className='btn bg-white text-success mx-2'>My Cart</Link>
                    <Link className='btn bg-white text-success mx-2' to={'/login'}>Logout</Link>
                  </div>
                  :
                  <div className='d-flex'>
                    <Link className='btn bg-white text-success mx-2' to={'/login'}>Login</Link>
                    <Link className='btn bg-white text-success mx-2' to={'/register'}>SignUp</Link>
                  </div>
                }
                </div>
            </div>
            </nav>
    </>
  )
}

export default Navbar