import React from 'react'
import SearchBar from '../SearchBar'
import Profile from './Profile'
import { IoIosNotificationsOutline } from "react-icons/io";


function Navbar() {
  return (
    <div className='flex flex-row items-center justify-end gap-4 px-4 py-[21px] border-b border-gray-200'>
      <SearchBar />
      <div className='flex items-center justify-center w-10 h-10  cursor-pointer '>
        <IoIosNotificationsOutline className='w-6 h-6 text-lightGray' />
      </div>
      <Profile />
    </div>
  )
}

export default Navbar