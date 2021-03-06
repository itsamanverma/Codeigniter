import React, { Component } from "react";
import { Card, Typography, Button, CardContent } from '@material-ui/core/';
import axios from "axios";
import Input from "../components/Input";
import UserService from "../services/user_service";

var userservice = new UserService();
export default class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            status: false,
            message: '',
            password: '',
            rpassword: ''
        }
        this.getDataFromInput = this.getDataFromInput.bind(this);
    }


    getDataFromInput(event, data) {
        // console.log('register', data);
        this.setState({
            [event.target.name]: data
        })
    }

    componentDidMount() {
        let ptoken = (window.location.pathname).substring(15);
        //    / console.log(eemail);
        this.setState({ token: ptoken });
        //    / debugger;
        userservice.findToken({ token: ptoken })
            .then((response) => {
                if (response.status === 200) {
                    this.setState(
                        {
                            status: true,
                            message: response.data.message,
                        });
                }
                else {
                    this.setState(
                        {
                            message: response.data.message,
                        });
                }
                console.log('emaiasasasal', this.state);
            }
            ).catch((error) => {
                // /console.log('rereerrors',error);
            });
        // this.setState(
        //   {
        //     email: eemail,
        //   });
        //   this.forceUpdate();
        // console.log(this.state);

    }

    handleClick() {


        axios.post('/api/forgotpassword/reset',
            {
                token: this.state.token,
                password: this.state.password,
                rpassword: this.state.rpassword
            })
            .then((response) => {
                this.setState(
                    {
                        status: true,
                        message: response.data.message,
                    });
                console.log('emaiasasasal', this.state);
            }
            ).catch((error) => {
                // /console.log('rereerrors',error);
            });
    }

    handleLogin() {
        this.props.history.push('/login');
    }

    render() {
        console.log(this.state.email);


        return (

            <div>
                <Card id='verify-card'>

                    <div className='label-page' >
                        <div className='logo'>
                            <img src={require('../assest/images/logo.svg')} alt="" />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="0" x1="860" y1="525.97" x2="842.73" y2="507.21" gradientUnits="userSpaceOnUse"><stop stop-color="#ffee97" /><stop offset="1" stop-color="#ffe76b" /></linearGradient><linearGradient id="1" x1="858.81" y1="529.48" x2="860.02" y2="517.32" gradientUnits="userSpaceOnUse"><stop stop-color="#fed45b" /><stop offset="1" stop-color="#ffcc54" /></linearGradient><linearGradient id="2" x1="859.24" y1="526.27" x2="864.14" y2="531.15" gradientUnits="userSpaceOnUse"><stop stop-color="#f0a23a" /><stop offset="1" stop-color="#fde46a" /></linearGradient></defs><g transform="matrix(.80688 0 0 .80688-209.84-416.47)"><g transform="matrix(1.61686 0 0 1.61686-1083.5-289.41)"><rect width="35.04" height="34.793" x="831.91" y="499.13" fill="url(#2)" rx="1.5" /><g fill-rule="evenodd"><path d="m831.8 501.31v30.909c0 0 .292 1.723 2.045 1.723h13c11.65-2.057 18.553-8.41 20.08-19.625v-13.376c.084-1.866-1.563-1.952-1.563-1.952l-31.397.11c-2.337-.161-2.167 2.21-2.167 2.21" fill="url(#0)" /><path d="m846.07 534.25c6.656-1.385 10.159-5.085 12.416-9.509 5.994-1.741 7.526-6.272 8.402-11.214.128 12.622-9.624 18.834-20.819 20.723" opacity=".9" fill="url(#1)" /></g></g><g stroke-width="2.051" fill="#efac50" transform="matrix(.06596 0 0 .06596 273.12 530.27)" stroke="#cb8034" stroke-linejoin="round" stroke-linecap="round"><path d="m306.55 367.59h-121.54c-9.04 0-16.382 7.338-16.382 16.385 0 9.05 7.341 16.384 16.382 16.384h121.54c9.04 0 16.389-7.334 16.389-16.384 0-9.05-7.348-16.385-16.389-16.385z" /><path d="m213.92 464.37v8.926c0 10.08 8.157 18.242 18.239 18.242h27.23c10.06 0 18.239-8.166 18.239-18.242v-8.926c20.642-1.467 36.981-18.498 36.981-39.506h-137.69c.0001 21.01 16.357 38.04 36.997 39.506z" /><path d="m245.78 0c-90.69 0-164.22 73.52-164.22 164.21 0 38.27 13.164 73.4 35.15 101.29 19.444 24.647 37.874 51.592 53.76 78.69h150.58c16.05-27.353 34.15-53.793 53.78-78.71 21.968-27.878 35.14-63.01 35.14-101.27 0-90.69-73.52-164.21-164.2-164.21" /></g></g></svg> */}
                        </div>
                        <div>
                            <Typography className='label-text' align='center' variant='h5' component='h4' >Password Reset</Typography>
                            <Typography className='label-text' component='p' ></Typography>
                        </div>
                    </div>
                    <CardContent>{this.state.status ?
                        (
                            <div><Typography align='center' variant='h5' component='h4' >{this.state.message}</Typography>
                                <Typography align='center' component='p' >Click On the Button to go to Login page</Typography>
                                <Button fullWidth variant="contained" color="primary" type='submit' onClick={this.handleLogin.bind(this)} >Login Page</Button>
                            </div>
                        )
                        :
                        (
                            <div> <Typography align='center' variant='h5' component='h4' >Enter New Password</Typography>
                                <div>
                                    <Input name='password' type={'password'} placeholder={'Enter password'} label={'Password'} onChange={this.getDataFromInput} />
                                </div>
                                <div>
                                    <Input name='rpassword' type={'password'} placeholder={'Confirm password'} label={'Confirm Password'} onChange={this.getDataFromInput} />
                                </div>
                                <div className='form-btn'>
                                    <Button fullWidth variant="contained" color="primary" type='submit' onClick={this.handleClick.bind(this)} >Reset</Button></div></div>
                        )}
                    </CardContent>
                </Card>
            </div>

        );
    }
}