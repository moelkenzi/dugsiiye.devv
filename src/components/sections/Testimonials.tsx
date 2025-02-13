import {
  ArrowRight,
  CircleCheck,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import TestimonialCard from "@/components/ui/testimonial-card";
import { TestimonialCardData } from "@/constants/data";
import { Button } from "../ui/button";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden mx-auto max-w-7xl lg:px-8"
    >
      <div className="relative z-10 ">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="max-w-3xl mx-auto text-center ">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold rounded-lg leading-6 bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
              Hear from Our Students
            </h2>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-100/85">
              Discover how our mentorship program has transformed careers and
              helped students achieve their dreams in tech.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="p-8 border rounded-lg shadow-sm bg-card text-card-foreground backdrop-blur-sm border-primary/10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary">
                  <Star className="w-4 h-4" />
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  4.9/5
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  <div className="text-sm text-muted-foreground">
                    {" "}
                    Average Rating
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary">
                  <Users className="w-4 h-4" />
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">300+</div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  <div className="text-sm text-muted-foreground">
                    Student Mentored
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary">
                  <CircleCheck className="w-4 h-4" />
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">95%</div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  <div className="text-sm text-muted-foreground">
                    Completion Rate
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="mb-2 text-3xl font-bold text-primary">85%</div>
                <div className="mb-2 text-3xl font-bold text-primary">
                  <div className="text-sm text-muted-foreground">
                    Job Placement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 gap-8 [column-fill:_balance] space-y-8">
          {TestimonialCardData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-16 gap-4">
          <Link href="#">
            <Button variant="magic" size="lg" className="font-bold" >
              Hada is diiwaan geli
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
