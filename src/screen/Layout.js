import React, { useState } from "react";
import {
  BellOutlined,
  CloseCircleFilled,
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50  p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-semibold  text-3xl font-serif pr-8 xl:hidden">
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
              <li className="list-none font-semibol hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md hidden xl:block">
                <Link to="/login">LOGIN</Link>
              </li>
              <li className="list-none font-semibold  hover:cursor-pointer hover:bg-gray-200  p-2 rounded-md hidden xl:block">
                <a href="">REGISTER</a>
              </li>
              <MenuOutlined
                className="text-xl xl:hidden font-semibold  hover:cursor-pointer hover:bg-gray-200s p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>

        {/* Dropdown Menu - Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex flex-col gap-6 font-semibold text-lg p-6 overflow-y-auto"
            style={{ zIndex: 1000 }} // Ensures it's above everything else
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
            <ul className="space-y-4 text-center text-3xl text-white">
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
          </div>
        )}
      </nav>

      {/* Content Below the Navbar */}
      <div className="p-4 pt-20"> {/* Adjust the padding-top to match the navbar height */}
        <Outlet />
      </div>
    </div>
  );
}
