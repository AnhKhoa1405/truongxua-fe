import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter } from "react-router-dom";
import axios from "axios";
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup", //redirect
  signInSuccessUrl: "/home",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false,
    error: [],
    currentUser: {},
    token: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isFormValid) {
      this.setState({ error: [], loading: true });
      const { email, password, error } = this.state;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((signInUser) => {
          console.log(signInUser);
        })
        .then(() => {
          firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(async function (idToken) {
              console.log("id token:" + idToken);
              try {
                console.log("haha");
                const response = await axios.post(
                  `http://20.188.111.70:12348/api/users/log-in?idToken=${idToken}`
                );
                console.log("response :" + response.data);
                localStorage.setItem("accessToken", response.data);
              } catch (err) {
                console.log(err);
              }
            })
            .catch(function (error) {
              // Handle error
            });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ error: [...error, err], loading: false });
          this.props.history.push("/");
        });
    }
  };
  
  isFormValid = () => this.state.email && this.state.password;
  render() {
    return (
      <div>
        {/* <div className="page-loader" id="page-loader"> */}
        {/* <div className="loader">
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
            <span className="loader-item" />
          </div> */}
        {/* </div> */}
        {/* page loader */}
        <div className="theme-layout">
          <div className="authtication bluesh high-opacity">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(images/resources/login-bg3.jpg)" }}
            />
            <ul className="welcome-caro">
              <li className="welcome-box">
                <figure>
                  <img src="images/resources/login-1.png" alt="" />
                </figure>
                <h4>Ask questions with seniors Researchers</h4>
                <p>
                  Ask questions and get the experienced answer by researchers
                  and others fellows.
                </p>
              </li>
              <li className="welcome-box">
                <figure>
                  <img src="images/resources/login-2.png" alt="" />
                </figure>
                <h4>Find New Researchers or Friends</h4>
                <p>
                  Join Socimo and make your network of university or college
                  fellows.
                </p>
              </li>
              <li className="welcome-box">
                <figure>
                  <img src="images/resources/login-3.png" alt="" />
                </figure>
                <h4>Sell Your Online paid Content</h4>
                <p>
                  Sell your online lectures, videos, books and many more with
                  Socimo.
                </p>
              </li>
            </ul>
          </div>
          <div className="auth-login">
            <div className="logo">
              <img src="images/logo.png" alt="" />
              <span>Socimo</span>
            </div>
            <div className="mockup left-bottom">
              <img src="images/mockup.png" alt="" />
            </div>
            <div className="verticle-center">
              <div className="login-form">
                <h4>
                  <i className="icofont-key-hole" /> Login
                </h4>
                <form className="c-form">
                  <input
                    name="email"
                    type="text"
                    onChange={this.handleChange}
                    placeholder="User Name @"
                  />
                  <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    placeholder="Passwordxxxxxxxxxx"
                  />

                  {/* <input type="checkbox" id="checkbox" defaultChecked />
                    <label htmlFor="checkbox">
                      <span>Remember Me</span>
                    </label> */}
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />

                  {/* <Link to="/home"> */}
                  <button onClick={this.handleSubmit} className="main-btn">
                    <i className="icofont-key" /> Đăng nhập
                  </button>
                  {/* </Link> */}
                </form>
                <Link to="/signup">
                  <p
                    style={{
                      marginTop: 20,
                      fontSize: 16,
                      borderBottom: "2px solid #17a2b8",
                      paddingBottom: 4,
                      width: "max-content",
                    }}
                  >
                    {" "}
                    Đăng ký tài khoản
                  </p>
                </Link>
              </div>
            </div>
            <div className="mockup right">
              <img src="images/star-shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
