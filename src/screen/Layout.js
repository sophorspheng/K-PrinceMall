import React, { useState } from "react";
import {
  BellOutlined,
  CloseCircleFilled,
  CloseCircleOutlined,
  FacebookFilled,
  FacebookOutlined,
  HeartFilled,
  HeartOutlined,
  LoginOutlined,
  MenuOutlined,
  MessageFilled,
  MessageOutlined,
  PhoneFilled,
  QuestionCircleFilled,
  SearchOutlined,
  ShoppingOutlined,
  TikTokOutlined,
  UsergroupAddOutlined,
  YoutubeFilled,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import {
  BsBox2HeartFill,
  BsCardChecklist,
  BsSearchHeart,
  BsSearchHeartFill,
  BsSignRailroadFill,
} from "react-icons/bs";
import { LiaRegistered } from "react-icons/lia";
import qr from "../assets/images/qr.png";
import aba from "../assets/images/aba.png";
import cc from "../assets/images/cc.png";
import ac from "../assets/images/ac.png";
import visa from "../assets/images/visa.png";
import union from "../assets/images/unionpay.png";
import jcb from "../assets/images/jcb.png";
import wing from "../assets/images/wing.png";
import c from "../assets/images/c.png";

import { FaFacebook } from "react-icons/fa";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import {
  BiBox,
  BiHeartCircle,
  BiNote,
  BiPackage,
  BiPhoneCall,
  BiSearch,
} from "react-icons/bi";
import { FaLetterboxd } from "react-icons/fa6";
import { TbCircleLetterS, TbSquareLetterSFilled } from "react-icons/tb";
import { GiErlenmeyer } from "react-icons/gi";
import { GrPackage } from "react-icons/gr";
import TextArea from "antd/es/input/TextArea";
import { Input } from "antd";
import { RxExitFullScreen } from "react-icons/rx";
import Search from "antd/es/input/Search";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [dropdownVisible3, setDropdownVisible3] = useState(false);

  return (
    <div className="md:p-20 w-full h-full">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 bg-white left-0 z-50 w-full">
        <div className="flex justify-around items-center  bg-white">
          <div className="hidden md:flex sm:flex">
            <ul className="flex gap-x-3 font-semibold text-xl hidden lg:flex">
              {/* WOMEN */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible1(true)}
                onMouseLeave={() => setDropdownVisible1(false)}
              >
                <Link to="/">WOMEN</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                  {dropdownVisible2 && (
                    <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                      <div className="flex gap-10">
                        <ul className="font-thin space-y-3">
                          <h2 className="font-semibold text-xl">New In</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Casual
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportlife
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Lifetyle
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Dress
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Bottom
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Clothing</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            Linen
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Vest
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blazers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bras
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jackets
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            T-Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Polo Shirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Hoodies & Sweatshirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jumpsuits
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Dresses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cardigan
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blouses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportwears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Trousers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jeans
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Skirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shorts
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Shoes</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Loafers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sandals
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sneakers
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Accessories</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Gloves
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Scarf
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Belts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            UnderWears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Socks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bows
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Caps & Hats
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Backpacks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bags
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">
                            Shop by collections
                          </h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Life in a journey collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            361 adventure collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Princess Jenna x TEN 11
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cottage core collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Rider collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Denim
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              {/* MEN */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible1(true)}
                onMouseLeave={() => setDropdownVisible1(false)}
              >
                <Link to="/">MEN</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                  {dropdownVisible1 && (
                    <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                      <div className="flex gap-10">
                        <ul className="font-thin space-y-3">
                          <h2 className="font-semibold text-xl">New In</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Casual
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportlife
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Lifetyle
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Dress
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Bottom
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Clothing</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            Linen
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Vest
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blazers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bras
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jackets
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            T-Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Polo Shirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Hoodies & Sweatshirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jumpsuits
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Dresses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cardigan
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blouses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportwears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Trousers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jeans
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Skirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shorts
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Shoes</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Loafers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sandals
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sneakers
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Accessories</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Gloves
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Scarf
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Belts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            UnderWears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Socks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bows
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Caps & Hats
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Backpacks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bags
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">
                            Shop by collections
                          </h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Life in a journey collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            361 adventure collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Princess Jenna x TEN 11
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cottage core collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Rider collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Denim
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              {/* MEN */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible1(true)}
                onMouseLeave={() => setDropdownVisible1(false)}
              >
                <Link to="/">BOYS</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                  {dropdownVisible3 && (
                    <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                      <div className="flex gap-10">
                        <ul className="font-thin space-y-3">
                          <h2 className="font-semibold text-xl">New In</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Casual
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportlife
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Lifetyle
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Dress
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Bottom
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Clothing</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            Linen
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Vest
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blazers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bras
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jackets
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            T-Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Polo Shirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Hoodies & Sweatshirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jumpsuits
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Dresses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cardigan
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blouses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportwears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Trousers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jeans
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Skirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shorts
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Shoes</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Loafers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sandals
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sneakers
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Accessories</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Gloves
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Scarf
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Belts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            UnderWears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Socks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bows
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Caps & Hats
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Backpacks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bags
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">
                            Shop by collections
                          </h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Life in a journey collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            361 adventure collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Princess Jenna x TEN 11
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cottage core collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Rider collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Denim
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
              {/* MEN */}
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible1(true)}
                onMouseLeave={() => setDropdownVisible1(false)}
              >
                <Link to="/">GIRLS</Link>
                {/* Dropdown Menu */}
                <div className="bg-red-600 flex">
                  {dropdownVisible && (
                    <div className="absolute p-5 w-screen bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                      <div className="flex gap-10">
                        <ul className="font-thin space-y-3">
                          <h2 className="font-semibold text-xl">New In</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Casual
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportlife
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Lifetyle
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Dress
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            New In Bottom
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Clothing</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            Linen
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Top
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Vest
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blazers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bras
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jackets
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            T-Shirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Polo Shirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Hoodies & Sweatshirt
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jumpsuits
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Dresses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cardigan
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Blouses
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sportwears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Trousers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Jeans
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Skirts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Shorts
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Shoes</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Loafers
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sandals
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Sneakers
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">Accessories</h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Gloves
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Scarf
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Belts
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            UnderWears
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Socks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bows
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Caps & Hats
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Backpacks
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Bags
                          </li>
                        </ul>
                        <ul className="font-thin space-y-3 ">
                          <h2 className="font-semibold text-xl">
                            Shop by collections
                          </h2>
                          <li className="hover:underline hover:cursor-pointer">
                            All
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Life in a journey collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            361 adventure collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Princess Jenna x TEN 11
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Cottage core collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Rider collection
                          </li>
                          <li className="hover:underline hover:cursor-pointer">
                            Denim
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div className="flex  items-center sm:text-4xl   md:text-4xl lg:text-5xl xl:text-5xl font-semibold  ">
            <Link to="/">ZANDO</Link>
          </div>
          <div className="p-2 flex  gap-x-5">
            <div className="relative flex items-center hidden md:flex">
              <SearchOutlined className="absolute left-3" />
              <input
                className="p-3 border pl-9 border-black rounded-xl"
                placeholder="Search..." 
                onClick={() => setIsSearch(!isSearch)}
              />
            </div>

            <SearchOutlined className="text-xl md:hidden" onClick={()=>setIsSearch(true)} />
            <BellOutlined className="text-xl" />
            <HeartOutlined className="text-xl hidden  md:flex" />
            <MessageOutlined className="text-xl hidden md:flex" />
            <button className="font-semibold md:text-xl">
              <Link to="/login">LOGIN</Link>
            </button>
            <button className="font-semibold md:text-xl">
              <Link to="/register">REGISTER</Link>
            </button>
            <MenuOutlined
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden font-semibold text-xl bg-white p-2 shadow-md shadow-gray-400 rounded-xl h-10"
            />
          </div>
        </div>
        {/* Dropdown Menu - Overlay */}
        
        {isOpen && (
          <div
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex flex-col gap-6 font-semibold text-lg p-6 overflow-y-auto"
          style={{ Index: 1000 }} // Ensures it's above everything else
        >
          <div className="text-center mb-4">
            {/* <h1 className="font-semibold text-3xl">K-Prince Mall</h1> */}
          </div>
          <div className="text-right mb-4">
            <CloseCircleFilled
              className="text-2xl cursor-pointer text-white"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="space-y-4 text-right text-3xl text-white pt-20">
            <li>
              <Link to="/">WOMEN</Link>
            </li>
            <li>
              <a href="">MEN</a>
            </li>
            <li>
              <a href="">BOYS</a>
            </li>
            <li>
              <a href="">GIRLS</a>
            </li>
          </ul>
        </div>
        )}

        {isSearch && (
           <div
           className="fixed inset-0 bg-gray-900 bg-opacity-75 gap-6 font-semibold"
           style={{ Index: 1000 }} // Ensures it's above everything else
         >
           <div className="bg-white p-20 space-y-2">
            <div className="relative flex items-center">
            <Input placeholder="What are you searching for ?" className="md:text-3xl w-full p-3 border-none rounded-xl"/>
            <CloseCircleOutlined className="md:text-2xl cursor-pointer text-black absolute right-2" onClick={()=>setIsSearch(false)}/>
            <BiSearch className="md:text-2xl cursor-pointer text-black  absolute right-12 "/>
            </div>
            <hr className=" border border-gray-300 in set-0 z-50 "/>
           </div>
           
         </div>
        )

        }
      </nav>

      {/* Content Below the Navbar */}
      <div className="p-4 -mt-15 ">
        {" "}
        {/* Adjust the padding-top to match the navbar height */}
        <Outlet />
      </div>
      <div className="p-24 w-full h-screen gap-10 justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
        <div className="pt-10 items-center justify-center">
          <p className="font-semibold text-xl">K-PRINCE MALL</p>
          <img src={qr} className="w-32 items-center justify-normal" />
        </div>
        <div className=" pt-10">
          <p className="font-semibold text-xl">LOYALTY</p>
          <p className="flex items-center justify-normal gap-1">
            <BiHeartCircle />
            Membership & Benifits
          </p>
        </div>
        <div className=" pt-10">
          <p className="font-semibold text-xl">FOLLOW US</p>
          <p className="flex items-center justify-normal gap-1">
            <CiFacebook />
            Facebook
          </p>
          <p className="flex items-center justify-normal gap-1">
            <CiInstagram />
            Instagram
          </p>
          <p className="flex item-center justify-normal gap-1">
            <TikTokOutlined />
            Tik Tok
          </p>
          <p className="flex item-center justify-normal gap-1">
            <YoutubeFilled />
            YouTube
          </p>
        </div>
        <div className=" pt-10">
          <p className="font-semibold text-xl">CUSTOMER SERVICES</p>
          <p className="flex items-center justify-normal gap-1">
            <QuestionCircleFilled />
            Online exchange policy
          </p>
          <p className="flex items-center justify-normal gap-1">
            <CiInstagram />
            Privacy Policy
          </p>
          <p className="flex item-center justify-normal gap-1">
            <TikTokOutlined />
            FAQs & guides
          </p>
        </div>
        <div className=" pt-10">
          <p className="font-semibold text-xl">CONTACT US</p>
          <p className="flex items-center justify-normal gap-1">
            <MessageOutlined />
            info@zandokh.com
          </p>
          <p className="flex items-center justify-normal gap-1">
            <BiPhoneCall />
            (+855) 081 999 716
          </p>
          <p className="flex items-center justify-normal gap-1">
            <BiPhoneCall />
            (+855) 085 330 330
          </p>
        </div>
        <div className=" pt-10">
          <p className="font-semibold text-xl">WE ACCEPT</p>
          <div className="flex gap-1">
            <img src={aba} className="w-12" />
            <img src={cc} className="w-12" />
            <img src={visa} className="w-12" />
            <img src={ac} className="w-12" />
          </div>
          <div className="flex gap-2 pt-1.5">
            <img src={union} className="w-12" />
            <img src={jcb} className="w-12" />
            <img src={wing} className="w-12" />
            <img src={c} className="w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
