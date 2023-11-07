import React from 'react'
import './Slider.css'

const Slider = () => {
  return (
    <div>
      <div className="box">
    <div className="container-fluid" >
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h1>Delecious Pizza</h1>
        <p>Starting: $10</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>Delecious Pastery</h1>
        <p>Starting : $20</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_1280.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h1>Try Famous Latte</h1>
        <p>Starting : $20</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>
    </div>
  )
}

export default Slider
