import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./page/homepage/homepage";
import shopPage from "./page/shop/shop";
import Header from "./component/header/header";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unSubscribeFromAuth = null;
  componentDidMount = () => {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);
      this.setState({ currentUser: user });
    });
  };

  componentWillUnmount=()=>{
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={shopPage} exact />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
