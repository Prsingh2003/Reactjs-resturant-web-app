import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id='js-navbar'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.pinimg.com/736x/b6/03/ad/b603ad70421d58d5f15e4885e2228fc7.jpg" alt="logo" width={53} height={53}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to={'/home'} style={{textDecoration:'none'}}>  <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    <h5>Home</h5>
                </a>
              </li></Link>
            <Link to={'/About'} style={{textDecoration:'none'}}>  <li className="nav-item">
                <a className="nav-link " href="#"><h5>About</h5></a>
              </li></Link>

            <Link to={'/Product'} style={{textDecoration:'none'}}><li className="nav-item">
                <a className="nav-link " href="#"><h5>Product</h5></a>
              </li></Link>
            <Link to={'/Contact'} style={{textDecoration:'none'}}><li className="nav-item">
                <a className="nav-link " href="#"><h5>Contact Us</h5></a>
              </li></Link>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
