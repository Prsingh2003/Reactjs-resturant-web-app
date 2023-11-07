import React from 'react'
import Sweets from './SweetList.json'
import './Sweetlist.css'

const Sweetlist = () => {
  return (
    <div>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {Sweets.map((sweet)=>{
            return (
          <div key={sweet.procuctid} className="col " data-aos="slide-right">
          <div className="card">
            <img src={sweet.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-title text-center text-primary">{sweet.title}</h3>
              <h3 className="card-title text-center text-primary">{sweet.Price}</h3>
            </div>
          </div>
          </div>
        )})
     
  }
  </div>
  </div>
  </div>
  )
}

export default Sweetlist
