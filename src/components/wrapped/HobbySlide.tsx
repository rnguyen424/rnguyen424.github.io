import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HobbySlideProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  videos?: string[];
  bgClass: string;
  textGradient: string;
  layout: "hero-left" | "mosaic" | "overlap-right" | "full-bleed" | "gallery-grid" | "food-scatter" | "fitness-grid";
  theme: "fitness" | "pokemon" | "food" | "travel" | "gaming" | "family";
}

/* ── Themed Atmosphere Overlays ── */
const FitnessAtmosphere = () => (
  <>
    {/* Dynamic diagonal speed lines */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: "-100%", opacity: [0, 0.15, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 2 + i * 0.3, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute h-[2px] bg-foreground/20"
        style={{ top: `${10 + i * 10}%`, width: `${30 + i * 5}%`, transform: "rotate(-15deg)" }}
      />
    ))}
    {/* Bold geometric accent */}
    <div className="absolute -top-20 -right-20 w-80 h-80 border-[6px] border-foreground/10 rounded-full" />
    <div className="absolute bottom-10 -left-10 w-40 h-40 border-[4px] border-foreground/8 rotate-45" />
    {/* Energy pulse */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.05, 0.15] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-primary/20"
    />
  </>
);

const PokemonAtmosphere = () => (
  <>
    {/* Holographic shimmer overlay */}
    <motion.div
      animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: "linear-gradient(135deg, transparent 25%, hsl(280, 100%, 70%) 30%, hsl(180, 100%, 70%) 35%, hsl(50, 100%, 70%) 40%, transparent 45%)",
        backgroundSize: "200% 200%",
      }}
    />
    {/* Floating sparkles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -20, 0],
          opacity: [0, 0.6, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2 + Math.random() * 2, delay: i * 0.4, repeat: Infinity }}
        className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
        style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 5) * 15}%` }}
      />
    ))}
    {/* Card corner decorations */}
    <div className="absolute top-8 left-8 w-16 h-20 rounded-lg border-2 border-secondary/20 rotate-12" />
    <div className="absolute bottom-12 right-12 w-20 h-28 rounded-lg border-2 border-secondary/15 -rotate-6" />
    <div className="absolute top-1/3 right-6 w-12 h-16 rounded-lg border border-accent/15 rotate-[20deg]" />
    {/* Pokémon decals */}
    {["⚡", "🔥", "💧", "🌿", "⭐", "✨"].map((emoji, i) => (
      <motion.div
        key={`decal-${i}`}
        animate={{
          y: [0, -15, 0],
          rotate: [0, (i % 2 === 0 ? 10 : -10), 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 4 + i * 0.5, delay: i * 0.7, repeat: Infinity }}
        className="absolute pointer-events-none select-none"
        style={{
          left: `${5 + i * 16}%`,
          top: `${10 + (i % 3) * 30}%`,
          fontSize: `${28 + i * 4}px`,
        }}
      >
        {emoji}
      </motion.div>
    ))}
    {/* Pokéball silhouettes */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`pokeball-${i}`}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
        className="absolute opacity-[0.07]"
        style={{
          left: `${15 + i * 30}%`,
          top: `${60 + (i % 2) * 20}%`,
          width: `${50 + i * 15}px`,
          height: `${50 + i * 15}px`,
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="none" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </motion.div>
    ))}
  </>
);

const FoodAtmosphere = () => {
  const dancingFoods = ["🍕", "🍔", "🍜", "🍣", "🧁", "🌮", "🍩", "🍦", "🥟", "🍗", "🧋", "🍰"];
  return (
    <>
      {/* Dancing food characters */}
      {dancingFoods.map((emoji, i) => (
        <motion.div
          key={`food-dance-${i}`}
          animate={{
            y: [0, -20, 0, -10, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
            rotate: [0, (i % 2 === 0 ? 15 : -15), 0, (i % 2 === 0 ? -10 : 10), 0],
            scale: [1, 1.15, 1, 1.1, 1],
          }}
          transition={{
            duration: 2 + (i % 4) * 0.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute pointer-events-none select-none z-0"
          style={{
            left: `${3 + (i % 6) * 16}%`,
            top: `${8 + Math.floor(i / 6) * 65}%`,
            fontSize: `${32 + (i % 3) * 12}px`,
            opacity: 0.25,
          }}
        >
          {emoji}
        </motion.div>
      ))}
      {/* Warm radial glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px]"
        style={{ background: "radial-gradient(circle, hsl(30, 100%, 55%), hsl(340, 80%, 50%), transparent)" }}
      />
      {/* Organic blob shapes */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 opacity-10"
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          background: "hsl(30, 100%, 55%)",
        }}
      />
    </>
  );
};

const TravelAtmosphere = () => (
  <>
    {/* Compass / map grid lines */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `
        linear-gradient(0deg, hsl(var(--foreground)) 1px, transparent 1px),
        linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }} />
    {/* Compass rose */}
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute top-12 right-16 w-28 h-28 opacity-10"
    >
      <div className="absolute inset-0 border-2 border-accent/30 rounded-full" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-accent/20" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/20" />
      <div className="absolute inset-0 border-2 border-accent/20 rounded-full rotate-45" style={{ inset: "15%" }} />
    </motion.div>
    {/* Stamp-like decorative boxes */}
    <div className="absolute bottom-16 left-10 px-4 py-2 border-2 border-foreground/10 rounded-sm rotate-[-8deg]">
      <span className="text-[10px] font-body uppercase tracking-[0.3em] text-foreground/15">Passport Stamp</span>
    </div>
    <div className="absolute top-20 left-1/3 px-3 py-1.5 border border-accent/15 rounded-full rotate-[5deg]">
      <span className="text-[9px] font-body uppercase tracking-[0.2em] text-foreground/10">Adventure</span>
    </div>
    {/* Dotted route line */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 400 Q 200 200 400 350 T 800 250 T 1200 400 T 1600 300" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="none" />
    </svg>
  </>
);

const GamingAtmosphere = () => (
  <>
    {/* Scanline effect */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)",
      backgroundSize: "100% 4px",
    }} />
    {/* Neon glow pulses */}
    <motion.div
      animate={{ opacity: [0.1, 0.25, 0.1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-0 left-0 right-0 h-px bg-accent shadow-[0_0_20px_5px_hsl(200,100%,50%/0.3)]"
    />
    <motion.div
      animate={{ opacity: [0.1, 0.25, 0.1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      className="absolute bottom-0 left-0 right-0 h-px bg-primary shadow-[0_0_20px_5px_hsl(340,100%,55%/0.3)]"
    />
    {/* Pixel grid accent */}
    <div className="absolute top-8 right-8 grid grid-cols-4 gap-1 opacity-15">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
          className="w-2 h-2 rounded-sm"
          style={{ background: i % 3 === 0 ? "hsl(200,100%,60%)" : i % 3 === 1 ? "hsl(270,90%,65%)" : "hsl(340,100%,55%)" }}
        />
      ))}
    </div>
    {/* Controller button hints */}
    <div className="absolute bottom-12 left-10 flex gap-3 opacity-10">
      {["A", "B", "X", "Y"].map((btn, i) => (
        <div key={i} className="w-8 h-8 rounded-full border-2 border-foreground/30 flex items-center justify-center">
          <span className="text-[10px] font-display font-bold text-foreground/40">{btn}</span>
        </div>
      ))}
    </div>
    {/* Floating hexagons */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -10, 0], rotate: [0, 30, 0] }}
        transition={{ duration: 5 + i, delay: i * 1.5, repeat: Infinity }}
        className="absolute w-12 h-12 border border-accent/10"
        style={{
          left: `${15 + i * 22}%`,
          top: `${25 + (i % 3) * 20}%`,
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
    ))}
  </>
);

const FamilyAtmosphere = () => (
  <>
    {/* Warm floating hearts */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -25, 0], opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 5 + i * 0.7, delay: i * 0.6, repeat: Infinity }}
        className="absolute text-foreground/10"
        style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 18}%`, fontSize: `${14 + i * 2}px` }}
      >
        ♥
      </motion.div>
    ))}
    {/* Warm radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 blur-[150px]" style={{ background: "radial-gradient(circle, hsl(30, 90%, 55%), transparent)" }} />
    {/* Soft ornamental circles */}
    <div className="absolute top-10 right-16 w-32 h-32 rounded-full border-2 border-dashed border-foreground/8 rotate-12" />
    <div className="absolute bottom-16 left-12 w-24 h-24 rounded-full border border-foreground/6" />
    {/* String lights effect */}
    <svg className="absolute top-0 left-0 w-full h-20 opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 30 Q 100 60 200 30 T 400 30 T 600 30 T 800 30 T 1000 30 T 1200 30 T 1400 30" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {[...Array(14)].map((_, i) => (
        <circle key={i} cx={50 + i * 100} cy={30 + (i % 2 === 0 ? 15 : -5)} r="4" fill="hsl(40, 100%, 70%)" opacity="0.6" />
      ))}
    </svg>
  </>
);

const atmospheres: Record<string, () => ReactNode> = {
  fitness: FitnessAtmosphere,
  pokemon: PokemonAtmosphere,
  food: FoodAtmosphere,
  travel: TravelAtmosphere,
  gaming: GamingAtmosphere,
  family: FamilyAtmosphere,
};

const HobbySlide = ({ title, subtitle, description, images, videos = [], bgClass, textGradient, layout, theme }: HobbySlideProps) => {
  const Atmosphere = atmospheres[theme];

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${bgClass}`}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />

      {/* Theme-specific atmosphere */}
      {Atmosphere && <Atmosphere />}

      <div className="relative z-10 w-full h-full">

        {/* FITNESS GRID — Show all images in a dense grid */}
        {layout === "fitness-grid" && (
          <div className="h-screen flex flex-col px-4 md:px-10 py-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-3 flex-shrink-0 relative z-30"
            >
              <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-1">{subtitle}</p>
              <h2 className={`font-display text-4xl md:text-6xl font-black mb-2 leading-[0.9] uppercase ${textGradient}`}>{title}</h2>
              <p className="text-xs md:text-sm text-foreground/60 font-body max-w-md mx-auto">{description}</p>
            </motion.div>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-1.5 md:gap-2 flex-1 max-h-[75vh] auto-rows-[1fr] relative z-10 overflow-hidden">
              {images.map((img, i) => {
                const rots = [-2, 3, -1, 2, -3, 1, -2, 4, -1, 3, -4, 2, -3, 1];
                const spans = [
                  "col-span-2 row-span-2", "", "", "col-span-2", "", "", "",
                  "", "col-span-2", "", "", "", "col-span-2", "",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, rotate: rots[i % rots.length] * 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: rots[i % rots.length] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                    className={`${spans[i] || ""} rounded-lg overflow-hidden shadow-xl cursor-pointer`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* HERO LEFT — legacy layout */}
        {layout === "hero-left" && (
          <div className="min-h-screen flex items-center px-6 md:px-16 py-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full max-w-7xl mx-auto">
              <div className="w-full md:w-3/5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-2 ring-foreground/10"
                >
                  <img src={images[0]} alt={title} className="w-full h-full object-cover" />
                </motion.div>
                <div className="absolute -bottom-4 -right-2 md:right-4 flex gap-2">
                  {images.slice(1, 4).map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full md:w-2/5"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-2">{subtitle}</p>
                <h2 className={`font-display text-5xl md:text-7xl font-black mb-4 leading-[0.95] ${textGradient} uppercase`}>{title}</h2>
                <div className="w-16 h-1 gradient-primary rounded-full mb-4" />
                <p className="text-sm md:text-base text-foreground/70 font-body leading-relaxed">{description}</p>
              </motion.div>
            </div>
          </div>
        )}

        {/* MOSAIC — Pokémon: playful grid with holographic feel */}
        {layout === "mosaic" && (
          <div className="h-screen flex flex-col justify-center px-4 md:px-12 py-6 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-3 md:mb-4 flex-shrink-0"
              >
                <p className="text-xs font-body uppercase tracking-[0.25em] text-foreground/60 mb-1">{subtitle}</p>
                <h2 className={`font-display text-3xl md:text-5xl font-black mb-1 leading-[0.95] ${textGradient}`}>
                  {title}
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block ml-2 text-2xl md:text-3xl"
                  >⚡</motion.span>
                </h2>
                <p className="text-xs md:text-sm text-foreground/70 font-body max-w-lg">{description}</p>
              </motion.div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 items-start flex-1 max-h-[70vh]">
                {images.map((img, i) => {
                  const rotations = [-3, 2, -2, 4, -4, 3];
                  const sizes = [
                    "col-span-1 row-span-2",
                    "col-span-1",
                    "col-span-1",
                    "col-span-1",
                    "col-span-1 row-span-2",
                    "col-span-1",
                  ];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, rotate: rotations[i] * 2, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, rotate: rotations[i], scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                      className={`${sizes[i]} rounded-xl overflow-hidden shadow-xl border-2 border-foreground/10 cursor-pointer`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Pokémon decal stickers scattered over the grid */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {["🔴", "⚪"].map((ball, i) => (
                  <motion.div
                    key={`ball-${i}`}
                    animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 3 + i, delay: i * 1.5, repeat: Infinity }}
                    className="absolute text-2xl md:text-3xl opacity-30"
                    style={{ right: `${8 + i * 12}%`, bottom: `${10 + i * 15}%` }}
                  >
                    {ball}
                  </motion.div>
                ))}
                {/* Pikachu, Charizard, Gengar, Eevee silhouette text decals */}
                {["⚡ Pikachu", "🔥 Charizard", "👻 Gengar", "🌟 Eevee"].map((label, i) => (
                  <motion.span
                    key={`label-${i}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.15 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="absolute font-display text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/20"
                    style={{
                      left: `${5 + i * 22}%`,
                      bottom: `${4 + (i % 2) * 6}%`,
                      transform: `rotate(${-5 + i * 3}deg)`,
                    }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* OVERLAP RIGHT — Food/Family: warm, organic, inviting */}
        {layout === "overlap-right" && (
          <div className="h-screen flex flex-col justify-center px-4 md:px-12 py-6 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full flex flex-col h-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 flex-shrink-0"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.25em] text-foreground/60 mb-1">{subtitle}</p>
                <h2 className={`font-display text-4xl md:text-6xl font-black mb-2 leading-[0.95] italic ${textGradient}`}>{title}</h2>
                <p className="text-xs md:text-sm text-foreground/70 font-body max-w-lg">{description}</p>
              </motion.div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3 flex-1 max-h-[65vh]">
                {images.map((img, i) => {
                  const rotations = [-2, 3, -1, 2, -3, 1, -2, 3, -1, 2];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5 }}
                      whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                      className={`rounded-xl overflow-hidden shadow-xl border-2 border-foreground/5 cursor-pointer ${
                        i === 0 ? "col-span-2 row-span-2" : ""
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* FOOD SCATTER — Auto-scrolling carousel */}
        {layout === "food-scatter" && (() => {
          // Duplicate images for seamless infinite loop
          const duplicated = [...images, ...images];
          return (
            <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6 flex-shrink-0 relative z-30 px-4"
              >
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.3em] text-foreground/70 mb-1">{subtitle}</p>
                <h2 className={`font-display text-4xl md:text-6xl font-black mb-2 leading-[0.9] italic ${textGradient}`}>{title}</h2>
                <p className="text-xs md:text-sm text-foreground/60 font-body max-w-md mx-auto">{description}</p>
              </motion.div>
              {/* Row 1 — scrolls left */}
              <div className="w-full overflow-hidden mb-3 relative z-10">
                <motion.div
                  className="flex gap-3"
                  animate={{ x: [0, -(images.length * (360 + 12))] }}
                  transition={{ duration: images.length * 4, repeat: Infinity, ease: "linear" }}
                >
                  {duplicated.map((img, i) => (
                    <div
                      key={`r1-${i}`}
                      className="flex-shrink-0 w-[300px] md:w-[360px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Row 2 — scrolls right (reverse) */}
              <div className="w-full overflow-hidden relative z-10">
                <motion.div
                  className="flex gap-3"
                  animate={{ x: [-(images.length * (360 + 12)), 0] }}
                  transition={{ duration: images.length * 4, repeat: Infinity, ease: "linear" }}
                >
                  {duplicated.map((img, i) => (
                    <div
                      key={`r2-${i}`}
                      className="flex-shrink-0 w-[300px] md:w-[360px] aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          );
        })()}

        {layout === "full-bleed" && (
          <div className="min-h-screen relative flex items-end md:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img src={images[0]} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
            </motion.div>
            <div className="relative z-10 w-full px-6 md:px-16 pb-16 md:py-0">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end md:items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex-1"
                >
                  <p className="text-xs md:text-sm font-body uppercase tracking-[0.4em] text-accent mb-3">{subtitle}</p>
                  <h2 className={`font-display text-6xl md:text-9xl font-black mb-3 leading-[0.9] ${textGradient}`}>{title}</h2>
                  <p className="text-sm md:text-base text-foreground/80 font-body leading-relaxed max-w-lg">{description}</p>
                </motion.div>
                <div className="flex gap-3">
                  {images.slice(1, 4).map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30, rotate: (i - 1) * 5 }}
                      whileInView={{ opacity: 1, y: 0, rotate: (i - 1) * 3 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="w-24 h-24 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-xl border border-foreground/10"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GALLERY GRID — Gaming: neon, techy, grid-based */}
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
                <p className="text-xs md:text-sm font-body uppercase tracking-[0.3em] text-accent mb-1">{subtitle}</p>
                <h2 className={`font-display text-5xl md:text-7xl font-black mb-3 leading-[0.95] ${textGradient}`}>
                  {"< "}{title}{" />"}
                </h2>
                <p className="text-sm md:text-base text-foreground/70 font-body max-w-lg mx-auto">{description}</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 10,
                      boxShadow: "0 0 40px hsl(200, 100%, 50% / 0.4)",
                    }}
                    className={`rounded-xl overflow-hidden shadow-xl cursor-pointer border border-accent/10 transition-shadow ${
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
