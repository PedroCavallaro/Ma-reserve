import { api } from "@/app/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const email = searchParams.get("email")
    const password = searchParams.get("password")

    const response = await api.post("/login", {
        email,
        password
    })

    const {token} = response.data
    const cookieExpiresTime = 60 * 60 * 24 * 30 
    const redirectURL = new URL("/", request.url)
    return NextResponse.redirect(redirectURL, {
            headers:{
                "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresTime}`
            }
    })
}