import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

class CourseService {
  
    async getCourseList() {
        return await axios.get(API_URL + 'courses/', { headers: authHeader() });
    }

    async createCourse(payload: any) {
        return await axios.post(API_URL + 'courses/', payload, { headers: authHeader() });
    }
}
export default new CourseService();