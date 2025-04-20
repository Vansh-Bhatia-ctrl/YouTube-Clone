import {
    Bars3Icon,
    MagnifyingGlassIcon,
    BellIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/solid";
  
  export default function Navbar() {
    return (
      <nav className="bg-customblack-100 max-w-screen h-[46px] flex flex-row md:h-[56px] lg:h-[64px] justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <Bars3Icon className="h-6 w-6 text-gray-500 cursor-pointer md:h-6 lg:h-7" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/ytlogo.jpg"
              className="w-[60px] h-[45px] sm:w-[80px] sm:h-[50px] md:w-[100px] md:h-[55px] lg:w-[120px] lg:h-[60px] object-contain"
            />
          </div>
        </div>
  
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <input
              placeholder="Search"
              type="text"
              className="bg-transparent border border-gray-700 rounded-l-3xl text-gray-300 focus:border-customgray-100 focus:outline-none text-csm p-[5px] w-[150px] h-[25px] sm:w-[200px] sm:h-[30px] md:w-[400px] md:h-[40px] md:text-cmd md:p-2 lg:w-[500px] lg:h-[45px] lg:p-3"
            />
            <div className="bg-customgray-100 p-1 rounded-r-3xl h-[25px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] flex items-center justify-center">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-300 md:h-6 lg:h-7 cursor-pointer"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-customgray-100 text-white font-semibold text-csm h-[28px] w-[70px] rounded-full shadow-md sm:h-[30px] sm:w-[75px] md:h-[40px] md:w-[80px] md:text-xl md:p-2 lg:h-[45px] lg:w-[90px] lg:p-3 cursor-pointer">
              + Create
            </button>
          </div>
        </div>
  
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center">
            <BellIcon
              className="h-6 w-6 text-customwhite-100 md:h-6 md:w-6 lg:h-7 lg:w-7 cursor-pointer"
              aria-label="Notifications"
            />
          </div>
          <div className="flex items-center justify-center">
            <UserCircleIcon
              className="h-6 w-6 text-customwhite-100 md:h-6 md:w-6 lg:h-7 lg:w-7 cursor-pointer"
              aria-label="Profile"
            />
          </div>
        </div>
      </nav>
    );
  }