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
                btnName="Delete Investor"
                // handleAddButton={handleAddButton}
                // deleteBtn="Delete Investor"
                parentLink="investor-list"
                parentName="Investor "
                childName="Investor Profile"
            />
            <div className="px-5 w-full flex flex-col md:flex-row gap-5 overflow-hidden">
                <div className=" md:w-3/5 space-y-5">
                    < InvestorInfo />
                    < PlanInvested />
                    < Nominee />
                </div>
                <div className="  flex-1">
                    < TransactionRecords />
                </div>
            </div>



        </div>
    )
}

export default ViewInvestor