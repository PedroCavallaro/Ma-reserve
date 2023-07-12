import { api } from "@/app/lib/api";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const email = searchParams.get("email")
    const password = searchParams.get("password")

    const response = await api.post("/login", {
        email,
        password
    })

    const redirectURL = new URL("/", request.url)

}