import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/Login", "/Register"],
};
export default async function middleware(request: NextRequest) {
    const redirectURL = new URL("/", request.url);
    const token = request.cookies.get("token")?.value;
    if (
        request.nextUrl.pathname.startsWith("/Login") ||
        request.nextUrl.pathname.startsWith("/Register")
    ) {
        if (token) {
            return NextResponse.redirect(redirectURL);
        }
    }
}
