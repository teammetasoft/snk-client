import React from 'react'

function OtpValidate() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-black mb-2">Password Reset</h1>
        <p className="text-sm text-lightGray mb-6">
          We sent a code to
          <span className='font-semibold'> admin@gmail.com</span>
        </p>

        <div>
          <div className="mb-6 flex gap-3 justify-center">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-10 h-10 text-center input-base text-xl "
              />
            ))}
          </div>

          <button
            // onClick={handleSubmit}
            className="w-full bg-primary text-white py-2.5 rounded-md font-medium hover:opacity-90 mb-4"
          // onClick={() =>navigate('/otp-validate')}
          >
            Next
          </button>

          <div className="text-center">
            <p className="text-sm text-lightGray mb-6">
              Didn’t receive the email?
              <span className=' text-primary hover:underline font-medium cursor-pointer'> click here</span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center w-fit mx-auto">
          <div className='mb-2 space-y-0.5 border-b border-gray-200 py-2'>
            <p className="text-sm text-lightGray">Powered by</p>
            <p className="text-sm text-black font-bold">SN Kollaje Jewellers</p>
          </div>

          <p className="text-xs text-copyrightGray mt-1">Version V1.2</p>
        </div>
      </div>
    </div>
  )
}

export default OtpValidate