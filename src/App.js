// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contents from "./pages/Contents";
import Details from "./pages/Details";
import "./app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";

// import Body from "./components/Body";
// import { logIn, logOut } from "./actions/userAction";

function App() {
  // const dispatch = useDispatch();
  let isAuthenticated = localStorage.getItem("TOKEN");
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuthenticated) {
    isAuthenticated = isAuth;
  }

  useEffect(() => {
    //   Axios.get("http://localhost:5000/api/users/check")
    //     .then((res) => res.data)
    //     .then((res) => console.log(res));
  }, [isAuthenticated]);

  const privateRouter = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={null} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/account" component={Account} />
      <Route path="/contents" component={Contents} />
      <Route path="/details" component={Details} />
      <Redirect from="*" to="/" />
    </Switch>
  );

  const publicRouter = () => (
    <Switch>
      {/* <Route exact path="/" component={Home} />
      <Redirect from="*" to="/login" /> */}
    </Switch>
  );
  return (
    <div className="container1">
      <Header isAuthenticated={isAuthenticated} />
      {/* <button
        onClick={(e) => {
          console.log("login");
          e.preventDefault();
          // logIn();
          dispatch(login({ email: "test@test.com", password: "12345" }));
        }}
      >
        Login
      </button> */}
      {/* <Body isAuthenticated={isAuthenticated} /> */}
      {isAuthenticated ? publicRouter() : privateRouter()}
      <Section />
      <Footer />
    </div>
  );
}

export default App;
