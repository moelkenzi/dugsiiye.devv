import { ArrowRight, Shield } from "lucide-react";
import { Button } from "./button";

const CustomCard = () => {
  return (
    <div className="border text-card-foreground shadow-sm group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm border-primary/10 p-8 transition-all duration-300 hover:border-primary/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Shield className="h-6 w-6" />
        </div>
        <h3 className="mb-4 text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Need a Custom Plan?
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-100/85 font-medium">
          Contact us to discuss custom arrangements for teams or special
          requirements
        </p>
        <Button variant={"default"} className="hover:border-primary/50 hover:bg-primary/90 bg-primary text-white dark:text-gray-100/85">
          <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </div>
  );
}
export default CustomCard