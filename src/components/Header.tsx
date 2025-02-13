"use client";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants/data";
import { Menu, Moon, Sun, X } from "lucide-react";
import DashboardIcon from "./icons/dashboard";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 bg-background/95">
        <nav className="top-[var(--banner-height)] right-0 left-0 border-b border-border">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between h-16 gap-4">
              <div className="relative w-[120px] h-[45px]">
                <Link href="/">
                  <Image
                    src="/white.png"
                    alt="Logo"
                    width={120}
                    height={45}
                    priority
                    className="absolute opacity-0 transition-opacity duration-300 dark:opacity-100"
                  />
                  <Image
                    src="/dark.png"
                    alt="Logo"
                    width={120}
                    height={45}
                    priority
                    className="absolute opacity-100 transition-opacity duration-300 dark:opacity-0"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="items-center justify-center flex-grow hidden nv:flex">
                <ul className="flex items-center gap-8">
                  {NavLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href || "#"}
                        className="relative text-base font-semibold transition-colors hover:text-primary group"
                      >
                        {link.name}
                        <span className="absolute left-0 w-full h-[2px] bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 -bottom-1"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-5">
                <button
                  onClick={toggleTheme}
                  className="relative inline-flex items-center justify-center text-sm font-medium rounded-lg transition-colors hover:bg-primary/5 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 w-9 h-9 hover:text-accent-foreground whitespace-nowrap disabled:pointer-events-none focus-visible:outline-none"
                >
                  <Moon
                    size={20}
                    className="transition-all duration-300 ease-in-out dark:-rotate-[360deg] dark:scale-0 rotate-0 scale-100 hover:animate-pulse"
                  />
                  <Sun
                    size={20}
                    className="absolute transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100 rotate-[360deg] scale-0 hover:animate-pulse"
                  />
                </button>

                <div className="items-center hidden gap-3 xs:flex">
                  <SignedOut>
                    <SignInButton>
                      <Button variant={"signin"} className="font-semibold">
                        Sign in
                      </Button>
                    </SignInButton>
                    <SignInButton>
                      <Button className="font-semibold">Get Started</Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <Button className="flex items-center font-semibold gap-2">
                        <DashboardIcon />
                        Dashboard
                      </Button>
                    </Link>
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md xs:hidden hover:bg-primary/5"
                  onClick={toggleMenu}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="xs:hidden absolute top-[64px] left-0 right-0 bg-background/95 border-b border-border">
                <ul className="flex flex-col px-4 pt-4 pb-6 space-y-4">
                  {NavLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href || "#"}
                        className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li className="flex flex-col pt-2 gap-3">
                    <SignedOut>
                      <SignInButton>
                        <Button variant={"signin"} className="w-full">
                          Sign in
                        </Button>
                      </SignInButton>
                    </SignedOut>
                    <SignedOut>
                       <Link href="/sign-up">
                         <Button className="font-semibold">Get Started</Button>
                       </Link>
                    </SignedOut>
                    
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button className="w-full">Get Started</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2"
                      >
                        <Button className="flex items-center w-full font-semibold gap-2">
                          <DashboardIcon />
                          Dashboard
                        </Button>
                      </Link>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
