import axios from 'axios';

export default class UserService
{
    /**
     * method to handle login of user
     * @param {array} data
     */
    login(data) {
        return axios.post('http://localhost/codeigniter/login', data)
            .then(response => {
                if (response.status === 200)
                {
                    localStorage.setItem('fundootoken')
                }
        })
    }
}
