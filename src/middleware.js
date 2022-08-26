import { NextResponse } from "next/server";

export async function middleware(request) {
  let response = NextResponse.next();

  if (request?.nextUrl?.locale && request.nextUrl.locale === "de") {
    if (request.nextUrl.pathname === "/test-de") {
      return NextResponse.rewrite(new URL("/test", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: '/test-de',
}
