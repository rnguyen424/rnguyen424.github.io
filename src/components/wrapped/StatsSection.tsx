import { Heart, MessageCircle, MapPin, Music, Coffee, Phone } from "lucide-react";
import StatCard from "./StatCard";
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="py-24 px-6">
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
          Our Year in <span className="text-gradient-cool">Data</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          number="8,760"
          label="Hours Together"
          sublabel="And counting..."
          gradient="primary"
          icon={<Heart className="w-8 h-8 text-primary-foreground" />}
          delay={0}
        />
        <StatCard
          number="12,483"
          label="Messages Sent"
          sublabel="Your top emoji: ❤️"
          gradient="cool"
          icon={<MessageCircle className="w-8 h-8 text-primary-foreground" />}
          delay={0.1}
        />
        <StatCard
          number="47"
          label="Date Nights"
          sublabel="Never a dull moment"
          gradient="warm"
          icon={<Coffee className="w-8 h-8 text-primary-foreground" />}
          delay={0.2}
        />
        <StatCard
          number="6"
          label="Cities Explored"
          sublabel="Adventure mode: ON"
          gradient="golden"
          icon={<MapPin className="w-8 h-8 text-primary-foreground" />}
          delay={0.3}
        />
        <StatCard
          number="312"
          label="Songs Shared"
          sublabel="Your anthem: 'Perfect' by Ed Sheeran"
          gradient="primary"
          icon={<Music className="w-8 h-8 text-primary-foreground" />}
          delay={0.4}
        />
        <StatCard
          number="1,095"
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
