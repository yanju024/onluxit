import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import "./App.scss";

import Login from "./components/login/login.component";
import SignUp from "./components/login/signup";
import ShopPage from "./pages/shop/shop.component";

import { auth, createUserProfile } from "./firebase/firebase-utils";
import Header from "./components/header";

import setCurrentUser from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef?.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            exact
            path="/login"
            element={
              this.props.currentUser ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Login />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(App);
