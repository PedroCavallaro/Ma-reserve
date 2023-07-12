"use client"
import LoginForm from "@/components/Login/LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Login() {
    return(
        <main className="min-h-screen fixed min-w-[100%] container flex items-center justify-center  bg-orange-orangePrimary">
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                <LoginForm/>
            </GoogleOAuthProvider>
        </main>
    )
};
