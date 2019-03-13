import axios from 'axios';

export default class UserService {
    /**
     * method to handle login of user
     * @param {array} data
     */
    login(data) {
        return axios.post('http://localhost/codeigniter/login', data)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('username', response.data.userdetails.firstName + ' ' + response.data.userdetails.lastName);
                }
                return response;
            }).catch((error) => {
                return error;
            });
    }

    /**
     *method to handle register service
     *@param {array} data 
     */

    register(data) {
        return axios.post('http://localhost/codeigniter/register', data)
            .then((response) => {
                console.log("resps", response);
                return response;
            }).catch((error) => {
                console.log('error', error);
                return error;
            });
    }
}
