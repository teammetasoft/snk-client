import React, { useState } from 'react';
// import { ChevronDown, LogOut } from 'lucide-react';
import { CiLogout } from "react-icons/ci";
import ProfileImage from '../../../assets/profile-image.png';

import { AiFillCaretDown  } from "react-icons/ai";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        console.log('Logging out...');
        // Add your logout logic here
    };

    return (
        <div className="relative inline-block">
            {/* Profile Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4  bg-white rounded-lg transition-colors"
            >
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center overflow-hidden">
                    <img src={ProfileImage}  className="h-full w-full" alt="profile-image" />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-start">
                    <span className="text-[10px] font-medium text-lightGray tracking-wide uppercase">
                        Admin
                    </span>
                    <span className="text-sm font-semibold text-darkGray">
                        Stalin Dsouza
                    </span>
                </div>
                
                {/* Dropdown Icon */}
                <AiFillCaretDown 
                    className={`w-5 h-5 text-darkGray transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center text-red-600 gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                        <CiLogout className="w-5 h-5 " />
                        <span className="text-sm font-medium">
                            Logout
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;