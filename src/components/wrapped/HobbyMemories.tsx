import HobbySlide from "./HobbySlide";
import hobbyClimbing from "@/assets/hobby-climbing.jpg";
import hobbyClimbing2 from "@/assets/hobby-climbing-2.jpg";
import hobbyClimbing3 from "@/assets/hobby-climbing-3.jpg";
import hobbyPokemon from "@/assets/hobby-pokemon.jpg";
import hobbyPokemon2 from "@/assets/hobby-pokemon-2.jpg";
import hobbyPokemon3 from "@/assets/hobby-pokemon-3.jpg";
import hobbyFood from "@/assets/hobby-food.jpg";
import hobbyFood2 from "@/assets/hobby-food-2.jpg";
import hobbyFood3 from "@/assets/hobby-food-3.jpg";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyGaming from "@/assets/hobby-gaming.jpg";
import hobbyGaming2 from "@/assets/hobby-gaming-2.jpg";
import hobbyGaming3 from "@/assets/hobby-gaming-3.jpg";

const hobbies = [
  {
    title: "Climbing Together",
    subtitle: "Our Shared Passion",
    description: "From our first bouldering session to crushing V5s side by side — the gym became our second home. Every send celebrated together.",
    images: [hobbyClimbing, hobbyClimbing2, hobbyClimbing3],
    gradient: "gradient-primary",
    layout: "left-tall" as const,
    emoji: "🧗",
    decals: ["💪", "🏔️", "🤝", "✨"],
  },
  {
    title: "Gotta Catch 'Em All",
    subtitle: "Card Collecting",
    description: "Opening packs together, chasing rare pulls, and building our collection one holographic card at a time. The thrill of a chase card never gets old.",
    images: [hobbyPokemon, hobbyPokemon2, hobbyPokemon3],
    gradient: "gradient-golden",
    layout: "right-tall" as const,
    emoji: "⚡",
    decals: ["🌟", "🃏", "✨", "🔥"],
  },
  {
    title: "Foodies For Life",
    subtitle: "Eating & Cooking",
    description: "From kitchen experiments to finding hidden gem restaurants — food has always been our love language. Every meal is an adventure.",
    images: [hobbyFood, hobbyFood2, hobbyFood3],
    gradient: "gradient-warm",
    layout: "center-split" as const,
    emoji: "🍳",
    decals: ["🍜", "❤️", "🔥", "🍕"],
  },
  {
    title: "Adventure Awaits",
    subtitle: "Travelling the World",
    description: "Sunsets in new cities, hiking trails we'll never forget, and stamps in our passports that tell our story. The world is ours to explore.",
    images: [hobbyTravel, hobbyTravel2, hobbyTravel3],
    gradient: "gradient-cool",
    layout: "diagonal" as const,
    emoji: "✈️",
    decals: ["🌍", "🗺️", "🌅", "📸"],
  },
  {
    title: "Player Two Forever",
    subtitle: "Gaming Together",
    description: "Late-night co-op sessions, celebrating wins and raging at losses — together. From couch co-op to online raids, we're the ultimate duo.",
    images: [hobbyGaming, hobbyGaming2, hobbyGaming3],
    gradient: "gradient-primary",
    layout: "floating" as const,
    emoji: "🎮",
    decals: ["🕹️", "🏆", "⚔️", "💜"],
  },
];

export const hobbySlides = hobbies.map((hobby, i) => {
  const Slide = () => <HobbySlide key={i} {...hobby} />;
  Slide.displayName = `Hobby_${hobby.title.replace(/\s/g, "")}`;
  return Slide;
});
