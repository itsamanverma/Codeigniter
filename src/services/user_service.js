import axios_service from "./axios_service";
var config = require('../config/config');
class UserService {
    constructor() {
        this.axiosService = new axios_service();
    }
    register(data) {
        let url = config.url + 'register'
        return this.axiosService.post(url, data, false);
    }
    login(data) {
        let url = config.url + 'login';
        return this.axiosService.post(url, data, false);
    }
    forget(data) {
        let url = config.url + 'forgot';
        return this.axiosService.post(url, data, false);
    }
    reset(data) {
        let url = config.url + 'reset';
        let token = {
            headers: {
                'Content-Type': 'application/json',
                'token': data.token
            }
        }
        return this.axiosService.post(url, data, true, token);
    }
    uploadProfile(data) {

        let url = config.url + 'uploadProfileURL'
        let token = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }
        return this.axiosService.post(url, data, true, token);
    }
    searchUser(data) {
        let url = config.url + 'searchUser'
        let token = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }
        return this.axiosService.post(url, data, true, token);
    }
}
export default new UserService();