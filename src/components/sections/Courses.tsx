import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import CourseCard from "../ui/course-card";
import { CourseData } from "@/constants/data";

const CoursesSection = () => {
  return (
    <section className="relative py-24">
      {/* Gradient backgrounds */}
      {/* <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/20 to-transparent"></div> */}

      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-1/4 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-lg bg-primary/10 leading-6 text-primary backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Courses
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text sm:text-5xl lg:text-6xl">
            Explore Our Featured Courses
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300/85">
            Master modern tech skills in Somali—pick a course and start building
            real projects today.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CourseData.map((course) => (
            <CourseCard
              key={course.course}
              link={course.link}
              category={course.category}
              level={course.level}
              duration={course.duration}
              rating={course.rating}
              image={course.image}
              title={course.title}
              description={course.description}
              instructorImage={course.instructorImage}
              instructor={course.instructor}
              isVerified={course.isVerified}
              price={course.price}
              discountedPrice={course.discountedPrice}
            />
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="flex justify-center mt-16">
          <Link href="/courses">
            <Button size="lg" variant="magic" className="group">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;