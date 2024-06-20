"use client";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React, { memo } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./darkMode/DarkMode";
import Link from "next/link";
function Header() {
  const { isSignedIn } = useUser();
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            To Do List
          </span>
          <div className="flex items-center lg:order-2">
            {isSignedIn ? (
              <>
                <UserButton />
                <Button
                  variant="link"
                  className="text-gray-800 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none dark:focus:ring-gray-800"
                >
                  <SignOutButton />
                </Button>
              </>
            ) : (
              <>
                  <Button variant="default" className="mr-3">
                    <SignInButton />
                  </Button>
                  <Button variant="default" className="mr-3">
                    <SignUpButton />
                  </Button>
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);
