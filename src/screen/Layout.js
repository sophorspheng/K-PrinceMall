import React, { useState, useEffect,useRef } from "react";
import Draggable from 'react-draggable';

import {
  BellOutlined,
  CloseCircleFilled,
  CloseCircleOutlined,
  FacebookFilled,
  FacebookOutlined,
  HeartFilled,
  HeartOutlined,
  LockOutlined,
  LoginOutlined,
  MailOutlined,
  MenuOutlined,
  MessageFilled,
  MessageOutlined,
  PhoneFilled,
  QuestionCircleFilled,
  SearchOutlined,
  ShoppingOutlined,
  TikTokOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  YoutubeFilled,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
import { LoadingOutlined } from "@ant-design/icons";
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
import {
  Alert,
  Input,
  Spin,
  Flex,
  Switch,
  Badge,
  Avatar,
  Modal,
  Button,
  message,
} from "antd";
import { RxExitFullScreen } from "react-icons/rx";
import Search from "antd/es/input/Search";
import axios from "axios";

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [dropdownVisible3, setDropdownVisible3] = useState(false);
  const [loading, setLoading] = useState(false);  
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModal1, setVisibleModal1] = useState(false);

///


const navigate = useNavigate()
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email, password) => {
    if (!email || !password) {
      message.error("Email and password are required.");
      return;
    }

    const params = {
      email: email.trim(),  // Trim any extra spaces
      password: password.trim(),  // Trim any extra spaces
    };

    axios.post("http://localhost:3001/api/auth/login", params)
      .then((response) => {
        const { data } = response;
        console.log(data.token)
        if (data.token && data.role && data.id) {
          localStorage.setItem("isLoggedIn", "1");
          localStorage.setItem("token", data.token);
          localStorage.setItem("userRole", data.role);
          localStorage.setItem("userId", data.id);
         
          window.location.href = "/dashboard";
          
        } else {
          message.warning(data.message || 'Login failed');
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
        message.error(error.response?.data?.message || "Login failed due to a network error.");
      });
  };

///


  const closeLogin = ()=>{
    setVisibleModal(false)
  }
  const closeRegister = ()=>{
    setVisibleModal1(false)
  }

  const showRegister = () => {
    setVisibleModal1(true)
 
  };
  const showLogin = () => {
setVisibleModal(true)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);
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
                <Link to="/display">WOMEN</Link>
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
                <Link to="/dashboard">BOYS</Link>
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
          <div className="flex  items-center sm:text-4xl   md:text-4xl lg:text-5xl xl:text-5xl font-semibold  font-KhmerOS ">
            <Link to="/">Phsar Phnom </Link>
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

            <SearchOutlined
              className="text-xl md:hidden"
              onClick={() => setIsSearch(true)}
            />
            <div className="relative flex justify-center">
              <Badge count={5} size="default" className="left-7"></Badge>
              <BellOutlined className="text-xl" />
            </div>
            <HeartOutlined className="text-xl hidden  md:flex" />
            <MessageOutlined className="text-xl hidden md:flex" />
            <button className="font-semibold md:text-xl">
              <Link onClick={showLogin}>LOGIN</Link>
            </button>
            <button className="font-semibold md:text-xl" onClick={showRegister}>
            REGISTER
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
              <Spin
                className="items-center justify-center flex z-50"
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 48,
                    }}
                    spin
                  />
                }
                spinning={loading} // Use 'spinning' instead of 'loading'
              >
                <div className="relative flex items-center">
                  <Input    
                    placeholder="What are you searching for ?"
                    className="md:text-3xl w-full p-3 border-white rounded-xl"
                  />
                  <CloseCircleOutlined
                    className="md:text-2xl cursor-pointer text-black absolute right-2"
                    onClick={() => setIsSearch(false)}
                  />
                  <BiSearch className="md:text-2xl cursor-pointer text-black  absolute right-12 " />
                </div>

                <hr className=" border border-gray-300 in set-0 z-50 " />
              </Spin>
            </div>
          </div>
        )}
      </nav>

      {/* Content Below the Navbar */}
      <div className="p-4 -mt-15 ">
        {" "}
        {/* Adjust the padding-top to match the navbar height */}
        {/* <Outlet /> */}
        {props.children}
      </div>
      <div className="p-24 w-full h-screen gap-10 justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
        <div className="pt-10 items-center justify-center">
          <p className="font-semibold text-xl">Phsar Phnom</p>
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
          <a href="https://github.com/sophorspheng" className="flex items-center justify-normal gap-1">

            <CiFacebook />
            Facebook

          </a>
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
            info@phsarphnom.com
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
      {/* ModalPOPUP */}
      <Modal
      className="flex items-center justify-center w-full h-100"
      open={visibleModal}
      onCancel={closeLogin}
      footer={null}
      maskClosable={false}
    >
      <div className="bg-white space-y-3 gap-12">
        <div className="py-4">
          <UserOutlined className="items-center justify-center text-center flex text-4xl"/>
          <h1 className="text-3xl font-semibold text-center">Login</h1>
        </div>
        <div className="relative flex items-center">
          <MailOutlined className="absolute left-3"/>
          <input 
            className="pl-9 rounded-lg border border-black w-80 p-3" 
            placeholder="Email or Phone number"
            // onChange={(event) => setEmail(event.target.value)}
            value={email}
        onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative flex items-center">
          <LockOutlined className="absolute left-3"/>
          <input 
            className="pl-9 rounded-lg border border-black w-80 p-3" 
            placeholder="Password"
            type="password"
            // onChange={(event) => setPassword(event.target.value)}
            value={password}
        onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <div className="items-center justify-center text-right space-y-3">
          <button 
            className="text-xl font-semibold bg-blue-600 p-3 rounded-lg w-full text-white hover:cursor-pointer hover:text-pink-500"
            onClick={() => handleLogin(email, password)}
          >
            Login
          </button>
          <button className="hover:cursor-pointer hover:text-gray-400">Forgot password?</button>
        </div>
      </div>
    </Modal>

        {/* ModalRegister */}
       
        <Modal open ={visibleModal1}
       onCancel={closeRegister}
       footer={null}
      //  maskClosable={false}
      className="flex items-center justify-center"
      
       >
      <div className="rounded-xl  gap-12">
        <div className="relative text-center items-center justify-center">
        <UserOutlined className="text-5xl "/>
        <h2 className="text-center font-semibold text-2xl ">Register Form</h2>
        </div>
       
        <div className="flex relative items-center pt-8">
          <UserOutlined className="absolute left-2 "/>
          <input placeholder="Fullname" className="border border-black rounded-lg p-3 w-80 pl-7"/>
        </div>
        <div className="flex relative items-center pt-3">
          <MailOutlined className="absolute left-2 "/>
          <input placeholder="Email or Phone number" className="border border-black rounded-lg p-3 w-80 pl-7"/>
        </div>
        <div className="flex relative items-center pt-3">
          <LockOutlined className="absolute left-2 "/>
          <input type="password" placeholder="Password" className="border border-black rounded-lg p-3 w-80 pl-7"/>
        </div>
        <div className="flex relative items-center pt-3">
          <LockOutlined className="absolute left-2 "/>
          <input type="password" placeholder="Comfirm password" className="border border-black rounded-lg p-3 w-80 pl-7"/>
        </div>
        <div className="text-center bg-blue-800 rounded-md p-3 mt-3 w-80">
          <button className="items-center hover:cursor-pointer hover:text-blue-400  font-semibold justify-center text-white">
            Create new account
          </button>
        </div>
        <div className="flex items-center justify-center pt-4">
        <button className="hover:cursor-pointer hover:text-blue-400">Already have account?</button>
        </div>
      </div>

       </Modal>

    </div>
  );
}
