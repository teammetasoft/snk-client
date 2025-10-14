import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import AddNomineeModal from "./AddNomineeModal"

function Nominee() {
    const [nomineeDetails, setNomineeDetails] = useState([
        {
            id: 1,
            fullName: 'Priya Sharma',
            dob: '18 Aug 1998 (22)',
            relation: 'Mother',
            gender: "Female",
            mobile: '7676078837',
            email: 'stalin@metasoftit.com',
            idProof: 'Aadhaar',
            idProofNumber: "5678 1234 9876"
        },
        {
            id: 2,
            fullName: 'Ramesh',
            dob: '15 Aug 1998 (22)',
            relation: 'Mother',
            gender: "Female",
            mobile: '7676078837',
            email: 'stalin@metasoftit.com',
            idProof: 'Aadhaar',
            idProofNumber: "5678 1234 9876"
        }
    ])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingNominee, setEditingNominee] = useState(null)

    const handleAddButton = () => {
        setEditingNominee(null)
        setIsModalOpen(true)
    }

    const handleEditNominee = (nominee) => {
        setEditingNominee(nominee)
        setIsModalOpen(true)
    }

    const handleAddNominee = (nomineeData) => {
        if (editingNominee) {
            // Update existing nominee
            setNomineeDetails(nomineeDetails.map(n =>
                n.id === editingNominee.id ? { ...nomineeData, id: n.id } : n
            ))
        } else {
            // Add new nominee
            const newNominee = {
                ...nomineeData,
                id: Date.now()
            }
            setNomineeDetails([...nomineeDetails, newNominee])
        }
        setIsModalOpen(false)
    }

    return (
        <>
            <div className="bg-gray-50 rounded-lg shadow p-6 mt-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-darkGray">Nominee Details</h2>
                </div>

                {/* Nominees List */}
                <div className="space-y-6">
                    {nomineeDetails && nomineeDetails.length > 0 && (
                        nomineeDetails.map((nominee, index) => (
                            <div key={nominee.id} className=" bg-white  p-4 rounded-lg border border-gray-200 ">
                                {/* Nominee Header */}
                                <div className="flex items-center justify-between mb-4 border-b border-gray-200 md:py-4">
                                    <h3 className="text-base font-semibold text-darkGray">
                                        Nominee {index + 1}
                                    </h3>
                                    <button
                                        onClick={() => handleEditNominee(nominee)}
                                        className="flex items-center gap-1 text-darkGray font-semibold hover:text-gray-600 transition-colors"
                                    >
                                        <AiOutlineEdit size={16} />
                                        <span className="text-sm ">Edit</span>
                                    </button>
                                </div>

                                {/* Nominee Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">Full Name</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.fullName}</p>
                                    </div>

                                    {/* Date of Birth / Age */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">Date of Birth / Age</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.dob}</p>
                                    </div>

                                    {/* Relationship with Customer */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">Relationship with Customer</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.relation}</p>
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">Gender</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.gender}</p>
                                    </div>

                                    {/* Mobile */}
                                    <div>
                                        <p className="text-sm text-lightGray  font-medium mb-1">Mobile</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.mobile}</p>
                                    </div>

                                    {/* Email ID */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">Email ID</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.email}</p>
                                    </div>

                                    {/* ID Proof */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">ID Proof</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.idProof}</p>
                                    </div>

                                    {/* ID Proof Number */}
                                    <div>
                                        <p className="text-sm text-lightGray font-medium mb-1">ID Proof Number</p>
                                        <p className="text-base text-darkGray font-semibold">{nominee.idProofNumber}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Add Nominee Button - Always shown */}
                <button
                    className="flex items-center justify-center gap-2 bg-blue-600 w-full text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all mt-6"
                    onClick={handleAddButton}
                >
                    Add Nominee
                </button>
            </div>

            <AddNomineeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddNominee}
                nominee={editingNominee}
            />
        </>
    )
}

export default Nominee