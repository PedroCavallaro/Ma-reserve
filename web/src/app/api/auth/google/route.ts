import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const searchParams = new URLSearchParams(request.url)
    const token = searchParams.get("code")

    console.log(token)
}