"use client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "../lib/queryClient"
import { ReactNode } from "react"
import { GoogleOAuthProvider } from "@react-oauth/google"

export const Providers = ({children}:{children: ReactNode}) =>{
    return(
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                {children}
            </GoogleOAuthProvider>
        </QueryClientProvider>
    )
}