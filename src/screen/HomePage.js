import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../assets/images/11.png';
import slide2 from '../assets/images/12.jpg';
import slide3 from '../assets/images/13.jpg';

export default function HomePage() {
  const slideImages = [slide1, slide2, slide3];

  return (
    <div className="w-full">
      <div className="w-full">
        <Slide 
          easing="ease" 
          className="rounded-lg shadow-lg overflow-hidden"
          arrows={false} // Hide the arrows directly via props
        >
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide border round-xl text-red-600">
              <div
                className="bg-cover bg-center w-full"
                style={{ backgroundImage: `url(${each})` , height:'45rem'}}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
