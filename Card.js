import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/843820560/photo/cooked-curries-on-display-at-camden-market-in-london.webp?b=1&s=612x612&w=0&k=20&c=DjHQgNeXyT6tvZnTKQFZ80Id9TyW_TZaZLuoomkrbzU=" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title text-center" style={{color:'#8338ec'}}>Kadhai Paneer</h3>
        <h5 className="card-text text-primary text-center">Starting : $20 - 1 KG </h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.webp?b=1&s=612x612&w=0&k=20&c=5F4SvP5LPjDtjDqohFrTSV1qLrjxG1Edniu4I9WzM8c=" className="card-img-top" alt="..." />
      <div className="card-body">
      <h3 className="card-title text-center" style={{color:'#8338ec'}}>Italian Pasta</h3>
        <h5 className="card-text text-primary text-center">Starting : $20 - 1 KG</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/496389174/photo/delicious-hamburgers.webp?b=1&s=612x612&w=0&k=20&c=Hh55Setbtd1CIqmWxanB42cmOUkoy3kEaHV3rTmMl5g=" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title text-center" style={{color:'#8338ec'}}>Aloo Burger</h3>
        <h5 className="card-text text-primary text-center">Starting : $20 - 1 KG</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/1466112670/photo/indian-festival-of-colors-holi-is-celebrated-with-colorful-gulal-abeer-kesar-pista-badam.webp?b=1&s=612x612&w=0&k=20&c=VEuzylxb1prjsT45eKixxcgGBn3wKReqy6yc_D4oTjc=" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title text-center" style={{color:'#8338ec'}}>Gujiya</h3>
        <h5 className="card-text text-primary text-center">Starting : $20 - 1 KG</h5>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Card
