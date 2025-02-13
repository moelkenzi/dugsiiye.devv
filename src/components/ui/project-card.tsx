import { Play, Sparkles } from "lucide-react";
import Image from "next/image"
import { FC } from "react";


type ProjectCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    author: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
    imageSrc,
    title,
    description,
    author,
}) => {
    return (
      <div className="transform-none">
        <div className="rounded-lg border text-card-foreground shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20 bg-background/95 backdrop-blur-sm">
          <div className="relative aspect-video cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
            <Image
              height={500}
              width={500}
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground w-20 h-20 rounded-full bg-white/95 hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                <Play className="h-10 w-10 text-primary fill-primary translate-x-0.5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-secondary-foreground hover:bg-secondary/80 mb-3 bg-primary/10">
              <Sparkles className="h-3 w-3 mr-1" />
              Strudent Project
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-secondary-foreground mb-3">
             {description}
            </p>
            <p className="text-sm font-medium text-primary">
               {author}
            </p>
          </div>
        </div>
      </div>
    );
}
export default ProjectCard