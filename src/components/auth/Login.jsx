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
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Login</h1>
        <p className="text-sm text-gray-500 mb-6">Fill in your login details to continue.</p>
        
        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-right mb-6">
            <button className="text-sm text-primary hover:underline">
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

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 mb-1">Developed by</p>
          <p className="text-sm font-semibold text-gray-800">SN Koilaje Jewellers</p>
          <p className="text-xs text-gray-400 mt-1">Version v1.2</p>
        </div>
      </div>
    </div>
  );
}