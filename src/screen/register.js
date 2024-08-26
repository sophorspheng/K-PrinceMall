import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { PiPasswordFill } from "react-icons/pi";
import { SiComicfury } from "react-icons/si";
import { TbPasswordUser } from "react-icons/tb";

export default function register() {
  return (
    <div className="flex items-center justify-center w-full h-auto p-20">
      <div className="bg-white shadow-xl shadow-slate-600  p-10 rounded-xl  gap-12">
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
    </div>
  );
}
