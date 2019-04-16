import React from 'react';
import SocialButton from './SocialLogin';
import UserService from '../services/UserService';

var userService = new UserService();


export default class FacebookLogin extends React.Component {


    state = {
        logged: false,
    }


    handleSocialLogin = (user) => {
        console.log(user);

        var data = {
            email: user.profile.email,
            firstname: user.profile.firstName,
            lastname: user.profile.lastName,
            provider: user.provider,
            providerprofile: user.profile.profilePicURL,
        }
        userService.socialLogin(data).then(response => {
            console.log('sociallogin', response);
            //    if(localStorage.getItem('fundootoken')!==null){
            localStorage.setItem('fundootoken', response.data.token);
            localStorage.setItem('username', response.data.userdetails.firstname + ' ' + response.data.userdetails.lastname);
            this.props.changeLoginStatus();

        }).catch();
    }

    handleSocialLoginFailure = (err) => {
        console.error(err)
        this.setState({ logged: true }, () => { this.setState({ logged: false }) })
        // if(err.)
    }


    nodes = {}

    setNodeRef(provider, node) {
        if (node) {
            this.nodes[provider] = node
        }
    }

    render() {
        var button;
        if (this.state.logged === true) {
            button = null;
        }
        else {
            button = <div>
                <SocialButton
                    className='fb-button'
                    provider='facebook'
                    appId='328625924403308'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Facebook
          </SocialButton>
            </div>
        }
        return button;
    }
}