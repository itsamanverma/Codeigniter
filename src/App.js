import React, { Component } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import EmailVerification from "./pages/EmailVerfication";

class App extends Component{
 render(){
     return(
        <Router>
         <div className="app">
           <Route path='/' exact component={Login}></Route>
           <Route path='/login' component={Login}></Route>
           <Route path='/register' component={Register}></Route>
           <Route path='/forgotpassword' component={ForgotPassword}></Route>
           <Route path='/passwordreset' component={PasswordReset}></Route>
           <Route path='/verifyemail/:email' component={EmailVerification}></Route>
           <Route path='/passwordreset/:token' component={PasswordReset}></Route>
         </div>
       </Router>

  );
}
}
export default App;
