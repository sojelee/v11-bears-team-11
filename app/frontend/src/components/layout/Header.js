import React, { Component } from "react";

export default function Header (){
 
  return (
    <div className="flex">
    <div className="w-56 bg-gray-800 border-b border-teal-500 flex items-center flex-shrink-0 text-white px-4"><span className="font-semibold text-xl tracking-tight">Chingu|Chat App</span></div>
    <div className="flex-1">
    <div className="flex items-center bg-gray-100 justify-between border-b border-teal-500">
    <div className="flex items-center flex-shrink-0 text-blue-800 mr-6 px-4">
      <span className="font-semibold text-xl tracking-tight"># General Chat</span>
    </div>
  <nav className="flex items-center justify-between flex-wrap p-6">
  <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-blue-800 hover:text-yellow-400 hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-yellow-400 mr-4">Sign In</a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-yellow-400 mr-4">Sign Up</a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-yellow-400 mr-4">Logout</a>
      </div>
    </div>
  </nav>
    </div>
    </div>
  </div>
    );
  
}
