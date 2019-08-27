import React, { Component } from 'react';
import carouselImage1 from '../../assets/carousalBackground1.jpg';
import carouselImage2 from '../../assets/carousalBackground2.jpg';
import carouselImage3 from '../../assets/carousalBackground3.jpg';
import './homePageCarousel.css';

class HomePageCarousal extends Component {
    render() {
        return (
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carouselImage1} />
                        <div class="carousel-caption">
                            <h1>Breaking The Monolith</h1>
                            <p>
                                Loosley Coupled Tightly Integrated Microservice Ecosystem? Yes its
                                possible
            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carouselImage2} />
                        <div class="carousel-caption">
                            <h1>Responsive and Reactive UI Designs</h1>
                            <p>Powerful yet simple Frontend ? Yes it is possible</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carouselImage3} />
                        <div class="carousel-caption">
                            <h1>Running your Buisness from Cloud</h1>
                            <p>
                                Including infrastructure and state of art Devops? Yes its possible
            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// function HomePageCarousal() {
//     return (
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=First slide&bg=373940"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Second slide&bg=282c34"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="holder.js/800x400?text=Third slide&bg=20232a"
//                     alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     )
// }

export default HomePageCarousal;