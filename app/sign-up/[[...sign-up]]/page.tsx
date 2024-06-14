"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="grid w-full grow items-center px-4  absolute top-1/2 -translate-y-1/2 sm:justify-center">
<SignUp/>
    </div>
  );
}
