import React from 'react';
import { AiOutlinePlus, AiOutlineDownload } from 'react-icons/ai';

const PageHeader = ({ title, desc, addBtn }) => {
    return (
        <section className='pageHeader mb-8 border-b border-gray-200 p-5'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div>
                    <h1 className='text-3xl text-black font-semibold mb-1'>{title}</h1>
                    <p className='text-sm text-gray-500'>{desc}</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='flex items-center gap-2 bg-white border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors'>
                        <AiOutlineDownload className='text-lg' />
                        <span className='hidden sm:inline text-base'>Export to excel</span>
                    </button>
                    <button className='flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-lg font-medium hover:opacity-90 transition-all sm:w-auto w-10 h-10 sm:h-auto'>
                        <AiOutlinePlus className='text-lg' />
                        <span className='hidden sm:inline text-base'>{addBtn}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;