import HobbySlide from "./HobbySlide";
import hobbyClimbing from "@/assets/hobby-climbing.jpg";
import hobbyClimbing2 from "@/assets/hobby-climbing-2.jpg";
import hobbyClimbing3 from "@/assets/hobby-climbing-3.jpg";
import hobbyFitnessBike from "@/assets/hobby-fitness-bike.jpg";
import hobbyFitnessGym from "@/assets/hobby-fitness-gym.jpg";
import hobbyPokemon from "@/assets/hobby-pokemon.jpg";
import hobbyPokemon2 from "@/assets/hobby-pokemon-2.jpg";
import hobbyPokemon3 from "@/assets/hobby-pokemon-3.jpg";
import hobbyPokemon4 from "@/assets/hobby-pokemon-4.jpg";
import hobbyFood from "@/assets/hobby-food.jpg";
import hobbyFood2 from "@/assets/hobby-food-2.jpg";
import hobbyFood3 from "@/assets/hobby-food-3.jpg";
import hobbyFood4 from "@/assets/hobby-food-4.jpg";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyTravel4 from "@/assets/hobby-travel-4.jpg";
import hobbyGaming from "@/assets/hobby-gaming.jpg";
import hobbyGaming2 from "@/assets/hobby-gaming-2.jpg";
import hobbyGaming3 from "@/assets/hobby-gaming-3.jpg";
import hobbyGaming4 from "@/assets/hobby-gaming-4.jpg";

const hobbies = [
  {
    title: "Fitness Freaks",
    subtitle: "Gym · Climbing · Biking",
    description: "From crushing PRs at the gym to sending routes on the wall and biking through golden trails — we push each other to be stronger every single day.",
    images: [hobbyClimbing, hobbyFitnessGym, hobbyFitnessBike, hobbyClimbing2, hobbyClimbing3],
    bgClass: "hobby-bg-fitness",
    textGradient: "text-gradient-primary",
    layout: "hero-left" as const,
  },
  {
    title: "Gotta Catch 'Em All",
    subtitle: "Pokémon Card Collecting",
    description: "Opening packs together, chasing rare pulls, and building our collection one holographic card at a time. The thrill never gets old.",
    images: [hobbyPokemon, hobbyPokemon2, hobbyPokemon3, hobbyPokemon4],
    bgClass: "hobby-bg-pokemon",
    textGradient: "text-gradient-golden",
    layout: "mosaic" as const,
  },
  {
    title: "Foodies For Life",
    subtitle: "Eating & Cooking Adventures",
    description: "From kitchen experiments to hidden gem restaurants — food has always been our love language. Every meal is an adventure.",
    images: [hobbyFood, hobbyFood2, hobbyFood3, hobbyFood4],
    bgClass: "hobby-bg-food",
    textGradient: "text-gradient-warm",
    layout: "overlap-right" as const,
  },
  {
    title: "Adventure Awaits",
    subtitle: "Travelling the World",
    description: "Sunsets in new cities, hiking trails we'll never forget, and stamps in our passports that tell our story.",
    images: [hobbyTravel, hobbyTravel3, hobbyTravel2, hobbyTravel4],
    bgClass: "hobby-bg-travel",
    textGradient: "text-gradient-cool",
    layout: "full-bleed" as const,
  },
  {
    title: "Player Two Forever",
    subtitle: "Gaming Together",
    description: "Late-night co-op sessions, celebrating wins and raging at losses — together. We're the ultimate duo.",
    images: [hobbyGaming, hobbyGaming2, hobbyGaming3, hobbyGaming4],
    bgClass: "hobby-bg-gaming",
    textGradient: "text-gradient-blue",
    layout: "gallery-grid" as const,
  },
];

export const hobbySlides = hobbies.map((hobby, i) => {
  const Slide = () => <HobbySlide key={i} {...hobby} />;
  Slide.displayName = `Hobby_${hobby.title.replace(/\s/g, "")}`;
  return Slide;
});
