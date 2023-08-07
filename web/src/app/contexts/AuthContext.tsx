import { ReactNode, createContext, useReducer, useState } from "react";
import { RegisterData, SignInData } from "../types";
import { api } from "../lib/api";
import { FETCH_INIT_STATE, fetchReducer } from "../util/fetchReducer";
import { setCookie, parseCookies } from "nookies";
import nookies from "nookies";

type AuthContextType = {
    isAuth: boolean;
    sigIn: (data: SignInData) => void;
    registerUser: (data: RegisterData) => void;
    authState: typeof FETCH_INIT_STATE;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
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
                setCookie(null, "token", token, {
                    maxAge: 60 * 60 * 24 * 30,
                    path: "/",
                });
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
                localStorage.setItem("Auth", JSON.stringify(res.data));
            })
            .catch((err) => dispatch({ type: 2 }));
    }
    const [authState, dispatch] = useReducer(fetchReducer, FETCH_INIT_STATE);
    const { token } = parseCookies();

    const isAuth = token ? true : false;

    return (
        <AuthContext.Provider
            value={{ isAuth, sigIn, registerUser, authState }}
        >
            {children}
        </AuthContext.Provider>
    );
}
