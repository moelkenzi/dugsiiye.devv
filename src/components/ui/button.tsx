import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline transition-colors",
        cool: "relative min-w-[140px] rounded-lg font-medium transition-all duration-300 bg-background hover:bg-background dark:border-secondary-foreground/20 border-secondary/60 dark:text-secondary-foreground text-secondary shadow-sm shadow-slate-500/10 hover:shadow-slate-100/20 border h-14 px-8 text-lg group inline-flex items-center justify-center w-full md:w-auto font-medium",
        magic:
          "h-11 min-w-[140px] rounded-lg duration-300 border border-transparent bg-primary text-primary-foreground hover:bg-primary/90 hover:border-primary/20 hover:shadow-md group relative px-6 py-3 text-sm font-medium transition-all hover:translate-y-0.5 shadow-lg shadow-primary/20 flex items-center gap-2 backdrop-blur-sm",
        non_magic:
          "h-11 min-w-[140px] duration-300 bg-transparent hover:border-secondary/40 shadow-sm hover:shadow group relative w-full px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 text-base font-medium",
        normal:
          "h-11 min-w-[140px] rounded-lg duration-300 border dark:bg-transparent dark:border-secondary  dark:hover:border-secondary/40 shadow-sm hover:shadow group relative px-6 py-3 sm:py-2.5 text-sm font-medium dark:hover:bg-secondary/5 transition-all hover:translate-y-0.5 w-full sm:w-auto flex justify-center items-center backdrop-blur-sm",
        round_magic:
          "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 group relative px-10 py-7 rounded-full bg-primary/90 hover:bg-primary text-xl",
        round_normal:
          "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 group relative px-10 py-7 rounded-full text-xl",
        xnormal:
          "h-11 min-w-[140px] rounded-lg duration-300 border bg-transparent border-secondary/70 hover:border-secondary/40 shadow-sm hover:shadow group relative px-6 py-3 text-sm font-medium hover:bg-secondary/5 transition-all hover:translate-y-0.5 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto",
        signin:
          "relative h-11 min-w-[120px] px-6 rounded-lg font-medium transition-all duration-300 border bg-transparent dark:border-secondary-foreground/20 dark:text-secondary-foreground hover:bg-secondary/5 hover:border-secondary/20 shadow-sm hover:shadow",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
