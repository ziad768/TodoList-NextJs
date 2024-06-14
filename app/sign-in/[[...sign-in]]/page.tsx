import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="grid absolute top-1/2 -translate-y-1/2  w-full grow items-center px-4 sm:justify-center">
      <SignIn />
    </div>
  );
}
