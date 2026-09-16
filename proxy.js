import { NextResponse } from "next/server";

export function proxy(request) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0].toLowerCase();
  const base = "clothes-shop.web.id";

  if (!hostname.endsWith("." + base)) {
    return NextResponse.next();
  }

  const subdomain = hostname.slice(0, -("." + base).length);
  if (!subdomain || subdomain.includes(".")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/sites/${encodeURIComponent(subdomain)}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
