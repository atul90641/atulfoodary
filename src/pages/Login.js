import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
export default function Login()
{
    return (
    <div>
    <Header />
    <div className="container">
        
    <div style={{ marginTop: "100px" }} >
   

    <form className="card form">
    <div className="community-header-title">Login Page</div>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
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



