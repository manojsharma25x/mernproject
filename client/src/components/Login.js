import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const userLogin = async (e)=>{
    // const {email ,password} = values;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
       email,password
      })
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("invalid credential");
      console.log("invalid credential");
    } else {
      window.alert("login true");
      console.log("login true");
      navigate("/about");
    }
  }

  return <div>

<section className="h-100 h-custom mt-5" style={{backgroundColor: "#8fc4b7"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" className="w-100" style={{borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem"}} alt="sign up" />
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Log In</h3>

            <form className="mx-md-2">

               

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" className="form-control" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" className="form-control" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                  </div>

               
                  <div className="fd-flex justify-content-start mb-5">
                  <label className="form-check-label" htmlFor="form2Example3">
                     Not registered? <Link to="/register">Register here</Link>
                    </label>
                    {/* <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    /> */}
                    
                  </div>

<div className="d-flex justify-content-start mx-0 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={userLogin}>Login</button>
                  </div>

                </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>;
};

export default Login;
