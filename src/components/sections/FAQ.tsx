import { ArrowRight, MessageCircle } from "lucide-react";
import FaqCard, { FaqProvider } from "@/components/ui/faq-card";
import { FAQ } from "@/constants/data";
import Link from "next/link";
import WhatsAppIcon from "../icons/whatsapp";
import { Button } from "../ui/button";

const FaqSection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/20 to-transparent"></div>
      <div className="absolute inset-0"></div>
      <div className="container relative">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-lg leading-6 bg-primary/10 text-primary backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            FAQ
          </div>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h3>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300/85">
            Find answers to the most common questions about Dugsiiye.
          </p>
        </div>

        <FaqProvider>
          <div className="max-w-3xl mx-auto space-y-4 pb-16">
            {FAQ.map((faq, index) => (
              <FaqCard key={index} faq={faq} index={index} />
            ))}
          </div>
        </FaqProvider>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="mb-4 text-3xl font-semibold text-transparent bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Ma helin jawaabtii aad raadineysay?
          </h3>
          <p className="mb-10 font-medium text-xl text-gray-600 dark:text-gray-100/95">
            Haddii aad qabto su&apos;aalo dheeraad ah, waad nala soo xiriiri
            kartaa wakhti kasta.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#">
              <Button variant="magic" size="lg">
                <span className="relative z-10 flex items-center justify-center text-base gap-2">
                  Start Your Journey Today
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="#">
              <Button variant="xnormal" size="lg">
                <span className="relative z-10 flex items-center justify-center text-base gap-4">
                  Talk to Our Team
                </span>
                <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FaqSection;