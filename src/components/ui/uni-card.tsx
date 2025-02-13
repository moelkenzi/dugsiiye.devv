import { LucideIcon } from "lucide-react";
import { FC } from "react";


type UniCardProps = {
    text: string;
    icon?: LucideIcon;
    bgColor?: string;
    textColor?: string;
    padding?: string;
    rounded?: string;
    fontSize?: string;
    fontWeight?: string;
    iconSize?: string;
    additionalClasses?: string;
};




const UniCard: FC<UniCardProps> = ({
    text,
    icon: Icon,
    bgColor = "bg-primary/10",
    textColor = "text-primary",
    padding = "px-3 py-1",
    rounded = "rounded-lg",
    fontSize = "text-sm",
    fontWeight = "font-bold",
    iconSize = "h-4 w-4",
}) => {
  return (
    <div className={`inline-flex items-center mb-4 ${bgColor} ${textColor} ${padding} ${fontSize} ${rounded} ${fontWeight}`}>
      {Icon && <Icon className={`mr-2  ${iconSize}`} />}
      {text}
    </div>
  );
}
export default UniCard