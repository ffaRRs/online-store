import $api from '../http/index.js';

export default class AuthService {
    static fetchUsers(){
        return $api.get('/users')
    }
}