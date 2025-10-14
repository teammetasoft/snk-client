import { useState } from 'react'
import goldImage from "../../../../assets/gold.svg"

function PlanInvested() {
    const plans = [
        {
            id: 1,
            name: 'SMART SAVER PLAN',
            icon: '🪙',
            nextInstallment: '26-08-2025',
            installmentsPaid: 3,
            totalInstallments: 12,
            amount: '₹15,000',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Eterna Gold Plan',
            icon: '🪙',
            nextInstallment: '26-08-2025',
            installmentsPaid: 11,
            totalInstallments: 12,
            amount: '₹15,000',
            status: 'Active'
        },
         {
            id: 3,
            name: 'Eterna Gold Plan',
            icon: '🪙',
            nextInstallment: '26-08-2025',
            installmentsPaid: 11,
            totalInstallments: 12,
            amount: '₹15,000',
            status: 'Active'
        }
    
    ]

    return (
        <div className="bg-gray-50 rounded-lg shadow p-4 md:p-6">
            {/* Header */}
            <h2 className="text-xl font-semibold text-darkGray mb-6">Plans Invested</h2>

            {/* Plans List */}
            <div className="space-y-4 max-h-[320px] overflow-y-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="border border-gray-200 bg-white rounded-lg p-4 "
                    >
                        <div className="flex items-start  gap-4">
                            {/* Plan Icon */}
                            <div className="w-12 h-12 overflow-hidden  rounded-full flex items-center justify-center flex-shrink-0">
                               <img src={goldImage} className="h-full w-full object-cover"/>
                            </div>

                            {/* Plan Details */}
                            <div className="flex-1 ">
                                {/* Top Row: Name and Amount */}
                                <div className="flex items-start justify-between ">
                                    <h3 className="text-base font-semibold text-darkGray">
                                        {plan.name}
                                    </h3>
                                    <span className="text-base font-semibold text-darkGray">
                                        {plan.amount}
                                    </span>
                                </div>

                                {/* Next Installment */}
                                <p className="text-sm text-lightGray font-medium mb-3">
                                    Next installment: {plan.nextInstallment}
                                </p>

                                {/* Segmented Progress Bar */}
                                <div className="mb-2">
                                    <div className="flex gap-1">
                                        {Array.from({ length: plan.totalInstallments }).map((_, index) => (
                                            <div
                                                key={index}
                                                className={`flex-1 h-1 text-nowrap rounded-full ${index < plan.installmentsPaid
                                                        ? 'bg-green-400'
                                                        : 'bg-gray-200'
                                                    }`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Row: Installments and Status */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-lightGray">
                                        {plan.installmentsPaid}/{plan.totalInstallments} installments paid
                                    </span>
                                    <span className="text-sm text-lightGray">
                                        Status: <span className="text-green-600 font-medium">{plan.status}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlanInvested