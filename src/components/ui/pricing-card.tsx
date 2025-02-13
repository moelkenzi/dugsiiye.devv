import { Check, Sparkles } from "lucide-react";

const PricingCard = () => {
    return (
      <div className="opacity: 1; transform: none;">
        <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          <div className="relative p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-primary/10 text-primary gap-1">
                <Sparkles className="h-4 w-4" />
                40%OFF
              </div>
              <div className="text-sm  line-through">$79</div>
            </div>
            <div className="mb-6">
              <p className="mt-2 text-secondary-foreground/90">
                Monthly Plan - 30 days access
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  $47.4
                </span>
                <span className="ml-2 text-secondary-forground"> /month</span>
              </div>
              <div className="mt-2 text-sm text-secondary-foreground">
                {" "}
                $47 per month
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-100/95">
                  One Month of Full Access
                </span>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-100/95">
                  One Month of Full Access
                </span>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-100/95">
                  One Month of Full Access
                </span>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-100/95">
                  One Month of Full Access
                </span>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-600 dark:text-gray-100/95">
                  One Month of Full Access
                </span>
              </div>
            </div>
            <div className="mt-auto">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 rounded-md px-8 w-full group bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default PricingCard