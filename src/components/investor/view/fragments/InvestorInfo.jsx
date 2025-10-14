import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'

function InvestorInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEditClick = () => {
        setIsModalOpen(true)
    }
    

    return (
        <div className=" border  border-gray-200 rounded-lg bg-gray-50   p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-darkGray">Investor Information</h2>
                <button
                    onClick={handleEditClick}
                    className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                >
                    <AiOutlineEdit size={20} />
                    <span className="text-sm font-medium">Edit</span>
                </button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Investor ID */}
                <div>
                    <p className="text-sm text-lightGray font-medium mb-1">Investor ID</p>
                    <p className="text-base text-darkGray font-semibold">CUST-001</p>
                </div>

                {/* Investor Name */}
                <div>
                    <p className="text-sm text-lightGray font-medium mb-1">Investor Name</p>
                    <p className="text-base text-darkGray font-semibold">Stalin Jason Dsouza</p>
                </div>

                {/* Date of Birth */}
                <div>
                    <p className="text-sm text-lightGray font-medium mb-1">Date of Birth</p>
                    <p className="text-base text-darkGray font-semibold">24-03-2003</p>
                </div>

                {/* Status */}
                <div>
                    <p className="text-sm text-lightGray font-medium mb-1">Status</p>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                        Active
                    </span>
                </div>

                {/* Mobile */}
                <div>
                    <p className="text-sm text-lightGray font-medium mb-1">Mobile</p>
                    <p className="text-base text-darkGray font-semibold">7676078837</p>
                </div>

                {/* Email */}
                <div>
                    <p className="text-sm text-lightGray font-medium mb-1">Email</p>
                    <p className="text-base text-darkGray font-semibold">stalin@metasoftit.com</p>
                </div>
            </div>
        </div>
    )
}

export default InvestorInfo