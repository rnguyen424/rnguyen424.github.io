import { motion } from "framer-motion";

const milestones = [
  { month: "YEAR 1", title: "First Date", desc: "Butterflies and awkward silences that turned into magic", gradient: "gradient-primary" },
  { month: "YEAR 1", title: "Made It Official", desc: "Changed the status, changed our lives", gradient: "gradient-cool" },
  { month: "YEAR 2", title: "First Trip Together", desc: "Lost luggage, found love in a new city", gradient: "gradient-warm" },
  { month: "YEAR 2", title: "Met the Parents", desc: "Survived the interrogation. Officially approved.", gradient: "gradient-golden" },
  { month: "YEAR 3", title: "Moved In Together", desc: "Your mess became our mess. Wouldn't change a thing.", gradient: "gradient-primary" },
  { month: "YEAR 4", title: "Got Our First Pet", desc: "The family grew by four tiny paws", gradient: "gradient-cool" },
  { month: "YEAR 5", title: "Dream Vacation", desc: "That trip we'll talk about for the rest of our lives", gradient: "gradient-warm" },
  { month: "YEAR 6", title: "Six Years Strong", desc: "2,190 days. A million memories. Just getting started.", gradient: "gradient-golden" },
];

const TimelineSection = () => {
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
          Year by Year
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-black text-foreground">
          Our <span className="text-gradient-primary">Timeline</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              <div className={`w-3 h-3 rounded-full ${milestone.gradient}`} />
            </div>

            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:ml-auto"}`}>
              <span className={`inline-block text-xs font-bold font-body uppercase tracking-widest px-3 py-1 rounded-full ${milestone.gradient} text-primary-foreground mb-2`}>
                {milestone.month}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                {milestone.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{milestone.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
