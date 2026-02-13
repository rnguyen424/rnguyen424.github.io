import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCard from "@/components/wrapped/HeroCard";
import StatsSection from "@/components/wrapped/StatsSection";
import MemoryGallery from "@/components/wrapped/MemoryGallery";
import TimelineSection from "@/components/wrapped/TimelineSection";
import ClosingCard from "@/components/wrapped/ClosingCard";
import MusicPlayer from "@/components/wrapped/MusicPlayer";

const sections = [HeroCard, StatsSection, MemoryGallery, TimelineSection, ClosingCard];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const autoScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (!container || index < 0 || index >= sections.length) return;
    isScrolling.current = true;
    setCurrentSection(index);
    const target = container.children[index] as HTMLElement;
    target.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Snap scroll on wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 30) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < -30) {
        scrollToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [currentSection]);

  // Touch support
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (delta > 50) scrollToSection(currentSection + 1);
      else if (delta < -50) scrollToSection(currentSection - 1);
    };

    const container = containerRef.current;
    container?.addEventListener("touchstart", handleTouchStart, { passive: true });
    container?.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection]);

  return (
    <div className="h-screen bg-background overflow-hidden relative">
      {/* Progress dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className="group relative"
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full border border-muted-foreground/40 transition-all duration-300"
              animate={{
                scale: currentSection === i ? 1.4 : 1,
                backgroundColor: currentSection === i ? "hsl(var(--primary))" : "transparent",
                borderColor: currentSection === i ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 gradient-primary z-50"
        animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <MusicPlayer currentSection={currentSection} />

      <div ref={containerRef} className="h-screen overflow-hidden">
        {sections.map((Section, i) => (
          <div key={i} className="h-screen w-full overflow-y-auto">
            <Section />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
