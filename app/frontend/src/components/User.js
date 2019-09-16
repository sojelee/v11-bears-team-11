import React from 'react';

export default function User ( { name , avatar}){
    return(
        <div className="flex mt-2">
        <div className="relative">
              <img src={avatar} className="h-10 w-10 rounded-full" />
              <div className="absolute h-4 w-4 bg-green-500 rounded-full m-6 top-0"></div>
            </div>
          <div className="flex flex-col ml-2">
             <p className="font-bold mt-1">{name}</p>
          </div>

          </div>
    )
}