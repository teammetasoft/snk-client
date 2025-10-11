import { Input, Select } from 'antd';

const { TextArea } = Input;


import GoldImage from "../../../assets/gold.svg"

export default function SchemeDetailsForm() {
  return (
    <div className="p-4 md:p-5 rounded-lg border">
      <h2 className="text-darkGray text-xl font-semibold mb-4 md:mb-6">Scheme details</h2>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Image Upload Section */}
        <div className="w-full lg:w-1/3">
          <div className="rounded-lg overflow-hidden h-48 md:h-full flex items-center justify-center">
            <img src={GoldImage} alt="Gold" className="h-full object-cover" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/3 space-y-4">
          {/* Scheme Name and System Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-darkGray font-medium text-sm mb-2">
                Scheme Name
              </label>
              <Input
                placeholder="Enter scheme name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-darkGray font-medium text-sm mb-2">
                System Name (SYS - BILL S/W)
              </label>
              <Input
                placeholder="Jewellery Name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400"
              />
            </div>
          </div>

          {/* Installment Amount */}
          <div>
            <label className="block text-darkGray font-medium text-sm mb-2">
              Installment Amount (SYS - BILL S/W)
            </label>
            <Select
              placeholder="-- Select  Installment Amount (SYS - BILL S/W) --"
              className="w-full "
              style={{ width: '100%', fontSize:"14px" }}
              size="large"
            >
              <Select.Option value="SLVR 1000<">SLVR 1000</Select.Option>
              <Select.Option value="SLVR 2000<">SLVR 2000</Select.Option>
              <Select.Option value="SLVR 2500">SLVR 2500</Select.Option>

            </Select>
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-darkGray font-medium text-sm mb-2">
              Benefits
            </label>
            <TextArea
              placeholder="Benefits goes here..."
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg placeholder-gray-400 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}