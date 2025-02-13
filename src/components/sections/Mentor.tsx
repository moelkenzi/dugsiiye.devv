import { ArrowRight, Building2, CheckCircle, CheckCircle2, CodeXml, Earth, GraduationCap, Play, Rocket, Sparkles, Star, Target, Timer, Trophy, Video } from "lucide-react";

import UniCard from "../ui/uni-card";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import ProgramDurationCard from "../ui/ProgramDurationCard";
import PricingCard from "../ui/pricing-card";
import CustomCard from "../ui/custom-card";
import FaqSection from "./FAQ";
import TestimonialSection from "./Testimonials";
// import BigCard from "../ui/big-card";

const MentorSections = () => {
  return (
    <div className="relative">
      <section className="relative overflow-hidden py-14">
        <div className="container relative">
          <div className="flex min-h-[calc(100vh-var(--banner-height,0px))] flex-col items-center justify-center">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <UniCard
                text="Enrollment Open - Limited Spots Available"
                icon={Sparkles}
              />
              <h1 className="mt-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                Full Stack Software Engineer
              </h1>
              <p className="mt-6 text-xl font-semibold text-gray-600 dark:text-gray-100/85">
                Noqo Full Stack Software Engineer
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/" className="w-full sm:w-auto">
                  <Button
                    variant="magic"
                    size="lg"
                    className="flex w-full md:w-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-base font-semibold">
                      I need this yesterday!
                      <ArrowRight className="lucide lucide-arrow-right ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>
                <Button variant={"cool"} size={"lg"}>
                  Watch Video
                  <ArrowRight className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center justify-center gap-2 rounded-lg border bg-card/50 px-4 py-3 backdrop-blur-sm">
                  <Timer className="lucide lucide-timer h-5 w-5 text-primary" />
                  <span className="text-sm">
                    <strong>67.2</strong> Hours of Content
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-lg border bg-card/50 px-4 py-3 backdrop-blur-sm">
                  <GraduationCap className="lucide lucide-timer h-5 w-5 text-primary" />
                  <span className="text-sm">
                    <strong>Beginner</strong> Level
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto mb-16 w-full max-w-5xl">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden bg-gradient-to-br from-background via-backgrund/95 to-background/90 border-primary/10 ">
                <div className="relative aspect-video cursor-pointer group">
                  <Image
                    height={1000}
                    width={1000}
                    src="/Mentor.png"
                    alt="Hero"
                    className="object-cover absolute w-full h-full inset-0"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                      <Play className="lucide lucide-play h-8 w-8 text-primary fill-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-8  ">
                  <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Daawo video-gan si aad u hesho xogta mentorship-ka oo
                    dhameystiran.
                  </h3>
                  <p className="text-muted-foreground font-medium mb-6">
                    Video-gan waxaan ku sharxeynaa wax walba oo aad u baahan
                    tahay inaad ka ogaato barnaamijka mentorship-ka, annagoo ka
                    jawaabi doona dhammaan su&apos;aalaha la isweydiin karo.
                  </p>
                  <div className="flex justify-center gap-4 flex-col sm:flex-row">
                    <Link href="/mentorship#pricing">
                      <Button
                        variant="magic"
                        size="lg"
                        className="flex w-full md:w-auto"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2 text-base font-semibold">
                          I need this yesterday!
                          <ArrowRight className="lucide lucide-arrow-right ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </Link>
                    <Button variant="cool" size={"lg"}>
                      <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                        Watch Video
                        <Play className="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl gap-8 pb-24 md:grid-cols-2 lg:grid-cols-3">
              <div className="transform-none">
                <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <CodeXml className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Real-World Projects
                    </h3>
                    <p className="text-muted-foreground">
                      Build production-grade applications that solve real
                      business problems
                    </p>
                    <Link
                      href="/mentorship#pricing"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors"
                    >
                      <Button variant={"link"}>
                        I&apos;m interested
                        <ArrowRight className="lucide lucide-arrow-right ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="transform-none">
                <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Flexible Schedule
                    </h3>
                    <p className="text-muted-foreground">
                      Learn at your own pace with flexible scheduling options
                    </p>
                    <Link
                      href="/mentorship#pricing"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors"
                    >
                      <Button variant={"link"}>
                        I&apos;m interested
                        <ArrowRight className="lucide lucide-arrow-right ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="transform-none">
                <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Career Support
                    </h3>
                    <p className="text-muted-foreground">
                      Get help with job search, interviews, and career
                      advancement
                    </p>
                    <Link
                      href="/mentorship#pricing"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors"
                    >
                      <Button variant={"link"}>
                        I&apos;m interested
                        <ArrowRight className="lucide lucide-arrow-right ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-muted-foreground  px-4 py-1.5 text-base ">
                  <Trophy className="h-4 w-4 mr-2" />
                  Sanadkii 2-aad
                </div>
                <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-4 py-1.5 text-base">
                  <Star className="h-4 w-4 mr-2" />
                  4.9/5 Rating
                </div>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Ka bilow zero
                  </span>
                  <br />
                  ilaa aad ka noqoto
                  <br />
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The Fullstack Software Engineer Mentorship waa program aan ugu
                  talagalnay in aan ku hormarino xirfadlayda soomaaliyeed oo aan
                  soo saarno dhalinyaro Full Stack Developers ah.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg transform-none">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Ka bilow zero</div>
                    <div className="text-sm text-muted-foreground">
                      Uma baahnid in aad aqoon hore u leedahay programming-ka.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg transform-none">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">
                      Uma baahnid in aad tahay arday IT
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Uma baahnid in aad tahay arday IT ah ama aad barato
                      kuliyadda IT-ga.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg transform-none">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Support joogto ah </div>
                    <div className="text-sm text-muted-foreground">
                      Team kuu heellan oo mar walba kaa caawin doona
                      dhibaatooyinka ku soo wajaha.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg transform-none">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Hal Package</div>
                    <div className="text-sm text-muted-foreground">
                      Qaybta ugu fiican program-kan waa in uu ka bilowdo basics
                      ilaa advanced, uma baahnid in aad ku dhex wareegto ilo
                      kale.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/mentorship#pricing" className="w-full sm:w-auto">
                  <Button variant={"magic"} size={"lg"}>
                    I Diiwaan geli
                    <Rocket className="ml-2 h-4 w-4 transition-all group-hover:rotate-12" />
                  </Button>
                </Link>
                <Button variant={"outline"} size={"lg"}>
                  Nala soo xiriir
                </Button>
              </div>
              <div className="pt-8 flex items-center gap-12">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    300+
                  </div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
            <ProgramDurationCard />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-96 w-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-1/4 h-96 w-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mx-auto max-w-3xl text-center ">
              <UniCard text="Sababaha" icon={Sparkles} />
              <h2 className="font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 text-4xl">
                Sababaha aan programmkan u aas aasnay
              </h2>
              <p className="text-xl text-muted-foreground">
                Waxaan Jira caqabado xoogan oo soo wajahaya qofka marka uu
                baranayo programming-ka.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 pb-24 md:grid-cols-2">
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Wadada Saxda ah
                  </h3>
                  <p className="text-muted-foreground">
                    Caqabadaha ugu xoogan ee hada jira waxaa kamid ah in qofka
                    markii uu isku dayo in barto programming-ka ay ku adagtahay
                    in uu helo qof haga oo u sheega wadada saxda ah.
                  </p>
                  <Link
                    href="/mentorship#pricing"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Button variant={"link"}>
                      Hadda is diwaangeli
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Wadada Saxda ah
                  </h3>
                  <p className="text-muted-foreground">
                    Caqabadaha ugu xoogan ee hada jira waxaa kamid ah in qofka
                    markii uu isku dayo in barto programming-ka ay ku adagtahay
                    in uu helo qof haga oo u sheega wadada saxda ah.
                  </p>
                  <Link
                    href="/mentorship#pricing"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Button variant={"link"}>
                      Hadda is diwaangeli
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Wadada Saxda ah
                  </h3>
                  <p className="text-muted-foreground">
                    Caqabadaha ugu xoogan ee hada jira waxaa kamid ah in qofka
                    markii uu isku dayo in barto programming-ka ay ku adagtahay
                    in uu helo qof haga oo u sheega wadada saxda ah.
                  </p>
                  <Link
                    href="/mentorship#pricing"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    <Button variant={"link"}>
                      Hadda is diwaangeli
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Wadada Saxda ah
                  </h3>
                  <p className="text-muted-foreground">
                    Caqabadaha ugu xoogan ee hada jira waxaa kamid ah in qofka
                    markii uu isku dayo in barto programming-ka ay ku adagtahay
                    in uu helo qof haga oo u sheega wadada saxda ah.
                  </p>
                  <Link
                    href="/mentorship#pricing"
                    className="mt-4 inline-flex items-start text-sm font-medium text-primary"
                  >
                    <Button variant={"link"}>
                      Hadda is diwaangeli
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl">{/* <BigCard /> */}</div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 h-96 w-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-1/4 h-96 w-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            {/* <div className=""></div> */}
            <UniCard text="Sabab" icon={Sparkles} />
            <h1 className="font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 text-4xl">
              4 Sabab oo aad u baranysid Software Engineer!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-100/85 font-semibold">
              Waxaa jira sababo badan oo aad u baranayso software engineering,
              halkan waxaan ku soo bandhigaynaa 4-ta ugu muhiimsan
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 pb-24 md:grid-cols-2">
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="bg-icon">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Working as a Developer for a Company
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100/85/75 font-semibold">
                    In aad la shaqayso company taasi oo ah waxyaalaha ugu
                    horeeya ee qofka ka saacidaya in uu xaliyo problems real
                    world ah sidoo kalena hela high paying income sidoo kalena
                    fahma sida suuqa uu u shaqeeyo.
                  </p>
                  <Button
                    variant={"link"}
                    className="mt-4 px-0 flex items-center text-sm font-medium text-primary cursor-pointer"
                  >
                    I&apos;m interested
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="bg-icon">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Working as a Developer for a Company
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100/85/75 font-semibold">
                    In aad la shaqayso company taasi oo ah waxyaalaha ugu
                    horeeya ee qofka ka saacidaya in uu xaliyo problems real
                    world ah sidoo kalena hela high paying income sidoo kalena
                    fahma sida suuqa uu u shaqeeyo.
                  </p>
                  <Button
                    variant={"link"}
                    className="mt-4 px-0 flex items-center text-sm font-medium text-primary cursor-pointer"
                  >
                    I&apos;m interested
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="bg-icon">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Working as a Developer for a Company
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100/85/75 font-semibold">
                    In aad la shaqayso company taasi oo ah waxyaalaha ugu
                    horeeya ee qofka ka saacidaya in uu xaliyo problems real
                    world ah sidoo kalena hela high paying income sidoo kalena
                    fahma sida suuqa uu u shaqeeyo.
                  </p>
                  <Button
                    variant={"link"}
                    className="mt-4 px-0 flex items-center text-sm font-medium text-primary cursor-pointer"
                  >
                    I&apos;m interested
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="text-card-foreground shadow-sm group relative h-full overflow-hidden rounded-xl border border-primary/10 bg-white/80 dark:bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03] hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="bg-icon">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Working as a Developer for a Company
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100/85/75 font-semibold">
                    In aad la shaqayso company taasi oo ah waxyaalaha ugu
                    horeeya ee qofka ka saacidaya in uu xaliyo problems real
                    world ah sidoo kalena hela high paying income sidoo kalena
                    fahma sida suuqa uu u shaqeeyo.
                  </p>
                  <Button
                    variant={"link"}
                    className="mt-4 px-0 flex items-center text-sm font-medium text-primary cursor-pointer"
                  >
                    I&apos;m interested
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="b"></div>
          <Link href="/mentorship#pricing" className="flex justify-center">
            <Button variant={"magic"}>
              Bilow Safarka
              <ArrowRight className="h-4 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden"></section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <UniCard text="Ku Baro Meel Walba" icon={Earth} />
            <h3 className="font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 text-4xl">
              Sidee Loo Qaadanayaa Cashirada
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-100/85">
              Si tayada programmka loo xaqiijiyo sido kalena qof walba uu ku
              imaado xiligiisa uu firaqada helyo waxaan go&apos;aansanay in
              cashirada la duubo oo qofka si seamlessly uu ku qaato.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10  flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Video className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">
                      Cashirada Duuban
                    </div>
                    <p className="text-gray-600 dark:text-gray-100/85">
                      Cashirada waxaa lagu duubayaa qaab interactive ah, section
                      walba waxaa la socda exercises iyo notes si aad u hesho
                      qaab video iyo qaab qoran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10  flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Video className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">
                      Cashirada Duuban
                    </div>
                    <p className="text-gray-600 dark:text-gray-100/85">
                      Cashirada waxaa lagu duubayaa qaab interactive ah, section
                      walba waxaa la socda exercises iyo notes si aad u hesho
                      qaab video iyo qaab qoran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10  flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Video className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">
                      Cashirada Duuban
                    </div>
                    <p className="text-gray-600 dark:text-gray-100/85">
                      Cashirada waxaa lagu duubayaa qaab interactive ah, section
                      walba waxaa la socda exercises iyo notes si aad u hesho
                      qaab video iyo qaab qoran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transform-none">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10  flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Video className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-2">
                      Cashirada Duuban
                    </div>
                    <p className="text-gray-600 dark:text-gray-100/85">
                      Cashirada waxaa lagu duubayaa qaab interactive ah, section
                      walba waxaa la socda exercises iyo notes si aad u hesho
                      qaab video iyo qaab qoran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative transform-none">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 text-4xl">
                Nidaamka Waxbarashada
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-100/85 font-semibold">
                Hab waxbarasho oo si fiican loogu habeeyay in aad si fudud wax
                ku barato
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 relative group">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary/10  flex items-center justify-center ring-2 ring-background">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div className="mb-4 h-10 w-10 rounded-lg bg-primary/10  flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold mb-2">Daawo Cashirada</h4>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-100/85/75">
                  Ka faa&apos;idayso cashirada video-ga ah ee si taxadar leh loo
                  duubay.
                </p>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 relative group">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary/10  flex items-center justify-center ring-2 ring-background">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div className="mb-4 h-10 w-10 rounded-lg bg-primary/10  flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold mb-2">Daawo Cashirada</h4>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-100/85/75">
                  Ka faa&apos;idayso cashirada video-ga ah ee si taxadar leh loo
                  duubay.
                </p>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 relative group">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary/10  flex items-center justify-center ring-2 ring-background">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div className="mb-4 h-10 w-10 rounded-lg bg-primary/10  flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold mb-2">Daawo Cashirada</h4>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-100/85/75">
                  Ka faa&apos;idayso cashirada video-ga ah ee si taxadar leh loo
                  duubay.
                </p>
              </div>
              <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300 relative group">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary/10  flex items-center justify-center ring-2 ring-background">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div className="mb-4 h-10 w-10 rounded-lg bg-primary/10  flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold mb-2">Daawo Cashirada</h4>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-100/85/75">
                  Ka faa&apos;idayso cashirada video-ga ah ee si taxadar leh loo
                  duubay.
                </p>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center gap-4">
              <Link href="/mentorship#pricing">
                <Button variant={"magic"} size={"lg"}>
                  Hadda is diiwaan geli
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden"></section>
      <section className="relative py-20 overflow-hidden">
        <TestimonialSection/>x
      </section>
      <section className="relative py-24 overflow-hidden" id="pricing">
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <UniCard
              text="Felixable Payment Plans"
              icon={Sparkles}
            />
            <h2 className="mt-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Invest in Your Future
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-100/85">
              Choose the plan that best fits your learning goals and budget
            </p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <CustomCard />
          </div>
        </div>
      </section>
      {/* <section className="relative py-24 overflow-hidden scroll-mt-20"></section> */}
      <section className="relative py-24"><FaqSection /></section>
    </div>
  );
}
export default MentorSections