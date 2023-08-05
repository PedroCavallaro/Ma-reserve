import { ReactNode, createContext, useReducer, useState } from "react";
import { RegisterData, SignInData } from "../types";
import { api } from "../lib/api";

type AuthContextType = {
    isAuth: boolean;
    sigIn: (data: SignInData) => void;
    registerUser: (data: RegisterData) => void;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
    async function sigIn({ email, password }: SignInData) {
        await api.post("/login", {
            email,
            password,
        });
    }
    async function registerUser({ name, email, password }: RegisterData) {
        await api.post("/register", {
            name,
            email,
            password,
        });
    }
    const [user, setUser] = useState("");
    const isAuth = false;

    return (
        <AuthContext.Provider value={{ isAuth, sigIn, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
}
