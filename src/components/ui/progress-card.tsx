import { Brain, Briefcase, CircleCheckBig, Clock, Database, Globe, Server, Smartphone, Users } from "lucide-react";

const ProgressCard = () => {
  return (
    <div className="p-8 border bg-card shadow-sm rounded-xl border-border max-sm:p-4">
      <div className="mb-10 grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="p-4 bg-primary/5 rounded-xl max-sm:p-3">
          <div className="flex items-center mb-2 gap-2 max-sm:gap-1">
            <Clock className="w-5 h-5 text-primary max-sm:h-4 max-sm:w-4" />
            <span className="text-sm max-sm:text-xs">Program Duration</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-foreground max-sm:text-xl">Intensive</p>
            <p className="text-xs">Intensive</p>
          </div>
        </div>
        <div className="p-4 bg-primary/5 rounded-xl max-sm:p-3">
          <div className="flex items-center mb-2 gap-2 max-sm:gap-1">
            <Users className="w-5 h-5 text-primary max-sm:h-4 max-sm:w-4" />
            <span className="text-sm max-sm:text-xs">Active Students</span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-foreground max-sm:text-xl">5000+</p>
            <p className="text-xs">Growing Community</p>
          </div>
        </div>
      </div>

      <div className="space-y-8 max-sm:space-y-6">
        <div className="space-y-6 max-sm:space-y-4">
          <div className="relative">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg bg-primary/5 border-primary/10 max-sm:w-6 max-sm:h-6">
                <CircleCheckBig className="w-4 h-4 text-primary max-sm:h-3 max-sm:w-3" />
              </div>
              <div className="flex-1 space-y-2 max-sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground max-sm:text-sm">
                    Frontend Development
                  </span>
                  <span className="text-sm text-primary max-sm:text-xs">100%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary/5">
                  <div className="w-full h-full rounded-full bg-primary transition-all duration-500"></div>
                </div>
                <p className="text-sm max-sm:text-xs">React, Next.js, TypeScript & UI/UX</p>
              </div>
            </div>
            <div className="absolute left-4 top-10 bottom-0 w-[1px] h-8 bg-border max-sm:hidden"></div>
          </div>
          <div className="relative">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg bg-primary/5 border-primary/10 max-sm:w-6 max-sm:h-6">
                <Database className="w-4 h-4 text-primary max-sm:h-3 max-sm:w-3" />
              </div>
              <div className="flex-1 space-y-2 max-sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground max-sm:text-sm">
                    Backend & Database
                  </span>
                  <span className="text-sm text-primary max-sm:text-xs">80%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary/5">
                  <div className="h-full bg-primary rounded-full transition-all duration-500 w-[80%]"></div>
                </div>
                <p className="text-sm max-sm:text-xs">Node.js, PostgreSQL & GraphQL API</p>
              </div>
            </div>
            <div className="absolute left-4 top-10 bottom-0 w-[1px] h-8 bg-border max-sm:hidden"></div>
          </div>
          <div className="relative">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg bg-primary/5 border-primary/10 max-sm:w-6 max-sm:h-6">
                <Smartphone className="w-4 h-4 text-primary max-sm:h-3 max-sm:w-3" />
              </div>
              <div className="flex-1 space-y-2 max-sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground max-sm:text-sm">
                    Mobile Development
                  </span>
                  <span className="text-sm text-primary max-sm:text-xs">100%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary/5">
                  <div className="h-full bg-primary rounded-full transition-all duration-500 w-[0%]"></div>
                </div>
                <p className="text-sm max-sm:text-xs">React Native, Expo & App Publishing</p>
              </div>
            </div>
            <div className="absolute left-4 top-10 bottom-0 w-[1px] h-8 bg-border max-sm:hidden"></div>
          </div>
          <div className="relative">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg bg-primary/5 border-primary/10 max-sm:w-6 max-sm:h-6">
                <Server className="w-4 h-4 text-primary max-sm:h-3 max-sm:w-3" />
              </div>
              <div className="flex-1 space-y-2 max-sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground max-sm:text-sm">
                    DevOps & Cloud
                  </span>
                  <span className="text-sm text-primary max-sm:text-xs">100%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary/5">
                  <div className="h-full bg-primary rounded-full transition-all duration-500 w-[0%]"></div>
                </div>
                <p className="text-sm max-sm:text-xs">Docker, AWS & CI/CD Pipeline</p>
              </div>
            </div>
            <div className="absolute left-4 top-10 bottom-0 w-[1px] h-8 bg-border max-sm:hidden"></div>
          </div>
          <div className="relative">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg bg-primary/5 border-primary/10 max-sm:w-6 max-sm:h-6">
                <Brain className="w-4 h-4 text-primary max-sm:h-3 max-sm:w-3" />
              </div>
              <div className="flex-1 space-y-2 max-sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground max-sm:text-sm">
                    AI Integration
                  </span>
                  <span className="text-sm text-primary max-sm:text-xs">100%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary/5">
                  <div className="h-full bg-primary rounded-full transition-all duration-500 w-[0%]"></div>
                </div>
                <p className="text-sm max-sm:text-xs">LLMs, OpenAI & AI Features</p>
              </div>
            </div>
            <div className="absolute left-4 top-10 bottom-0 w-[1px] h-8 bg-border max-sm:hidden"></div>
          </div>
          <div className="relative">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 border rounded-lg bg-primary/5 border-primary/10 max-sm:w-6 max-sm:h-6">
                <Briefcase className="w-4 h-4 text-primary max-sm:h-3 max-sm:w-3" />
              </div>
              <div className="flex-1 space-y-2 max-sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground max-sm:text-sm">
                    Career Development
                  </span>
                  <span className="text-sm text-primary max-sm:text-xs">100%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary/5">
                  <div className="h-full bg-primary rounded-full transition-all duration-500 w-[0%]"></div>
                </div>
                <p className="text-sm max-sm:text-xs">
                  Portfolio Building & Job Search Strategy
                </p>
              </div>
            </div>
            <div className="absolute left-4 top-10 bottom-0 w-[1px] h-8 bg-border max-sm:hidden"></div>
          </div>
        </div>
      </div>
      <div className="pt-6 mt-10 border-t border-border max-sm:mt-6 max-sm:pt-4">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <div>
            <div className="mb-1 text-sm max-sm:text-xs">Current Status</div>
            <div className="flex items-center font-medium text-primary gap-2 max-sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse max-sm:w-1.5 max-sm:h-1.5"></span>
              <span>Batch 4 Enrolling</span>
            </div>
          </div>
          <div className="flex items-center text-sm gap-2 max-sm:text-xs">
            <Globe className="w-4 h-4 max-sm:h-3 max-sm:w-3" />
            <span>100% in Somali</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProgressCard