import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import VerifiedTag from "../icons/verified-tag";
import Link from "next/link";

// Define props interface for BlogCard
interface BlogCardProps {
  link: string;
  image: string;
  openSourceText?: string;
  date: string;
  title: string;
  paragraph: string | React.ReactNode;
  authorName?: string;
  authorImage?: string;
  readTime?: string;
  readMoreText?: string;
}

const BlogCard = ({ 
  link, 
  image, 
  openSourceText = "Open Source", 
  date, 
  title, 
  paragraph, 
  authorName = "Mr Sharafdin", 
  authorImage = "/favicon.png", 
  readTime = "3 min read", 
  readMoreText = "Read in Somali" 
}: BlogCardProps) => {
  return (
    <div className="group transform-none">
      <Link href={link} className="block h-full">
        <article className="relative flex flex-col h-full overflow-hidden border transition-all duration-300 group rounded-xl border-border bg-card hover:border-primary/20 hover:shadow-md">
          <div className="relative aspect-[2/1] overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="absolute object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="object-cover transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute top-4 left-4">
              <div className="px-3 py-1 text-xs font-medium border rounded-full bg-background/95 dark:bg-background/90 backdrop-blur-sm border-border/50 text-foreground">
                {openSourceText}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/95 dark:bg-background/90 backdrop-blur-sm text-xs font-medium border border-border/50 text-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>{date}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-grow p-6">
            <div className="flex-grow">
              <h3 className="mb-2 text-lg font-medium transition-colors text-foreground group-hover:text-primary line-clamp-2">
                {title}
              </h3>
              <div className="text-sm leading-relaxed line-clamp-2">
                {paragraph}
              </div>
            </div>

            <div className="flex flex-col items-center justify-between pt-6 mt-6 border-t sm:flex-row border-border space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center w-full gap-3 sm:w-auto">
                <div className="relative flex-shrink-0 w-8 h-8 overflow-hidden rounded-full ring-1 ring-border">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col max-w-full min-w-0">
                  <div className="flex items-center w-full gap-1">
                    <span className="text-sm font-medium text-foreground truncate max-w-[120px] sm:max-w-[150px] md:max-w-[180px]">
                      {authorName}
                    </span>
                    <VerifiedTag className="self-center flex-shrink-0 w-4 h-4 ml-1" />
                  </div>
                  <div className="flex items-center mt-1 text-xs gap-2">
                    <Clock className="flex-shrink-0 w-3 h-3" />
                    <span className="truncate max-w-[120px] sm:max-w-[150px] md:max-w-[180px] text-muted-foreground">{readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end w-full sm:w-auto">
                <span className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300">
                  <span className="hidden sm:inline">{readMoreText}</span>
                  <span className="sm:hidden">Read</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
export default BlogCard