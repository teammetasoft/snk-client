import { AiOutlinePlus } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Image, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddItemModal from '../../common/modal/AddItemModal';

// Mock Data
const JewelleryItems = [
  { id: 1, name: 'Ring' },
  { id: 2, name: 'Necklace' },
  { id: 3, name: 'Bracelet' },
  { id: 4, name: 'Earrings' }
];

const OccasionItems = [
  { id: 1, name: 'Wedding' },
  { id: 2, name: 'Party' },
  { id: 3, name: 'Casual' },
  { id: 4, name: 'Festival' }
];

const GoldImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23FFD700" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%23FFF" text-anchor="middle" dy=".3em"%3EGold%3C/text%3E%3C/svg%3E';

export default function ProductDetailsForm() {
    const [isJewelleryModalOpen, setIsJewelleryModalOpen] = useState(false);
    const [isOccasionModalOpen, setIsOccasionModalOpen] = useState(false);
    const [jewelleryItems, setJewelleryItems] = useState([]);
    const [occasionItems, setOccasionItems] = useState([]);
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        setJewelleryItems(JewelleryItems);
        setOccasionItems(OccasionItems);
    }, []);

    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                {/* Form Section */}
                <div className="w-full lg:w-2/3 space-y-4 p-4 md:p-5 rounded-lg border">
                    <h1 className='text-gray-800 text-xl font-semibold mb-4 md:mb-6'>Basic Information</h1>
                    
                    {/* SKU ID and Jewellery Name */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                SKU ID
                            </label>
                            <input
                                type="text"
                                placeholder="Enter SKU ID"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Jewellery Name
                            </label>
                            <input
                                type="text"
                                placeholder="Jewellery Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Jewellery Type */}
                    <div>
                        <label className="block text-gray-700 font-medium text-sm mb-2">
                            Jewellery Type
                        </label>
                        <div className='flex gap-2'>
                            <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>-- Select Jewellery Type --</option>
                                {jewelleryItems?.map((item) => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button 
                                className='flex items-center justify-center bg-blue-500 text-white w-10 h-10 rounded-lg hover:bg-blue-600 transition-all'
                                onClick={() => setIsJewelleryModalOpen(true)}
                            >
                                <AiOutlinePlus className='text-lg' />
                            </button>
                        </div>
                    </div>

                    {/* Occasion and Gender */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Occasion
                            </label>
                            <div className='flex gap-2'>
                                <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Enter Occasion</option>
                                    {occasionItems?.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                                <button 
                                    className='flex items-center justify-center bg-blue-500 text-white w-10 h-10 rounded-lg hover:bg-blue-600 transition-all'
                                    onClick={() => setIsOccasionModalOpen(true)}
                                >
                                    <AiOutlinePlus className='text-lg' />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Gender
                            </label>
                            <input
                                type="text"
                                placeholder="Enter gender"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 font-medium text-sm mb-2">
                            Description
                        </label>
                        <textarea
                            placeholder="Enter product description here..."
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
                        />
                        <div className="text-right text-sm text-gray-500 mt-1">0 / 100</div>
                    </div>

                    {/* Material Type and Purity/Carat */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Material Type
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Material Type"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Purity / Carat
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Purity / Carat"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Size and Weight */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Size
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Size"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Weight
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Weight"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Image Upload Section */}
                <div className="w-full lg:w-1/3 p-4 md:p-5 rounded-lg border space-y-4">
                    <h1 className='text-gray-800 text-xl font-semibold mb-4 md:mb-6'>Images & Media</h1>
                    
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleUploadChange}
                        maxCount={5}
                    >
                        {fileList.length >= 5 ? null : uploadButton}
                    </Upload>
                </div>
            </div>

            {/* Modals */}
            <AddItemModal
                isModalOpen={isJewelleryModalOpen}
                handleCancel={() => setIsJewelleryModalOpen(false)}
                handleOk={() => setIsJewelleryModalOpen(false)}
                title="Add Jewellery Type"
                items={jewelleryItems}
                setItems={setJewelleryItems}
            />

            <AddItemModal
                isModalOpen={isOccasionModalOpen}
                handleCancel={() => setIsOccasionModalOpen(false)}
                handleOk={() => setIsOccasionModalOpen(false)}
                title="Add Occasion"
                items={occasionItems}
                setItems={setOccasionItems}
            />
        </>
    );
}