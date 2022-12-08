import jwt from 'jwt-decode'

export const cookieParser = (token: string) => {
    if (token !== undefined) {
        return jwt(token);
    }
    return undefined
};