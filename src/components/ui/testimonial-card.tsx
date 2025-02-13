import { LucideQuote, LucideStar, Star } from "lucide-react";
import Image from "next/image";
import { TestimonialInfo } from "@/constants/data";

type TestimonialCardProps = {
  testimonial: TestimonialInfo;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { quote, name, role, image, rating, tag } = testimonial;

  return (
    <div className="break-inside-avoid-column">
      <div className="relative overflow-hidden border rounded-lg transition-all duration-300 shadow-sm bg-card text-card-foreground group backdrop-blur-sm border-primary/10 hover:border-primary/20 h-fit">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute rounded-full opacity-0 transition-opacity duration-300 -right-32 -top-32 h-96 w-96 bg-primary/10 blur-3xl group-hover:opacity-100"></div>
        </div>

        <div className="relative p-8">
          <div className="absolute top-6 right-3 text-primary/10">
            <LucideQuote className="w-16 h-16" />
          </div>
          <div className="relative">
            <div className="flex items-center mb-6 gap-4">
              <div className="flex">
                {[...Array(rating)].map((_, index) => (
                  <LucideStar
                    key={index}
                    className="w-5 h-5 text-primary fill-primary stroke-none"
                  />
                ))}
              </div>
              {tag && (
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-primary/10">
                  {tag}
                </div>
              )}
            </div>
            <blockquote className="mb-8 text-lg leading-relaxed">
              <span className="font-serif text-4xl text-primary">&quot;</span>
              {quote}
              <span className="font-serif text-4xl text-primary">&quot;</span>
            </blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="overflow-hidden rounded-full h-14 w-14 bg-gradient-to-br from-primary/20 to-primary/10 ring-2 ring-background">
                    <Image
                      src={image}
                      alt={name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute flex items-center justify-center w-6 h-6 rounded-full -bottom-1 -right-1 bg-background ring-2 ring-background">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">{name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-100/70">
                    {role}
                  </div>
                </div>
              </div>
              {/* <span className="flex items-center justify-items-stretch rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-600 dark:text-gray-100/85 h-6">
                Now working as Full Stack Developer
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
