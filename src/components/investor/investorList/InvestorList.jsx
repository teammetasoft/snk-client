import { useState } from 'react'
import PageHeader from "../../common/header/PageHeader";
import { useNavigate } from 'react-router-dom'
import InvestorFromModal from "../shared/InvestorFormModal"



function InvestorList() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    investorName: '',
    mobileNumber: '',
    email: '',
    password: '',
    dateOfBirth: ''
  });

  // Sample data - replace with your actual data from API/state
  const investors = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' }
  ];

  const schemes = [
    { id: 1, name: 'Scheme A' },
    { id: 2, name: 'Scheme B' },
    { id: 3, name: 'Scheme C' }
  ];

  const paymentModes = [
    { id: 1, name: 'In-store Cash' },
    { id: 2, name: 'In-store UPI' },
    // { id: 3, name: 'Bank Transfer' },
    // { id: 4, name: 'Card' }
  ];

  const handleAddButton = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form data when closing
    setFormData({
      investorName: '',
      mobileNumber: '',
      email: '',
      password: '',
      dob: ''
    });
  };

  const handleSubmit = (data) => {
    console.log('Form submitted with data:', data);
    // Add your API call or state update logic here

    // Close modal after submission
    setIsModalOpen(false);

    // Reset form data
    setFormData({
      investorName: '',
      mobileNumber: '',
      email: '',
      password: '',
      dob: ''
    });
  };




  // const handleAddButton = () => {
  //   navigate('/product-create')
  // }
  return (
    <>
      <div>
        <PageHeader
          title="Investor Management"
          desc="Track investor profiles, investments, and payment history at a glance."
          addBtn="Add Investor"
          handleAddButton={handleAddButton}
        />

        <div className="px-5">
          tabs and table
        </div>

      </div>
      <InvestorFromModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        title="Add Transaction"
        investors={investors}
        schemes={schemes}
        paymentModes={paymentModes}
        formData={formData}
        setFormData={setFormData}
      />
    </>

  )
}

export default InvestorList