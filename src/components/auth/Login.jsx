import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate(); // ✅ use the hook
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login submitted:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg  shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-black mb-2">Login</h1>
        <p className="text-sm text-lightGray mb-6">Fill in your login details to continue.</p>

        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id"
              className=" px-4 py-2.5 input-base"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-darkGray mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className=" px-4 py-2.5  pr-10 input-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGray hover:text-gray-700"
              >
                {showPassword ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-right mb-6">
            <button className="text-sm text-primary hover:underline" onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-2.5 rounded-md font-medium hover:opacity-90 "
          >
            Login
          </button>
        </div>

        <div className="mt-8 text-center w-fit mx-auto">
          <div className='mb-2 space-y-0.5 border-b border-gray-200 py-2'>
            <p className="text-sm text-lightGray ">Powered by</p>
            <p className="text-sm  text-black font-bold">SN Koilaje Jewellers</p>
          </div>

          <p className="text-xs text-copyrightGray mt-1">Version v1.2</p>
        </div>
      </div>
    </div>
  );
}