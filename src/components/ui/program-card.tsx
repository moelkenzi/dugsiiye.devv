import { CircleCheck, CodeXml } from "lucide-react";

const ProgramCard = () => {
    return (
      <div className="p-6 md:p-8">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl  bg-gradient-to-br from-primary/20 to-primary/10 text-primary ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
          <CodeXml className="" />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight">
            Web Development Essentials
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground font-mono">
            2-4 months
          </div>
        </div>
        <p className="mb-6 text-secondary-foreground text-lg">
          Master the fundamentals of web development and version control.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <CircleCheck className="h-5 w-5 text-primary/60"/>
            <span>Build responsive websites from scratch</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <CircleCheck className="h-5 w-5 text-primary/60"/>
            <span>Build responsive websites from scratch</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <CircleCheck className="h-5 w-5 text-primary/60"/>
            <span>Build responsive websites from scratch</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <CircleCheck className="h-5 w-5 text-primary/60"/>
            <span>Build responsive websites from scratch</span>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
            HTML
          </div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
            CSS
          </div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
            JavaScript
          </div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
            Git & GitHub
          </div>
        </div>
      </div>
    );
}
export default ProgramCard