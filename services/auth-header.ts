import cookie from 'js-cookie'

export default function authHeader() {
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    const user = cookie.get('access_token')
    console.log(user)
    if (user) {
      return { Authorization: 'bearer ' + user };
    } else {
      return {};
    }
  }