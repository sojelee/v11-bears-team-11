import React from 'react'
import Chat from '../Chat';
import User from '../User';

function Content () {
  return (
<div className="flex-1 bg-gray-900 flex overflow-y-hidden">
    
          <div className="bg-gray-800 text-white px-2 py-2 w-56 flex-none flex flex-col justify-between">
            <div className="overflow-y-auto">
             # Bears 11
            </div>
            <div className="flex">
              Bottom Sidebar
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="bg-gray-100 px-4 py-2 flex-1 flex flex-col justify-between">
              <div className="overflow-y-auto">
              
              <Chat name="Goldino" avatar="../imgs/img1.jpg" chattext="When did you join Chingu @jimdelock" time="Today 09:00 AM" />
              <Chat name="sojelee" avatar="../imgs/img0.jpg" chattext="what was you first mvp project" time="Today 10:00 AM"/>
              <Chat name="Ssey-duu" avatar="../imgs/img2.jpg" chattext="I like to work on front end side of the project" time="Today 10:25 AM"/>
              
      
            </div>
            <div className="bg-gray-300 h-12 flex items-center">
               <div className="w-12 px-2 py-2 border-r border-gray-100">Left</div>
               <div className="flex-1 px-4 py-2">
                 
               <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 block w-full appearance-none leading-normal" type="text" placeholder="Chat # Bears 11" />
              </div>
               <div className="px-2 py-2">Emojis</div>
            </div>
            </div>
            <div className="w-56 bg-gray-300 px-2 py-2 flex-none overflow-y-auto">
            <div className="px-2 py-2">Online-2</div>
               <User name="sojelee" avatar="../imgs/img1.jpg" />
               <User name="goldino" avatar="../imgs/img2.jpg" />
            </div>
          </div>
    
          </div>
)
}

export default Content;
