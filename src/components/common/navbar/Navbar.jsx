import React from 'react'
import SearchBar from '../SearchBar'
import Profile from './Profile'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaBars } from 'react-icons/fa';


function Navbar({ isSidebarOpen, setIsSidebarOpen, mobileOpen}) {

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='flex flex-row items-center justify-between gap-4 px-4 py-[21px] border-b border-gray-200'>
      <div className="flex items-center">
        { mobileOpen && (
          <button
            onClick={handleMenuToggle}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
            aria-label="Toggle menu"
          >
            <FaBars size={20} className="text-gray-700" />
          </button>
        )}
      </div>
      <div className="flex items-center">
        <SearchBar />
        <div className='flex items-center justify-center w-10 h-10  cursor-pointer '>
          <IoIosNotificationsOutline className='w-6 h-6 text-lightGray' />
        </div>
        <Profile />
      </div>
    </div>
  )
}

export default Navbar