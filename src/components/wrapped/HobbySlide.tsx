import { motion } from "framer-motion";

interface HobbySlideProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  gradient: string;
  layout: "left-tall" | "right-tall" | "center-split" | "diagonal" | "floating";
  emoji: string;
  decals: string[];
}

const HobbySlide = ({ title, subtitle, description, images, gradient, layout, emoji, decals }: HobbySlideProps) => {
  const [main, img2, img3] = images;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Background glow */}
      <div className={`absolute inset-0 opacity-20 ${gradient}`} />
      <div className="absolute inset-0 bg-background/80" />

      {/* Floating decals */}
      {decals.map((d, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.3, duration: 0.8 }}
          className="absolute text-6xl md:text-8xl select-none pointer-events-none"
          style={{
            top: `${15 + i * 22}%`,
            left: i % 2 === 0 ? `${5 + i * 8}%` : undefined,
            right: i % 2 !== 0 ? `${5 + i * 6}%` : undefined,
          }}
        >
          {d}
        </motion.span>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {layout === "left-tall" && (
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image cluster */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, x: -80, rotate: -6 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl glow-primary max-w-[280px] md:max-w-[320px]">
                  <img src={main} alt={title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute top-4 right-0 md:right-4 z-20"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl border-2 border-background">
                  <img src={img2} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-0 right-8 md:right-16 z-0"
              >
                <div className="w-28 h-36 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-lg opacity-70 -rotate-6">
                  <img src={img3} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl ${gradient} opacity-40 blur-sm`} />
            </div>
            {/* Text */}
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
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] flex justify-end">
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: 6 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-[280px] md:max-w-[320px]">
                  <img src={main} alt={title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: -10, x: -30 }}
                whileInView={{ opacity: 1, rotate: -6, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute bottom-8 left-0 z-20"
              >
                <div className="w-36 h-28 md:w-44 md:h-32 rounded-xl overflow-hidden shadow-xl border-2 border-background">
                  <img src={img2} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute top-0 left-8 z-0"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg opacity-60 ring-2 ring-primary/30">
                  <img src={img3} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <div className={`absolute -top-4 -left-4 w-32 h-32 rounded-full ${gradient} opacity-30 blur-md`} />
            </div>
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
            <div className="relative w-full max-w-3xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10"
              >
                <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={main} alt={title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -60, rotate: -12 }}
                whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-28 h-36 md:w-36 md:h-44 rounded-2xl overflow-hidden shadow-xl border-2 border-background -rotate-8">
                  <img src={img2} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 60, rotate: 12 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -right-4 md:-right-12 bottom-0 z-20"
              >
                <div className="w-24 h-28 md:w-32 md:h-36 rounded-xl overflow-hidden shadow-xl border-2 border-background rotate-6">
                  <img src={img3} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 ${gradient} opacity-30 blur-xl rounded-full`} />
            </div>
          </div>
        )}

        {layout === "diagonal" && (
          <div className="relative min-h-[70vh] flex items-center">
            <div className="absolute right-0 top-0 w-2/3 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 100, y: 60 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl transform rotate-6 translate-y-8">
                  <img src={main} alt={title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-8 z-20"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-xl border-2 border-background -rotate-6">
                  <img src={img2} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -40, rotate: 15 }}
                whileInView={{ opacity: 1, y: 0, rotate: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -top-8 right-4 z-0"
              >
                <div className="w-20 h-24 md:w-28 md:h-32 rounded-xl overflow-hidden shadow-lg opacity-50 rotate-10">
                  <img src={img3} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
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
            <div className="relative w-full max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: -8 }}
                whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="relative z-10"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto -rotate-4">
                  <img src={main} alt={title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -80, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0, rotate: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -left-4 md:-left-12 top-8 z-20"
              >
                <div className="w-28 h-20 md:w-36 md:h-28 rounded-xl overflow-hidden shadow-xl border-2 border-background -rotate-10">
                  <img src={img2} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 80, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0, rotate: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="absolute -right-2 md:-right-8 bottom-4 z-20"
              >
                <div className="w-24 h-32 md:w-32 md:h-40 rounded-2xl overflow-hidden shadow-xl border-2 border-background rotate-8">
                  <img src={img3} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
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
