import { Briefcase, Github, Globe, Heart, LucideLinkedin, Star, Users } from "lucide-react";
import Link from "next/link";
import VerifiedTag from "../icons/verified-tag";
import Image from "next/image";

const MentorProfileCard = () => {
  return (
    <div className="lg:col-span-5 transform-none">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm group relative overflow-hidden backdrop-blur-sm border-primary/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
        <div className="relative p-8">
          <div className="relative mx-auto w-64 h-64 mb-8 transform-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
            <div className="relative aspect-square overflow-hidden rounded-3xl ring-4 ring-primary/10">
              <Image
                width={200}
                height={200}
                src="/Avatar-Mc-hamuuda.png"
                alt="Mohamud Osman"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-3xl font-bold tracking-tight">
                Mohamud Osman
              </h3>
              <VerifiedTag className="h-6 w-6" />
            </div>
            <p className="text-lg text-secondary-foreground">
              Lead Instructor & Software Engineer
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative group transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-primary/[0.03] border-primary/10 transition-all duration-300 hover:bg-primary/[0.05] hover:border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Users className="lucide lucide-users h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2000+</div>
                    <div className="text-sm text-secondary-foreground">
                      Students
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-primary/[0.03] border-primary/10 transition-all duration-300 hover:bg-primary/[0.05] hover:border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="lucide lucide-users h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">11yrs</div>
                    <div className="text-sm text-secondary-foreground">
                      Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-primary/[0.03] border-primary/10 transition-all duration-300 hover:bg-primary/[0.05] hover:border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="lucide lucide-users h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.9</div>
                    <div className="text-sm text-secondary-foreground">
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-4 bg-primary/[0.03] border-primary/10 transition-all duration-300 hover:bg-primary/[0.05] hover:border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Heart className="lucide lucide-users h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-secondary-foreground">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <LucideLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Globe className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MentorProfileCard