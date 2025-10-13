import { useState } from 'react'

import PageHeader from "../common/header/PageHeader"
import Branch from "./fragments/Branch"

import SocialLinks from "./fragments/SocialLinks"




function Contact() {

    const [branch, setBranch] = useState([])
    const [counter, setCounter] = useState(1)


    const handleBranch = () => {
        const newBranch = {
            id: Date.now(),
            branchName: `Branch ${counter}`
        }
        setBranch([...branch, newBranch])
        setCounter(counter + 1)
    }

    const handleOnDelete = (id) => {
        console.log("Deleted")
        setBranch(branch.filter(item => item.id !== id))
    }

    return (
        <div className="">
            <PageHeader
                title="Contact Us Page Editor"
                desc="Edit details of Contact us page for your website."
                addBtn="Publish"
            // handleAddButton={handleAddButton}
            />
            <div className="px-5 grid grid-cols-1 md:grid-cols-2  gap-5 [&>*]:h-80 [&>*]:overflow-y-auto">
                <Branch branchName="Head Office" />
                <SocialLinks />
                {branch.map((item) => (
                    <Branch key={item.id} branchName={item.branchName} showDelete={true} onDelete={() => handleOnDelete(item.id)} />

                ))
                }
                <div className="p-5  border border-gray-200  rounded-lg flex items-center justify-center">
                    <div className="py-1 px-3 border border-gray-200 rounded-lg">
                        <button onClick={handleBranch}>Add Branch</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact