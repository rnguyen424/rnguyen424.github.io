import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyTravel4 from "@/assets/hobby-travel-4.jpg";

// Map coordinates (approximate Mercator projection for SVG viewBox 0 0 1000 500)
interface City {
  name: string;
  x: number;
  y: number;
  image?: string;
  international?: boolean;
}

const cities: City[] = [
  // US cities
  { name: "Las Vegas", x: 152, y: 195 },
  { name: "Dallas", x: 228, y: 230 },
  { name: "Austin", x: 222, y: 245, image: hobbyTravel2 },
  { name: "San Antonio", x: 216, y: 250 },
  { name: "Houston", x: 237, y: 250, image: hobbyTravel },
  { name: "Destin", x: 290, y: 230 },
  { name: "Orlando", x: 310, y: 245, image: hobbyTravel3 },
  { name: "Chicago", x: 270, y: 175 },
  { name: "Knoxville", x: 298, y: 208 },
  { name: "Atlanta", x: 298, y: 222 },
  { name: "Charlotte", x: 313, y: 210 },
  { name: "Lynchburg", x: 318, y: 200 },
  { name: "Baltimore", x: 328, y: 190 },
  { name: "Boston", x: 342, y: 172 },
  { name: "New York City", x: 338, y: 182, image: hobbyTravel4 },
  // International
  { name: "Cabo San Lucas", x: 170, y: 260, international: true },
  { name: "Huatulco", x: 205, y: 280, international: true },
  { name: "Saint Martin", x: 355, y: 280, international: true },
  { name: "Anguilla", x: 356, y: 278, international: true },
  { name: "Narita", x: 830, y: 192, international: true },
  { name: "Hue City", x: 775, y: 275, international: true },
  { name: "Da Nang", x: 778, y: 280, international: true },
  { name: "Dalat", x: 778, y: 295, international: true },
  { name: "Nha Trang", x: 781, y: 290, international: true },
  { name: "Ho Chi Minh City", x: 775, y: 300, international: true, image: hobbyTravel },
];

// Order for plane animation — roughly a travel route
const routeOrder = [
  "Houston", "Dallas", "Austin", "San Antonio", "Las Vegas",
  "Chicago", "Knoxville", "Atlanta", "Charlotte", "Lynchburg",
  "Baltimore", "New York City", "Boston", "Orlando", "Destin",
  "Cabo San Lucas", "Huatulco", "Saint Martin",
  "Narita", "Hue City", "Da Nang", "Nha Trang", "Dalat", "Ho Chi Minh City",
];

const routeCities = routeOrder.map(name => cities.find(c => c.name === name)!);

const TravelMapSlide = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const [visitedStops, setVisitedStops] = useState<number[]>([]);
  const [showPopup, setShowPopup] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStop(prev => {
        const next = (prev + 1) % routeCities.length;
        setVisitedStops(v => {
          if (!v.includes(next)) return [...v, next];
          return v;
        });
        const city = routeCities[next];
        if (city.image) {
          setShowPopup(city.name);
          setTimeout(() => setShowPopup(null), 2200);
        }
        return next;
      });
    }, 1800);

    // Visit first stop
    setVisitedStops([0]);
    return () => clearInterval(interval);
  }, []);

  const currentCity = routeCities[currentStop];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hobby-bg-travel">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      }} />

      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4 py-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 flex-shrink-0 z-20"
        >
          <p className="text-xs md:text-sm font-body uppercase tracking-[0.4em] text-accent mb-1">Travelling the World</p>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-2 leading-[0.9] text-gradient-cool">Adventure Awaits</h2>
          <p className="text-xs md:text-sm text-foreground/70 font-body max-w-md mx-auto">
            We've been to 4 countries and over 25 cities. I can't wait to see more of the world with you.
          </p>
        </motion.div>

        {/* Map container */}
        <div className="relative w-full max-w-5xl flex-1 min-h-0">
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full"
            style={{ maxHeight: "65vh" }}
          >
            {/* Simplified world map outline */}
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(160, 85%, 55%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(160, 85%, 55%)" stopOpacity="0" />
              </radialGradient>
              <filter id="mapGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {[...Array(13)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 40} x2="1000" y2={i * 40} stroke="hsl(200, 80%, 60%)" strokeOpacity="0.07" strokeWidth="0.5" />
            ))}
            {[...Array(26)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="500" stroke="hsl(200, 80%, 60%)" strokeOpacity="0.07" strokeWidth="0.5" />
            ))}

            {/* Simplified continent outlines */}
            {/* North America */}
            <path
              d="M 120 80 L 180 60 L 250 55 L 310 70 L 350 90 L 360 120 L 355 160 L 340 170 L 330 190 L 310 210 L 290 230 L 300 250 L 280 260 L 250 260 L 230 270 L 210 280 L 200 290 L 190 280 L 175 260 L 160 240 L 150 210 L 140 180 L 130 150 L 120 120 Z"
              fill="hsl(200, 60%, 30%)"
              fillOpacity="0.25"
              stroke="hsl(160, 85%, 55%)"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M 240 300 L 270 290 L 300 300 L 310 330 L 300 360 L 290 390 L 270 420 L 250 440 L 240 430 L 235 400 L 240 370 L 235 340 Z"
              fill="hsl(200, 60%, 30%)"
              fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            {/* Europe */}
            <path
              d="M 460 70 L 490 60 L 520 65 L 540 80 L 530 100 L 520 120 L 500 130 L 480 140 L 460 135 L 450 115 L 455 90 Z"
              fill="hsl(200, 60%, 30%)"
              fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            {/* Africa */}
            <path
              d="M 470 160 L 510 150 L 550 160 L 570 190 L 575 230 L 570 270 L 555 310 L 535 350 L 510 370 L 490 360 L 475 330 L 465 290 L 460 250 L 455 210 L 460 180 Z"
              fill="hsl(200, 60%, 30%)"
              fillOpacity="0.15"
              stroke="hsl(160, 85%, 55%)"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M 560 60 L 620 50 L 700 55 L 780 70 L 850 90 L 870 120 L 860 160 L 840 190 L 810 210 L 780 230 L 750 260 L 720 280 L 690 290 L 660 280 L 640 250 L 620 220 L 600 190 L 580 160 L 560 130 L 555 100 Z"
              fill="hsl(200, 60%, 30%)"
              fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
            {/* Australia */}
            <path
              d="M 790 350 L 830 340 L 870 350 L 890 370 L 880 400 L 860 420 L 830 425 L 800 410 L 785 390 L 780 370 Z"
              fill="hsl(200, 60%, 30%)"
              fillOpacity="0.15"
              stroke="hsl(160, 85%, 55%)"
              strokeOpacity="0.15"
              strokeWidth="1"
            />

            {/* Route lines connecting visited stops */}
            {visitedStops.length > 1 && visitedStops.slice(1).map((stopIdx, i) => {
              const prev = routeCities[visitedStops[i]];
              const curr = routeCities[stopIdx];
              return (
                <motion.line
                  key={`route-${i}`}
                  x1={prev.x}
                  y1={prev.y}
                  x2={curr.x}
                  y2={curr.y}
                  stroke="hsl(160, 85%, 55%)"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
              );
            })}

            {/* City dots */}
            {cities.map((city, i) => {
              const isVisited = visitedStops.some(s => routeCities[s]?.name === city.name);
              const isCurrent = currentCity?.name === city.name;
              return (
                <g key={i}>
                  {isCurrent && (
                    <motion.circle
                      cx={city.x}
                      cy={city.y}
                      r="12"
                      fill="url(#glow)"
                      animate={{ r: [8, 16, 8], opacity: [0.6, 0.2, 0.6] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r={isCurrent ? 4 : 2.5}
                    fill={isVisited ? "hsl(160, 85%, 55%)" : "hsl(200, 60%, 50%)"}
                    fillOpacity={isVisited ? 1 : 0.4}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    filter={isCurrent ? "url(#mapGlow)" : undefined}
                  />
                  {/* City label — show for current or hovered */}
                  {isVisited && (
                    <text
                      x={city.x}
                      y={city.y - 7}
                      textAnchor="middle"
                      fill="hsl(0, 0%, 95%)"
                      fontSize="6"
                      fontFamily="'Space Grotesk', sans-serif"
                      opacity={isCurrent ? 1 : 0.5}
                    >
                      {city.name}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Animated plane */}
            <motion.g
              animate={{
                x: currentCity.x - 15,
                y: currentCity.y - 15,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <text
                fontSize="18"
                style={{ filter: "drop-shadow(0 0 6px hsl(160, 85%, 55%))" }}
              >
                ✈️
              </text>
            </motion.g>
          </svg>

          {/* Photo popup */}
          <AnimatePresence>
            {showPopup && (() => {
              const city = cities.find(c => c.name === showPopup);
              if (!city || !city.image) return null;
              return (
                <motion.div
                  key={showPopup}
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -20 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  className="absolute z-30 pointer-events-none"
                  style={{
                    left: `${(city.x / 1000) * 100}%`,
                    top: `${(city.y / 500) * 100 - 25}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div className="bg-card/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-accent/30 w-40 md:w-52">
                    <img src={city.image} alt={city.name} className="w-full h-28 md:h-36 object-cover" />
                    <div className="px-3 py-2 text-center">
                      <p className="text-xs md:text-sm font-display font-bold text-foreground">{city.name}</p>
                      {city.international && (
                        <p className="text-[10px] text-accent font-body uppercase tracking-wider">International</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-8 mt-4 z-20"
        >
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-black text-accent">4</p>
            <p className="text-[10px] md:text-xs font-body uppercase tracking-wider text-foreground/50">Countries</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-black text-accent">25+</p>
            <p className="text-[10px] md:text-xs font-body uppercase tracking-wider text-foreground/50">Cities</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl md:text-3xl font-black text-accent">∞</p>
            <p className="text-[10px] md:text-xs font-body uppercase tracking-wider text-foreground/50">Memories</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelMapSlide;
