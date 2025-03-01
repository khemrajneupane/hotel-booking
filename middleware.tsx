import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {});

export const config = {
  matcher: ["/me/:path*"],//this is to redirect the protected routes. e.g. /me/update' is a protected route and if the user is not logged in, then it should be unaccessible.
};
