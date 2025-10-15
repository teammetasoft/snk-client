// import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Breadcrumb } from 'antd'
import { Link } from "react-router-dom"
import { AiOutlineDelete } from "react-icons/ai";

const BreadcrumbsHeader = ({ title, desc, btnName, parentLink, parentName, childName }) => {
    return (
        <section className='breadcrumbHeader mb-8 border-b border-gray-200 p-5'>
            <div className='flex flex-col md:justify-between md:flex-row gap-4'>
                {/* Breadcrumb and Title */}
                <div className="space-y-3">
                    <div>
                        <Breadcrumb
                            separator="/"
                            items={[
                                {
                                    title: <span className="text-xs sm:text-sm text-lightGray">{parentName}</span>,
                                    href: parentLink
                                },
                                {
                                    title: <span className="text-xs sm:text-sm text-darkGray">{childName}</span>
                                },
                            ]}
                        />
                    </div>

                    <div>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl text-black font-semibold mb-1'>{title}</h1>
                        <p className='text-xs sm:text-sm text-lightGray'>{desc}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    {btnName === "Delete Investor" ? (
                        <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-red-500 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            <AiOutlineDelete className="w-5 h-5" />
                            <span className="text-sm sm:text-base">{btnName}</span>
                        </button>
                    ) : (
                        <>
                            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-darkGray py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <span className="text-sm sm:text-base">Discard</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-darkGray py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <span className="text-sm sm:text-base">Save Draft</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-lg font-medium hover:opacity-90 transition-all">
                                <span className="text-sm sm:text-base">{btnName}</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbsHeader;