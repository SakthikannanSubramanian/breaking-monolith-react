import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carouselImage1 from '../../assets/carousalBackground1.jpg';
import carouselImage2 from '../../assets/carousalBackground2.jpg';
import carouselImage3 from '../../assets/carousalBackground3.jpg';

class TestDetailsPage extends Component {
    render() {
        return (
            <Carousel>
            <div>
                <img src={carouselImage1} alt="Carousel Image 1"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={carouselImage2} alt="Carousel Image 2"/>
                <p className="legend" styles="top:0%;">Legend 2</p>
            </div>
            <div>
                <img src={carouselImage3} alt="Carousel Image 3"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
            );
    }
}

export default TestDetailsPage;