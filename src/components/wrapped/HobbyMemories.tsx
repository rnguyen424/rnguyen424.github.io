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
    gradient: "gradient-primary",
    layout: "scattered" as const,
    captions: ["Send it!", "Gym partners", "Trail rides", "Chalk up", "Top out"],
  },
  {
    title: "Gotta Catch 'Em All",
    subtitle: "Pokémon Card Collecting",
    description: "Opening packs together, chasing rare pulls, and building our collection one holographic card at a time. The thrill of a chase card never gets old.",
    images: [hobbyPokemon, hobbyPokemon2, hobbyPokemon3, hobbyPokemon4],
    gradient: "gradient-golden",
    layout: "polaroid-wall" as const,
    captions: ["The collection", "Holo pull!", "Pack rip time", "The binder"],
  },
  {
    title: "Foodies For Life",
    subtitle: "Eating & Cooking Adventures",
    description: "From kitchen experiments to finding hidden gem restaurants — food has always been our love language. Every meal is an adventure we share.",
    images: [hobbyFood, hobbyFood2, hobbyFood3, hobbyFood4],
    gradient: "gradient-warm",
    layout: "stacked" as const,
    captions: ["Chef mode", "Ramen run", "Night market", "Pizza night"],
  },
  {
    title: "Adventure Awaits",
    subtitle: "Travelling the World Together",
    description: "Sunsets in new cities, hiking trails we'll never forget, and stamps in our passports that tell our story. The world is ours to explore.",
    images: [hobbyTravel, hobbyTravel2, hobbyTravel3, hobbyTravel4],
    gradient: "gradient-cool",
    layout: "collage" as const,
    captions: ["The view", "Boarding!", "Beach sunset", "Getting lost"],
  },
  {
    title: "Player Two Forever",
    subtitle: "Gaming Together",
    description: "Late-night co-op sessions, celebrating wins and raging at losses — together. From couch co-op to online raids, we're the ultimate duo.",
    images: [hobbyGaming, hobbyGaming2, hobbyGaming3, hobbyGaming4],
    gradient: "gradient-primary",
    layout: "pinboard" as const,
    captions: ["Co-op vibes", "The setup", "Controller time", "Victory!"],
  },
];

export const hobbySlides = hobbies.map((hobby, i) => {
  const Slide = () => <HobbySlide key={i} {...hobby} />;
  Slide.displayName = `Hobby_${hobby.title.replace(/\s/g, "")}`;
  return Slide;
});
