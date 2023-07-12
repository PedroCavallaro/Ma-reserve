import { api } from "@/app/lib/api";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const email = searchParams.get("email")
    const username = searchParams.get("username")
    const password = searchParams.get("password")

    const response = await api.post("/register", {
        email,
        username,
        password
    })
    const redirectURL = new URL("/", request.url)


}