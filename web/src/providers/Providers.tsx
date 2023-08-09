"use client";
import { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <GoogleOAuthProvider
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
            >
                {children}
            </GoogleOAuthProvider>
        </AuthProvider>
    );
}
