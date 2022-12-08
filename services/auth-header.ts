import Cookies from "js-cookie";

export default function authHeader() {
    const token = Cookies.get('access_token')
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }