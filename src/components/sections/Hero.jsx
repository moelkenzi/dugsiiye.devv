import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Code, Laptop, PanelsTopLeft, Rocket } from "lucide-react";
// import DashCard from "../ui/dash-card";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden sm:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-background/60 via-background/40 to-transparent h-52"></div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/60 via-background/40 to-transparent h-52"></div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          <div className="max-w-2xl space-y-8 sm:space-y-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-lg ring-1 ring-primary/20 font-semibold text-primary text-sm leading-6">
              <Rocket className="w-4 h-4" />
              <span>Somalia's Leading Tech Platform</span>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 sm:text-5xl lg:text-6xl">
                Launch Your Tech Career in Somali
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground/90 sm:text-2xl font-me">
                From web dev to AI—learn in Somali, build real projects, and get
                mentor guidance every step of the way.
              </p>
              <p className="max-w-xl font-medium text-muted-foreground/80">
                Join over 5,000+ Somali learners building tech skills with us.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground/90">
                <div className="p-2 rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-medium">
                  Live coding sessions with industry pros
                </span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground/90">
                <div className="p-2 rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <Laptop className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-medium">
                  Hands-on projects—from web to AI
                </span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground/90">
                <div className="p-2 rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <PanelsTopLeft className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-medium">
                  Career guidance from Somali mentors
                </span>
              </div>
            </div>

            <div className="flex flex-col pt-4 sm:flex-row gap-4 sm:gap-6">
              <Link href="/#mentorship" className="w-full sm:w-auto">
                <Button size="xl" variant="magic" className="w-full px-8 py-6 text-base font-medium sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Our Full Program
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="/#courses" className="w-full sm:w-auto">
                <Button size="xl" variant="normal" className="w-full px-8 py-6 text-base font-medium sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View All Courses
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* <div className="lg:block relative h-[400px]">
            <div className="top-[60px] right-0 absolute rounded-3xl w-[750px] h-[500px] overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-accent/10 to-primary/20"></div>
                <div className="absolute w-40 h-40 rounded-full top-10 right-10 bg-primary/10 blur-3xl"></div>
                <div className="absolute w-48 h-48 rounded-full bottom-10 left-10 bg-secondary/10 blur-3xl"></div>
                <div className="absolute rounded-full top-1/2 left-1/2 bg-accent/10 blur-3xl w-72 h-72 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute inset-0 border border-accent/30 backdrop-blur-sm rounded-3xl"></div>
            </div>

            <div className="-right-[40px] absolute flex justify-center items-center w-[680px]">
              <div className="relative -mt-4 w-[620px]">
                <div className="relative w-full mx-auto overflow-hidden border shadow-2xl bg-card/90 backdrop-blur-sm rounded-2xl">
                  <DashCard />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default HeroSection