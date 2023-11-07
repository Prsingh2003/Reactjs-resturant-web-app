import React from 'react'
import './ProductItem.css'
import Sweetlist from './Sweetlist.js'

const ProductItem = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="js-image-holder">
  <img src="https://cdn.pixabay.com/photo/2014/12/22/12/20/food-577222_1280.jpg" className="card-img-bottom" alt="..." />
      </div>
      </div>
      <Sweetlist></Sweetlist>
    </div>
    
  )
}

export default ProductItem
