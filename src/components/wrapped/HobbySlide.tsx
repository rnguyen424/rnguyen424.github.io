import { motion } from "framer-motion";

interface HobbySlideProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  bgClass: string;
  textGradient: string;
  layout: "hero-left" | "mosaic" | "overlap-right" | "full-bleed" | "gallery-grid";
  captions?: string[];
}

const HobbySlide = ({ title, subtitle, description, images, bgClass, textGradient, layout, captions = [] }: HobbySlideProps) => {
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${bgClass}`}>
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />

      <div className="relative z-10 w-full h-full">

        {/* HERO LEFT — big image left, text right, small images stacked */}
        {layout === "hero-left" && (
          <div className="min-h-screen flex items-center px-6 md:px-16 py-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full max-w-7xl mx-auto">
              {/* Image cluster */}
              <div className="w-full md:w-3/5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                >
                  <img src={images[0]} alt={title} className="w-full h-full object-cover" />
                </motion.div>
                {/* Small overlapping thumbnails */}
                <div className="absolute -bottom-4 -right-2 md:right-4 flex gap-2">
                  {images.slice(1, 4).map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, rotate: (i - 1) * 6 }}
                      whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 4 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                      className="w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-xl border-2 border-foreground/10"
                      style={{ transform: `rotate(${(i - 1) * 4}deg)` }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full md:w-2/5"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-2">{subtitle}</p>
                <h2 className={`font-display text-5xl md:text-7xl font-black mb-4 leading-[0.95] ${textGradient}`}>{title}</h2>
                <p className="text-sm md:text-base text-foreground/70 font-body leading-relaxed">{description}</p>
              </motion.div>
            </div>
          </div>
        )}

        {/* MOSAIC — text top, images in tight asymmetric grid below */}
        {layout === "mosaic" && (
          <div className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-12">
            <div className="max-w-6xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 md:mb-8"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-1">{subtitle}</p>
                <h2 className={`font-display text-5xl md:text-7xl font-black mb-3 leading-[0.95] ${textGradient}`}>{title}</h2>
                <p className="text-sm md:text-base text-foreground/70 font-body max-w-lg">{description}</p>
              </motion.div>
              {/* Asymmetric image grid */}
              <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[50vh] md:h-[55vh]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img src={images[0]} alt="" className="w-full h-full object-cover" />
                </motion.div>
                {images.slice(1, 3).map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* OVERLAP RIGHT — text left, stacked overlapping images on right */}
        {layout === "overlap-right" && (
          <div className="min-h-screen flex items-center px-6 md:px-16 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-2/5"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-2">{subtitle}</p>
                <h2 className={`font-display text-5xl md:text-7xl font-black mb-4 leading-[0.95] ${textGradient}`}>{title}</h2>
                <p className="text-sm md:text-base text-foreground/70 font-body leading-relaxed">{description}</p>
              </motion.div>
              {/* Overlapping image stack */}
              <div className="w-full md:w-3/5 relative min-h-[350px] md:min-h-[450px]">
                {images.slice(0, 4).map((img, i) => {
                  const configs = [
                    { top: "5%", left: "0%", w: "w-52 md:w-72", rot: -3, z: 15 },
                    { top: "10%", left: "35%", w: "w-44 md:w-60", rot: 5, z: 20 },
                    { top: "40%", left: "10%", w: "w-40 md:w-56", rot: -5, z: 10 },
                    { top: "35%", left: "50%", w: "w-36 md:w-48", rot: 4, z: 25 },
                  ];
                  const c = configs[i];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40, rotate: c.rot * 2 }}
                      whileInView={{ opacity: 1, y: 0, rotate: c.rot }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.6 }}
                      whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
                      className={`absolute ${c.w} aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-foreground/5 cursor-pointer`}
                      style={{ top: c.top, left: c.left, zIndex: c.z }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* FULL BLEED — giant image background with text overlay */}
        {layout === "full-bleed" && (
          <div className="min-h-screen relative flex items-end md:items-center">
            {/* Full background image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img src={images[0]} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className={`absolute inset-0 opacity-40 ${bgClass} mix-blend-multiply`} />
            </motion.div>
            {/* Content overlay */}
            <div className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end md:items-end gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex-1"
                >
                  <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-2">{subtitle}</p>
                  <h2 className={`font-display text-5xl md:text-8xl font-black mb-3 leading-[0.95] ${textGradient}`}>{title}</h2>
                  <p className="text-sm md:text-base text-foreground/80 font-body leading-relaxed max-w-lg">{description}</p>
                </motion.div>
                {/* Side thumbnails */}
                <div className="flex gap-3">
                  {images.slice(1, 4).map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-xl border border-foreground/10"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GALLERY GRID — dense masonry-style grid with text overlay */}
        {layout === "gallery-grid" && (
          <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-12">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6 md:mb-8"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-1">{subtitle}</p>
                <h2 className={`font-display text-5xl md:text-7xl font-black mb-3 leading-[0.95] ${textGradient}`}>{title}</h2>
                <p className="text-sm md:text-base text-foreground/70 font-body max-w-lg mx-auto">{description}</p>
              </motion.div>
              {/* Tight 4-column grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className={`rounded-2xl overflow-hidden shadow-xl cursor-pointer ${
                      i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HobbySlide;
