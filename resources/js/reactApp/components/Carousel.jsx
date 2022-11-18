import React from "react";
import {Carousel} from "react-bootstrap";

const CarouselContainer = () => {
    return (
        <Carousel interval={2000}>
            <Carousel.Item>
                <img
                className="d-block w-100"   
                src={"/carousel_images/slider1.jpg"}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Bringing the Balkan closer to you</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 "
                src={"/carousel_images/slider5.jpg"}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>We believe in real food</h3>
                <p>Always eat what's right.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 "
                src={"/carousel_images/slider3.jpg"}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Food that tells a story.</h3>
                <p>Come and taste the Balkan delish!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


//         <>
//          <div className="carousel slide" id="carouselExampleControls" data-ride="carousel">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img clasName="d-block w-100" src="/carousel_images/slider1.jpg"/>
//                 </div>
//                 <div className="carousel-item">
//                     <img clasName="d-block w-100" src="/carousel_images/slider2.jpg"/>
//                 </div>
//                 <div className="carousel-item">
//                     <img clasName="d-block w-100" src="/carousel_images/slider3.jpg"/>
//                 </div>

                    
            
//             </div>
//               <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
//         </div>

//         </>
    
    )
}
export default CarouselContainer;