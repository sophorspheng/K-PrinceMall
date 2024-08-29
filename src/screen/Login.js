import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Mention, Form, Button } from 'antd';

export default function Login() {
  
  return (
      <div className="flex items-center justify-center w-full h-100 p-10">
        <div className="bg-white shadow-xl space-y-3 shadow-slate-600  p-10 rounded-xl  gap-12">
          <div className="py-4">
          <UserOutlined className="items-center justify-center text-center flex text-4xl"/>
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          </div>
          <div className="relative flex items-center">
            <MailOutlined className="absolute left-3"/>
            <input className="pl-9 rounded-lg border border-black w-80 p-3 " placeholder="Email or Phone number"/>
          </div>
          <div className="relative flex items-center">
            <LockOutlined className="absolute left-3"/>
            <input className="pl-9 rounded-lg border border-black w-80 p-3 " placeholder="Password"/>
          </div>
         <div className=" items-center justify-center text-right space-y-3">
         <button className="text-xl font-semibold bg-blue-600 p-3 rounded-lg w-full text-white hover:cursor-pointer hover:text-pink-500">Login</button>
         <button className="hover:cursor-pointer hover:text-gray-400">Forgot password?</button>
         </div>
          
        </div>
      </div>
  );
}
