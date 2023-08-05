import { ReactNode, createContext, useReducer, useState } from "react";
import { RegisterData, SignInData } from "../types";
import { api } from "../lib/api";
import { FETCH_INIT_STATE, fetchReducer } from "../util/fetchReducer";

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
                localStorage.setItem("Auth", JSON.stringify(res.data));
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
    const isAuth = false;

    return (
        <AuthContext.Provider
            value={{ isAuth, sigIn, registerUser, authState }}
        >
            {children}
        </AuthContext.Provider>
    );
}
