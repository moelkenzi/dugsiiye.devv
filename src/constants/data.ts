export type NavigationLink = {
  name: string;
  href: string | undefined;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CourseInfo = {
  course: number;
  link: string;
  image: string;
  title: string;
  description: string;
  instructor: string;
  instructorImage: string;
  price: number;
  discountedPrice: number;
  rating: number;
  duration: string;
  category: string;
  level: string;
  isVerified?: boolean;
};

export type SkillInfo = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export const NavLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Mentorship", href: "/mentorship" },
  { name: "Courses", href: "/#courses" },
  { name: "Blog", href: "/#blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export type TestimonialInfo ={
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  tag?: string;
}

export const SkillCardData: SkillInfo[] = [
  {
    id: 1,
    icon: "lucide-globe",
    title: "Learn in Somali",
    description:
      "Break language barriers with high-quality, Somali-led courses that make advanced tech topics accessible.",
  },
  {
    id: 2,
    icon: "lucide-code",
    title: "Master the Full Stack",
    description:
      "From HTML & CSS to React, Node, and even AI—follow structured paths to become a well-rounded developer.",
  },
  {
    id: 3,
    icon: "lucide-rocket",
    title: "Job-Ready Skills",
    description:
      "Build real projects that show employers you can solve real problems—no fluff, just practical experience.",
  },
  {
    id: 4,
    icon: "lucide-users",
    title: "Personalized Mentorship",
    description:
      "Get live guidance from experienced Somali mentors—ask questions, get feedback, and never feel lost.",
  },
  {
    id: 5,
    icon: "lucide-book-open",
    title: "Flexible & Accessible",
    description:
      "From HTML & CSS to React, Node, and even AI—follow structured paths to become a well-rounded developer.",
  },
  {
    id: 6,
    icon: "lucide-sparkles",
    title: "Thriving Community",
    description:
      "Learn at your own pace with lifetime course access—study anytime, anywhere.",
  },
];

export const MentorCardInfo = [
  {
    id: 1,
    icon: "lucide-globe",
    title: "Learn in Somali",
    description: "Break language barriers with high-quality, Somali-led courses that make advanced tech topics accessible.",
  },
]

export const CourseData: CourseInfo[] = [
  {
    course: 1,
    link: "/",
    category: "Web Development",
    level: "intermediate",
    duration: "12.8 hours",
    rating: 4.5,
    image: "/Courses-saas-app.jpg",
    title: "AI-Powered SaaS with Next.js, Typescript, Prisma & OpenAI",
    description:
      "Unlock the potential of AI in SaaS development with this comprehensive course, blending Next.js, TypeScript, Prisma, and OpenAI. From foundational concepts to advanced techniques, learn to build intelligent, scalable web applications that drive innovation and efficiency in the digital space.",
    instructorImage: "/Avatar-Mc-hamuuda.png",
    instructor: "Mc hamuuda",
    isVerified: true,
    price: 30,
    discountedPrice: 18,
  },
  {
    course: 2,
    link: "/",
    category: "Graphic Design",
    level: "beginner",
    duration: "2.9 hours",
    rating: 4.5,
    image: "/Courses-Graphic_design.jpeg",
    title: "Graphic Design Masterclass | Beginners Guide to Adobe Photoshop CC",
    description:
      "The Ultimate Graphic Design Course Which Covers Photoshop CC ",
    instructorImage: "/Avatar-Qaandiid-ahmed.jpg",
    instructor: "Qaandiid Ahmed",
    isVerified: true,
    price: 30,
    discountedPrice: 18,
  },
  {
    course: 3,
    link: "/",
    category: "Data Science",
    level: "beginner",
    duration: "1.3 hours",
    rating: 4.5,
    image: "/Courses-data_Visualization.jpeg",
    title: "Step By Step Data Visualization Using Tableau 2024",
    description: "Ready to transform data into eye-catching stories",
    instructorImage: "/Avatar-Abdishakur.jpeg",
    instructor: "Abdishakur",
    price: 30,
    isVerified: true,
    discountedPrice: 18,
  },
  {
    course: 4,
    link: "/",
    category: "retouching",
    level: "beginner",
    duration: "3.9 hours",
    rating: 4.5,
    image: "/Courses-retouching.jpeg",
    title: "Advanced Portrait Retouching Course",
    description:
      "Course-kaan waxaan uga hadli doonaa dayactirka sawirada qaab professional ah oo dabiici ah sido kale wuxuu ku baxaya Afkeenna Hooyo.",
    instructorImage: "/Avatar-Zaki-Mohamed.jpg",
    instructor: "Zaky Mohamed",
    isVerified: true,
    price: 50,
    discountedPrice: 30,
  },
  {
    course: 5,
    link: "/",
    category: "Graphic Design",
    level: "beginner",
    duration: "28.3 hours",
    rating: 4.5,
    image: "/Courses-ReactJS-masterclass.jpg",
    title:
      "React Master Class with Redux, Hooks, Firebase, Tailwind css, GraphQL",
    description:
      "Learn The most valuable skill in web development from scratch Learn Reactjs, Hooks, Redux, React Routing, Firebase, Graphql, Tailwindcss, Styled Component, Recoil, and Much More.",
    instructorImage: "/Avatar-Mc-hamuuda.png",
    instructor: "Mc Hamuuda",
    isVerified: true,
    price: 40,
    discountedPrice: 24,
  },
  {
    course: 6,
    link: "/",
    category: "mobile development",
    level: "beginner",
    duration: "12 hours",
    rating: 4.5,
    image: "/Courses-mobile-development-flutter.jpeg",
    title: "Flutter Mobile App Development With Dart",
    description:
      "In this course, you'll learn how to use Flutter to quickly develop high-quality, interactive mobile applications for iOS and Android devices. ",
    instructorImage: "/Avatar-Ahmed-Tiger.jpeg",
    instructor: "Ahmed Tiger",
    isVerified: true,
    price: 30,
    discountedPrice: 18,
  },
  {
    course: 7,
    link: "/",
    category: "Web Devlopment",
    level: "beginner",
    duration: "3.2 hours",
    rating: 4.5,
    image: "/Courses-modern-htm-and-css.jpg",
    title: "Modern HTML and CSS For Beginners",
    description:
      "Unlock the World of Web Development: Master HTML & CSS from Scratch.",
    instructorImage: "/favicon.png",
    instructor: "Abdirizak Haji",
    isVerified: true,
    price: 25,
    discountedPrice: 15,
  },
  {
    course: 8,
    link: "/",
    category: "Web Devlopment",
    level: "intermediate",
    duration: "23.8 hours",
    rating: 4.5,
    image: "/Courses-Php-for-professionals.jpg",
    title: "Php For Professionals",
    description:
      "Baro Php Adiga Oo Dhisaya Project Real Life Kaasi oo Kuu Sahlaya in Aad Dhisto Any Project oo aad u baahantahay .",
    instructorImage: "/Avatar-Mc-hamuuda.png",
    instructor: "Mc Hamuuda",
    isVerified: true,
    price: 30,
    discountedPrice: 18,
  },
  {
    course: 9,
    link: "/",
    category: "Web Devlopment",
    level: "beginner",
    duration: "12.8 hours",
    rating: 4.5,
    image: "/Courses-modern-JS.jpg",
    title: "Modern JavaScript For Beginners",
    description:
      "Dhis Projects real life ah kuwaasi oo aad ku noqon karto professional javascript developer",
    instructorImage: "/Avatar-Mc-hamuuda.png",
    instructor: "Mc Hamuuda",
    isVerified: true,
    price: 25,
    discountedPrice: 15,
  },
];

export const TestimonialCardData: TestimonialInfo[] = [
  {
    rating: 5,
    tag: "Leading tech initiatives",
    quote:
      "Dugsiiye waa madal waxbarasho oo casri ah oo bixisa koorsooyin sare iyo hagid. Macallimiin khubaro ah iyo casharo tayo leh oo aduunka la jaanqaadaya ayaa ka dhigaya meesha ugu habboon ee lagu hormarin karo laguna baran karo xirfadaha casriga, sida software developementiga iwm.",
    image: "/Testimonial-std-faarax.jpeg",
    name: "Faarax Cabdulaahi Cali",
    role: "Mentorship Program Student",
  },
  {
    rating: 5,
    tag: "Expanded tech expertise",
    quote:
      "Aad ayan ugu qanacsanahay dadaalka layaabka leh oo ay nala garab taaganyihiin macalin hamuuda iyo dhamman teamka support-ga. Courses badan oo maraykan iyo india-ba waa soo maray, waxaa aan kula kulmay dugsiiye waa qaab ka duwan qaababka kale.",
    image: "/Testimonial-std-khalid.jpeg",
    name: "Khalid Maalin",
    role: "IT Professional",
  },
  {
    rating: 5,
    tag: "Successfully transitioned to tech",
    quote:
      "Waxyaalaha aan marnaba ilaabaynin ayaa waxay tahay in aan marnaba ilaabaynin in nalaga dhigay milkiilayaasha dugsiiye. Dugsiiye waxa kaliya oon ku arkay waxa weeye inaad si dhab ah oo kala danbeyn leh oo isla xisaabtan leh aan wax ugu bartay.",
    image: "/Testimonial-std-ayan.jpg",
    name: "Ayaan Jaamac",
    role: "Mentorship Program Student",
  },
  {
    rating: 5,
    tag: "Leading tech initiatives",
    quote:
      "Waxaan nasiib u yeeshay inaan ku soo biiro barnaamijka mentorship-ka. Barnaamijkan wuxuu ii noqday waddo cad oo ii suuragaliyay inaan ogaado halka aan ka bilaabi lahaa barashada full stack software engineering.",
    image: "/Testimonial-std-nasro.jpg",
    name: "Nasro Muse",
    role: "Lead Mentorship Program",
  },
  {
    rating: 5,
    tag: "Trainer at Maan Baahiye",
    quote:
      "aqiiqatan, Dugsiiye marka laga hadlayo aniga nolosheyda kaalin weyn ayuu ku leeyahay. Waxyaabaha waxbarashadeyda aan wax ku baranayey iyo hadda inta yar oo aan jaamacadda ku jiro, wax aanan ka faa'iidin ayaan Dugsiiye ka faa'iiday. Aniga oo Form 2 ah ayaan kusoo biiray website-ka Dugsiiye, indhahana ayaa ii furmay waxyaabo badan oo aanan af Soomaali ku heli jirin in aan af Soomaali ku helo. Hadda aniga ayaa ah trainer oo dad badan ayaan tababaray. Mahaddaasi waxaa iska leh team-ka Dugsiiye.",
    image: "/favicon.png",
    name: "Abubakar",
    role: "Trainer",
  },
  {
    rating: 5,
    tag: "Now working as Full Stack Developer",
    quote:
      "4-ta sano een jaamacada dhiganayay meel aanan isku dayin in aan programming-ka ka barto majirto lakin way ii suuro gali wayday. Markaan programm-ka mentorship-ka dugsiiye kusoo biiray asbuucii 1-aad ayay wax walba igu cadaadeen iyo meesha aan hiigsan doono.",
    image: "/Testimonial-std-mustafa.jpg",
    name: "Mustafe Hersi",
    role: "Full Stack Developer at Beko",
  },
  {
    rating: 5,
    tag: "Successfully transitioned to tech",
    quote:
      "Semester 3 anigo ah ayaan qaatay javascript waan fahmi waayay magaalada dhan waan baaray meel aan ka barto javascript , waxaan helay in dugsiiye uu bixiyo programming-ka , markaa saas ugu soo biiray saan u fahmay javascript inaba caadi mahayn , cashir walba iyo resources-kiisa wuu wataa , cashir walba clear ayuu ahaa wuu kala baxsanaa , course-kaas kaliya maahan courses kalena waa ka qaatay al xamdulilah hada dhanka programming-ka aad ayaan ugu wanaagsanhahay.",
    image: "/Testimonial-std-istar.jpg",
    name: "Istar",
    role: "Mentorship Program Student",
  },
  {
    rating: 5,
    tag: "Leadership and teamwork skills",
    quote:
      "Intii aan ku jiray barnaamijka Mentorship-ka ee Dugsiiye, waxaan bartay xirfado muhiim ah sida Communions, Teamwork, iyo isticmaalka aaladaha casriga ah ee Software development. Barnaamijku wuxuu ii abuuray yool cad, faham qoto dheer, iyo waddo aan si joogto ah ugu horumariyo xirfadahayga Software development.",
    image: "/Testimonial-std-maxamed.jpeg",
    name: "Mohamed Abdirahim Mohamed",
    role: "Mentorship Program Student",
  },
  {
    rating: 5,
    tag: "Success Student",
    quote:
      "Mentor ka dugsiiye si dan ugu soo biiray wax badan aa iska kee bedelay waxan barta collaborations css html iyo js oo aan hadeer projects ku dhisi karo. Waxaan aad ugu amana caawinada joogtada ah, talada iyo ka war qabka. Aad ayaad ugu mhdsntihiin team dugsiiye gaar ahaan ustaad maxamuud cusman xamuudi.",
    image: "/Testimonial-std-hawo.jpeg",
    name: "Hawa muhumed ali",
    role: "Mentorship Program Student",
  },
  {
    rating: 5,
    tag: "Developer",
    quote:
      "2021 ayaan kuso biiray dugsiiye dhowr courses ayaan ka qaatay webiste-ka , courseka indhaha ii furay wuxu ahaa course-ka Php for professionals , 3 bil guduheeda ayaan systemkay-ga igu horeeyay ku dhisay lacag fiicana waa ka qabtay , cilmiga aan dugsiiye ka faa'iday cilmi aan soo koobi karo maahan , 100% hada course-kaais qaadatid resouces kale xitaa uma baahnaysid.",
    image: "/favicon.png",
    name: " Muscab gaafow",
    role: "Developer",
  },
  // Add more testimonials here as needed
];

export const FAQ: FaqItem[] = [
  {
    question: "Muxuu qabtaa Website-ka Dugsiiye?",
    answer:
      "Website-ka Dugsiiye waa bog lagu barto cilmiga IT-ga, gaar ahaan Web Development, Mobile Development, AI, Graphic Design, iyo Video Motion. Sidoo kale, waxa uu bixiyaa barnaamij dhameystiran (comprehensive program) oo lagu baranayo Full Stack Web, Mobile, iyo AI Powered Apps.",
  },
  {
    question:
      "Course-ka haddaan iska diiwaan geliyo, mudo intee le'eg ayey soconaysaa?",
    answer:
      "Dhammaan koorsooyinka ku jira Website-ka waa lifetime access — waligood kama xirmayaan. Waqtiga aad rabto ayaad dib ugu soo laaban kartaa. Marka laga reebo mentorship-ka, waxaad access u leedahay muddo laba sano ah (2 sano) oo dhameystiran.",
  },
  {
    question: "Haddii wax igu adkaadaan, caawimaad ma helayaa?",
    answer:
      "Haa (Absolutely). Marka aad iska diiwaan geliso koorsada, waxaa lagu darayaa group WhatsApp ah oo ay ku jiraan dhammaan asxaabta koorsada kula qaadaneyso. Halkaas waxa kale oo ku jira macalinka koorsada, si aad toos ula hadli karto — qoraal, wicitaan, ama codba.",
  },
  {
    question: "Lacagaha xaggee ayaan kusoo dirayaa?",
    answer:
      "Lacagaha waxaad ku bixin kartaa si toos ah taleefankaaga gacanta adiga oo isticmaalaya EVC-Plus, Zaad Service, ama Sahal. Haddii aad joogto meel ka baxsan Soomaaliya, waxaad sidoo kale isticmaali kartaa credit ama debit card, midka aad heli karto.",
  },
  {
    question: "Miyaan helayaa shahaado markii aan dhameeyo koorsada?",
    answer:
      "Haa. Markaad dhameyso koorsada, waxa aad heli doontaa shahaado rasmi ah (official certificate) caddeyneysa in aad si rasmi ah u dhameysay casharradii loogu talagalay. Taasi waxay kuu fududeynaysaa in aad xirfaddaada kor u qaaddo ama CV-gaaga ku darto.",
  },
];

export const MentorFaq: FaqItem[] = [
  {
    question: "Muxuu qabtaa Mentorship-ka?",
    answer:
      "Mentorship-ka waa lahayn dugsiiye waa baan ugu qanacsanahay dadaalka layaabka leh oo ay nala garab taaganyihiin macalin hamuuda iyo dhamman teamka support-ga.",
  },
]

export const QuickLinks: NavigationLink[] = [
  { name: "Courses", href: "#/courses" },
  { name: "Mentorship", href: "#/mentorship" },
  { name: "Blog", href: "#/blog" },
  { name: "About Us", href: "#/about" },
  { name: "Contact", href: "#/contact" },
  { name: "FAQ", href: "#/faq" },
  { name: "Testimonials", href: "#/testimonials" },
];





