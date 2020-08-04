import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './Register.css';
import FundooIcon from '../../components/FundooIcon/FundooIcon';
import utility from "../../utility";
import logo from "../../assest/logo.svg";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import UserService from "../../services/user_service";
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter, Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            rpassword: '',
            showPassword: false,
            open: false,
            snakbarmsg: '',
            errors: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                rpassword: '',
                error: {}
            },
        }
        console.log('props  in child', props);
    }

    /**
    * function to handle click of the button of login
    * 
    * @param {event} event 
    */
    register = () => {
        console.log('i am in register', this.state);
        this.props.loader(true);
        setTimeout(() => {
            this.props.loader(false);
        }, 2000);
        this.validate('firstname', this.state.firstname);
        this.validate('lastname', this.state.lastname)
        this.validate('email', this.state.email)
        this.validate('password', this.state.password)
        this.validate('rpassword0', this.state.rpassword)
        if (this.state.password !== this.state.rpassword) {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    rpassword: 'Those passwords didnt match. Try again.', error: true     // update the value of specific key
                }
            }), () => {
                console.log(this.state);

            })

        }

        else if (!this.state.errors.error) {
            console.log("api call");
            UserService.register(this.state).then((data) => {
                console.log("response from register", data);
                this.setState({ open: true, snakbarmsg: data.data.message })

                this.props.history.push('login')


            })
                .catch((error) => {
                    this.setState({ open: true, snakbarmsg: error.response.data.message })
                    console.log("error from register ", error.response.data.message);

                })
        }


    }
    setValue = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
        })
        this.validate(event.target.name, event.target.value)
    }

    /**
     * function to handle the input validations of the page
     * 
     * @param {name , value } event 
     */
    validate(name, value) {
        let errors = this.state.errors;
        switch (name) {
            case 'firstName':
                if (value.length < 3) {
                    errors.firstname = 'First Name must be 3 characters long!';
                    errors.error = true;
                }
                else if (!utility.isStringValid(value)) {
                    errors.firstname = 'First name is invalid'
                    errors.error = true;

                } else {
                    errors.firstname = ''
                    errors.error = false;

                }
                break;
            case 'lastName':
                if (value.length < 3) {
                    errors.lastname = 'Last Name must be 3 characters long!';
                    errors.error = true;

                }
                else if (!utility.isStringValid(value)) {
                    errors.lastname = 'Last name is invalid'
                    errors.error = true;

                } else {
                    errors.lastname = ''
                    errors.error = false;

                }
                break;
            case 'email':
                console.log(utility.isEmailValid(value));

                if (!utility.isEmailValid(value)) {
                    errors.email = 'user Name  is invalid'
                    errors.error = true;

                } else {
                    errors.email = ''
                    errors.error = false;

                }
                break;
            case 'password':
                if (value.length < 5) {
                    errors.password = 'password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.password = ''
                    errors.error = false;

                }
                break;
            case 'confirm':
                if (value.length < 5) {
                    errors.rpassword = 'confirm password must be 5 characters long!';
                    errors.error = true;

                }
                else {
                    errors.rpassword = ''
                    errors.error = false;

                }
                break;
            default:
                break;

        }
        this.setState({ errors, [name]: value }, () => {
        })
    }
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { errors, open } = this.state;
        return (
            <div className="register">
                <Snackbar open={open} message={this.state.snakbarmsg} autoHideDuration={3000} action={[
                    <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        close
                    </Button>
                ]}
                />

                <Card className="card row">
                    <div className="cardI">
                        <FundooIcon className="paddingTopDown" login={this.register} />
                        <div className="paddingTopDown createTxt">Create Your Fundoo Account</div>

                        <div className="twoTextField" >
                            <div className="column divField" >
                                <TextField
                                    id="outlined-dense-multiline1"
                                    label="FirstName"
                                    margin="dense"
                                    error={errors.firstname.length > 0}
                                    name="firstname"
                                    value={this.state.firstname}
                                    onChange={this.setValue}
                                    variant="outlined"
                                    className='formField'
                                    autoComplete='off'
                                />
                                <span className='error'>{errors.firstname}</span>

                            </div>
                            <div className="column divField">
                                <TextField
                                    id="outlined-dense-multiline2"
                                    label="LastName"
                                    margin="dense"
                                    variant="outlined"
                                    className='formField'
                                    name="lastname"
                                    onChange={this.setValue}
                                    error={errors.lastname.length > 0}
                                    autoComplete='off'


                                />
                                <span className='error'>{errors.lastname}</span>

                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', width: '100%' }}>
                            <TextField
                                id="outlined-dense-multiline3"
                                label="UserName"
                                margin="dense"
                                error={errors.email.length > 0}
                                variant="outlined"
                                style={{ width: '99%' }}
                                name='email'
                                helperText={errors.email}
                                onChange={this.setValue}
                                autoComplete='off'

                            />
                            <span className='helpTxt'>You can use letters, numbers & periods</span>

                        </div>

                        <form className="twoTextField" >
                            <div className="column divField" >
                                <TextField
                                    id="outlined-dense-multiline4"
                                    label="Password"
                                    margin="dense"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    className='formField'
                                    error={errors.password.length > 0}
                                    name='password'
                                    onChange={this.setValue}
                                    autoComplete='off'
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">  <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton> </InputAdornment>,
                                    }}


                                />
                                <span className='error'>{errors.password}</span>

                            </div>
                            <div className="column divField" >
                                <TextField
                                    id="outlined-dense-multiline5"
                                    label="Confirm"
                                    margin="dense"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    error={errors.rpassword.length > 0}
                                    variant="outlined"
                                    className='formField'
                                    onChange={this.setValue}
                                    name='confirm'
                                    autoComplete='off'


                                />
                                <span className='error'>{errors.rpassword}</span>

                            </div>
                        </form>
                        <div className="buttonHead ">
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <Button className="signInButton">
                                    Sign in instead
                                </Button>
                            </Link>


                            <Button variant="contained" onClick={this.register} className="RegisterButton">
                                Register
                            </Button>
                        </div>
                    </div>
                    <div className="column center hide" style={{
                        width: '244px'
                    }}>
                        <img src={logo} alt="account" />
                        <span className="oneAccount"> One account. All of Google working for you.</span>
                    </div>
                </Card>
            </div>
        );
    }
}

// #endregion

export default withRouter(Register);