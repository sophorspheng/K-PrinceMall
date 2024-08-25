import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slide1 from '../assets/images/11.png';
import slide2 from '../assets/images/12.jpg';
import slide3 from '../assets/images/13.jpg';
import twin from '../assets/images/twin.png';
import girl from '../assets/images/girl.png';
import smart from '../assets/images/smart.png';
import twinboy from '../assets/images/twinboy.png';
import purpleman from '../assets/images/purpleman.png';
import lineman from '../assets/images/lineman.png';
import { StarOutlined } from '@ant-design/icons';

export default function HomePage() {
  const slideImages = [slide1, slide2, slide3];
  const slideLetters = ["Free dilivery on order above 40$ spent.", "Fast dilivery: 24hrs in Phnom Penh and 48hrs for provices.", "Shop Now!"];

  return (

    <nav>
    <div className="w-full">
      <div className="w-full h-full p-5">
        <Slide 
          easing="ease" 
          className="rounded-lg shadow-lg overflow-hidden"
          arrows={false} // Hide the arrows directly via props
        >
          {slideImages.map((each, index) => (
            <div key={index} className="grid grid-cols-1+h-96 each-slide  border round-xl text-red-600">
              <div
                className="bg-cover bg-center w-full "
                style={{ backgroundImage: `url(${each})` , height:'45rem'}}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>

    {/* ///image style */}

    <div className='w-full h-full p-5'>
     {/* ///responsive md*/}
     <div className='items-center justify-center pb-1 w-full h-auto flex grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>

        <img src={twin} className='shadow shadow-gray-400 drop-shadow-xl '  alt=''/>
        <img src={girl} className='shadow shadow-gray-400 drop-shadow-xl ' alt=''/>
        <img src={smart} className='shadow shadow-gray-400 drop-shadow-xl '  alt=''/>
       
    </div>
     <div className=' items-center justify-center pt-8 w-full h-auto flex grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'>

        <img src={twinboy} className=''  alt=''/>
        <img src={purpleman} className='' alt=''/>
        <img src={lineman} className='grid '  alt=''/>
       
    </div>
   
   <div className='pt-10'>
    <div className='bg-green-500 w-full p-5 '>
    <Slide 
          easing="ease" 
          className="rounded-lg shadow-lg overflow-hidden"
          arrows={false} // Hide the arrows directly via props
        >
          {slideLetters.map((each, index) => (
           <h1 className='text-center text-white font-semibold text-2xl font-medium'>{each}</h1>
          ))}
        </Slide>
    </div>
    
    <div className=''>
    <div className='pt-5 pb-5 flex justify-between w-full'>
      <h4 className='font-semibold text-xl hover:cursor-pointer hover:text-red-600'  onClick={alert}>Now Trending!</h4>
      <h4 className='font-semibold text-xl hover:cursor-pointer hover:text-red-600' onClick={alert}>Shop more</h4>
    </div>
    </div>
    
    </div>
    </div>
    </nav>
  );
}
