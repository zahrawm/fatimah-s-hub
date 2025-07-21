const LoginPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#001f3f', color: 'white', padding: '2rem' }}>
        <h1 className="login-page-title text-3xl mb-4 "> login Page</h1>
       
        <div className="login-form">
            <form>
                <div className="form-group mb-4">
  <div className="flex items-center border-2 border-gray-800 rounded-full p-3 w-80">
    <span className="mr-3">👤</span>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Username"
      required
      className="outline-none flex-1 bg-transparent"
    />
  </div>
</div>
  <div className="relative w-80 mb-4">
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Password"
    required
    className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full"
  />
  <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer">
    Show
  </span>
</div>

                <div className="flex items-center justify-between w-80 mb-4">
                 <label className="flex items-center space-x-2">
             <input type="checkbox" className="form-checkbox" />
              <span className="text-sm">Remember me</span>
                   </label>

  <a href="#" className="text-sm text-blue-500 hover:underline">
    Forget Password
  </a>
</div>
 
                
                <button type="submit" className="bg-red-400 text-white rounded-full p-3 w-80">Login</button>
            </form>
        </div>
      </div>
      <div style={{ flex: 1, backgroundColor: '#001f3f', color: 'white', padding: '2rem' }}>
        <h1 className="signup-page-title text-3xl mb-4">SignUp</h1>
       <div className="login-form">
            <form>
                <div className="form-group mb-4  space-x-4" >

                <input type="text"  id="username" name="username" 
                 placeholder="Username" required className="border-2 border-gray-800 rounded-full p-3 w-50  p -5" />
                 <input type="text"  id="username" name="username" 
                 placeholder="lastname" required className="border-2 border-gray-800 rounded-full p-3 w-50" />
                </div>
                <div className="relative w-80 mb-4">
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Password"
    required
    className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full"
  />
  <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer">
    Show
  </span>
</div>

<div className="relative w-80 mb-4">
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Confirm Password"
    required
    className="border-2 border-gray-800 rounded-full p-3 pr-20 w-full"
  />
  <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 cursor-pointer">
    Show
  </span>
</div>
                <div className="flex items-center justify-between w-80 mb-4">
                 <label className="flex items-center space-x-2">
             <input type="checkbox" className="form-checkbox" />
            <span className="text-sm">
  I Agree with <span className="text-red-500">privacy and policy</span>
</span>

                   </label>
  </div>
                <button type="submit" className="bg-red-400 text-white rounded-full p-3 w-80 mb-10">Sign Up</button>
            </form>
        </div >
        <h5> Already having an account? <span className="text-red-500">Sign Up</span> </h5>
      </div>
    </div>
  );
};

export default LoginPage;
