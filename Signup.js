import React from "react";
function Signup(){

    return (
        <div className="App">
          <div className="login-container">
            <h3>Signup</h3>
            <form>
              <input type="text" placeholder="Email" required /><br />
              <input type="text" placeholder="First name" required /><br />
              <input type="text" placeholder="Last name" required /><br />
              <input type="text" placeholder="Mobilenumber" required /><br />

              <input type="password" placeholder="Enter your Password" required /><br />
              <input type="password" placeholder="Confirm Password" required /><br />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      );
}

export default Signup;