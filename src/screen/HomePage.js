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

    {/* ///image style */}

    <div className='pl-5 pr-5'>
     {/* ///responsive md*/}
     <div className='pt-8   hidden sm:flex'>
      <card className= 'p-4'>
        <img src={twin} className='w-full  h-auto' style={{ height:'40rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= 'p-4'>
        <img src={girl} className='w-full  h-auto' style={{ height:'40rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= 'p-4'>
        <img src={smart} className='w-full  h-auto' style={{ height:'40rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
    </div>
    {/* ///responsive md*/}
     {/* ///responsive sm*/}
     <div className='pt-8  gap-6 flex sm:hidden'>
      <card className= ''>
        <img src={twin} className='w-full  h-auto' style={{ height:'20rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= ''>
        <img src={girl} className='w-full  h-auto' style={{ height:'20rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= ''>
        <img src={smart} className='w-full  h-auto' style={{ height:'20rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
    </div>
    {/* ///responsive sm*/}

    {/* ///2 */}
    {/* ///responsive md*/}
    <div className='pt-8   hidden sm:flex'>
      <card className= 'p-4'>
        <img src={twinboy} className='w-full  h-auto' style={{ height:'40rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= 'p-4'>
        <img src={purpleman} className='w-full  h-auto' style={{ height:'40rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= 'p-4'>
        <img src={lineman} className='w-full  h-auto' style={{ height:'40rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
    </div>
    {/* ///responsive md*/}
     {/* ///responsive sm*/}
     <div className='pt-8  gap-6 flex sm:hidden'>
      <card className= ''>
        <img src={twinboy} className='w-full  h-auto' style={{ height:'20rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= ''>
        <img src={purpleman} className='w-full  h-auto' style={{ height:'20rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
      <card className= ''>
        <img src={lineman} className='w-full  h-auto' style={{ height:'20rem', width:'40rem' }} alt=''/>
        <nav className='flex space-x-7 p-2'>
        </nav>
      </card>
    </div>
    {/* ///responsive sm*/}
   
    <div className='bg-green-500 p-6'>
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
    <Slide 
          easing="ease" 
          className="rounded-lg shadow-lg overflow-hidden"
          arrows={false} // Hide the arrows directly via props
        >
          {slideImages.map((each, index) => (
            <div key={index} className="each-slide border round-xl text-red-600">
              <div
                className="bg-cover w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                style={{ backgroundImage: `url(${each})` , height:'45rem'}}
              >
              </div>
            </div>
          ))}
        </Slide>
    </div>
    </div>
    </nav>
  );
}
