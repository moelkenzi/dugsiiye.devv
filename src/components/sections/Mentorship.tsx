import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import MentorINfoCard from "../ui/mentor-card";
import ProgressCard from "../ui/progress-card";

const MentorshipSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="px-4 py-20 mx-auto max-sm:py-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start max-sm:grid-cols-1 max-sm:gap-8">
          <div className="space-y-10 max-sm:space-y-6">
            <div className="inline-flex items-center p-2 border rounded-full gap-3 -px-2 sm:px-4 bg-background border-primary dark:bg-primary/5 max-sm:text-xs max-sm:gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium sm:text-sm text-primary">
                  Batch 4 Now Open
                </span>
              </div>
              <span className="h-3 w-[1px] bg-primary/20"></span>
              <span className="text-xs sm:text-sm">
                Limited Seats Available
              </span>
            </div>

            <div className="space-y-6 max-sm:space-y-4">
              <h1 className="space-y-2">
                <div>
                  <span className="text-5xl font-bold lg:text-6xl text-primary max-sm:text-3xl">
                    Full Stack Software
                  </span>
                </div>
                <div>
                  <span className="text-5xl font-bold lg:text-6xl text-primary/80 max-sm:text-3xl">
                    Engineer + AI
                  </span>
                </div>
                <div>
                  <span className="text-5xl font-bold lg:text-6xl text-foreground max-sm:text-3xl">
                    Mentorship Program
                  </span>
                </div>
              </h1>
              <p className="max-w-2xl text-lg max-sm:text-base">
                Master web, mobile, DevOps, and AI—all guided by Somali mentors
                in a structured, project-based curriculum.
              </p>
            </div>

            <div className="space-y-8 max-sm:space-y-6">
              <div className="p-6 border bg-card/40 backdrop-blur-sm border-primary/10 rounded-xl space-y-6 max-sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[13px] sm:text-sm font-medium text-green-500">
                    Limited Seats Available for Batch 4
                  </span>
                </div>

                <div className="pb-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Next Batch Starts</h4>
                      <p className="text-sm">Enrollment Open Now</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Class Size</h4>
                      <p className="text-sm">Limited to 50 Students</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:flex-row gap-4 max-sm:w-full max-sm:flex-col">
                  <Link href="/#mentorship" className="flex-2 max-sm:w-full">
                    <Button size="lg" variant="magic" className="max-sm:w-full">
                      <span className="relative z-10 flex items-center justify-center text-base gap-2 max-sm:text-sm">
                        Apply for Batch 4
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 max-sm:w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="non_magic"
                      className="max-sm:w-full"
                    >
                      <span className="relative z-10 flex items-center justify-center text-base gap-2 max-sm:text-sm">
                        Contact on WhatsApp
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-center max-sm:text-xs">
                  Have questions? Get immediate assistance on WhatsApp
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-sm:grid-cols-1">
              <MentorINfoCard />
              <MentorINfoCard />
              <MentorINfoCard />
              <MentorINfoCard />
            </div>
          </div>

          <div className="max-sm:mt-8">
            <ProgressCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default MentorshipSection