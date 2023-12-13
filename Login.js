import React from "react";
function Login(){
    return (
        <div className="App">
          <div className="login-container">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" required /><br />
              <input type="password" placeholder="Password" required /><br />
              <a href="#.com" className="link">Forget Password?</a>
              <button type="submit">Login</button>
            
              <p className="para"><span>New User?</span><span><a href="#.com" className="link2" >Sign Up</a></span></p>
            </form>
          </div>
        </div>
      );
}
export default Login;