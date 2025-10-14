// import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Breadcrumb } from 'antd'
import { Link } from "react-router-dom"
import { AiOutlineDelete } from "react-icons/ai";

const BreadcrumbsHeader = ({ title, desc, btnName, parentLink, parentName, childName }) => {
    return (
        <section className='breadcrumbHeader mb-8 border-b border-gray-200 p-5'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className="space-y-0.5">
                    <div>
                        <Breadcrumb
                            separator="/"
                            items={[
                                {
                                    title: <span className="text-sm text-lightGray">{parentName}</span>,
                                    href: parentLink
                                },
                                {
                                    title: <span className="text-sm text-darkGray ">{childName}</span>
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <h1 className='text-3xl text-black font-semibold mb-1'>{title}</h1>
                        <p className='text-sm text-lightGray'>{desc}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {btnName === "Delete Investor" ? (
                        <button className="flex items-center gap-2 bg-white border border-gray-200 text-red-500 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            <AiOutlineDelete className = "w-5 h-5"/>
                            <span className=" inline text-base"> {btnName}</span>
                        </button>
                    ) : (
                        <>
                            <button className="flex items-center gap-2 bg-white border border-gray-200 text-darkGray py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <span className=" inline text-base">Discard</span>
                            </button>

                            <button className="flex items-center gap-2 bg-white border border-gray-200 text-darkGray py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <span className="inline text-base">Save Draft</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-lg font-medium hover:opacity-90 transition-all sm:w-auto w-10 h-10 sm:h-auto">
                                <span className="inline text-base">{btnName}</span>
                            </button>
                        </>
                    )}
                </div>

            </div >
        </section >
    );
};

export default BreadcrumbsHeader;