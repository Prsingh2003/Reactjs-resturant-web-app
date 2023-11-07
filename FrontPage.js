import React from 'react'
import Navbar from './Navbar.js'
import About from './About.js'
import Contact from './Contact.js'
import Product from './Product.js'
import NoPage from './NoPage.js'
import Home from './Home.js'
import Footer from './Footer.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path='/home' element= {<Home></Home>}></Route>
        <Route path='/About' element= {<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Product' element= {<Product></Product>}></Route>
        <Route path='/*' element= {<NoPage></NoPage>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default FrontPage
