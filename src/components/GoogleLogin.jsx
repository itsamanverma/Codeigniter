import React from 'react';
import SocialButton from './SocialLogin';
import UserService from '../services/user_service';

var userService = new UserService();

export default class GoogleLogin extends React.Component {

    state = {
        logged: false,
    }

    /**
     * method to handle the state at the time of getting successfull responce from the user logging in user 
     */
    handleSocialLogin = (user) => {
        console.log(user);
        
       var data = {
           email:user.profile.email,
           firstname:user.profile.firstName,
           lastname:user.profile.lastName, 
           provider:user.provider,
           providerprofile:user.profile.profilePicURL, 
       }
       userService.socialLogin(data).then(response=>{
           console.log('sociallogin',response);
        //    if(localStorage.getItem('fundootoken')!==null){
            //pushing token in to the local storage
            localStorage.setItem('fundootoken',response.data.token);
            localStorage.setItem('username',response.data.userdetails.firstname+' '+response.data.userdetails.lastname);

            //changin the state of login page to loggedin true so it redirect to the dashboard
            this.props.changeLoginStatus();

       }).catch();
    }

    handleSocialLoginFailure = (err) => {
        console.error(err)
        this.setState({ logged: true }, () => { this.setState({ logged: false })})
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
                    provider='google'
                    appId='871833141121-dqac6qvpjnbnniikv99uofkbn9t51ru6.apps.googleusercontent.com'
                    onLoginSuccess={this.handleSocialLogin}
                    onLoginFailure={this.handleSocialLoginFailure}
                >
                    Google
          </SocialButton>
            </div>
        }
        return button;
    }
}