import React, { Componenet } from 'react'
import Input from "../components/Input"

class Login extends Componenet {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValid: '',
            error: '',
            isLoggedIn: false,
        }
        this.getDataFromInput = this.getDataFromInput.bind(this)
        this.validate = this.validate.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * function to handle the input validation of the page
     * @param {event} event
     */
    validate(event) {
        var error = {
            email ='',
            password ='',
        };
        var invalid = true;

        if (this.state.email.length < 1) {
            error.email = 'Email invalid, Correct Email Required'
            invalid = false;
        }

        if (this.state.password.length < 1) {
            error.password = 'Password cannot be empty'
            invalid = false;
        }
        this.setState({
            error: error,
        })
        return invalid;
    }

    /**
     * function to get data from the Object 
     * @param {var} data
     */
    getDataFromInput(event, data) {
        this.setState({
            [event.target.name]: data
        })
    }

    /**
     * function to handle click of the button of login
     * @param {event} event
     */
    handleClick() {
        if (this.validate()) {
            let data = {
                email: this.state.email,
                password: this.state.password,
            }
        }
        userService.Login(data).then(response => {
            console.log("asasa", response);
            console.log(this.state);

            if (response.status === 200) {
                this.setState({
                    isLoggedIn: true,
                });
            }
            else if (response.status === 204) {
                this.setState({
                    error: {
                        email: 'invalid credentails',
                    }
                })
            }
            else if (response.status === 211) {
              
            }
        })
    }
}