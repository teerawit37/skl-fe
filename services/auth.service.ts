import axios from "axios";
import Cookies from "js-cookie";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


class AuthService {
    signin(username: string, password: string) {
        return axios
            .post(API_URL + "auth/signin", {
                username, password
            }, { withCredentials: true })
            .then(response => {
                if (response.data.token) {
                    // localStorage.setItem("user", JSON.stringify(response.data));
                    Cookies.set('access_token', response.data.token)
                }
                return response.data;
            });
    }
    signout() {
        localStorage.removeItem("user");
    }

    // register(discord_id: string, user_name: string, email: string, twitter_id: string) {
    //     return axios.post(API_URL + "auth/signup", {
    //         discord_id,
    //         user_name,
    //         email,
    //         twitter_id
    //     })
    //         .then(response => {
    //             if (response.data.access_token) {
    //                 localStorage.setItem("user", JSON.stringify(response.data));
    //             }
    //             return response.data;
    //         });
    // }
}
export default new AuthService();