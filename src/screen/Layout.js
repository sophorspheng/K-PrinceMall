import React, { useState } from "react";
import {
  BellOutlined,
  CloseCircleFilled,
  HeartOutlined,
  LoginOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { BsSignRailroadFill } from "react-icons/bs";
import { LiaRegistered } from "react-icons/lia";
import qr from '../assets/images/qr.png'

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 bg-white left-0 w-full z-50  p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-semibold  text-lg text-center font-serif xl:hidden pb-5">
              K-PrinceMall
            </h1>
            
            <ul className="list-none flex hidden xl:flex space-x-10 font-semibold text-md">
              <li
                className="relative hover:bg-gray-200  p-2 rounded-md"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <Link to="/">WOMEN</Link>
                {/* Dropdown Menu */}
                {dropdownVisible && (
                  <ul className="absolute top-full left-0 bg-white text-black border border-gray-300 rounded-md mt-2 shadow-lg">
                    <li className="hover:bg-gray-200 p-2">
                      <Link to="/women/new-arrivals">New Arrivals</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <Link to="/women/sale">Sale</Link>
                    </li>
                    <li className="hover:bg-gray-200 p-2">
                      <Link to="/women/trending">Trending</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md">
                <a href="">MEN</a>
              </li>
              <li className="hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md">
                <a href="">BOYS</a>
              </li>
              <li className="hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md">
                <a href="">GIRLS</a>
              </li>
            </ul>
            
          </div>
          <h1 className="font-semibold text-3xl font-serif pr-20 hidden xl:flex">
              K-Prince Mall
            </h1>
          <div className="flex items-center gap-3 pr-36">
            <input
              className="h-10 border hidden md:flex rounded-full border-gray-700 pl-8 pr-3"
              placeholder="Search"
            />
            
            <div className="flex items-center gap-5">
              <SearchOutlined className="text-xl  md:hidden pl-3 hover:bg-gray-200 p-2 rounded-md hover:cursor-pointer" />
              <BellOutlined className="text-xl  hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md" />
              <HeartOutlined className="text-xl hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md" />
              <ShoppingOutlined className="text-xl hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md" />
              <li className="list-none font-semibold  hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md hidden xl:block">
                <a href="/login">LOGIN</a>
              </li>
              <li className="list-none font-semibold  hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md hidden xl:block">
                <a href="">REGISTER</a>
              </li>
              <MenuOutlined
                className="text-xl xl:hidden font-semibold  text-red-500  hover:cursor-pointer hover:bg-gray-200s p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
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
            <ul className="space-y-4 text-right text-3xl text-white">
              <li>
                <a href="">WOMEN</a>
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
            <li className="list-none absolute gap-28 p-4 bg-red-300 rounded-lg">
              
                <Link to="/login" className="flex gap-3  list-none text-3xl font-semibol hover:cursor-pointer text-white hover:bg-gray-200  p-2 rounded-md ">
                LOGIN<LoginOutlined/>
                </Link>
                <Link to="/" className="flex gap-3 text-3xl font-semibol hover:cursor-pointer text-white hover:bg-gray-200  p-2 rounded-md ">
                REGISTER<UsergroupAddOutlined/>
                </Link>
              </li>
              
          </div>
        )}
      </nav>

      {/* Content Below the Navbar */}
      <div className="p-4 pt-20"> {/* Adjust the padding-top to match the navbar height */}
        <Outlet />
      </div>
      <div className="flex w-full gap-10 h-screen pl-8">
      <div className="pt-10">
        <p className="font-semibold text-xl">K-Prince Mall App</p>
        <img src={qr} className="w-32 pt-5 pl-5"/>
      </div>
      <div className=" pt-10">
        <p className="font-semibold text-xl">K-Prince Mall App</p>
        <img src={qr} className="w-32 pt-5 pl-5"/>
      </div>
      </div>
    </div>
  );
}
