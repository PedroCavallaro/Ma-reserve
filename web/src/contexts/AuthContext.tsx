import {
    ReactNode,
    createContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { api } from "../lib/api";
import { FETCH_INIT_STATE, fetchReducer } from "../reducers/fetchReducer";
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { routes } from "../constants/constants";
import { setToken } from "../services/auth";
import { RegisterData, SignInData } from "@/@types/types";

type AuthContextType = {
    isAuth: boolean;
    sigIn: (data: SignInData) => void;
    registerUser: (data: RegisterData) => void;
    logOut: () => void;
    authState: typeof FETCH_INIT_STATE;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    async function sigIn({ email, password }: SignInData) {
        dispatch({ type: 0 });
        await api
            .post("/login", {
                email,
                password,
            })
            .then((res) => {
                dispatch({ type: 1 });
                const { token } = res.data;

                setToken(token);
                router.push("/");
            })
            .catch((err) => dispatch({ type: 2 }));
    }
    async function registerUser({ name, email, password }: RegisterData) {
        dispatch({ type: 0 });
        await api
            .post("/register", {
                name,
                email,
                password,
            })
            .then((res) => {
                dispatch({ type: 1 });
                const { token } = res.data;
                console.log(res.data);
                setToken(token);
                router.push("/");
            })
            .catch((err) => dispatch({ type: 2 }));
    }
    function logOut() {
        destroyCookie(null, "token");
        router.refresh();
        router.push(routes.LOGIN);
    }

    const [authState, dispatch] = useReducer(fetchReducer, FETCH_INIT_STATE);
    const { token } = parseCookies();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(token ? true : false);
    }, [token]);

    return (
        <AuthContext.Provider
            value={{ isAuth, sigIn, registerUser, authState, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
}
