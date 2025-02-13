import { ArrowUpRight, Calendar, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProgramDurationCard = () => {
  return (
    <div className="relative">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 border-primary/10">
        <div className="absolute top-0 left-0 right-0 bg-primary/5 backdrop-blur-sm border-b border-primary/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Program Duration</div>
                <div className="text-sm text-muted-foreground">
                  12-18 Months
                </div>
              </div>
            </div>
            <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-muted-foreground  px-3 py-1">
              <Star className="h-3.5 w-3.5 mr-1" fill="CurrentColor" />
              4.9/5
            </div>
          </div>
        </div>

        <div className="p-8 pt-24">
          <div className="relative">
            <div className="absolute -left-2 top-0 text-6xl text-primary/20 font-serif">
              &quot;
            </div>
            <blockquote className="relative text-lg text-muted-foreground leading-relaxed pl-6">
              4-ta sano een jaamacada dhiganayay meel aanan isku dayin in aan
              programming-ka ka barto majirto lakin way ii suuro gali wayday,
              markaan programm-ka mentorship-ka dugsiiye kusoo biiray asbuucii
              1-aad ayay wax walba igu cadaadeen.
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/Testimonial-std-mustafa.jpg"
                  alt="Mustafe Hersi"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-background"
                />
                <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-background flex items-center justify-center ring-2 ring-background">
                  <Star
                    className="lucide lucide-star h-3 w-3 text-primary"
                    fill="CurrentColor"
                  />
                </div>
              </div>
              <div>
                <div className="font-semibold">Mustafe Hersi</div>
                <div className="text-sm text-muted-foreground/85">
                  Full Stack Developer{" "}
                  <span className="text-primary font-bold">@ Beko Somalia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg border text-card-foreground shadow-sm p-4  border-primary/5">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">
                Projects Built
              </div>
            </div>
            <div className="rounded-lg border text-card-foreground shadow-sm p-4  border-primary/5">
              <div className="text-2xl font-bold text-primary">On-Demand</div>
              <div className="text-sm text-muted-foreground">
                Assistance
              </div>
            </div>
            <div className="rounded-lg border text-card-foreground shadow-sm p-4  border-primary/5">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-1 text-primary">
              <Star
                className="lucide lucide-star h-4 w-4"
                fill="CurrentColor"
              />
              <Star
                className="lucide lucide-star h-4 w-4"
                fill="CurrentColor"
              />
              <Star
                className="lucide lucide-star h-4 w-4"
                fill="CurrentColor"
              />
              <Star
                className="lucide lucide-star h-4 w-4"
                fill="CurrentColor"
              />
              <Star
                className="lucide lucide-star h-4 w-4"
                fill="CurrentColor"
              />
            </div>
            <Link href="/mentorship#pricing">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary/95 text-primary-foreground h-9 rounded-md px-3 group">
                Waan rabaa anigana!
                <ArrowUpRight className="lucide lucide-arrow-up-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
}
export default ProgramDurationCard