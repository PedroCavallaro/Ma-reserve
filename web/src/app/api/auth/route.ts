import { api } from "@/app/lib/api";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const username = searchParams.get("username")
    const password = searchParams.get("password")

    console.log(username + "/" + password)
    const response = await api.post("/user", {
        username,
        password
    })

    const redirectURL = new URL("/", request.url)


}