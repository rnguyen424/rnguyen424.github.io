import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyTravel4 from "@/assets/hobby-travel-4.jpg";

// Equirectangular projection: x = (lon+180)/360*1000, y = (90-lat)/180*500
interface City {
  name: string;
  x: number;
  y: number;
  image?: string;
  international?: boolean;
}

const cities: City[] = [
  // US cities (coordinates calculated from real lat/lon)
  { name: "Las Vegas", x: 180, y: 149 },
  { name: "Dallas", x: 231, y: 159 },
  { name: "Austin", x: 228, y: 166, image: hobbyTravel2 },
  { name: "San Antonio", x: 226, y: 168 },
  { name: "Houston", x: 235, y: 167, image: hobbyTravel },
  { name: "Destin", x: 260, y: 166 },
  { name: "Orlando", x: 274, y: 171, image: hobbyTravel3 },
  { name: "Chicago", x: 256, y: 134 },
  { name: "Knoxville", x: 267, y: 150 },
  { name: "Atlanta", x: 266, y: 156 },
  { name: "Charlotte", x: 275, y: 152 },
  { name: "Lynchburg", x: 280, y: 146 },
  { name: "Baltimore", x: 287, y: 141 },
  { name: "Boston", x: 303, y: 132 },
  { name: "New York City", x: 294, y: 137, image: hobbyTravel4 },
  // International
  { name: "Cabo San Lucas", x: 195, y: 186, international: true },
  { name: "Huatulco", x: 233, y: 206, international: true },
  { name: "Saint Martin", x: 325, y: 200, international: true },
  { name: "Anguilla", x: 326, y: 199, international: true },
  { name: "Narita", x: 890, y: 151, international: true },
  { name: "Hue City", x: 799, y: 204, international: true },
  { name: "Da Nang", x: 801, y: 206, international: true },
  { name: "Dalat", x: 801, y: 217, international: true },
  { name: "Nha Trang", x: 803, y: 216, international: true },
  { name: "Ho Chi Minh City", x: 796, y: 220, international: true, image: hobbyTravel },
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

            {/* World map continents — equirectangular projection */}
            {/* North America */}
            <path
              d="M 42,69 L 58,58 83,56 97,50 111,47 125,50 139,56 150,61
                 156,67 161,72 167,83 172,94 175,106 178,117 181,128
                 183,139 181,147 175,153 169,161 164,167 158,172 153,178
                 150,183 147,189 144,194 153,194 158,197 164,200
                 172,203 178,206 183,208 192,211 200,214 208,214
                 214,211 219,208 225,206 231,203 236,200 242,197
                 250,194 258,192 264,189 272,183 278,178 283,172
                 289,164 294,156 297,147 300,139 303,131 306,125
                 311,119 317,114 314,108 308,103 303,97 297,92
                 292,86 281,83 269,81 258,78 247,75 236,72
                 225,69 214,67 203,64 192,61 181,58 169,56
                 158,53 147,50 136,47 125,44 114,42 103,42
                 92,44 83,47 72,50 61,56 50,61 42,69 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.25"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.3" strokeWidth="0.8"
            />
            {/* Central America & Caribbean connector */}
            <path
              d="M 208,214 L 214,219 219,225 222,231 225,236 228,242
                 231,247 233,253 231,258 228,261 225,264 222,267
                 219,269 217,272 214,275 211,278"
              fill="none"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.25" strokeWidth="0.8"
            />
            {/* South America */}
            <path
              d="M 211,278 L 219,275 228,272 236,272 244,275 253,278
                 261,281 269,286 275,292 278,300 281,308 283,317
                 283,325 281,333 278,342 275,350 272,358 267,367
                 261,375 256,383 250,389 244,394 239,400 236,406
                 233,411 231,417 228,422 225,428 222,433 219,436
                 217,431 214,425 211,419 208,414 206,408 206,400
                 208,392 211,383 214,375 217,367 219,358 222,350
                 222,342 222,333 219,325 217,317 214,308 211,300
                 208,292 206,286 208,281 211,278 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.2" strokeWidth="0.8"
            />
            {/* Europe */}
            <path
              d="M 472,53 L 478,50 486,47 494,47 503,50 511,53
                 517,58 522,64 525,69 528,75 531,81 533,86
                 531,92 528,97 525,103 522,108 519,114 514,119
                 511,122 506,125 500,128 494,131 489,133
                 483,136 478,136 472,133 467,131 464,128
                 461,125 458,119 456,114 453,108 453,103
                 456,97 458,92 461,86 464,81 467,75
                 469,69 472,64 472,53 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.2" strokeWidth="0.8"
            />
            {/* British Isles */}
            <path
              d="M 458,78 L 461,75 464,72 467,72 467,78 464,83 461,83 458,78 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.15" strokeWidth="0.5"
            />
            {/* Scandinavia */}
            <path
              d="M 475,36 L 481,33 486,31 492,33 497,36 500,42
                 500,47 497,53 494,56 489,53 486,50 483,47
                 481,42 478,39 475,36 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.18"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.15" strokeWidth="0.5"
            />
            {/* Africa */}
            <path
              d="M 472,156 L 483,150 494,147 506,147 517,150
                 528,153 536,158 542,164 547,172 550,181
                 553,192 556,203 558,214 558,225 556,236
                 553,247 550,258 547,269 542,278 536,289
                 531,297 525,306 519,314 514,322 508,328
                 503,333 497,336 492,336 486,333 481,328
                 475,322 472,314 469,306 467,297 464,289
                 461,278 458,267 456,256 456,244 458,233
                 461,222 464,211 467,200 469,189 472,178
                 472,167 472,156 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.18"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.15" strokeWidth="0.8"
            />
            {/* Asia (mainland) */}
            <path
              d="M 533,86 L 544,78 556,72 569,67 583,64 597,61
                 611,58 625,56 639,56 653,56 667,58 681,61
                 694,64 708,67 722,72 736,78 750,83 764,89
                 778,94 789,100 800,108 808,117 814,125
                 819,133 822,142 825,150 825,158 822,167
                 819,175 814,181 808,189 800,194 792,200
                 783,206 775,211 764,217 753,222 742,225
                 731,228 719,228 708,225 697,222 686,219
                 675,214 664,211 653,206 642,200 631,194
                 622,189 614,183 606,175 597,167 589,158
                 581,150 575,142 569,133 564,125 558,117
                 553,108 547,100 542,94 536,89 533,86 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.22"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.25" strokeWidth="0.8"
            />
            {/* India subcontinent */}
            <path
              d="M 697,175 L 703,181 708,189 711,197 714,206
                 714,214 711,222 708,231 703,239 697,244
                 692,247 686,244 681,239 678,231 675,222
                 675,214 678,206 681,197 686,189 692,181
                 697,175 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.2"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.2" strokeWidth="0.5"
            />
            {/* Southeast Asia / Vietnam peninsula */}
            <path
              d="M 775,211 L 781,217 786,222 789,228 792,233
                 794,239 797,244 800,250 803,256 806,261
                 808,267 806,272 803,275 800,272 797,267
                 794,261 792,256 789,250 786,244 783,239
                 781,233 778,228 775,222 775,211 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.22"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.3" strokeWidth="0.8"
            />
            {/* Japan */}
            <path
              d="M 878,125 L 883,119 889,114 894,117 897,122
                 897,128 894,133 892,139 889,144 886,150
                 883,156 881,158 878,153 875,147 875,142
                 875,136 875,131 878,125 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.22"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.3" strokeWidth="0.8"
            />
            {/* Indonesia / Maritime SE Asia */}
            <path
              d="M 792,264 L 800,261 808,258 817,258 825,261
                 833,264 842,264 850,264 856,267 850,269
                 842,272 833,272 825,272 817,272 808,269
                 800,267 792,264 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.15"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.15" strokeWidth="0.5"
            />
            {/* Australia */}
            <path
              d="M 817,328 L 831,322 844,319 858,319 872,322
                 883,328 892,336 897,344 900,353 900,364
                 897,375 892,383 886,389 878,394 869,397
                 861,400 853,400 844,397 836,394 828,389
                 822,383 817,375 814,367 814,358 814,350
                 814,342 817,336 817,328 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.15"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.15" strokeWidth="0.8"
            />
            {/* Greenland */}
            <path
              d="M 361,28 L 372,25 383,25 394,28 403,33
                 408,39 411,47 408,53 403,56 397,58
                 392,56 386,53 381,50 375,47 369,44
                 364,39 361,33 361,28 Z"
              fill="hsl(200, 60%, 30%)" fillOpacity="0.15"
              stroke="hsl(160, 85%, 55%)" strokeOpacity="0.15" strokeWidth="0.5"
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
