import jwtDecode from "jwt-decode";
import { parseCookies } from "nookies";

type User = {
    name: string;
    image?: string;
};

export const getUser = () => {
    const { token } = parseCookies();
    let user = "";
    if (token) {
        user = jwtDecode(token);
    }
};
