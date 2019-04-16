import React, { Component } from 'react';
import Input from '../components/Input';
import { Card, Typography, Button, CardContent } from '@material-ui/core/';
import UserService from '../services/UserService';
// import { Link } from "react-router-dom";

// import red from '@material-ui/core/colors/red'

var userService = new UserService();
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            rpassword: '',
            isValidated: false,
            error: {},
        }
        this.getDataFromInput = this.getDataFromInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.validate = this.validate.bind(this);
    }

    /**
    * function to get data from the object
    * 
    * @param {var} data 
    */
    getDataFromInput(event, data) {
        // console.log('register', data);
        this.setState({
            [event.target.name]: data
        })
    }

    /**
     * function to handle the input validations of the page
     * 
     * @param {event} event 
     */
    validate(event) {
        var error = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            rpassword: '',
        };
        var isvalid = true;
        // if(event.target.name==='firstname'){
        if (this.state.firstname.length < 1) {
            error.firstname = 'First Name is required'
            isvalid = false;
        }
        else if (this.state.firstname.length > 8) {
            error.firstname = 'First Name longer than 8 chars'
            isvalid = false;
            //  }
        }
        // else if(event.target.name==='lastname'){
        if (this.state.lastname.length < 1) {
            error.lastname = 'Last Name is required'
            isvalid = false;
        }
        else if (this.state.lastname.length > 8) {
            error.lastname = 'Last Name longer than 8 chars'
            isvalid = false;
        }
        //}
        // else if(event.target.name==='email'){
        if (this.state.email.length < 1) {
            error.email = 'Email is required'
            isvalid = false;
        }
        else if (this.state.firstname.length > 8) {
            error.email = 'Last Name longer than 8 chars'
            isvalid = false;
        }
        //}
        //else if(event.target.name==='password'){
        if (this.state.password.length < 1) {
            error.password = 'Password cannot be empty'
            isvalid = false;
        }
        else if (this.state.lastname.length > 15) {
            error.password = 'Password Should Be between 8 and 15 chars'
            isvalid = false;
        }
        //}
        //else if(event.target.name==='rpassword'){
        if ((this.state.rpassword === this.state.password) === false) {
            error.rpassword = 'Passwords Didnt match'
            isvalid = false;
        }
        //}
        this.setState({
            error: error,
            isValidated: isvalid,
        })
        return isvalid;
    }


    setcolor(event) {
        event.target.color = 'error';
    }
    unsetcolor(event) {
        event.target.color = 'error';
    }

    /**
    * function to handle click of the button of login
    * 
    * @param {event} event 
    */
    handleClick() {

        if (this.validate()) {
            const data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                rpassword: this.state.password,
            }
            userService.register(data).then(res => {
                if (res.status === 210) {
                    this.setState({
                        error: {
                            email: res.data.error.email[0],
                        }
                    });
                }
                else if (res.status === 201) {
                    alert('Registration Successfull')
                }

            }).catch();
        }
    }

    render() {
        //console.log("email", this.state.email);

        return (
            <div style={{
                display: "flex",
                justifyContent: "center"
            }} >
                <Card id='formcard'>
                    <CardContent>
                        <div >
                            <Typography variant="h5" component="h2" className='login' color='primary' id='card-heading' >
                                Register
                            </Typography>
                            <div className='form'>
                                <div>
                                    <Input name={'firstname'} type={'text'} placeholder={'Enter First Name'} label={'First name'} onChange={this.getDataFromInput} />
                                    <div className='error'>{this.state.error.firstname}</div>
                                </div>
                                <div>
                                    <Input name={'lastname'} type={'text'} placeholder={'Enter Last Name'} label={'Last Name'} onChange={this.getDataFromInput} />
                                    <div className='error'>{this.state.error.lastname}</div>
                                </div>
                                <div>
                                    <Input name={'email'} type={'Email'} placeholder={'Enter Your Email'} label={'Email'} onChange={this.getDataFromInput} required={true} />
                                    <div className='error'>{this.state.error.email}</div>
                                </div>
                                <div>
                                    <Input name={'password'} type={'password'} placeholder={'Enter Password'} label={'PassWord'} onChange={this.getDataFromInput} />
                                    <div className='error'>{this.state.error.password}</div>
                                </div>
                                <div>
                                    <Input color={'error'} name={'rpassword'} type={'password'} placeholder={'Confirm PassWord'} label={'Confirm Password'} onChange={this.getDataFromInput} required={true} />
                                    <div className='error'>{this.state.error.rpassword}</div>
                                </div>
                                <div id='register-btn-div'>
                                    <Button onClick={this.handleClick} className='register-btn' variant="contained" color="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                                <span><Typography id='reg-text-login'>Already have an account <a href="/login">Login</a></Typography></span>
                            </div>
                        </div>


                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Register;