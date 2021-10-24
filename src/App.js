import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUniversity from "./socimo-html-files/AboutUniversity";
import BlogDetail from "./socimo-html-files/BlogDetail";
import Blogs from "./socimo-html-files/Blogs";
import EventDetail from "./socimo-html-files/EventDetail";
import Events from "./socimo-html-files/Events";
import GroupDetails from "./socimo-html-files/Group_Details";
import Home from "./socimo-html-files/Home";
import Invoice from "./socimo-html-files/Invoice";
import LoadImg from "./socimo-html-files/LoadImage";
import Notifications from "./socimo-html-files/Notifications";
import Profile from "./socimo-html-files/Profile";
import SendFeedBack from "./socimo-html-files/SendFeedBack";
import Settings from "./socimo-html-files/Settings";
import SignIn from "./socimo-html-files/SignIn";
import SignUp from "./socimo-html-files/SignUp";
import AccountPopup from "./socimo-html-files/AccountPopup";
import Groups from "./socimo-html-files/Groups";
import axios from "axios";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "truongxua-d9940",
  storageBucket: "truongxua-d9940.appspot.com",
  messagingSenderId: "78169522021",
  appId: "1:78169522021:web:13934f5f09fb08e97ceb8c",
  measurementId: "G-2T9SQ4HENT",
};
firebase.initializeApp(config);

function App() {
  let jwtDecode = require("jwt-decode").default;
  //handel firebase
  useEffect(() => {
    //indexedDB.deleteDatabase("firebaseLocalStorageDb");
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("User is not logged in");
          //user logs out . handle somthing
          return;
        }
        console.log("Login user: ", user.displayName);
        const token = await user.getIdToken();
        console.log("Logged in user: ", token);
        await encodeToDecode(token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const encodeToDecode = async (tokenUser) => {
    try {
      const response = await axios.post(
        `https://truongxuaapp.online/api/users/log-in?idToken=${tokenUser}`,
        {
          headers: {},
        }
      );
      if (response.status == 200) {
        //console.log(response);
        let decoded = jwtDecode(response.data);
        decoded.author = response.data;
        const infoDe = await findUserById(decoded.Id);
        decoded.infoDetail = infoDe;
        localStorage.setItem("infoUser", JSON.stringify(decoded));
      }
    } catch (err) {
      console.log("Error");
      console.error(err);
    }
  };
  const findUserById = async (id) => {
    try {
      const response = await axios.get(
        `http://20.188.111.70:12348/api/v1/alumni/${id}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Router>
      <div>
        {/* <AboutUniversity /> */}
        {/* <SignIn /> */}
        {/* <Home /> */}
        <Route path="/" exact component={SignIn} />
        <Route path="/popup" component={AccountPopup} />
        <Route path="/groups" component={Groups} />
        <Route path="/aboutUniversity" component={AboutUniversity} />
        <Route path="/home" component={Home} />
        <Route path="/sendFeedBack" component={SendFeedBack} />
        <Route path="/groupDetails" component={GroupDetails} />
        <Route path="/setting" component={Settings} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/blogdetail" component={BlogDetail} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/events" component={Events} />
        <Route path="/eventDetail" component={EventDetail} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/loadimg" component={LoadImg} />
      </div>
    </Router>
  );
}

export default App;
