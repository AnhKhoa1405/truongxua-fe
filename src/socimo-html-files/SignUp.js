import React, {useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";

function SignUp() {
  // const addPostApi = async () => {
  //   const dataAddPost = {
  //     email: "khoaanh@gmail.com",
  //     name: "Truong Khoa Map",
  //     password: "stri123ng",
  //     phone: "0909",
  //     address: "111111",
  //     img: null,
  //     bio: "Khoa khong ngu",
  //     status: true
  //   }
  //   try {
  //     const response = await axios.post(
  //       "http://20.188.111.70:12348/api/v1/alumni",
  //       dataAddPost
  //     );
  //     if (response.status == 200) {
  //       console.log(response.status)
  //     } 
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(async () => {
  //   await addPostApi();
  // }, []);

    return (
      <div>
        {/* page loader */}
        <div className="theme-layout">
          <div className="authtication bluesh high-opacity">
            <div className="verticle-center">
              <div className="welcome-note">
                <div className="logo">
                  <img src="images/logo.png" alt="" />
                  <span>Socimo</span>
                </div>
                <h1>Welcome to Socimo</h1>
                <p>
                  Socimo is a one and only plateform for the researcheres,
                  students, and Acdamic people. Every one can join this
                  plateform free and share his ideas and research with seniors
                  and juniours comments and openions.
                </p>
              </div>
              <div
                className="bg-image"
                style={{
                  backgroundImage: "url(images/resources/login-bg.png)",
                }}
              />
            </div>
          </div>
          <div className="auth-login">
            <div className="verticle-center">
              <div className="signup-form">
                <h4>
                  <i className="icofont-lock" /> Singup
                </h4>
                <form method="post" className="c-form">
                  <div className="row merged-10">
                    <div className="col-lg-12">
                      <h4>What type of researcher are you?</h4>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input type="text" placeholder="Email@" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input
                        type="radio"
                        id="student"
                        name="acdamic"
                        defaultValue="student"
                      />
                      <label htmlFor="student">Academic Or Student</label>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input
                        type="radio"
                        id="ngo"
                        name="acdamic"
                        defaultValue="ngo"
                      />
                      <label htmlFor="ngo">
                        Corporate, Govt, Or NGO Person
                      </label>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input
                        type="radio"
                        id="medical"
                        name="acdamic"
                        defaultValue="medical"
                      />
                      <label htmlFor="medical">Medical</label>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input
                        type="radio"
                        id="other"
                        name="acdamic"
                        defaultValue="other"
                      />
                      <label htmlFor="other">Not a Rsearcher</label>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input type="text" placeholder="Institute, Company" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <input type="text" placeholder="Department" />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Your Position" />
                    </div>
                    <div className="col-lg-12">
                      <div className="gender">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          defaultValue="male"
                        />
                        <label htmlFor="male">Male</label>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          defaultValue="female"
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox" defaultChecked />
                        <label htmlFor="checkbox">
                          <span>
                            I agree the terms of Services and acknowledge the
                            privacy policy
                          </span>
                        </label>
                      </div>
                      <button className="main-btn" type="submit">
                        <i className="icofont-key" /> Signup
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default SignUp;
