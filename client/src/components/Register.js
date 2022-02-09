import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  
  const navigate = useNavigate();

  const [values, setValues] = useState({ name: "", email: "", phone: "", work: "", password: "", confirmpassword: "" });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });

  }
  const postData = async (e) => {
    const { name, email, phone, work, password, confirmpassword } = values;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, work, password, confirmpassword
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
    } else {
      window.alert("registration done");
      console.log("registration done");
      navigate("/login");
    }
  }



  return <div>

    <section className="h-100 h-custom mt-5" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp" className="w-100" style={{ borderTopLeftRadius: ".3rem", borderTopRightRadius: ".3rem" }} alt="sign up" />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                <form method='POST' className="mx-1 mx-md-2">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" className="form-control" name="name" value={values.name} onChange={handleInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" className="form-control" name="email" value={values.email} onChange={handleInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Phone</label>
                      <input type="tel" id="form3Example3c" className="form-control" name="phone" value={values.phone} onChange={handleInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">Your Work</label>
                      <input type="tel" id="form3Example3c" className="form-control" name="work" value={values.work} onChange={handleInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" className="form-control" name="password" value={values.password} onChange={handleInput} />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                      <input type="password" id="form3Example4cd" className="form-control" name="confirmpassword" value={values.confirmpassword} onChange={handleInput} />
                    </div>
                  </div>

                  <div className="d-flex justify-content-start mb-5">
                    <label className="form-check-label" htmlFor="form2Example3">
                      Already registered? <Link to="/login">Login here</Link>
                    </label>
                    {/* <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                    /> */}

                  </div>

                  <div className="d-flex justify-content-start mx-0 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-success btn-lg" onClick={postData}>Register</button>
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

export default Register;
