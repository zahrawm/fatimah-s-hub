import React, { useState } from 'react';
import authService  from '../server/api';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const LoginPage = () => {

  const [loginData, setLoginData] = useState<LoginFormData>({
    username: '',
    password: '',
    rememberMe: false
  });

  const [signUpData, setSignUpData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

 
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 
  const [loginLoading, setLoginLoading] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState('');

  // Login form handlers
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setLoginError(''); 
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
     
      const response = await authService.login({
        email: loginData.username,
        password: loginData.password
      });

      console.log('Login successful:', response);
      
      
      window.location.href = '/dashboard';
      
    } catch (error: any) {
      setLoginError(error.message || 'Login failed. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  
  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignUpData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setSignUpError('');
    setSignUpSuccess(''); 
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpLoading(true);
    setSignUpError('');
    setSignUpSuccess('');

    
    if (signUpData.password !== signUpData.confirmPassword) {
      setSignUpError('Passwords do not match');
      setSignUpLoading(false);
      return;
    }

    if (!signUpData.agreeToTerms) {
      setSignUpError('Please agree to the Privacy Policy');
      setSignUpLoading(false);
      return;
    }

    if (signUpData.password.length < 6) {
      setSignUpError('Password must be at least 6 characters long');
      setSignUpLoading(false);
      return;
    }

    try {
      const response = await authService.register({
        username: `${signUpData.firstName} ${signUpData.lastName}`,
        email: signUpData.email,
        password: signUpData.password
      });

      console.log('Registration successful:', response);
      setSignUpSuccess('Account created successfully! You can now login.');
      
      // Reset form
      setSignUpData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      });
      
    } catch (error: any) {
      setSignUpError(error.message || 'Registration failed. Please try again.');
    } finally {
      setSignUpLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Login Section */}
      <div className="flex-1 bg-[#001f3f] text-white p-6 md:p-10">
        <h1 className="text-3xl mb-6">Login Page</h1>
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          {loginError && (
            <div className="bg-red-500 text-white p-3 rounded-lg text-sm">
              {loginError}
            </div>
          )}
          
          <div className="flex items-center border-2 border-gray-800 rounded-full p-3 w-full md:w-80 bg-transparent">
            <span className="mr-3">👤</span>
            <input
              type="text"
              name="username"
              placeholder="Email or Username"
              required
              value={loginData.username}
              onChange={handleLoginChange}
              className="outline-none flex-1 bg-transparent text-white placeholder-gray-400"
            />
          </div>

          <div className="relative w-full md:w-80">
            <input
              type={showLoginPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={handleLoginChange}
              className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full bg-transparent text-white placeholder-gray-400"
            />
            <span 
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div className="flex items-center justify-between w-full md:w-80">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={loginData.rememberMe}
                onChange={handleLoginChange}
                className="form-checkbox" 
              />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forget Password
            </a>
          </div>

          <button
            type="submit"
            disabled={loginLoading}
            className="bg-red-400 hover:bg-red-500 disabled:bg-red-300 text-white rounded-full p-3 w-full md:w-80 transition-colors"
          >
            {loginLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>

      {/* Sign Up Section */}
      <div className="flex-1 bg-[#001f3f] text-white p-6 md:p-10">
        <h1 className="text-3xl mb-6">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSignUpSubmit}>
          {signUpError && (
            <div className="bg-red-500 text-white p-3 rounded-lg text-sm">
              {signUpError}
            </div>
          )}
          
          {signUpSuccess && (
            <div className="bg-green-500 text-white p-3 rounded-lg text-sm">
              {signUpSuccess}
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-80">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={signUpData.firstName}
              onChange={handleSignUpChange}
              className="border-2 border-gray-800 rounded-full p-3 flex-1 bg-transparent text-white placeholder-gray-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={signUpData.lastName}
              onChange={handleSignUpChange}
              className="border-2 border-gray-800 rounded-full p-3 flex-1 bg-transparent text-white placeholder-gray-400"
            />
          </div>

          <div className="w-full md:w-80">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={signUpData.email}
              onChange={handleSignUpChange}
              className="border-2 border-gray-800 rounded-full p-3 w-full bg-transparent text-white placeholder-gray-400"
            />
          </div>

          <div className="relative w-full md:w-80">
            <input
              type={showSignUpPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
              value={signUpData.password}
              onChange={handleSignUpChange}
              className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full bg-transparent text-white placeholder-gray-400"
            />
            <span 
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer"
              onClick={() => setShowSignUpPassword(!showSignUpPassword)}
            >
              {showSignUpPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={signUpData.confirmPassword}
              onChange={handleSignUpChange}
              className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full bg-transparent text-white placeholder-gray-400"
            />
            <span 
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div className="flex items-center w-full md:w-80">
            <input 
              type="checkbox" 
              name="agreeToTerms"
              checked={signUpData.agreeToTerms}
              onChange={handleSignUpChange}
              className="form-checkbox mr-2" 
            />
            <span className="text-sm">
              I Agree with <span className="text-red-500 cursor-pointer">Privacy and Policy</span>
            </span>
          </div>

          <button
            type="submit"
            disabled={signUpLoading}
            className="bg-red-400 hover:bg-red-500 disabled:bg-red-300 text-white rounded-full p-3 w-full md:w-80 transition-colors"
          >
            {signUpLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-red-500 cursor-pointer hover:underline">Login</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;