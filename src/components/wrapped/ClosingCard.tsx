import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const ClosingCard = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full gradient-warm opacity-15 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full gradient-primary opacity-20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center justify-center mb-8"
        >
          <Sparkles className="w-6 h-6 text-secondary mr-2" />
          <span className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground">
            Here's to forever
          </span>
          <Sparkles className="w-6 h-6 text-secondary ml-2" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8"
        >
          <span className="text-foreground">Year one was</span>
          <br />
          <span className="text-gradient-primary">incredible.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground font-body mb-12 leading-relaxed"
        >
          Every moment with you is a story worth telling. Here's to the next
          365 days of adventures, late-night talks, and falling deeper in love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full gradient-primary glow-primary"
        >
          <Heart className="w-5 h-5 text-primary-foreground fill-current" />
          <span className="font-display text-lg font-bold text-primary-foreground">
            Happy Anniversary
          </span>
          <Heart className="w-5 h-5 text-primary-foreground fill-current" />
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCard;
