import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyTravel4 from "@/assets/hobby-travel-4.jpg";
import worldMap from "@/assets/world-map.png";

interface City {
  name: string;
  // Percentages relative to the map image (0-100)
  px: number;
  py: number;
  image?: string;
  international?: boolean;
}

// Positions calibrated to the simplified world map image (percentage-based)
const cities: City[] = [
  // US cities
  { name: "Las Vegas", px: 14.5, py: 37 },
  { name: "Dallas", px: 18, py: 42 },
  { name: "Austin", px: 17.5, py: 44, image: hobbyTravel2 },
  { name: "San Antonio", px: 17, py: 45 },
  { name: "Houston", px: 18.5, py: 44.5, image: hobbyTravel },
  { name: "Destin", px: 22, py: 41 },
  { name: "Orlando", px: 23.5, py: 44 },
  { name: "Chicago", px: 21, py: 34 },
  { name: "Knoxville", px: 22.5, py: 38 },
  { name: "Atlanta", px: 22.5, py: 40 },
  { name: "Charlotte", px: 23.5, py: 38 },
  { name: "Lynchburg", px: 24, py: 37 },
  { name: "Baltimore", px: 25, py: 35.5 },
  { name: "Boston", px: 26.5, py: 33, image: hobbyTravel3 },
  { name: "New York City", px: 25.8, py: 34.5, image: hobbyTravel4 },
  // International
  { name: "Cabo San Lucas", px: 15, py: 48, international: true },
  { name: "Huatulco", px: 17.5, py: 52, international: true },
  { name: "Saint Martin", px: 29, py: 50, international: true },
  { name: "Anguilla", px: 29.2, py: 49.5, international: true },
  { name: "Narita", px: 82, py: 36, international: true },
  { name: "Hue City", px: 76, py: 50, international: true },
  { name: "Da Nang", px: 76.5, py: 51, international: true },
  { name: "Dalat", px: 76.5, py: 54, international: true },
  { name: "Nha Trang", px: 77, py: 53, international: true },
  { name: "Ho Chi Minh City", px: 76, py: 55, international: true, image: hobbyTravel },
];

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
        <div className="relative w-full max-w-5xl flex-1 min-h-0 flex items-center justify-center -mt-14 -ml-8">
          {/* World map image */}
          <div className="relative w-full" style={{ maxHeight: "55vh" }}>
            <img
              src={worldMap}
              alt="World Map"
              className="w-full h-auto opacity-25"
              style={{ filter: "brightness(1.2) sepia(1) hue-rotate(170deg) saturate(3)" }}
            />

            {/* Overlay: city dots, labels, routes, plane */}
            <div className="absolute inset-0">
              {/* Route lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {visitedStops.length > 1 && visitedStops.slice(1).map((stopIdx, i) => {
                  const prev = routeCities[visitedStops[i]];
                  const curr = routeCities[stopIdx];
                  return (
                    <motion.line
                      key={`route-${i}`}
                      x1={prev.px}
                      y1={prev.py}
                      x2={curr.px}
                      y2={curr.py}
                      stroke="hsl(160, 85%, 55%)"
                      strokeOpacity="0.35"
                      strokeWidth="0.15"
                      strokeDasharray="0.5 0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}
              </svg>

              {/* City dots */}
              {cities.map((city, i) => {
                const isVisited = visitedStops.some(s => routeCities[s]?.name === city.name);
                const isCurrent = currentCity?.name === city.name;
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${city.px}%`,
                      top: `${city.py}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Glow ring for current */}
                    {isCurrent && (
                      <motion.div
                        className="absolute rounded-full border border-accent/50"
                        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                        animate={{
                          width: ["12px", "28px", "12px"],
                          height: ["12px", "28px", "12px"],
                          opacity: [0.6, 0.1, 0.6],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    {/* Dot */}
                    <motion.div
                      className="rounded-full"
                      style={{
                        width: isCurrent ? "8px" : "5px",
                        height: isCurrent ? "8px" : "5px",
                        backgroundColor: isVisited ? "hsl(160, 85%, 55%)" : "hsl(200, 60%, 50%)",
                        opacity: isVisited ? 1 : 0.4,
                        boxShadow: isCurrent ? "0 0 10px hsl(160, 85%, 55%), 0 0 20px hsl(160, 85%, 55% / 0.4)" : "none",
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.04, type: "spring" }}
                    />
                    {/* Label */}
                    {isVisited && (
                      <span
                        className="absolute whitespace-nowrap font-display text-foreground pointer-events-none select-none"
                        style={{
                          fontSize: "7px",
                          top: "-12px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          opacity: isCurrent ? 1 : 0.45,
                          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        {city.name}
                      </span>
                    )}
                  </div>
                );
              })}

              {/* Animated plane */}
              <motion.div
                className="absolute pointer-events-none z-20"
                animate={{
                  left: `${currentCity.px}%`,
                  top: `${currentCity.py}%`,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <span
                  className="text-lg md:text-xl"
                  style={{ filter: "drop-shadow(0 0 8px hsl(160, 85%, 55%))" }}
                >
                  ✈️
                </span>
              </motion.div>
            </div>

            {/* Photo popup */}
            <AnimatePresence>
              {showPopup && (() => {
                const city = cities.find(c => c.name === showPopup);
                if (!city || !city.image) return null;
                return (
                  <motion.div
                    key={showPopup}
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: -10 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                    className="absolute z-30 pointer-events-none"
                    style={{
                      left: `${city.px}%`,
                      top: `${city.py - 2}%`,
                      transform: "translate(-50%, -100%)",
                    }}
                  >
                    <div className="bg-card/90 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-accent/30 w-36 md:w-48">
                      <img src={city.image} alt={city.name} className="w-full h-24 md:h-32 object-cover" />
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
