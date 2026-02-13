import { motion } from "framer-motion";

interface HobbySlideProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  layout: "left-tall" | "right-tall" | "center-split" | "diagonal" | "floating";
  emoji: string;
}

const HobbySlide = ({ title, subtitle, description, image, gradient, layout, emoji }: HobbySlideProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Background glow */}
      <div className={`absolute inset-0 opacity-20 ${gradient}`} />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {layout === "left-tall" && (
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -80, rotate: -6 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl glow-primary transform -rotate-3">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl ${gradient} opacity-40 blur-sm`} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <span className="text-6xl mb-4 block">{emoji}</span>
              <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary mb-6">{title}</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">{description}</p>
            </motion.div>
          </div>
        )}

        {layout === "right-tall" && (
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 80, rotate: 6 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -top-4 -left-4 w-32 h-32 rounded-full ${gradient} opacity-30 blur-md`} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 text-center md:text-right"
            >
              <span className="text-6xl mb-4 block">{emoji}</span>
              <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-cool mb-6">{title}</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">{description}</p>
            </motion.div>
          </div>
        )}

        {layout === "center-split" && (
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-6xl mb-4 block">{emoji}</span>
              <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary mb-4">{title}</h2>
              <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">{description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-2xl"
            >
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 ${gradient} opacity-30 blur-xl rounded-full`} />
            </motion.div>
          </div>
        )}

        {layout === "diagonal" && (
          <div className="relative min-h-[70vh] flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 100, y: 60 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="absolute right-0 top-0 w-2/3 md:w-1/2"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl transform rotate-6 translate-y-8">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 w-full md:w-1/2"
            >
              <span className="text-6xl mb-4 block">{emoji}</span>
              <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-cool mb-6">{title}</h2>
              <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-md">{description}</p>
            </motion.div>
          </div>
        )}

        {layout === "floating" && (
          <div className="flex flex-col items-center text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 mb-8"
            >
              <span className="text-6xl mb-4 block">{emoji}</span>
              <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary mb-4">{title}</h2>
              <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">{description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="w-full max-w-lg"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform -rotate-4">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              className={`absolute top-1/4 -right-20 w-64 h-64 rounded-full ${gradient} blur-3xl`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HobbySlide;
