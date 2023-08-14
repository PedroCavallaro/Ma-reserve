"use client";
import { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
                >
                    {children}
                </GoogleOAuthProvider>
            </QueryClientProvider>
        </AuthProvider>
    );
}
