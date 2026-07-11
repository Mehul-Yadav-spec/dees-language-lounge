import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Refreshes the Supabase auth session cookie on each request so server
// components and route handlers see a valid session. It does NOT protect or
// gate any route — every existing page stays fully public. Route protection can
// be added later (e.g. redirect unauthenticated users away from /dashboard).
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // The admin login page is public — it must not be gated (else infinite loop).
  const isAdminLogin = path === "/admin/login";
  const protectedPrefixes = ["/student", "/admin", "/tutor", "/dashboard", "/set-password", "/change-password"];
  const isProtected = !isAdminLogin && protectedPrefixes.some((p) => path === p || path.startsWith(p + "/"));

  // Public / marketing paths (and their Next.js <Link> prefetches, which are the
  // bulk of traffic) need no auth at all. Returning here skips a Supabase Auth
  // round-trip (getUser hits the Auth server over the network) on every such
  // request — a big saving, e.g. one homepage view prefetches ~8 public links,
  // each of which used to trigger its own getUser() call. Logged-in users still
  // get their session cookie refreshed the moment they hit a protected route.
  if (!isProtected) return NextResponse.next({ request });

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Touching getUser() validates the session and rotates cookies as needed. Only
  // runs on protected routes now. The must_change_password redirect to
  // /set-password is handled in the (portal) layout (needs a profile read).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const url = request.nextUrl.clone();
    // Admin area gets its own branded sign-in; everything else uses the portal login.
    url.pathname = path.startsWith("/admin") ? "/admin/login" : "/login";
    url.searchParams.set("next", path);
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    // Run on everything except Next internals and static assets.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|csv|txt|xml|webmanifest)$).*)",
  ],
};
