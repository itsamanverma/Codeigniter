// import axios from "axios";

export default class GoogleService {

    googlelogin = () => {

        window.gapi.load('auth2', () => {
            const params = {
                // code: 'code',
                client_id: "871833141121-dqac6qvpjnbnniikv99uofkbn9t51ru6.apps.googleusercontent.com",
                cookie_policy:'http://localhost:8000/login',
                fetch_basic_profile: true,
                // openid_realm:"true",
                ux_mode: 'popup',
                redirect_uri: "http://localhost:8000/dashboard",
                // access_type: 'online'
                // scope: ''
            }
            const auth2 = window.gapi.auth2.getAuthInstance(params).signIn().then(googleuser=>{

            });
            console.log("zsgdjgshjdghjsgdhjgsjgd",auth2);
            console.log('hello', auth2.getBasicProfile());

        });

    }
}