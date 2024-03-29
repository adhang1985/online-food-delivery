import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:'contain !important'}}>
        <div className="carousel-inner">
            <div className='carousel-caption' style={{zIndex:'10'}}>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success bg-success text-white" type="submit">Search</button>
            </form>
            </div>
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Carousel
