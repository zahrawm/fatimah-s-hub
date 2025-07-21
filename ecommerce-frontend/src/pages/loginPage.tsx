const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <div className="flex-1 bg-[#001f3f] text-white p-6 md:p-10">
        <h1 className="text-3xl mb-6">Login Page</h1>
        <form className="space-y-4">
          <div className="flex items-center border-2 border-gray-800 rounded-full p-3 w-full md:w-80">
            <span className="mr-3">👤</span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="outline-none flex-1 bg-transparent"
            />
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full"
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer">
              Show
            </span>
          </div>

          <div className="flex items-center justify-between w-full md:w-80">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forget Password
            </a>
          </div>

          <button
            type="submit"
            className="bg-red-400 text-white rounded-full p-3 w-full md:w-80"
          >
            Login
          </button>
        </form>
      </div>


      <div className="flex-1 bg-[#001f3f] text-white p-6 md:p-10">
        <h1 className="text-3xl mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-80">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="border-2 border-gray-800 rounded-full p-3 flex-1"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="border-2 border-gray-800 rounded-full p-3 flex-1"
            />
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full"
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer">
              Show
            </span>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full"
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer">
              Show
            </span>
          </div>

          <div className="flex items-center w-full md:w-80">
            <input type="checkbox" className="form-checkbox mr-2" />
            <span className="text-sm">
              I Agree with <span className="text-red-500">Privacy and Policy</span>
            </span>
          </div>

          <button
            type="submit"
            className="bg-red-400 text-white rounded-full p-3 w-full md:w-80"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-red-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
