import { BookOpen } from "lucide-react";

const MentorINfoCard = () => {
  return (
    <div className="transform-none">
      <div className="group relative overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
        <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute w-40 h-40 rounded-full -right-20 -top-20 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
        <div className="relative flex gap-4">
          <div className="flex items-center justify-center w-10 h-10 p-2 rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="mb-1 font-medium text-foreground group-hover:text-primary transition-colors">
              Comprehensive Curriculum
            </h3>
            <p className="text-sm">
              From front-end essentials to advanced back-end, mobile apps, and
              AI—master it all in a structured path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MentorINfoCard;