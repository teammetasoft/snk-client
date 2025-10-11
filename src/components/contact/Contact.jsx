import { useState } from 'react'

import PageHeader from "../common/header/PageHeader"
import Branch from "./fragments/Branch"



function Contact() {
    return (
        <div className="">
            <PageHeader
                title="Contact Us Page Editor"
                desc="Edit details of Contact us page for your website."
                addBtn="Publish"
            // handleAddButton={handleAddButton}
            />
            <div className="px-5 grid grid-cols-2 gap-5">
                <Branch/>
                <Branch/>
                <Branch/>


            </div>
        </div>
    )
}

export default Contact