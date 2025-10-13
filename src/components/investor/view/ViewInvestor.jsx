import { useState } from 'react'
import InvestorInfo from "./fragments/InvestorInfo"
import Nominee from "./fragments/Nominee"
import PlanInvested from "./fragments/PlanInvested"
import TransactionRecords from "./fragments/TransactionRecords"

import BreadcrumbsHeader from "../../common/header/BreadcrumbsHeader"


function ViewInvestor() {

    return (
        <div >
            <BreadcrumbsHeader
                title="Investor Details"
                desc="Complete overview of investor details and activities."
                btnName="Edit Investor"
                // handleAddButton={handleAddButton}
                parentLink="investor-list"
                parentName="Investor "
                childName="Investor Profile"
            />
            <div className="px-5 w-full flex flex-col md:flex-row gap-5 overflow-hidden">
                <div className="bg-blue-600 md:w-3/5">
                    < InvestorInfo />
                    < Nominee />
                    < PlanInvested />
                </div>
                <div className="bg-red-600  flex-1">
                    < TransactionRecords />
                </div>
            </div>



        </div>
    )
}

export default ViewInvestor