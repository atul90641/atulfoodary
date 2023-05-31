import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
export default function SignUp()
{
    return (
    <div>
    <Header />
    <div className="container">
        
    <div style={{ marginTop: "100px" }} >

    <form className="card form">
        <div className="community-header-title">Sign Up Page</div>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <label>
        <p>Re-Password</p>
        <input type="text" />
      </label>
      

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    </div>
    <Footer/>
    </div>
    )
}



