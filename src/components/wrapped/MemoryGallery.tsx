import { motion } from "framer-motion";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const memories = [
  { src: memory1, caption: "Our first sunset together", date: "March 2025" },
  { src: memory2, caption: "Coffee dates that never end", date: "May 2025" },
  { src: memory3, caption: "Walking through golden days", date: "October 2025" },
  { src: memory4, caption: "Dancing under the stars", date: "December 2025" },
];

const MemoryGallery = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] rounded-full gradient-warm opacity-20 blur-[130px]"
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] rounded-full gradient-primary opacity-15 blur-[140px]"
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Top Memories
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary">
          Our Greatest Hits
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {memories.map((memory, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            whileHover={{ scale: 1.03, rotate: i % 2 === 0 ? 1 : -1 }}
            className="group relative rounded-2xl overflow-hidden bg-card aspect-[4/3]"
          >
            <img
              src={memory.src}
              alt={memory.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-body uppercase tracking-widest text-primary mb-1 block">
                {memory.date}
              </span>
              <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                {memory.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;
