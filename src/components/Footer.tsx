"use client";
import {
  BookOpen,
  Clock,
  Facebook,
  Github,
  GraduationCap,
  Linkedin,
  Settings,
  StarIcon,
  Twitter,
  User,
  Users,
  Youtube,
} from "lucide-react";
import { QuickLinks } from "@/constants/data";
import WhatsAppIcon from "./icons/whatsapp";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container relative px-4 py-10 mx-auto border-t border-border/40 bg-background">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div className="lg:col-span-1">
          <div className="relative w-[120px] h-[40px] flex items-center gap-2 mb-12">
            <Link href="/">
              <Image
                src="/white.png"
                alt="Logo"
                width={100}
                height={50}
                priority
                className="absolute opacity-0 transition-opacity duration-300 dark:opacity-100"
              />
              <Image
                src="/dark.png"
                alt="Logo"
                width={100}
                height={40}
                priority
                className="absolute opacity-100 transition-opacity duration-300 dark:opacity-0"
              />
            </Link>
          </div>
          <p className="mb-6 ">
            Transforming tech education for Somali learners—Ku baro
            barnaamijyada Coding-ka Iyo IT-ga (Af-Soomaali).
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2.5 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border/50 shadow-sm"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border/50 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border/50 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border/50 shadow-sm"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border/50 shadow-sm"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border/50 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className=" lg:-space-x-12 space-y-9">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {QuickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="link.href"
                      className="transition-colors hover:text-foreground hover:underline decoration-primary/50 underline-offset-4"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
            {/* Primary/bg-blur card */}
            <div className="p-4 border rounded-lg bg-primary/5 border-primary/10 ">
              <h4 className="flex items-center justify-center flex-1 mb-4 font-medium gap-5 md:justify-center lg:flex lg:flex-col">
                <StarIcon
                  className="w-6 h-6 text-primary md:w-7 md:h-7 "
                  strokeWidth="2"
                />
                <p className="text-[16px] xxs:text-[12px] font-bold ts:font-semibold md:text-[16px] md:font-semibold lg:flex lg:flex-col lg:text-[15px]">
                  Full-Stack Software Engineer
                  <span className="flex justify-center text-xs font-medium ts:text-xs ts:font-medium md:font-medium text-slate-100/75 lg:text-slate-100/65">
                    {" "}
                    Mentorship (Af-Soomaali)
                  </span>
                </p>
              </h4>
              <p className="mb-3 text-sm text-center md:line-clamp-4 md:text-center">
                Learn full-stack development—from front-end to AI—while
                receiving direct mentorship, Somali-taught lessons, and
                real-world projects.
              </p>
              <div className="flex justify-center mt-5">
                <a
                  href="#"
                  className="flex items-center justify-center text-sm font-medium gap-2 sm:justify-start text-primary hover:underline decoration-primary/50 underline-offset-4"
                >
                  <Users className="w-4 h-4 " />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h3 className="mb-3 text-lg font-semibold">Popular Courses</h3>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  AI-Powered SaaS with Next.js, Typescript, Prisma & OpenAI
                </h4>
                <div className="flex items-center text-xs gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    12.6 hours
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />0
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  Graphic Design Masterclass | Beginners Guide to Adobe
                  Photoshop CC
                </h4>
                <div className="flex items-center text-xs gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    2.9 hours
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />0
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  Step By Step Data Visualization Using Tableau 2024
                </h4>
                <div className="flex items-center text-xs gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    1.3 hours
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />0
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  React Master Class with Redux, Hooks, Firebase, Tailwind css,
                  GraphQL
                </h4>
                <div className="flex items-center text-xs gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    27.5 hours
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />0
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  AI-Powered SaaS with Next.js, Typescript, Prisma & OpenAI
                </h4>
                <div className="flex items-center text-xs gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    12.6 hours
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />0
                  </span>
                </div>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-sm font-medium gap-2 sm:justify-start text-primary hover:underline decoration-primary/50 underline-offset-4"
          >
            <GraduationCap className="w-4 h-4" />
            View All Courses
          </a>
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="transition-colors hover:text-foreground hover:underline decoration-primary/50 underline-offset-4"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors hover:text-foreground hover:underline decoration-primary/50 underline-offset-4"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors hover:text-foreground hover:underline decoration-primary/50 underline-offset-4"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="transition-colors hover:text-foreground hover:underline decoration-primary/50 underline-offset-4"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1">
          <h3 className="mb-3 text-lg font-semibold">Latest Articles</h3>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  Waa Maxay MIT License, Maxaase Aan U Doortaa
                </h4>
                <span className="text-xs">January 14, 2025</span>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  10-ka Programming Languages Ugu Fiican 2025
                </h4>
                <span className="text-xs">January 14, 2025</span>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  Sidee Loo Noqdaa Ethical Hacker
                </h4>
                <span className="text-xs">January 14, 2025</span>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  Waa Maxay Computer Science
                </h4>
                <span className="text-xs">January 14, 2025</span>
              </div>
            </a>
          </div>
          <div className="mb-3 space-y-4">
            <a href="#" className=" group">
              <div className="space-x-1">
                <h4 className="text-sm font-medium transition-colors group-hover:text-primary line-clamp-1">
                  Waa Maxay Programming Language
                </h4>
                <span className="text-xs">January 14, 2025</span>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-sm font-medium gap-2 sm:justify-start text-primary hover:underline decoration-primary/50 underline-offset-4"
          >
            <BookOpen className="w-4 h-4" />
            <p className="">Read More Articles</p>
          </a>
        </div>
      </div>

      {/* copyright */}
      <div className="py-4 mt-12 border-t border-border/50">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">© 2025 Dugsiiye. All rights reserved.</p>
          <p className="text-sm flex items-center gap-1.5">
            Proudly Engineered with{" "}
            <span className="inline-block">
              <Settings className="w-4 h-4 text-primary animate-spin-slow" />
            </span>{" "}
            in Somalia
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
