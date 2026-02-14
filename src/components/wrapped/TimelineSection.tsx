import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import covidMuseum from "@/assets/timeline/covid-museum.png";
import collegeHalloween from "@/assets/timeline/college-halloween.png";
import firstConcert from "@/assets/timeline/first-concert.png";
import internshipNyc1 from "@/assets/timeline/internship-nyc-1.png";
import internshipNyc2 from "@/assets/timeline/internship-nyc-2.png";
import destin from "@/assets/timeline/destin.png";
import lollapalooza from "@/assets/timeline/lollapalooza.png";
import mexico from "@/assets/timeline/mexico.png";
import disney from "@/assets/timeline/disney.png";
import ryanGrad from "@/assets/timeline/ryan-grad.png";
import beabadoobee from "@/assets/timeline/beabadoobee.png";
import syGrad from "@/assets/timeline/sy-grad.png";
import vietnam from "@/assets/timeline/vietnam.jpg";
import cardShow from "@/assets/timeline/card-show.png";
import austin from "@/assets/timeline/austin.png";
import htown from "@/assets/timeline/htown.png";

const milestones = [
  { date: "Aug 2020", title: "COVID Year", desc: "First Museum Visit!", gradient: "gradient-primary", image: covidMuseum },
  { date: "Oct 2021", title: "First Year At College Together", desc: "First Halloween Party!", gradient: "gradient-cool", image: collegeHalloween },
  { date: "Feb 2022", title: "First Concert & Solo Trip", desc: "TWICE!!", gradient: "gradient-warm", image: firstConcert },
  { date: "Jul 2022", title: "End of Ryan's Internship!", desc: "Trip to Massachusetts and New York", gradient: "gradient-golden", image: internshipNyc1 },
  { date: "Jul 2023", title: "First BIG Family Trip", desc: "Destin FL", gradient: "gradient-primary", image: destin },
  { date: "Aug 2023", title: "First Music Festival", desc: "Lollapalooza", gradient: "gradient-cool", image: lollapalooza },
  { date: "Mar 2024", title: "First Trip Outside the US", desc: "Huatulco Mexico!", gradient: "gradient-warm", image: mexico },
  { date: "May 2024", title: "Ryan College Graduation", desc: "Time to work!", gradient: "gradient-golden", image: ryanGrad },
  { date: "Dec 2024", title: "Disney Trip!", desc: "The happiest place on earth", gradient: "gradient-primary", image: disney },
  { date: "Apr 2025", title: "Beabadoobee Round 2!", desc: "Dallas Trip", gradient: "gradient-cool", image: beabadoobee },
  { date: "May 2025", title: "Sy College & EMT Graduation!", desc: "Double celebration", gradient: "gradient-warm", image: syGrad },
  { date: "Jul 2025", title: "Vietnam Trip", desc: "Back to the motherland!", gradient: "gradient-golden", image: vietnam },
  { date: "Dec 2025", title: "First Card Show!", desc: "Collect-A-Con San Antonio", gradient: "gradient-primary", image: cardShow },
  { date: "Jan 2026", title: "On the Hunt to Move", desc: "Houston vs. Austin", gradient: "gradient-cool", image: austin },
  { date: "Feb 2026", title: "Time to Move to H-Town", desc: "A brand new chapter begins", gradient: "gradient-warm", image: htown },
];

const AUTO_ADVANCE_MS = 4000;

interface TimelineSectionProps {
  isActive?: boolean;
}

const TimelineSection = ({ isActive }: TimelineSectionProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Reset to beginning when section becomes active
  useEffect(() => {
    if (isActive) {
      setDirection(-1);
      setCurrent(0);
    }
  }, [isActive]);

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % milestones.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + milestones.length) % milestones.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [next]);

  const m = milestones[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[5%] left-[10%] w-[400px] h-[400px] rounded-full gradient-golden opacity-15 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] rounded-full gradient-cool opacity-15 blur-[140px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full gradient-warm opacity-10 blur-[100px]"
          animate={{ scale: [0.9, 1.2, 0.9] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--muted-foreground)), hsl(var(--muted-foreground)) 1px, transparent 1px, transparent 80px)' }} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 relative z-10"
      >
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Our Greatest Hits
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
          Our <span className="text-gradient-primary">Timeline</span>
        </h2>
      </motion.div>

      {/* Timeline progress bar */}
      <div className="relative z-10 w-full max-w-2xl mb-6">
        <div className="flex items-center justify-between gap-0.5">
          {milestones.map((ms, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="flex-1 group relative"
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  i <= current ? ms.gradient : "bg-muted-foreground/20"
                }`}
              />
              {i === current && (
                <motion.div
                  layoutId="timeline-dot"
                  className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${ms.gradient} border-2 border-background shadow-lg`}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] font-body text-muted-foreground">{milestones[0].date}</span>
          <span className="text-[10px] font-body text-muted-foreground">{milestones[milestones.length - 1].date}</span>
        </div>
      </div>

      {/* Card carousel */}
      <div className="relative z-10 w-full max-w-lg flex items-center justify-center" style={{ minHeight: 420 }}>
        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-16 z-20 p-2 rounded-full bg-muted/60 backdrop-blur-sm hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full text-center"
          >
            {/* Image */}
            {m.image && (
              <div className="mb-4 flex justify-center">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-64 h-64 md:w-72 md:h-72 object-cover object-top rounded-2xl border border-border/30 shadow-2xl"
                />
              </div>
            )}

            {/* Date badge */}
            <span className={`inline-block text-xs font-bold font-body uppercase tracking-widest px-3 py-1 rounded-full ${m.gradient} text-primary-foreground mb-3`}>
              {m.date}
            </span>

            {/* Title & desc */}
            <h3 className="font-display text-2xl md:text-3xl font-black text-foreground leading-tight mb-1">
              {m.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground">{m.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-0 md:-right-16 z-20 p-2 rounded-full bg-muted/60 backdrop-blur-sm hover:bg-muted transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Counter */}
      <p className="relative z-10 mt-4 text-xs font-body text-muted-foreground">
        {current + 1} / {milestones.length}
      </p>
    </section>
  );
};

export default TimelineSection;
