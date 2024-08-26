import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../assets/images/11.png";
import slide2 from "../assets/images/12.jpg";
import slide3 from "../assets/images/13.jpg";
import twin from "../assets/images/twin.png";
import girl from "../assets/images/girl.png";
import smart from "../assets/images/smart.png";
import twinboy from "../assets/images/twinboy.png";
import purpleman from "../assets/images/purpleman.png";
import lineman from "../assets/images/lineman.png";
import A from '../assets/images/trending1/A.png'
import B from '../assets/images/trending1/B.png'
import C from '../assets/images/trending1/C.png'
import D from '../assets/images/trending1/D.png'
import E from '../assets/images/trending1/E.png'
import F from '../assets/images/trending1/F.png'
import t1 from '../assets/images/trending1/t1.png'
import t2 from '../assets/images/trending1/t2.png'
import t3 from '../assets/images/trending1/t3.png'
import t4 from '../assets/images/trending1/t4.png'
import sh1 from '../assets/images/trending1/sh1.png'
import sh2 from '../assets/images/trending1/sh2.png'
import sh3 from '../assets/images/trending1/sh3.png'
import sh4 from '../assets/images/trending1/sh4.png'
import {
  BackwardFilled,
  ForwardFilled,
  ForwardOutlined,
  HeartOutlined,
  RedditOutlined,
  RedEnvelopeFilled,
  StarOutlined,
} from "@ant-design/icons";
import { TbH4, TbWalk } from "react-icons/tb";
import { FaForward } from "react-icons/fa6";
import { BsForward } from "react-icons/bs";
import { GiForwardField } from "react-icons/gi";
import { MdForward5 } from "react-icons/md";

export default function HomePage() {
  const slideImages = [slide1, slide2, slide3];
  const slideLetters = [
    "Free dilivery on order above 40$ spent.",
    "Fast dilivery: 24hrs in Phnom Penh and 48hrs for provices.",
    "Shop Now!",
  ];
  // Array of image URLs
  const images = [twin, girl, smart, slide1, twin, girl, smart, twin];

  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle click on forward button
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Handle click on back button
  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

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
              <div
                key={index}
                className="grid grid-cols-1+h-96 each-slide  border round-xl text-red-600"
              >
                <div
                  className="bg-cover bg-center w-full "
                  style={{ backgroundImage: `url(${each})`, height: "45rem" }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>

      {/* ///image style */}

      <div className="w-full h-full p-5">
        {/* ///responsive md*/}
        <div className="items-center justify-center pb-1 w-full h-auto flex grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          <img
            src={twin}
            className="shadow shadow-gray-400 drop-shadow-xl "
            alt=""
          />
          <img
            src={girl}
            className="shadow shadow-gray-400 drop-shadow-xl "
            alt=""
          />
          <img
            src={smart}
            className="shadow shadow-gray-400 drop-shadow-xl "
            alt=""
          />
        </div>
        <div className=" items-center justify-center pt-8 w-full h-auto flex grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          <img src={twinboy} className="" alt="" />
          <img src={purpleman} className="" alt="" />
          <img src={lineman} className="grid " alt="" />
        </div>

        <div className="pt-10">
          <div className="bg-green-500 w-full p-5 ">
            <Slide
              easing="ease"
              className="rounded-lg shadow-lg overflow-hidden"
              arrows={false} // Hide the arrows directly via props
            >
              {slideLetters.map((each, index) => (
                <h1 className="text-center text-white font-semibold text-2xl font-medium">
                  {each}
                </h1>
              ))}
            </Slide>
          </div>

          <div className="">
            <div className="pt-5 pb-5 flex justify-between w-full">
              <h4
                className="font-semibold text-xl hover:cursor-pointer hover:text-red-600"
                onClick={alert}
              >
                Now Trending!
              </h4>
              <h4
                className="font-semibold text-xl hover:cursor-pointer hover:text-red-600"
                onClick={alert}
              >
                Shop more
              </h4>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className="flex overflow-hidden w-full ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 flex w-full justify-around">
              {slide.map((image, index) => (
                <img key={index} src={image} alt={`Slide ${slideIndex}`} className="w-1/4 mx-2" />
              ))}
            </div>
          ))} */}
              <div className="flex-shrink-0 flex w-screen justify-around ">
                <img
                  src={A}
                  className="w-1/3 mx-2 sm:h-96 md:h-96  xl:max-h-96"
                />
                <img
                  src={B}
                  className="w-1/3 mx-2 sm:h-96 md:h-96  xl:max-h-96"
                />
                <img
                  src={C}
                  className="w-1/3 mx-2 sm:h-96 md:h-96  xl:max-h-96"
                />
                <img
                  src={D}
                  className="w-1/3 mx-2 sm:h-96 md:h-96  xl:max-h-96"
                />
                <img
                  src={E}
                  className="w-1/3 mx-2 sm:h-96 md:h-96  xl:max-h-96"
                />
                <img
                  src={F}
                  className="w-1/3 mx-2 sm:h-96 md:h-96  xl:max-h-96"
                />
              </div>
            </div>
          </div>
          <div className="flex right-24 justify-normal flex-row absolute">
            <button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              hidden={currentSlide === slides.length - 1}
              className="bg-black opacity-70 border border-white  items-center justify-normal hover:bg-black hover:text-white text-white font-bold py-2 px-4 rounded-full h-10 w-10 "
            >
              <ForwardFilled className="" />
            </button>
          </div>
          <div className="flex left-20 justify-normal flex-row absolute grid grid-cols-1 ">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              hidden={currentSlide === 0}
              className="bg-black opacity-70 items-center  justify-center border border-white   hover:bg-black hover:text-white text-white font-bold py-2 px-4 rounded-full h-10 w-10 "
            >
              <BackwardFilled className="" />
            </button>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="pt-5 pb-5 flex justify-between w-full">
              <h4
                className="font-semibold text-xl hover:cursor-pointer hover:text-red-600"
                onClick={alert}
              >
                Now Trending!
              </h4>
              <h4
                className="font-semibold text-xl hover:cursor-pointer hover:text-red-600"
                onClick={alert}
              >
                Shop more
              </h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex grid grid-cols-4 gap-2">
            <div className="">
            <img src={t1} className="md:h-72+w-72"/>
            <p className="justify-between flex ">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            </div>
            <div className="">
            <img src={t2} className="md:h-72+w-72"/>
            <p className="justify-between flex">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            </div>
            <div className="">
            <img src={t3} className="md:h-72+w-72"/>
            <p className="justify-between flex">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            </div>
            <div className="">
            <img src={t4} className="md:h-72+w-72"/>
            <p className="justify-between flex">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            </div>
           
          </div>
          
        </div>
        <div className="">
          <div className="flex justify-between mt-5 mb-5">
          <h4
                className="font-semibold text-xl hover:cursor-pointer hover:text-red-600"
                onClick={alert}
              >
                Footwear
              </h4>
              <h4
                className="font-semibold text-xl hover:cursor-pointer hover:text-red-600"
                onClick={alert}
              >
                Shop more
              </h4>
          </div>
          <div className="">
          <div className="flex grid grid-cols-4 gap-2">
            <div className="">
            <img src={sh1} className="md:h-72+w-72"/>
            <p className="justify-between flex ">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            <div className="gap-1 flex">
            <p className="bg-red-600 p-2 w-1 rounded-sm border border-1"></p>
            <p className="bg-white p-2 w-2 rounded-sm border"></p>
            </div>
            </div>
            <div className="">
            <img src={sh2} className="md:h-72+w-72"/>
            <p className="justify-between flex">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            <div className="gap-1 flex">
            <p className="bg-purple-800 p-2 w-2 rounded-sm"></p>
            <p className="bg-white p-2 w-1 rounded-sm border border-1"></p>
            <p className="bg-yellow-700 p-2 w-1 rounded-sm border border-1"></p>
            </div>
            </div>
            <div className="">
            <img src={sh3} className="md:h-72+w-72"/>
            <p className="justify-between flex">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            </div>
            <div className="">
            <img src={sh4} className="md:h-72+w-72"/>
            <p className="justify-between flex">US $11.59<HeartOutlined/></p>
            <p className="">Cargo Shorts</p>
            <div className="gap-1 flex">
            <p className="bg-red-600 p-2 w-2 rounded-sm"></p>
            <p className="bg-gray-700 p-2 w-2 rounded-sm"></p>
            </div>
            </div>
           
          </div>
          
        </div>
          
        </div>
      </div>
    </nav>
  );
}
