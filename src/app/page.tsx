import HeroSection from "@/components/sections/Hero";
import MentorshipSection from "@/components/sections/Mentorship";
import SkillSection from "@/components/sections/Skill";
import CoursesSection from "@/components/sections/Courses";
import BlogSection from "@/components/sections/Blog";
import TestimonialSection from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FAQ";

const HomePage = () => {
  return (
    <section className="relative flex flex-col min-h-screen">
      {/* Background & Gradients */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#aca6a636_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e577_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1d_1px,transparent_1px)] [background-size:320px_320px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#aca6a636_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e577_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1d_1px,transparent_1px)] [background-size:320px_320px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="fixed left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 opacity-10 blur-[100px] pointer-events-none"></div>
      <HeroSection />
      <SkillSection />
      <MentorshipSection />
      <CoursesSection />
      <BlogSection />
      <TestimonialSection />
      <FaqSection />
    </section>
  );
};

export default HomePage;
