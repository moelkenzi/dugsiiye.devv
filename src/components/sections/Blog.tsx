import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import BlogCard from "../ui/blog-card";
import Highlighter from "react-highlight-words";
import { Button } from "../ui/button";

const BlogSection = () => {
  return (
    <div className="relative py-24 ">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/20 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0"></div>
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex flex-col items-center p-3 text-sm font-semibold rounded-lg sm:flex-row md:justify-end sm:px-3 sm:py-1 leading-6 bg-primary/10 text-primary backdrop-blur-sm">
            <Sparkles className="items-center w-5 h-5 mr-2 sm:w-4 sm:h-4" />
            <div className="flex items-center sm:mt-0">
              Somali Tech: Articles & Insights
            </div>
          </div>
          <h2 className="w-full px-4 mt-6 text-3xl font-bold tracking-tight text-center text-transparent sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Latest from Our Somali <br className="hidden lg:block" /> Tech Blog
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            Stay updated with coding tips, AI insights, and tech news—written in
            Somali.
          </p>
        </div>
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            link="/#blog/mit-license"
            image="/Blog-MIT-License.png"
            openSourceText="Open Source"
            date="Jan 14, 2025"
            title="Waa Maxay MIT License, Maxaase Aan U Doortaa"
            paragraph="Mararka qaarkood, marka aan horumariyo barnaamij ama kood, waxaan isweydiiyaa: 'Sidee baan dadka ugu fududeyn karaa inay adeegsadaan, wax ka bartaan, ama xataa wax ka beddelaan arrintan aan sameeyay?' Aniga oo aad u jecel xurriyadda iyo il-furnaanta (open-source), waxaan doortay MIT License."
            authorName="Mr Sharafdin"
            authorImage="/Avatar-Mr-sharfdiin.png"
            readTime="3 min read"
            readMoreText="Read in Somali"
          />
          <BlogCard
            link="/#blog/another-blog"
            image="/Blog-Best-Programming-language.jpg"
            openSourceText="Tech Insights"
            date="Feb 1, 2025"
            title="10-ka Programming Languages Ugu Fiican 2025"
            paragraph="Beri hore, caalamka barnaamij-samayntu wuxuu ahaa meel si gaar ah loo yaqaan, inta badanna waxaa loo arkayay xirfad adag oo ay helaan dad kooban.z"
            authorName="Mr Sharafdin"
            authorImage="/Avatar-Mr-sharfdiin.png"
            readTime="9 min read"
            readMoreText="Continue Reading"
          />
          <BlogCard
            link="/blog/third-blog"
            image="/Blog-Ethical-hacking.jpg"
            date="Mar 15, 2025"
            title="Sidee Loo Noqdaa Ethical Hacker"
            paragraph={
              <>
                Erayga{" "}
                <Highlighter
                  highlightClassName="bg-green-100/10 text-green-600 dark:text-green-300/50 px-1 rounded font-bold"
                  searchWords={["Hacker"]}
                  autoEscape={true}
                  textToHighlight="Hacker"
                />{" "}
                waxa uu markii hore qeexayay barnaamij-sameeye (programmer) xirfad leh ee aad u yaqaana code-ka mishiinka iyo hababka hawlgalka (operating systems) ee kombuyuutarka.
              </>
            }
            authorName="Mr Sharafdin"
            authorImage="/Avatar-Mr-sharfdiin.png"
            readTime="14 min read"
          />
        </div>
        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/#blog">
            <Button variant="magic" size="lg" >
              <span className="relative z-10 flex items-center justify-center œmd:gap-2 text-xs sm:text-base font-semibold">
                Read More Articles
              </span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BlogSection