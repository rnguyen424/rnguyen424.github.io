import HobbySlide from "./HobbySlide";
import hobbyClimbing from "@/assets/hobby-climbing.jpg";
import hobbyClimbing2 from "@/assets/hobby-climbing-2.jpg";
import hobbyClimbing3 from "@/assets/hobby-climbing-3.jpg";
import hobbyFitnessBike from "@/assets/hobby-fitness-bike.jpg";
import hobbyFitnessGym from "@/assets/hobby-fitness-gym.jpg";
import cardGengar from "@/assets/card-collecting/gengar.jpg";
import cardPikachu from "@/assets/card-collecting/pikachu.jpg";
import cardPull from "@/assets/card-collecting/card-pull.jpg";
import cardEeveelutions from "@/assets/card-collecting/eeveelutions.jpg";
import cardCharizard from "@/assets/card-collecting/charizard.jpg";
import cardBinder from "@/assets/card-collecting/binder.jpg";
import hobbyFood from "@/assets/hobby-food.jpg";
import hobbyFood2 from "@/assets/hobby-food-2.jpg";
import hobbyFood3 from "@/assets/hobby-food-3.jpg";
import hobbyFood4 from "@/assets/hobby-food-4.jpg";
import hobbyFood5 from "@/assets/hobby-food-5.jpg";
import hobbyFood6 from "@/assets/hobby-food-6.jpg";
import hobbyFood7 from "@/assets/hobby-food-7.jpg";
import hobbyFood8 from "@/assets/hobby-food-8.jpg";
import hobbyFood9 from "@/assets/hobby-food-9.jpg";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyTravel4 from "@/assets/hobby-travel-4.jpg";
import hobbyFamily from "@/assets/hobby-family.jpg";
import hobbyFamily2 from "@/assets/hobby-family-2.jpg";
import hobbyFamily3 from "@/assets/hobby-family-3.jpg";
import hobbyFamily4 from "@/assets/hobby-family-4.jpg";

const hobbies = [
  {
    title: "Fitness Freaks",
    subtitle: "Gym · Climbing · Biking",
    description: "From crushing PRs at the gym to sending routes on the wall and biking through golden trails — we push each other to be stronger every single day.",
    images: [hobbyClimbing, hobbyFitnessGym, hobbyFitnessBike, hobbyClimbing2, hobbyClimbing3],
    bgClass: "hobby-bg-fitness",
    textGradient: "text-gradient-primary",
    layout: "hero-left" as const,
    theme: "fitness" as const,
  },
  {
    title: "Gotta Catch 'Em All",
    subtitle: "Pokémon Card Collecting",
    description: "Opening packs together, chasing rare pulls, and building our collection one holographic card at a time. The thrill never gets old.",
    images: [cardCharizard, cardGengar, cardPikachu, cardPull, cardEeveelutions, cardBinder],
    bgClass: "hobby-bg-pokemon",
    textGradient: "text-gradient-pokemon",
    layout: "mosaic" as const,
    theme: "pokemon" as const,
  },
  {
    title: "Foodies For Life",
    subtitle: "We Just Love to Eat!",
    description: "From hidden gem restaurants to late-night feasts — food is our love language. Every bite is a memory, every meal an adventure.",
    images: [hobbyFood, hobbyFood2, hobbyFood3, hobbyFood4, hobbyFood5, hobbyFood6, hobbyFood7, hobbyFood8, hobbyFood9],
    bgClass: "hobby-bg-food",
    textGradient: "text-gradient-warm",
    layout: "overlap-right" as const,
    theme: "food" as const,
  },
  {
    title: "Adventure Awaits",
    subtitle: "Travelling the World",
    description: "Sunsets in new cities, hiking trails we'll never forget, and stamps in our passports that tell our story.",
    images: [hobbyTravel, hobbyTravel3, hobbyTravel2, hobbyTravel4],
    bgClass: "hobby-bg-travel",
    textGradient: "text-gradient-cool",
    layout: "full-bleed" as const,
    theme: "travel" as const,
  },
  {
    title: "Our People",
    subtitle: "Family & Loved Ones",
    description: "The ones who raised us, the ones who cheer us on — every family gathering, holiday, and group hug makes this journey even sweeter.",
    images: [hobbyFamily, hobbyFamily2, hobbyFamily3, hobbyFamily4],
    bgClass: "hobby-bg-family",
    textGradient: "text-gradient-golden",
    layout: "overlap-right" as const,
    theme: "family" as const,
  },
];

export const hobbySlides = hobbies.map((hobby, i) => {
  const Slide = () => <HobbySlide key={i} {...hobby} />;
  Slide.displayName = `Hobby_${hobby.title.replace(/\s/g, "")}`;
  return Slide;
});
