import HobbySlide from "./HobbySlide";
import hobbyClimbing from "@/assets/hobby-climbing.jpg";
import hobbyPokemon from "@/assets/hobby-pokemon.jpg";
import hobbyFood from "@/assets/hobby-food.jpg";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyGaming from "@/assets/hobby-gaming.jpg";

const hobbies = [
  {
    title: "Climbing Together",
    subtitle: "Our Shared Passion",
    description: "From our first bouldering session to crushing V5s side by side — the gym became our second home. Every send celebrated together.",
    image: hobbyClimbing,
    gradient: "gradient-primary",
    layout: "left-tall" as const,
    emoji: "🧗",
  },
  {
    title: "Gotta Catch 'Em All",
    subtitle: "Card Collecting",
    description: "Opening packs together, chasing rare pulls, and building our collection one holographic card at a time. The thrill of a chase card never gets old.",
    image: hobbyPokemon,
    gradient: "gradient-golden",
    layout: "right-tall" as const,
    emoji: "⚡",
  },
  {
    title: "Foodies For Life",
    subtitle: "Eating & Cooking",
    description: "From kitchen experiments to finding hidden gem restaurants — food has always been our love language. Every meal is an adventure.",
    image: hobbyFood,
    gradient: "gradient-warm",
    layout: "center-split" as const,
    emoji: "🍳",
  },
  {
    title: "Adventure Awaits",
    subtitle: "Travelling the World",
    description: "Sunsets in new cities, hiking trails we'll never forget, and stamps in our passports that tell our story. The world is ours to explore.",
    image: hobbyTravel,
    gradient: "gradient-cool",
    layout: "diagonal" as const,
    emoji: "✈️",
  },
  {
    title: "Player Two Forever",
    subtitle: "Gaming Together",
    description: "Late-night co-op sessions, celebrating wins and raging at losses — together. From couch co-op to online raids, we're the ultimate duo.",
    image: hobbyGaming,
    gradient: "gradient-primary",
    layout: "floating" as const,
    emoji: "🎮",
  },
];

export const hobbySlides = hobbies.map((hobby, i) => {
  const Slide = () => <HobbySlide key={i} {...hobby} />;
  Slide.displayName = `Hobby_${hobby.title.replace(/\s/g, "")}`;
  return Slide;
});
