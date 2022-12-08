import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

class UserService {
  
    async getProfile() {
        return await axios.get(API_URL + 'user/', {
            withCredentials: true
        });
    }

    async updateProfile(id: string, payload: any) {
        return await axios.put(API_URL + 'user/' + id, payload, {
            withCredentials: true
        });
    }
}
export default new UserService();