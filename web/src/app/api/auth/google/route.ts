import { api } from "@/app/lib/api";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url)
    const code = searchParams.get("code")


    const response = await api.post("/user/google", {
        code
    }).then(({data}) => console.log(data))


    const redirectURL = new URL("/", request.url)


}