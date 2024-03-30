/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../features/searchSlice';

const Carousel = () => {

    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        dispatch(searchProduct(text));
    },[text])

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:'contain !important'}}>
        <div className="carousel-inner">
            <div className='carousel-caption' style={{zIndex:'10'}}>
            <div class="d-flex justify-content-center" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={handleSearch}/>
            </div>
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
