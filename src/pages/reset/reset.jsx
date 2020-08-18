import React, { useState, useEffect } from 'react';
import FundooIcon from '../../components/FundooIcon/FundooIcon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
// import utility from "../../utility";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import user_service from '../../services/user_service';

const Reset = (props) => {
    // let { token } = useParams();
    const [values, setValues] = useState({
        confirm: '',
        password: '',
        confirmError: '',
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
        if (values.confirm.length > 0)
            validate("confirm");

    }, [values.confirm])
    useEffect(() => {
        // validate()
        // console.log("data is changed pass", values);
        if (values.password.length > 0)
            validate("password");

    }, [values.password])




    const validate = name => {
        let error = false;
        let passMsg = ''
        switch (name) {

            case 'password':

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
            case 'confirm':
                if (values.confirm.length < 5) {
                    passMsg = 'confirm password must be 5 characters long!';
                    error = true;

                }
                else {
                    passMsg = ''
                    error = false;

                }
                setValues(preState => {
                    return { ...preState, confirmError: passMsg, error: error }
                });
                return error;
            default:
                return false;


        }
        // setTimeout(() => {
        // console.log(" after values name is ", get);

        // }, 5000);


    }

    let reset = () => {
        // console.log('token', token);
        if (validate('confirm') || validate('password')) {
            validate('password');
            return;
        }
        else if (values.confirm !== values.password) {
            setValues(pre => {
                return { ...pre, confirmError: 'password and confirm password not match', passwordError: 'error' }
            })
        }
        else {
            props.loader(true);
            user_service.reset({ password: values.password, /* token: token*/ }).then((data) => {
                    console.log('data after reset', data);
                    const obj = data.data;
                    props.snackbar(true, obj.message);
                    props.loader(false);

                    props.history.push('../login')
                }).catch((error) => {
                    props.loader(false);
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
                    <h1 className="headText">Account recovery</h1>
                    <span className="subText">Use your Google Account</span>
                </div>
                <div className="column form" >
                    <TextField
                        id="outlined-name1"
                        label="password"
                        value={values.password}
                        error={values.passwordError.length > 0}
                        type={values.showPassword ? 'text' : 'password'}

                        helperText={values.passwordError}
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('password')}

                    />

                    <TextField
                        id="outlined-name2"
                        label="confirm password"
                        value={values.confirm}
                        error={values.confirmError.length > 0}
                        type={values.showPassword ? 'text' : 'password'}

                        helperText={values.confirmError}
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('confirm')}
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

                <div className="row buttonHeadLogin" style={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" className="loginButton" onClick={reset}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default withRouter(Reset);