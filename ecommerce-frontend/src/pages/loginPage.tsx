const LoginPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: '#001f3f', color: 'white', padding: '2rem' }}>
        <h1 className="login-page-title text-3xl "> login Page</h1>
       
        <div className="login-form">
            <form>
                <div className="form-group mb-4" >
                <input type="text"  id="username" name="username" 
                 placeholder="Username" required className="border-2 border-gray-800 rounded-full p-3 w-80" />
                </div>
                <div className="form-group mb-4">

                <input type="password" id="password" name="password" placeholder="Password" 
                required className="border-2 border-gray-800 rounded-full p-3 w-80" />
                </div>
                <button type="submit" className="bg-red-400 text-white rounded-full p-3 w-80">Login</button>
            </form>
        </div>
      </div>
      <div style={{ flex: 1, backgroundColor: '#001f3f', color: 'white', padding: '2rem' }}>
        <h1 className="signup-page-title text-3xl">SignUp</h1>
         <div className="login-form">
            <form>
                <div className="form-group mb-4" >
                <input type="text"  id="username" name="username" 
                 placeholder="Username" required className="border-2 border-gray-800 rounded-full p-3 w-80" />
                </div>
                <div className="form-group mb-4">

                <input type="password" id="password" name="password" placeholder="Password" 
                required className="border-2 border-gray-800 rounded-full p-3 w-80" />
                </div>
                <button type="submit" className="bg-red-400 text-white rounded-full p-3 w-80">Sign Up</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
