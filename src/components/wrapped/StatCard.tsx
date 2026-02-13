import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  number: string;
  label: string;
  sublabel?: string;
  gradient: "primary" | "cool" | "warm" | "golden";
  icon: ReactNode;
  delay?: number;
}

const gradientMap = {
  primary: "gradient-primary",
  cool: "gradient-cool",
  warm: "gradient-warm",
  golden: "gradient-golden",
};

const StatCard = ({ number, label, sublabel, gradient, icon, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, type: "spring", bounce: 0.3 }}
      className={`relative rounded-3xl p-8 md:p-10 overflow-hidden ${gradientMap[gradient]}`}
    >
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-foreground/5" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-foreground/5" />

      <div className="relative z-10">
        <div className="mb-6 opacity-80">{icon}</div>
        <h3 className="font-display text-5xl md:text-7xl font-black text-primary-foreground leading-none mb-2">
          {number}
        </h3>
        <p className="font-body text-lg md:text-xl font-semibold text-primary-foreground/90">{label}</p>
        {sublabel && (
          <p className="font-body text-sm text-primary-foreground/60 mt-1">{sublabel}</p>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
