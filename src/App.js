import React, { Component } from 'react';
import { HashRouter as Router, Route,Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Social from './components/social/'
import DragDrop from './components/DragDrop/'
import Jquery from './components/Jquery/'

import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
         
        <div className="App">
          <div className="App__Aside">
            <img src="../image/FUND.png" width="780px" height="720px"></img>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
           
              <Route exact path="/" component={SignUpForm}>
              </Route>
             
              <Route path="/sign-in" component={SignInForm}>
           
              </Route>
           
          
             
          </div>
         
         </div>
         <Route path="/social" component={Social}></Route>
            <Route path="/dnd" component={DragDrop}></Route>
            <Route path="/jquery" component={Jquery}></Route>
            
      </Router>
     
     
);
  }
}

export default App;