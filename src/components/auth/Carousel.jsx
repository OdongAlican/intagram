import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Screenshot1 from '../../Images/screenshot1.jpg';
import Screenshot2 from '../../Images/screenshot2.jpg';
import Screenshot3 from '../../Images/screenshot3.jpg';
import Screenshot4 from '../../Images/screenshot4.jpg';
import Screenshot5 from '../../Images/screenshot5.jpg';

const BootstrapCarousel = () => (
  <div className="carousel-section">
    <div className="dummy-phone">
      <div className="screen-shot">
        <Carousel className="carousel-fade">
          <Carousel.Item className="carousel-item">
            <img
              src={Screenshot1}
              alt="first"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              src={Screenshot2}
              alt="second"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              src={Screenshot3}
              alt="third"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              src={Screenshot4}
              alt="fourth"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              src={Screenshot5}
              alt="fifth"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </div>
);

export default BootstrapCarousel;
