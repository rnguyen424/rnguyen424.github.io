import { Heart, MessageCircle, MapPin, Music, Coffee, Phone } from "lucide-react";
import StatCard from "./StatCard";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full gradient-cool opacity-20 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full gradient-primary opacity-15 blur-[150px]"
          animate={{ x: [0, -50, 0], y: [0, -60, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full gradient-golden opacity-10 blur-[100px]"
          animate={{ scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-3">
          The Numbers
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-foreground">
          6 Years in <span className="text-gradient-cool">Data</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          number="52,560"
          label="Hours Together"
          sublabel="And counting..."
          gradient="primary"
          icon={<Heart className="w-8 h-8 text-primary-foreground" />}
          delay={0}
        />
        <StatCard
          number="74,892"
          label="Messages Sent"
          sublabel="Your top emoji: ❤️"
          gradient="cool"
          icon={<MessageCircle className="w-8 h-8 text-primary-foreground" />}
          delay={0.1}
        />
        <StatCard
          number="284"
          label="Date Nights"
          sublabel="Never a dull moment"
          gradient="warm"
          icon={<Coffee className="w-8 h-8 text-primary-foreground" />}
          delay={0.2}
        />
        <StatCard
          number="23"
          label="Cities Explored"
          sublabel="Adventure mode: ON"
          gradient="golden"
          icon={<MapPin className="w-8 h-8 text-primary-foreground" />}
          delay={0.3}
        />
        <StatCard
          number="1,847"
          label="Songs Shared"
          sublabel="Your anthem: 'Perfect' by Ed Sheeran"
          gradient="primary"
          icon={<Music className="w-8 h-8 text-primary-foreground" />}
          delay={0.4}
        />
        <StatCard
          number="6,570"
          label="Goodnight Calls"
          sublabel="3 per day on average"
          gradient="cool"
          icon={<Phone className="w-8 h-8 text-primary-foreground" />}
          delay={0.5}
        />
      </div>
    </section>
  );
};

export default StatsSection;
