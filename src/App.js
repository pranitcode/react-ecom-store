import React from 'react'
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import  SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils.js'





class App extends React.Component{

  constructor() {
    super()
    

    this.state = {

      currentUser: null

    };
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {

   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    
      this.setState({ currentUser: user });

      console.log(user);

    });

    
  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();

  }






  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sigin" component={SignInAndSignUp} />
     </Switch>
      </div>
     
    );


  }

}

export default  App ;
