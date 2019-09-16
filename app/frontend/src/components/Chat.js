import React from 'react';

export default function Chat ( { name,avatar, chattext,time }){
    return(
        <div className="flex mt-4 border-b py-4 border-green-300">
                <div>
                  <img src={avatar} className="h-12 w-12 rounded-full"/>
                </div>
                 <div className="flex flex-col ml-4">
                   <p className="font-bold">{name}<span className="ml-4 font-normal text-gray-500 xsm">{time}</span></p>
                   <p className="text-gray-600">{chattext}</p>
                 </div>

              </div>
    )
}