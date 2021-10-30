import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {connect } from "react-redux"
import {userInfo} from '../redux/actions/userInfo'
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup", //redirect
  signInSuccessUrl: "/home",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: "",
    loading: false,
    currentUser: {},
    token: "",
    errorUser: "",
    errorPassword: "",
  };
  jwtDecode = require("jwt-decode").default;

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };


  encodeToDecode = async (tokenUser) => {
    try {
      const response = await axios.post(
        `https://truongxuaapp.online/api/users/log-in?idToken=${tokenUser}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.status == 200) {

       let decoded = this.jwtDecode(response.data);
        
        decoded.author = response.data;

        const infoDe = await this.findUserById(decoded.Id, response.data);

        decoded.infoDetail = infoDe;
        if (decoded.SchoolId === "") {
          decoded.infoSchool = "";
        } else {
          const schoolDe = await this.findSchoolById(
            decoded.SchoolId,
            response.data
          );
          decoded.infoSchool = schoolDe;
        }

        localStorage.setItem("infoUser", JSON.stringify(decoded));
        let info = JSON.stringify(decoded);
        this.props.userInfo(decoded);
        console.log(decoded);
        console.log(this.props.user.Id)
      }
    } catch (err) {
      console.log("Error");
      console.error(err);
    }
  };

   findUserById = async (id,token) => {

    try {
      const response = await axios.get(
        `https://truongxuaapp.online/api/v1/alumni/${id}`,
        {
          headers: {
            "Content-Type": "application/json",

            Authorization:
              "Bearer " + token,

          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  findSchoolById = async(id,token) => {
   

    try {
      const response = await axios.get(
        `https://truongxuaapp.online/api/v1/schools/${id}`,
        {
          headers: {
            "Content-Type": "application/json",

            Authorization: "Bearer " + token,

          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  signInWithGoogle = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(async (res) => {
        await this.encodeToDecode(res.user.za);

        console.log("haha");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .then(() => this.props.history.push("/home"));
  };
  handleSubmit = (e, history) => {
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

              await localStorage.setItem("token", idToken);
              //  await this.encodeToDecode(idToken);
            })
            .then(async () => {
              //console.log(localStorage.getItem("token"));
              const token = localStorage.getItem("token");
              await this.encodeToDecode(token);
            });
        })
        .then(() => {
          setTimeout(() => {
            this.props.history.push("/home");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);

          if (err.message.includes("email address")) {
            this.setState({ errorUser: "Sai Email" });
            this.setState({ errorPassword: "" });
          } else if (err.message.includes("password is invalid")) {
            this.setState({ errorPassword: "Sai mật khẩu" });
            this.setState({ errorUser: "" });
          } else {
            this.setState({
              errorUser: "Tài khoản không tồn tại vui lòng đăng ký",
            });
            this.setState({ errorPassword: "" });
          }
        });
    }
  };

  isFormValid = () => this.state.email && this.state.password;
  render() {
    const { history } = this.props;
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
                  <p style={{ color: "red", marginLeft: 10 }}>
                    {this.state.errorUser}
                  </p>
                  <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    placeholder="Passwordxxxxxxxxxx"
                  />
                  <p style={{ color: "red", marginLeft: 10 }}>
                    {this.state.errorPassword}
                  </p>
                  {/* <input type="checkbox" id="checkbox" defaultChecked />
                    <label htmlFor="checkbox">
                      <span>Remember Me</span>
                    </label> */}
                  <div className="login-buttons">
                    <button className="button" onClick={this.signInWithGoogle}>
                      <i className="fab fa-google"></i>Sign in with google
                    </button>
                  </div>

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

const mapStateToProps =(state) => ({user: state.userReducer.user})
const mapDispatchToProps = (dispatch) => ({userInfo: (info) => dispatch(userInfo(info))})
export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(SignIn));
