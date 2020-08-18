import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import FundooIcon from "../../components/FundooIcon/FundooIcon";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import user_service from '../../services/user_service';
import utility from "../../utility";

const ForgetPassword = (props) => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (email.length > 0)
      validate();
  }, [email])

  const validate = () => {
    if (!utility.isEmailValid(email)) {
      setEmailError('please enter valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  }
  const reset = event => {
    if (!validate())
      return
    else {
      props.loader(true);
      user_service.forget({ email: email, url: window.location.origin }).then(data => {
        props.loader(false);
        props.snackbar(true, data.data.message)
        setDisable(true)
      })
        .catch(error => {
          props.loader(false);
          if (error.response)
            props.snackbar(true, error.response.data.message)
        })
    }
  }

  return (
    <div className="loginMain row center">
      <div className="loginCard">
        <div className="column center">
          <FundooIcon className="paddingTopDown fitWidth" />
          <h1 className="headText">Account Recovery</h1>
          <span className="subText">Enter your recovery email</span>
        </div>
        <div className="column form" >
          <TextField
            id="outlined-name1"
            label="email"
            margin="dense"
            error={emailError.length > 0}
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            variant="outlined"
            className='formField'
            autoComplete='off'
            helperText={emailError}
          />

        </div>

        <div className="row buttonHeadLogin" style={{
          padding: '40px 0 60px'
        }}>
          <Link to="/register">
            <div className="createButton">
              Create account
        </div>
          </Link>

          <Button variant="contained" style={{ opacity: disable ? '0.6' : '1' }} disabled={disable} onClick={reset} className="loginButton" >
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};


export default ForgetPassword;