import { motion } from "framer-motion";

interface HobbySlideProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  gradient: string;
  layout: "scattered" | "polaroid-wall" | "stacked" | "collage" | "pinboard";
  captions?: string[];
}

/* Scrapbook decorative elements — tape strips, pins, paper textures */
const TapeStrip = ({ rotation = 0, className = "" }: { rotation?: number; className?: string }) => (
  <div
    className={`absolute w-16 h-5 bg-primary/15 backdrop-blur-sm rounded-sm shadow-sm z-30 ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  />
);

const PushPin = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-3 h-3 rounded-full bg-primary shadow-md z-30 ${className}`}>
    <div className="absolute inset-0.5 rounded-full bg-primary/80" />
  </div>
);

const PolaroidFrame = ({
  src,
  alt,
  caption,
  rotation,
  className = "",
  delay = 0,
}: {
  src: string;
  alt: string;
  caption?: string;
  rotation: number;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: rotation * 2 }}
    whileInView={{ opacity: 1, y: 0, rotate: rotation }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
    className={`bg-foreground/5 border border-border/50 p-2 pb-8 rounded-sm shadow-xl backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-2xl ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <div className="overflow-hidden rounded-sm">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
    {caption && (
      <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-muted-foreground font-body italic">
        {caption}
      </p>
    )}
  </motion.div>
);

const HobbySlide = ({ title, subtitle, description, images, gradient, layout, captions = [] }: HobbySlideProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-16">
      {/* Subtle paper texture background */}
      <div className={`absolute inset-0 opacity-10 ${gradient}`} />
      <div className="absolute inset-0 bg-background/85" />
      {/* Faint grid lines like notebook paper */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* SCATTERED — asymmetric photos scattered with tape & pins */}
        {layout === "scattered" && (
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-3/5 relative min-h-[450px] md:min-h-[550px]">
              {/* Main image — big polaroid */}
              <div className="relative z-10">
                <TapeStrip rotation={-15} className="-top-2 left-1/4" />
                <PolaroidFrame src={images[0]} alt={title} caption={captions[0]} rotation={-4} className="w-56 md:w-72" delay={0.1} />
              </div>
              {/* Secondary — overlapping top-right */}
              <div className="absolute top-0 right-0 md:right-8 z-20">
                <PushPin className="-top-1 left-1/2" />
                <PolaroidFrame src={images[1]} alt="" caption={captions[1]} rotation={6} className="w-36 md:w-44" delay={0.3} />
              </div>
              {/* Third — bottom right */}
              <div className="absolute bottom-4 right-4 md:right-0 z-5">
                <TapeStrip rotation={20} className="-top-2 right-2" />
                <PolaroidFrame src={images[2]} alt="" caption={captions[2]} rotation={-8} className="w-32 md:w-40" delay={0.5} />
              </div>
              {/* Fourth — bottom left tucked */}
              {images[3] && (
                <div className="absolute bottom-0 left-4 md:left-12 z-15">
                  <PushPin className="-top-1 right-4" />
                  <PolaroidFrame src={images[3]} alt="" caption={captions[3]} rotation={3} className="w-28 md:w-36" delay={0.6} />
                </div>
              )}
              {images[4] && (
                <motion.div
                  initial={{ opacity: 0, rotate: -12 }}
                  whileInView={{ opacity: 0.7, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-1/3 left-1/2 z-0 w-24 h-28 md:w-32 md:h-36 rounded-sm overflow-hidden shadow-md border border-border/30"
                >
                  <img src={images[4]} alt="" className="w-full h-full object-cover opacity-70" />
                </motion.div>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full md:w-2/5 text-center md:text-left"
            >
              <p className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary mb-4">{title}</h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed">{description}</p>
            </motion.div>
          </div>
        )}

        {/* POLAROID WALL — grid of polaroids at various angles */}
        {layout === "polaroid-wall" && (
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <p className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-cool mb-4">{title}</h2>
              <p className="text-base text-muted-foreground font-body max-w-xl mx-auto">{description}</p>
            </motion.div>
            <div className="relative w-full max-w-4xl min-h-[350px] md:min-h-[450px]">
              {images.map((img, i) => {
                const positions = [
                  "left-0 top-0",
                  "right-0 top-4 md:right-8",
                  "left-1/4 bottom-0",
                  "right-1/4 top-1/3",
                ];
                const rotations = [-5, 4, -3, 7];
                const sizes = ["w-40 md:w-52", "w-36 md:w-48", "w-32 md:w-44", "w-28 md:w-40"];
                return (
                  <div key={i} className={`absolute ${positions[i % 4]}`} style={{ zIndex: 10 + i }}>
                    {i % 2 === 0 ? <TapeStrip rotation={rotations[i] * 2} className="-top-2 left-1/3" /> : <PushPin className="-top-1 left-1/2" />}
                    <PolaroidFrame src={img} alt="" caption={captions[i]} rotation={rotations[i % 4]} className={sizes[i % 4]} delay={i * 0.15} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STACKED — overlapping stack with one pulled out */}
        {layout === "stacked" && (
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="w-full md:w-3/5 relative min-h-[400px] md:min-h-[500px] flex justify-center">
              {/* Background stack */}
              {images.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: (i - 1) * 8 }}
                  whileInView={{ opacity: 0.6 - i * 0.15, rotate: (i - 1) * 6 + 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ zIndex: 5 - i }}
                >
                  <div className="bg-foreground/5 border border-border/30 p-2 pb-8 w-48 md:w-64 rounded-sm shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Featured — pulled out of the stack */}
              <motion.div
                initial={{ opacity: 0, x: 60, rotate: -8 }}
                whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20"
              >
                <TapeStrip rotation={-10} className="-top-2 left-8" />
                <TapeStrip rotation={15} className="-top-2 right-4" />
                <PolaroidFrame src={images[0]} alt={title} caption={captions[0]} rotation={-4} className="w-56 md:w-72" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-2/5 text-center md:text-right"
            >
              <p className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary mb-4">{title}</h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed">{description}</p>
            </motion.div>
          </div>
        )}

        {/* COLLAGE — overlapping diagonal spread */}
        {layout === "collage" && (
          <div className="relative min-h-[75vh] flex items-center">
            {/* Photo cluster on right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 md:w-1/2">
              {images.map((img, i) => {
                const configs = [
                  { x: 0, y: 0, rot: 5, size: "w-48 md:w-64", z: 15 },
                  { x: -40, y: 80, rot: -7, size: "w-36 md:w-48", z: 20 },
                  { x: 60, y: -60, rot: 10, size: "w-28 md:w-40", z: 10 },
                  { x: -20, y: -40, rot: -3, size: "w-24 md:w-36", z: 5 },
                ];
                const c = configs[i % 4];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: c.x + 80, y: c.y }}
                    whileInView={{ opacity: 1, x: c.x, y: c.y }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    className="absolute"
                    style={{ zIndex: c.z, top: `${20 + i * 15}%`, right: `${i * 10}%` }}
                  >
                    {i % 3 === 0 ? <TapeStrip rotation={c.rot * 2} className="-top-2 left-1/4" /> : <PushPin className="-top-1 left-1/2" />}
                    <PolaroidFrame src={img} alt="" caption={captions[i]} rotation={c.rot} className={c.size} />
                  </motion.div>
                );
              })}
            </div>
            {/* Text on left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 w-full md:w-2/5"
            >
              <p className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-cool mb-4">{title}</h2>
              <p className="text-base text-muted-foreground font-body leading-relaxed max-w-md">{description}</p>
            </motion.div>
          </div>
        )}

        {/* PINBOARD — cork-board style with pins everywhere */}
        {layout === "pinboard" && (
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <p className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground mb-2">{subtitle}</p>
              <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-primary mb-4">{title}</h2>
              <p className="text-base text-muted-foreground font-body max-w-xl mx-auto">{description}</p>
            </motion.div>
            <div className="relative w-full max-w-5xl min-h-[400px] md:min-h-[500px] border border-border/20 rounded-xl bg-card/30 p-8">
              {/* String/wire line decoration */}
              <div className="absolute top-12 left-8 right-8 h-px bg-muted-foreground/20" />
              <div className="absolute top-1/2 left-8 right-8 h-px bg-muted-foreground/10" />
              {images.map((img, i) => {
                const positions = [
                  "left-4 top-4",
                  "right-4 top-16",
                  "left-1/3 top-8",
                  "right-1/4 bottom-8",
                  "left-8 bottom-4",
                ];
                const rotations = [-3, 5, -6, 2, 8];
                const sizes = ["w-40 md:w-52", "w-32 md:w-44", "w-36 md:w-48", "w-28 md:w-40", "w-32 md:w-40"];
                return (
                  <div key={i} className={`absolute ${positions[i % 5]}`} style={{ zIndex: 10 + i }}>
                    <PushPin className="-top-1.5 left-1/2 -translate-x-1/2" />
                    <PolaroidFrame src={img} alt="" caption={captions[i]} rotation={rotations[i % 5]} className={sizes[i % 5]} delay={i * 0.12} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HobbySlide;
