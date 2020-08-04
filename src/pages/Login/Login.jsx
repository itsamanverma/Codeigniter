import React, { useState, useEffect } from 'react';
import "./Login.scss";
import FundooIcon from '../../components/FundooIcon/FundooIcon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  withRouter,
  Link
} from 'react-router-dom';
import utility from "../../utility";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import user_service from '../../services/user_service';

const Login = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    error: false,
    showPassword: false
  });


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });

    // setTimeout(()=>{
    // validate(name)

    // },1000)
  };
  const handleClickShowPassword = () => {
    // this.setState({ showPassword: !this.state.showPassword })
    setValues({ ...values, showPassword: !values.showPassword });
  };
  useEffect(() => {
    // validate()
    // console.log("data is changed", values);
    if (values.email.length > 0)
      validate("email");

  }, [values.email])
  useEffect(() => {
    // validate()
    // console.log("data is changed pass", values);
    if (values.password.length > 0)
      validate("password");

  }, [values.password])




  const validate = name => {
    let error = false;
    switch (name) {
      case 'email':
        let emailMsg = '';

        if (!utility.isEmailValid(values.email)) {
          emailMsg = 'email  is invalid'
          error = true;

        } else {
          emailMsg = ''
          error = false;
        }
        setValues(preState => { return { ...preState, emailError: emailMsg, error: error } });
        return error;
      case 'password':
        let passMsg = ''

        if (values.password.length < 5) {
          passMsg = 'password must be 5 characters long!';
          error = true;

        }
        else {
          passMsg = ''
          error = false;

        }
        setValues(preState => {
          return { ...preState, passwordError: passMsg, error: error }
        });
        return error;
      default:
        return false;


    }
    // setTimeout(() => {
    // console.log(" after values name is ", get);

    // }, 5000);


  }

  let login = () => {
    console.log("login clicked");

    console.log();
    if (validate('email') || validate('password')) {
      console.log('error is there');
      return;
    }
    else {
      // props.loader(true);
      user_service.login(values).then((data) => {
        console.log('data after login', data);
        const obj = data.data;
        props.snackbar(true, obj.message);
        localStorage.setItem('name', obj.data.firstName + ' ' + obj.data.lastName);
        localStorage.setItem('token', obj.data.token);
        localStorage.setItem('profileUrl', obj.data.profileUrl);
        localStorage.setItem('profileName', obj.data.profileName);


        props.history.push('../dashboard/note')
      }).catch((error) => {
        if (error.response)
          props.snackbar(true, error.response.data.message)
        else
          props.snackbar(true, 'Please try again Later !!!!')

      })

    }



  }

  return (
    <div className="loginMain row center">
      <div className="loginCard">
        <div className="column center">
          <FundooIcon className="paddingTopDown fitWidth" />
          <h1 className="headText">Sign in</h1>
          <span className="subText">Use your Google Account</span>
        </div>
        <div className="column form" >
          <TextField
            id="outlined-name1"
            label="email"
            error={values.emailError.length > 0}
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            variant="outlined"
            className='formField'
            autoComplete='off'
            margin="normal"
            helperText={values.emailError}
          />
          <TextField
            id="outlined-name2"
            label="password"
            value={values.password}
            error={values.passwordError.length > 0}
            type={values.showPassword ? 'text' : 'password'}

            helperText={values.passwordError}
            margin="normal"
            variant="outlined"
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: <InputAdornment position="end">  <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton> </InputAdornment>,
            }}
          />

        </div>
        <div className="notComp">Not your computer? Use Guest mode to sign in privately.
                 <a className="link" href="https://support.google.com/chrome/answer/6130773?hl=en-GB" >Learn more</a></div>
        <div className='buttonHeadLogin'>
          <div className="row " style={{ justifyContent: 'space-between' }}>
            <Link to="/register">
              <div className="createButton">
                Create account
                </div>
            </Link>

            <Button variant="contained" className="loginButton" onClick={login}>
              Login
      </Button>
          </div>
          <Link to="/forgot">
            <div className="createButton" style={{ padding: '5px 0' }}>
              forgot account
                </div>
          </Link>
        </div>

      </div>
    </div>
  );
};
export default withRouter(Login);