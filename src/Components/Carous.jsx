import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from "./Asset/gt.jpg";
import img1 from "./Asset/mh.jpg";
import img2 from "./Asset/pb.jpg";
export const Carous = () => {
  return (
    <>
    <div className='car'> 
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-10 slide"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='ets'>Game of Thrones</h5>
          <p className='ets'>Game of Thrones is a fantasy series about a long, complicated war for power between noble families in the fictional continent of Westeros.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='ets'>Money Heist </h5>
          <p className='ets'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='ets' >Peaky Blinders</h5>
          <p className='ets'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    </>
  );
}
