
import BreadcrumbsHeader from "../common/header/BreadcrumbsHeader"
import SchemeDetailsForm from "./SchemeDetailsForm"

function CreateSchemes() {
  return (
    <div>
      <BreadcrumbsHeader
        title="Add Scheme"
        desc="Fill in the details to add a new scheme."
        btnName="Add Scheme"
        // handleAddButton={handleAddButton}
        parentLink="scheme-list"
        parentName="Scheme"
        childName="Add Scheme"
      />

      <div className="px-5">
        <SchemeDetailsForm />
      </div>
    </div>
  )
}

export default CreateSchemes