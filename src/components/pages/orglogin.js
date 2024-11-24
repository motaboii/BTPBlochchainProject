import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginPage.css";
import MainNavbar from './MainNavbar'
import Footer from "./Footer";
export default function SignInPage() {
  const url = "https://btp-backend-bu0a.onrender.com/api/v1/auth/login";
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#Password").value;
      const { data } = await axios.post(url, { email, password });
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("scmName", data.user.name);
      localStorage.setItem("scmRole", data.user.role);
      navigate("/home2");
    } catch (error) {
      localStorage.removeItem("token");
      alert(error.response.data.msg);

      document.querySelector("#email").value = "";
    }
  };

  return (
    <>
   <MainNavbar/>

    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form>
        <p>
          <label>Username or email address</label>
          <br />
          <input id="email" type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input id="Password" type="password" name="password" required />
        </p>
        <p>
        <button onClick={(e) => login(e)} id="sub_btn" style={{ color: 'white' }}>

            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>

    <Footer/>
    </>
  );
}
