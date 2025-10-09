import React from 'react'
import PageHeader from "../../common/header/PageHeader";
import { useNavigate } from 'react-router-dom'



function ProductList() {
  const navigate = useNavigate();


  const handleAddButton = () => {
    navigate('/product-create')
  }
  return (
    <div>
      <PageHeader
        title="Jewellery Products"
        desc="All your jewellery products with pricing and availability."
        addBtn="Add Product"
        handleAddButton={handleAddButton}
      />
      <div className="px-5">
        tabs and table
      </div>

    </div>
  )
}

export default ProductList