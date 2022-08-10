import React from "react";
import  Carousel from "react-bootstrap/Carousel";
function Banner() {
  return (
     <div>
     <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="w-100"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="Third slide"/>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item >
        <img className="d-block w-100"
          src="https://m.media-amazon.com/images/I/712uXLLrmqL._SX3000_.jpg"
          alt=""/>
      </Carousel.Item>
      {/* .a-icon.a-icon-previous-rounded {
    background-image: url(https://m.media-amazon.com/images/S/sash/ydDD9hnRfziI$y7.png); */}
{/* } */}
<a class="a-carousel-goto-prevpage">
   <i class="a-icon a-icon-previous-rounded">
  <span class="a-icon-alt">Previous slide</span>
  </i>
  </a>
      
    </Carousel>
    </div>
  );
}

export default Banner;
