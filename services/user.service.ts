import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

class UserService {
  
    async getProfile() {
        return await axios.get(API_URL + 'user/', {
            headers: authHeader(),
            withCredentials: true
        });
    }

    async updateProfile(id: string, payload: any) {
        return await axios.put(API_URL + 'user/' + id, payload, {
            headers: authHeader(),
            withCredentials: true
        });
    }
}
export default new UserService();