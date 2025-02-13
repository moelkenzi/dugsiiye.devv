import { ArrowRight, Sparkles } from "lucide-react";
import SkillCard from "../ui/skill-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { SkillCardData } from "@/constants/data";

const SkillSection = () => {
  return (
    <section className="relative py-24">
      <div className="relative">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-lg leading-6 bg-primary/10 text-primary backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 " strokeWidth={2} />
            Somalia&apos;s Premier Tech Academy
          </div>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text sm:text-5xl lg:text-6xl">
            Learn Tech Skills in Somali
          </h3>
          <p className="mt-6 text-lg font-normal">
            Develop practical coding expertise, guided by Somali mentors, and
            join thousands of learners on the same journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {SkillCardData.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon || "lucide-code"}
              title={skill.title} 
              description={skill.description} 
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20 mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold md:text-4xl ">5000+</div>
            <div className="text-base">Active Students</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold md:text-4xl ">100+</div>
            <div className="text-base ">Successful Graduates</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold md:text-4xl ">90%</div>
            <div className="text-base ">Employment Rate</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Ready to dive in?
          </h3>
          <div className="flex flex-col items-center justify-center mt-8 gap-4 sm:flex-row">
            <Link href="/#mentorship">
              <Button className="h-11 min-w-[140px] rounded-lg duration-300 border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 hover:border-primary/20 hover:shadow-md group relative px-6 py-3 text-sm font-medium transition-all hover:translate-y-0.5 shadow-lg shadow-primary/20 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center text-base gap-2">
                  Explore Our Full Program
                  <ArrowRight />
                </span>
              </Button>
            </Link>
            <Link href="/#courses">
              <Button className="h-11 min-w-[140px] rounded-lg duration-300 border bg-transparent border-secondary/20 text-secondry-foreground hover:border-secondary/40 shadow-sm hover:shadow group relative px-6 py-3 text-sm font-medium hover:bg-secondary/5 transition-all hover:translate-y-0.5 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center text-base gap-2 ">
                  View All Courses
                  <ArrowRight />
                </span>
              </Button>
            </Link>
            <Link href="#"></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillSection