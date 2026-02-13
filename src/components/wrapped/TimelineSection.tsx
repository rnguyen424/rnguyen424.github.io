import { motion } from "framer-motion";

const milestones = [
  { date: "Aug 2020", title: "COVID Year", desc: "First Museum Visit!", gradient: "gradient-primary" },
  { date: "Oct 2021", title: "First Year At College Together", desc: "First Halloween Party!", gradient: "gradient-cool" },
  { date: "Feb 2022", title: "First Concert & Solo Trip", desc: "TWICE!!", gradient: "gradient-warm" },
  { date: "Jul 2022", title: "End of Ryan's Internship!", desc: "Trip to Massachusetts and New York", gradient: "gradient-golden" },
  { date: "Jul 2023", title: "First BIG Family Trip", desc: "Destin FL", gradient: "gradient-primary" },
  { date: "Aug 2023", title: "First Music Festival", desc: "Lollapalooza", gradient: "gradient-cool" },
  { date: "Mar 2024", title: "First Trip Outside the US", desc: "Huatulco Mexico!", gradient: "gradient-warm" },
  { date: "May 2024", title: "Ryan College Graduation", desc: "Time to work!", gradient: "gradient-golden" },
  { date: "Dec 2024", title: "Disney Trip!", desc: "The happiest place on earth", gradient: "gradient-primary" },
  { date: "Apr 2025", title: "Beabadoobee Round 2!", desc: "Dallas Trip", gradient: "gradient-cool" },
  { date: "May 2025", title: "Sy College & EMT Graduation!", desc: "Double celebration", gradient: "gradient-warm" },
  { date: "Jul 2025", title: "Vietnam Trip", desc: "Back to the motherland!", gradient: "gradient-golden" },
  { date: "Dec 2025", title: "First Card Show!", desc: "Collect-A-Con San Antonio", gradient: "gradient-primary" },
  { date: "Jan 2026", title: "On the Hunt to Move", desc: "Houston vs. Austin", gradient: "gradient-cool" },
  { date: "Feb 2026", title: "Time to Move to H-Town", desc: "A brand new chapter begins", gradient: "gradient-warm" },
];

const TimelineSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start py-12 px-4 overflow-y-auto">
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">
          Our Greatest Hits
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
          Our <span className="text-gradient-primary">Timeline</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl w-full mx-auto relative pb-12">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative flex items-start gap-4 mb-6 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
              <div className={`w-3 h-3 rounded-full ${milestone.gradient}`} />
            </div>

            <div className={`ml-10 md:ml-0 md:w-[calc(50%-1.5rem)] ${i % 2 === 0 ? "md:text-right md:pr-6" : "md:text-left md:pl-6 md:ml-auto"}`}>
              <span className={`inline-block text-[10px] font-bold font-body uppercase tracking-widest px-2 py-0.5 rounded-full ${milestone.gradient} text-primary-foreground mb-1`}>
                {milestone.date}
              </span>
              <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-tight mb-0.5">
                {milestone.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground">{milestone.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
