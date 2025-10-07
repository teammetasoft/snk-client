import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Password reset requested for:', email);
    // Add your password reset logic here
    navigate('/otp-validate');
  };

  const handleBackToLogin = () => {
    console.log('Navigate to login');
    // Add your navigation logic here
    // navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-black mb-2">Forgot Password?</h1>
        <p className="text-sm text-lightGray mb-6">Enter you admin email id to continue.</p>

        <div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id"
              className="px-4 py-2.5 input-base"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-2.5 rounded-md font-medium hover:opacity-90 mb-4"
            // onClick={() =>navigate('/otp-validate')}
          >
            Next
          </button>

          <div className="text-center">
            <button
              className="text-sm text-primary hover:underline"
              onClick={handleBackToLogin}
            >
              Back to login
            </button>
          </div>
        </div>

        <div className="mt-8 text-center w-fit mx-auto">
          <div className='mb-2 space-y-0.5 border-b border-gray-200 py-2'>
            <p className="text-sm text-lightGray">Powered by</p>
            <p className="text-sm text-black font-bold">SN Kollaje Jewellers</p>
          </div>

          <p className="text-xs text-copy mt-1 text-copyrightGray">Version V1.2</p>
        </div>
      </div>
    </div>
  );
}