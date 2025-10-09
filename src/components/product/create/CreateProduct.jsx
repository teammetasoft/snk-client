import BreadcrumbsHeader from "../../common/header/BreadcrumbsHeader"
import ProductDetailsForm from "../shared/ProductDetailsForm"



function CreateProduct() {
  return (
    <div>
      <BreadcrumbsHeader
        title="Add Product"
        desc="Fill in the details to add the jewellery product."
        btnName="Add Product"
        // handleAddButton={handleAddButton}
        parentLink="product-list"
        parentName="Product "
        childName="Add Product"
      />

      <div className="px-5">
        <ProductDetailsForm />
      </div>
    </div>
  )
}

export default CreateProduct