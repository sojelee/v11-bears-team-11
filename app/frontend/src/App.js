import React from 'react'

function App () {
  return (
<div className="flex">
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
  
  <div className='flex-1 flex flex-col min-h-screen h-screen'>
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Chingu|Chat App</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About Chingu
          </a>
        </div>
        <div>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Sign In</a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Sign Up</a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Logout</a>
        </div>
      </div>
    </nav>
    </div>
         
    <div className="flex-1 bg-gray-900 flex overflow-y-hidden">
    
          <div className="bg-gray-800 text-white px-2 py-2 w-56 flex-none flex flex-col justify-between">
            <div className="overflow-y-auto">
              Hashtag SideBar, 
              
            </div>
            <div className="">
              Bottom Sidebar
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="bg-gray-100 px-4 py-2 flex-1 flex flex-col justify-between">
              <div className="overflow-y-auto">
              
              <div className="flex mt-4">
     
              <div>
                  <img src="../imgs/img1.jpg" className="h-12 w-12 rounded-full"/>
                </div>
                 <div className="flex flex-col ml-4">
                   <p className="font-bold">Goldino<span className="ml-4 font-normal text-gray-500 xsm">Today 08:00 AM</span></p>
                   <p className="text-gray-600">when did you joing chingu @jmmedlock</p>
                 </div>

              </div>

              <div className="flex mt-4">
     
                <div>
                  <img src="../imgs/img0.jpg" className="h-12 w-12 rounded-full" />
                </div>
                <div className="flex flex-col ml-4">
                   <p className="font-bold">gastro<span className="ml-4 font-normal text-gray-500 xsm">Today 45:00 PM</span></p>
                   <p className="text-gray-600">Welcome back @sojelee</p>
                 </div>

              </div>

              <div className="flex mt-4">
              <div>
                  <img src="../imgs/img1.jpg" className="h-12 w-12 rounded-full" />
                </div>
              <div className="flex flex-col ml-4">
              
                   <p className="font-bold">sojelee<span className="ml-4 font-normal text-gray-500 xsm">Today 45:00 PM</span></p>
                   <p className="text-gray-600">Hollow team</p>
                 </div>

              </div>

              
              
            </div>
            <div>
              Chat Input Always Bottom
            </div>
            </div>
            <div className="w-56 bg-gray-300 px-2 py-2 flex-none overflow-y-auto">
              User SideBar,
            </div>
          </div>
    
          </div>
   
  </div>
</div>
)
}

export default App
