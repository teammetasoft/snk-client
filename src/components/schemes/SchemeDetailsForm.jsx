
import GoldImage from '../../assets/gold.svg';


export default function SchemeDetailsForm() {
  return (
    <div className="p-4 md:p-5 rounded-lg border  ">
      <h2 className="text-darkGray text-xl  font-semibold mb-4 md:mb-6">Scheme details</h2>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Image Upload Section */}
        <div className="w-full lg:w-1/3">
          <div className=" rounded-lg overflow-hidden h-48 md:h-full flex items-center justify-center">
            <img src={GoldImage} alt="Gold" className="h-full object-cover" />

            {/* <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg> */}
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
              <input
                type="text"
                placeholder="Enter scheme name"
                className="input-base px-4 py-2  placeholder-gray-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-darkGray font-medium text-sm mb-2">
                System Name (SYS - BILL S/W)
              </label>
              <input
                type="text"
                placeholder="Jewellery Name"
                className="input-base px-4 py-2  placeholder-gray-400"
              />
            </div>
          </div>

          {/* Installment Amount */}
          <div>
            <label className="block text-darkGray font-medium text-sm mb-2">
              Installment Amount (SYS - BILL S/W)
            </label>
            <select className="input-base px-4 py-2 ">
              <option>-- Select Jewellery Type --</option>
              <option>Ring</option>
              <option>Neklace</option>

            </select>
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-darkGray font-medium text-sm mb-2">
              Benefits
            </label>
            <textarea
              placeholder="Benefits goes here..."
              rows={4}
              className="input-base px-4 py-2  placeholder-gray-400 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}