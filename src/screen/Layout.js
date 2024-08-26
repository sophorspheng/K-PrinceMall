import React, { useState } from "react";
import {
  BellOutlined,
  CloseCircleFilled,
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
import { BsBox2HeartFill, BsCardChecklist, BsSignRailroadFill } from "react-icons/bs";
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
import { BiBox, BiHeartCircle, BiNote, BiPackage, BiPhoneCall } from "react-icons/bi";
import { FaLetterboxd } from "react-icons/fa6";
import { TbCircleLetterS, TbSquareLetterSFilled } from "react-icons/tb";
import { GiErlenmeyer } from "react-icons/gi";
import { GrPackage } from "react-icons/gr";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [dropdownVisible3, setDropdownVisible3] = useState(false);

  return (
    <div className="p-8 w-full h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 bg-white left-0 w-full z-50  p-8">
      <div className="flex justify-around items-center  bg-white">
        <div className="hidden md:flex sm:flex">
          <ul className="flex gap-x-3 font-semibold text-xl hidden lg:flex">
            <li>WOMEN</li>
            <li>MEN</li>
            <li>BOYS</li>
            <li>GIRLS</li>
          </ul>
        </div>
        <div className="flex  items-center sm:text-4xl   md:text-4xl lg:text-5xl xl:text-5xl font-semibold  ">
        ZANDO
        </div>
        <div className="p-2 flex  gap-x-5">
          <div className="relative flex items-center hidden md:flex">
            <SearchOutlined className="absolute left-3" />
            <input
              className="p-3 border pl-9 border-black rounded-xl"
              placeholder="Search..."
            />
          </div>

          <SearchOutlined className="text-xl md:hidden" />
          <BellOutlined className="text-xl" />
          <HeartOutlined className="text-xl" />
          <MessageOutlined className="text-xl" />
          <button className="font-semibold md:text-xl">LOGIN</button>
          <button className="font-semibold md:text-xl">REGISTER</button>
          <MenuOutlined className="md:hidden font-semibold text-xl bg-white p-2 shadow-md shadow-gray-400 rounded-xl h-10"/>
        </div>
      </div>
      </nav>

      {/* Content Below the Navbar */}
      <div className="p-4 pt-20 "> {/* Adjust the padding-top to match the navbar height */}
        <Outlet />
      </div>
      </div>
    

  );
}
