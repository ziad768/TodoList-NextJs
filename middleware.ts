import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


export default clerkMiddleware((auth, request) => {
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
