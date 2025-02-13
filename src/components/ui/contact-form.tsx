import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="text-card-foreground shadow-sm relative overflow-hidden rounded-2xl border border-primary/5 bg-background/20 dark:bg-card/20 backdrop-blur-xl p-8 lg:p-10 transition-all duration-300 hover:border-primary/10 hover:bg-background/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50"></div>
      <form className="relative space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Send Us a Message
          </h2>
          <p className="text-secondary-foreground/65 font-medium">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <input
                name="fullName"
                placeholder="John Jack"
                className="flex w-full border px-4 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 h-12 bg-white/50 dark:bg-background/50 border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+252 XXX XXX XXX"
                className="flex w-full border px-4 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 h-12 bg-white/50 dark:bg-background/50 border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <input
              name="email"
              className="flex w-full border px-4 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 h-12 bg-white/50 dark:bg-background/50 border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              placeholder="username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">About</label>
            <input
              name="about"
              className="flex w-full border px-4 py-2 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 h-12 bg-white/50 dark:bg-background/50 border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              placeholder="What's this regarding?"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Message
            </label>
            <textarea
              name="Message"
              placeholder="Tell us more about your inquiry..."
              className="flex w-full border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] resize-none bg-white/50 dark:bg-background/50 border-border rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/20"
            ></textarea>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground px-8 w-full h-12 bg-primary hover:bg-primary/90 relative overflow-hidden group transition-all duration-300 rounded-xl"
            type="submit"
          >
            <span className="flex items-center justify-center gap-2 font-bold text-base">
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm