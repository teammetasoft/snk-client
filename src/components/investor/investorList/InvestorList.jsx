// import {useState} from 'react'
import PageHeader from "../../common/header/PageHeader";
import { useNavigate } from 'react-router-dom'



function InvestorList() {
  const navigate = useNavigate();



  const handleAddButton = () => {
    navigate('/product-create')
  }
  return (
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
  )
}

export default InvestorList