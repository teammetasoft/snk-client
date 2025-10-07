import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password reset submitted:', { newPassword });
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-black mb-2">Set New Password</h1>
        <p className="text-sm text-lightGray mb-8">Must be at least 8 characters long</p>

        <div>
          <div className="mb-5">
            <label htmlFor="newPassword" className="block text-sm font-medium text-darkGray mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter password"
                className="px-4 py-2.5 pr-10 input-base "
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGray hover:text-darkGray"
              >
                {showNewPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-darkGray mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-type password"
                className=" px-4 py-2.5 pr-10 input-base "
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGray hover:text-darkGray"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
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
  );
}