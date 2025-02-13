"use client";

import {
  useState,
  createContext,
  useContext,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { FaqItem } from "@/constants/data";
import { ChevronDown } from "lucide-react";

// Create a context to manage FAQ expansion state
const FaqContext = createContext<{
  expandedIndex: number | null;
  setExpandedIndex: (index: number | null) => void;
}>({
  expandedIndex: null,
  setExpandedIndex: () => {},
});

// Provider component to wrap FAQ cards
export const FaqProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <FaqContext.Provider value={{ expandedIndex, setExpandedIndex }}>
      {children}
    </FaqContext.Provider>
  );
};

interface FaqCardProps {
  /** The FAQ item to display */
  faq: FaqItem;
  index: number;
}

const FaqCard = ({ faq, index }: FaqCardProps) => {
  const { expandedIndex, setExpandedIndex } = useContext(FaqContext);
  const isExpanded = expandedIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [faq.answer]);

  const toggleExpand = useCallback(() => {
    setExpandedIndex(isExpanded ? null : index);
  }, [isExpanded, index, setExpandedIndex]);

  // Function to render text with bold spans
  const renderTextWithBoldSpans = (text: string) => {
    // Comprehensive list of keywords to bold
    const boldKeywords = [
      // First FAQ answer keywords
      "Web Development",
      "Mobile Development",
      "AI",
      "Graphic Design",
      "Video Motion",
      "barnaamij dhameystiran",
      "Full Stack Web",
      "Mobile",
      "AI Powered Apps",

      // Other FAQ answer keywords
      "lifetime access",
      "laba sano ah (2 sano)",
      "Haa",
      "group WhatsApp",
      "macalinka koorsada",
      "EVC-Plus",
      "Zaad Service",
      "Sahal",
      "credit",
      "debit card",
      "shahaado rasmi ah",
    ];

    // Create a regex pattern that matches whole words or phrases
    const boldPattern = new RegExp(
      `\\b(${boldKeywords
        .map(
          (k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // Escape special regex characters
        )
        .join("|")})\\b`,
      "gi"
    );

    // Split the text into parts, preserving the matching and non-matching sections
    const parts = text.split(boldPattern);

    return parts.map((part, index) => {
      // Check if the part matches any bold keywords (case-insensitive)
      const isBold = boldKeywords.some(
        (keyword) => part.trim().toLowerCase() === keyword.toLowerCase()
      );

      return isBold ? (
        <span key={index} className="font-semibold text-foreground">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-card/80 shadow-sm hover:shadow-md transition-all duration-300`}
      style={{ backgroundColor: "hsl(var(--card))" }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleExpand}
        className="relative flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
      >
        <span
          className={`font-semibold text-lg transition-colors duration-200 ${
            isExpanded
              ? "text-primary"
              : "text-foreground/90 group-hover:text-primary"
          }`}
        >
          {faq.question}
        </span>

        {/* Chevron Icon */}
        <div
          className={`flex items-center justify-center h-8 w-8 rounded-lg transition-all duration-300 ${
            isExpanded
              ? "bg-primary/10 rotate-45"
              : "bg-primary/5 transform-none group-hover:bg-primary/10"
          }`}
          style={{
            backgroundColor: isExpanded
              ? "hsl(var(--primary) / 0.1)"
              : "hsl(var(--primary) / 0.05)",
          }}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded
                ? "text-primary"
                : "text-primary/70 group-hover:text-primary"
            }`}
          />
        </div>
      </button>

      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-5 text-foreground/80 text-[17px]"
        >
          {renderTextWithBoldSpans(faq.answer)}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
