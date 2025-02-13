import Link from "next/link";
import VerifiedTag from "../icons/verified-tag";
import { Clock, Play, Star } from "lucide-react";
import Image from "next/image";

//interfaces
interface CourseCardProps {
  link: string;
  image: string;
  title: string;
  description: string;
  instructor: string;
  instructorImage: string;
  price: number;
  discountedPrice: number;
  rating: number;
  duration: string;
  category: string;
  level: string;
  isVerified?: boolean;
}
const CourseCard = ({
  link,
  image,
  title,
  description,
  instructor,
  instructorImage,
  price,
  discountedPrice,
  rating,
  duration,
  category,
  level,
  isVerified,
}: CourseCardProps) => {
  return (
    <div className="overflow-hidden">
      <Link href={link} className="block group">
        <div className="relative overflow-hidden border shadow-md rounded-xl dark:border-white/20 bg-card/95 dark:bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 dark:hover:border-white/30 hover:bg-card dark:hover:bg-card/90 hover:shadow-xl dark:shadow-lg dark:shadow-white/5">
          <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute w-40 h-40 rounded-full -right-20 -top-20 bg-primary/5 dark:bg-primary/10 blur-3xl group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors duration-300"></div>

          <div className="aspect-[16/10] relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 text-primary-foreground transform scale-75 group-hover:scale-100 transition-transform">
                <Play className="w-5 h-5" />
              </div>
            </div>

            <div className="absolute flex items-center justify-between top-4 left-4 right-4">
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-700 dark:text-gray-200 hover:bg-secondary/80 bg-white/40 dark:bg-black/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50">
                {category}
              </div>
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-700 dark:text-gray-200 hover:bg-secondary/80 bg-white/40 dark:bg-black/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50">
                {level}
              </div>
            </div>

            <div className="absolute flex items-center justify-between text-white bottom-4 left-4 right-4">
              <div className="flex items-center text-sm gap-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>{rating}</span>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300/85 line-clamp-2">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border/50 dark:border-border/70">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 overflow-hidden rounded-full bg-primary/10 dark:bg-primary/20 ring-1 ring-border/50 dark:ring-border/70">
                  <Image
                    src={instructorImage}
                    alt=""
                    width={56}
                    height={56}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <div className="text-sm font-medium">{instructor}</div>
                    {isVerified && <VerifiedTag className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="space-y-1">
                  <div className="text-sm line-through text-muted-foreground">
                    ${price}
                  </div>
                  <div className="text-lg font-bold">${discountedPrice}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default CourseCard