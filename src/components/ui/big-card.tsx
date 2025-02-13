import { ArrowRight, LucideStar, QuoteIcon } from "lucide-react";
import Image from "next/image";

const BigCard = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90 border-primary/10">
      <div className="absolute top-6 right-6 text-primary/10">
        <QuoteIcon className="h-24 w-24" />
      </div>
      <div className="relative p-8 sm:p-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-1.5 text-base">
            <LucideStar className="h-4 w-4 mr-2" fill="CurrentColor" />
            Professional Success Story
          </div>
          <div className="flex items-center text-primary">
            <LucideStar className="h-4 w-4" fill="CurrentColor" />
            <LucideStar className="h-4 w-4" fill="CurrentColor" />
            <LucideStar className="h-4 w-4" fill="CurrentColor" />
            <LucideStar className="h-4 w-4" fill="CurrentColor" />
            <LucideStar className="h-4 w-4" fill="CurrentColor" />
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
          <div className="space-y-6">
            <blockquote className="relative text-xl font-medium leading-relaxed text-secondary-foreground">
              <span className="font-serif text-4xl text-primary">&quot;</span>
              Aad ayaan ugu qanacsanahay dadaalka layaabka leh ee ay nala garab
              taagan yihiin macallin Hamuuda iyo dhammaan team-ka support-ga.
              Aniga IT-da ayaan muddo ku jiray waana ku shaqeeyaa. Courses badan
              oo Maraykan iyo India-ba waa soo maray. Waxa aan kula kulmay
              Dugsiiye waa qaab ka duwan qaababka kale ee wax laysku baro—waqti
              layaab leh oo lagu gelinayo afkaaga hooyo wax laguugu sharxayo.
              Sharaxaad kaliya ma aha, waa I TUS oo I TAABSII. Ardayda meel
              walba ayay joogaan—gobollada Soomaaliya, Yurub, iyo Ameerika. Hal
              maalin haddii lagu waayo, aadna soo muuqan weydo ama aad soo
              gudbin weydo waajibaadkii kugu saarnaa, daba-gal xooggan ayaa
              lagugu sameynayaa.
              <span className="font-serif text-4xl text-primary">&quot;</span>
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center ring-2 ring-background">
                  <Image
                    src="/Testimonial-std-khalid.jpeg"
                    alt="Khalid Aw Maalin"
                    width={100}
                    height={100}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background flex items-center justify-center ring-2 ring-background">
                  <LucideStar
                    className="lucide lucide-star h-4 w-4 text-primary"
                    fill="CurrentColor"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">Khalid Aw Maalin</div>
                <div className="text-sm text-secondary-foreground flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/50 text-secondary-foreground h-5">
                    IT Professional
                  </div>
                  @ <span className="text-primary font-medium">Dugsiiye</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 bg-primary/5 p-6 rounded-xl backdrop-blur-sm">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">300+</div>
              <div className="text-sm text-secondary-foreground">
                Students Enrolled
              </div>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full group">
              Hada is diiwaan geli
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
    </div>
  );
}
export default BigCard