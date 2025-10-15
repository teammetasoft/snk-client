import React, { useState } from "react";
import BreadcrumbsHeader from "../../common/header/BreadcrumbsHeader"
import SchemeDetailsForm from "../shared/SchemeDetailsForm"
import LineChart from "../../common/LineChart"

function ViewScheme() {
    // Sample data for the Number of Investors chart
    const investorData = [
        { label: "Jan", value: 40000 },
        { label: "Feb", value: 50000 },
        { label: "Mar", value: 45000 },
        { label: "Apr", value: 60000 },
        { label: "May", value: 45000 },
        { label: "Jun", value: 55000 },
        { label: "Jul", value: 70000 },
        { label: "Aug", value: 45000 },
        { label: "Sep", value: 62000 },
        { label: "Oct", value: 50000 },
        { label: "Nov", value: 62000 }
    ];

    return (
        <div>
            <BreadcrumbsHeader
                title="Scheme"
                desc="An overview of the scheme details and performance."
                btnName="Edit Scheme"
                // handleAddButton={handleAddButton}
                // deleteBtn="Delete Investor"
                parentLink="scheme-list"
                parentName="Scheme "
                childName="Scheme Name"
            />
            <div className="px-5 space-y-4 ">
                <SchemeDetailsForm />
                <LineChart 
                    title="Number of Investors" 
                    data={investorData}
                    timeframe="Yearly"
                />
            </div>
        </div>
    );
}

export default ViewScheme;