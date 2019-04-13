import React, { Component } from "react";
import Input from "../components/Input";
import { Card, Typography, Button, CardContent } from "@material-ui/core/";

import { Link } from 'react-router-dom';
import UserService from "../services/UserService";

var userService = new UserService();

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValid: '',
            error: '',
            isLoggedIn: false,
        }
        this.getDataFromInput = this.getDataFromInput.bind(this);
        this.validate = this.validate.bind(this);
        // This binding is necessary to make `this` work in the callback
         this.handleClick = this.handleClick.bind(this)

    }

    /* function to handle the input validations of the page
     * @param { event } event
     */
    validate(event) {
        var error = {
            email: '',
            password: '',
        };
        var isvalid = true;
        // if(event.target.name==='firstname'){

        if (this.state.email.length < 1) {
            error.email = 'Email is required'
            isvalid = false;
        }
        //}
        //else if(event.target.name==='password'){
        if (this.state.password.length < 1) {
            error.password = 'Password cannot be empty'
            isvalid = false;
        }
        this.setState({
            error: error,
        })
        return isvalid;
    }

    /**
     * function to get data from the object
     * @param {var} data 
     */
    getDataFromInput(event, data) {
        this.setState({
            [event.target.name]: data
        })
    }

     handleClick() {
    if (this.validate()) {
      let data = {
        email: this.state.email,
        password: this.state.password,
      }
      userService.login(data).then(response => {
        console.log(response);
        console.log(this.state);
 
        if (response.status === 200) {
          this.setState({
            isLoggedIn: true,
          });
        }
        else if (response.status === 204) {
          this.setState({
            error: {
              email: 'invalid credentials',
            }
          })
        }
        else if (response.status === 211) {
          localStorage.removeItem('fundootoken');
          this.props.history.push('/notverified');
        }
 
 
      }
      ).catch(error => {
        //console.log("401",error);
 
      });
    }
  }
 
//   googleTest = () => {
//     googleLoginService.googlelogin();
//   }
 
  changeLoginStatus = () => {
    this.setState({
      isLoggedIn: true,
    });
  }
    
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>  
                <script src="https://apis.google.com/js/platform.js" async defer></script>
                <Card className='logincard'>
                    <CardContent className="cardContent">
                    <div>
                            <span className="fundoo"><h1>FUNDOO</h1></span>
                            <Typography variant="h5" component="h2" color='secondary' id='login-text'>Login</Typography>
                            <div>
                                <Input name={'email'} type={'email'} placeholder={'Enter Your Email'} label={'Email'} onChange={this.getDataFromInput} />
                                <div className='error'>{this.state.error.email}</div>
                            </div>
                            <div>
                                <Input name={'password'} type={'password'} placeholder={'Enter PassWord'} label={'PassWord'} onChange={this.getDataFromInput} />
                                <div className='error'>{this.state.error.password}</div><br />
                            </div>
                            <div className='login-btn-div'>
                                <Button variant="contained" color="#primary" type='submit' onClick={this.handleClick} className='login-btn'>Login</Button>
                            </div>
                        </div><br/>
                        <div >
                            <span className='below-txt' >
                                <span><a href="/forgotpassword">Forgot Password</a></span>
                            </span>
                            <span >
                                <Typography >New User,<Link to="/register">SignUp</Link></Typography>
                            </span>
                        </div>
                        {/* <div className='social-login' >
                            <Button variant="contained" color="primary" type='submit' onClick={this.googleTest} className='login-btn'>Google Test</Button>
                            <GoogleLogin
                                changeLoginStatus={this.changeLoginStatus} />
                            <FacebookLogin
                                changeLoginStatus={this.changeLoginStatus} />
                        </div> */}
                    </CardContent>
                </Card>
            </div>
        );
    }
}