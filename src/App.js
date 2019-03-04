import React, { Component } from "react";
// import Login from "../pages/Login";
import { BrowserRouter as Router,Route } from "react-router-dom";
//import {Buttons} from "@material-ui/core/Button"
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./App.css"
import Login from "./pages/Login";
import Register from "./pages/Register";


class App extends Component{
 render(){
     return(
        <Router>
         <div className="app">
           <Route name="app" path="/"   handler={App}></Route>
           <Route path='/login' component={Login}></Route>
           < Route path ='/register' component={Register}></Route>
         </div>
       </Router>

  );
}
}
export default App;
