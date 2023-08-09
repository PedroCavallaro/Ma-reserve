import jwtDecode from "jwt-decode";
import { parseCookies, setCookie } from "nookies";

type User = {
    name: string;
    sub: string;
    image?: string;
};

export const getUser = (): User => {
    const token = getToken();
    const user: User = jwtDecode(token);
    return user;
};
export const getToken = () => {
    const { token } = parseCookies();
    if (!token) {
        return "";
    }
    return token as string;
};

export const setToken = (token: string) => {
    setCookie(null, "token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
    });
};
