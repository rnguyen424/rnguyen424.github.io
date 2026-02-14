import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Ticket, Sparkles } from "lucide-react";
import surpriseImg from "@/assets/surprise-bruno-mars.jpg";
import brunoMarsTrack from "@/assets/audio/bruno-mars.mp3";

interface SurpriseRevealProps {
  isActive?: boolean;
}

const SurpriseReveal = ({ isActive = false }: SurpriseRevealProps) => {
  const [phase, setPhase] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reset phase and stop audio when leaving this slide
  useEffect(() => {
    if (!isActive) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPhase(0);
    }
  }, [isActive]);

  // Play Bruno Mars when the reveal happens (phase 4) and slide is active
  useEffect(() => {
    if (phase === 4 && isActive && audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        const fadeIn = setInterval(() => {
          if (audioRef.current && audioRef.current.volume < 0.95) {
            audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.05);
          } else {
            clearInterval(fadeIn);
          }
        }, 50);
      }).catch(() => {});
    }
  }, [phase, isActive]);

  useEffect(() => {
    if (!isActive) return;
    if (phase === 0) {
      const t = setTimeout(() => setPhase(1), 1500);
      return () => clearTimeout(t);
    }
    if (phase === 1) {
      const t = setTimeout(() => setPhase(2), 2500);
      return () => clearTimeout(t);
    }
    if (phase === 2) {
      const t = setTimeout(() => setPhase(3), 2000);
      return () => clearTimeout(t);
    }
    if (phase === 3) {
      const t = setTimeout(() => setPhase(4), 1800);
      return () => clearTimeout(t);
    }
  }, [phase, isActive]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <audio ref={audioRef} src={brunoMarsTrack} loop preload="auto" />
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Reveal image background */}
      <AnimatePresence>
        {phase >= 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img src={surpriseImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Golden glow on reveal */}
      <AnimatePresence>
        {phase >= 4 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2 }}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-golden blur-[200px]"
            />
            {/* Confetti particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -100, x: Math.random() * 800 - 400 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: ["-10vh", "110vh"],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-1/2 pointer-events-none"
                style={{ 
                  width: 6 + Math.random() * 8,
                  height: 6 + Math.random() * 8,
                }}
              >
                <div 
                  className="w-full h-full rounded-sm"
                  style={{ 
                    background: ["hsl(350,85%,60%)", "hsl(30,90%,55%)", "hsl(50,90%,60%)", "hsl(170,70%,50%)"][i % 4],
                  }} 
                />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <AnimatePresence mode="wait">
          {/* Phase 0: "Oh wait..." */}
          {phase === 0 && (
            <motion.div
              key="p0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-display text-3xl md:text-5xl font-bold text-muted-foreground">
                Oh wait...
              </p>
            </motion.div>
          )}

          {/* Phase 1: "One more thing" */}
          {phase === 1 && (
            <motion.div
              key="p1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Gift className="w-16 h-16 text-secondary" />
              </motion.div>
              <p className="font-display text-3xl md:text-5xl font-bold text-foreground">
                There's one more thing...
              </p>
            </motion.div>
          )}

          {/* Phase 2: "I got you a present" */}
          {phase === 2 && (
            <motion.div
              key="p2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              <Sparkles className="w-12 h-12 text-primary" />
              <p className="font-display text-3xl md:text-5xl font-bold text-foreground">
                I got you a present 🎁
              </p>
            </motion.div>
          )}

          {/* Phase 3: Dramatic pause */}
          {phase === 3 && (
            <motion.div
              key="p3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-display text-4xl md:text-6xl font-black text-gradient-primary"
              >
                Are you ready?
              </motion.p>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.2, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Phase 4: THE REVEAL */}
          {phase >= 4 && (
            <motion.div
              key="p4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              >
                <Ticket className="w-16 h-16 text-secondary" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-sm font-body uppercase tracking-[0.4em] text-secondary"
              >
                We're going to see
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-gradient-primary leading-none"
              >
                BRUNO MARS
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xl md:text-2xl text-foreground font-body mt-2"
              >
                🎶 Live in concert! 🎶
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="mt-4 px-8 py-4 rounded-full gradient-golden glow-primary"
              >
                <span className="font-display text-lg font-bold text-background">
                  🎤 Happy Anniversary Baby 🎤
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseReveal;
