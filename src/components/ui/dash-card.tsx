import { Code, Globe, Rocket, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const DashCard = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="relative w-full max-w-[580px]">
        <div className="relative w-full mx-auto overflow-hidden border shadow-2xl bg-card/80 backdrop-blur-sm rounded-2xl">
          <div className="p-4 border-b bg-muted/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                  <Rocket className="w-3 h-3 text-primary" />
                </div>
                <span className="text-xs font-medium">
                  Somali Full-Stack Mentorship
                </span>
              </div>
              <div className="flex flex-col items-end text-xs">
                <span className="font-medium text-primary">Week 6 of 24</span>
                <div className="w-24 h-1 mt-1 overflow-hidden rounded-full bg-muted">
                  <div className="bg-primary w-[25%] h-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="p-3 border space-y-3 bg-muted/30 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium">Full-Stack Journey</span>
                <span className="text-xs text-primary">25% Complete</span>
              </div>
              <div className="gap-1 grid grid-cols-4">
                <div className="space-y-1">
                  <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <div className="bg-primary/60 w-[100%] h-full"></div>
                  </div>
                  <span className="font-semibold text-[10px] text-muted-foreground">
                    HTML/CSS
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <div className="bg-primary/60 w-[80%] h-full"></div>
                  </div>
                  <span className="font-semibold text-[10px] text-muted-foreground">
                    JavaScript
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <div className="bg-primary/60 w-[40%] h-full"></div>
                  </div>
                  <span className="font-semibold text-[10px] text-muted-foreground">
                    React
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <div className="bg-primary/60 w-[0%] h-full"></div>
                  </div>
                  <span className="font-semibold text-[10px] text-muted-foreground">
                    Backend
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 border space-y-3 border-secondary/20 bg-secondary/5 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">
                      AI Module Progress
                    </h4>
                    <span className="text-xs text-gray-600 dark:text-gray-100/85">
                      Machine Learning in Somali
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium text-green-500">
                    Active
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    4/15 Lessons
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-100/85">
                    Course Progress
                  </span>
                  <span className="text-muted-foreground">27%</span>
                </div>
                <div className="bg-muted rounded-full w-full h-1.5 overflow-hidden">
                  <div className="bg-primary w-[27%] h-full"></div>
                </div>
                <div className="pt-1 gap-1 grid grid-cols-3">
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/40 w-[80%] h-full"></div>
                    </div>
                    <span className="font-semibold text-[10px] text-muted-foreground">
                      Basics
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/40 w-[20%] h-full"></div>
                    </div>
                    <span className="font-semibold text-[10px] text-muted-foreground">
                      Neural Networks
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/40 w-[0%] h-full"></div>
                    </div>
                    <span className="font-semibold text-[10px] text-muted-foreground">
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border space-y-2 bg-muted/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">
                      Live Somali Session
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      Live Somali Session
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-medium">Tomorrow</span>
                  <span className="block text-xs text-muted-foreground">
                    14:00 - 15:30
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 border rounded-full bg-primary/20 border-background"></div>
                  <div className="w-6 h-6 border rounded-full bg-primary/20 border-background"></div>
                  <div className="w-6 h-6 border rounded-full bg-primary/20 border-background"></div>
                  <div className="w-6 h-6 border rounded-full bg-primary/20 border-background"></div>
                  <div className="flex items-center justify-center w-6 h-6 border rounded-full bg-secondary/20 border-background">
                    <span className="font-medium text-[10px]">+8</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-primary" />
                  <span className="text-xs text-gray-600 dark:text-gray-100/85">
                    Live in Somali
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 border space-y-3 border-primary/20 bg-primary/5 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Current Project</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-100/85">
                      AI-Powered E-Commerce
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-primary">
                    68% Complete
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-muted rounded-full w-full h-1.5 overflow-hidden">
                  <div className="bg-primary w-[68%] h-full"></div>
                </div>
                <div className="gap-1 grid grid-cols-4">
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/60 w-[100%] h-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-600 dark:text-gray-100/85">
                      Design
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/60 w-[90%] h-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-600 dark:text-gray-100/85">
                      Frontend
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/60 w-[60%] h-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-600 dark:text-gray-100/85">
                      Backend
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 overflow-hidden rounded-full bg-muted">
                      <div className="bg-primary/60 w-[20%] h-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-600 dark:text-gray-100/85">
                      AI
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gap-2 grid grid-cols-2">
              <div className="p-3 border space-y-2 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-green-500/10">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <span className="text-xs font-medium">Always Available</span>
                </div>
                <div className="text-[10px] text-gray-600 dark:text-gray-300/90">
                  Always in Somali
                </div>
              </div>
              <div className="p-3 border space-y-2 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-green-500/10">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-medium">Latest Tech</span>
                </div>
                <div className="text-[10px] text-gray-600 dark:text-gray-300/90">
                  AI & Web3 Ready
                </div>
              </div>
            </div>
            <div className="pt-1 text-center">
              <Link
                href="/#curriculum"
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                View Full Curriculum →
              </Link>
            </div>
          </div>
        </div>

        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
export default DashCard