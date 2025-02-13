import React from "react";
import { LucideCode, LucideGlobe, LucideRocket, LucideUsers, LucideBookOpen, LucideSparkles } from "lucide-react";

// Mapping of icon names to Lucide icons
const iconMap = {
  "lucide-code": LucideCode,
  "lucide-globe": LucideGlobe,
  "lucide-rocket": LucideRocket,
  "lucide-users": LucideUsers,
  "lucide-book-open": LucideBookOpen,
  "lucide-sparkles": LucideSparkles,
};

// Define prop types
interface SkillCardProps {
  icon?: string;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  icon = "lucide-code", 
  title, 
  description 
}) => {
  // Select the icon from the map, default to LucideCode if not found
  const IconComponent = iconMap[icon as keyof typeof iconMap] || LucideCode;

  return (
    <div className="text-card-foreground shadow-sm group relative overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
      <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute w-40 h-40 rounded-full -right-20 -top-20 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex p-3 border rounded-xl bg-primary/5 border-primary/10 text-primary group-hover:bg-primary/10 transition-colors">
            <IconComponent />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300/85">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;