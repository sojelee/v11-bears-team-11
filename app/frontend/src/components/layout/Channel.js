import React from 'react';

export default function Channel (){
    return(
        <div className="bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2">

    <div className="overflow-y-auto text-white">
      <ul>
        <li><a className="mt-3">Chat</a></li>
        <li className="mt-3"></li>
        <li><a className="">Bears-11</a></li>
        <li className="mt-3"></li>
        <li><a className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
        <img src="../icons8-plus-math-30.png" />          
          </a></li>
        <li className="mt-3"></li>
        <li><a className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
        <img src="../icons8-search-30.png" />
         </a></li>
      </ul>
       
    </div>
  </div>
    );
}