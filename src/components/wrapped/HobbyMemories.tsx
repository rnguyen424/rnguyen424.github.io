import HobbySlide from "./HobbySlide";
import climbing4 from "@/assets/fitness/climbing-4.jpg";
import climbing5 from "@/assets/fitness/climbing-5.jpg";
import climbing6 from "@/assets/fitness/climbing-6.jpg";
import climbing7 from "@/assets/fitness/climbing-7.jpg";
import climbing8 from "@/assets/fitness/climbing-8.jpg";
import climbing9 from "@/assets/fitness/climbing-9.jpg";
import climbing10 from "@/assets/fitness/climbing-10.png";
import bike2 from "@/assets/fitness/bike-2.png";
import bike3 from "@/assets/fitness/bike-3.png";
import cardGengar from "@/assets/card-collecting/gengar.jpg";
import cardPikachu from "@/assets/card-collecting/pikachu.jpg";
import cardPull from "@/assets/card-collecting/card-pull.jpg";
import cardEeveelutions from "@/assets/card-collecting/eeveelutions.jpg";
import cardCharizard from "@/assets/card-collecting/charizard.jpg";
import cardBinder from "@/assets/card-collecting/binder.jpg";
import hobbyFood2 from "@/assets/food/hobby-food-2.jpg";
import hobbyFood3 from "@/assets/food/hobby-food-3.jpg";
import hobbyFood4 from "@/assets/food/hobby-food-4.jpg";
import hobbyFood6 from "@/assets/food/hobby-food-6.jpg";
import hobbyFood7 from "@/assets/food/hobby-food-7.jpg";
import hobbyFood8 from "@/assets/food/hobby-food-8.jpg";
import foodRyeat from "@/assets/food/food-ryeat.png";
import foodRyeat1 from "@/assets/food/food-ryeat1.png";
import foodRyeat2 from "@/assets/food/food-ryeat2.png";
import foodRysyeat from "@/assets/food/food-rysyeat.png";
import foodSyeat1 from "@/assets/food/food-syeat1.png";
import foodSyeat2 from "@/assets/food/food-syeat2.png";
import foodSyeat3 from "@/assets/food/food-syeat3.png";
import foodRyeat3 from "@/assets/food/food-ryeat3.png";
import foodRyeat4 from "@/assets/food/food-ryeat4.png";
import foodRyeat5 from "@/assets/food/food-ryeat5.png";
import foodRyeat6 from "@/assets/food/food-ryeat6.png";
import foodSyeat4 from "@/assets/food/food-syeat4.png";
import foodSyeat5 from "@/assets/food/food-syeat5.png";
import foodRyeat7 from "@/assets/food/food-ryeat7.png";
import foodRyeat8 from "@/assets/food/food-ryeat8.png";
import foodSyeat42 from "@/assets/food/food-syeat4-2.png";
import foodSyeat52 from "@/assets/food/food-syeat5-2.png";
import foodSyeat7 from "@/assets/food/food-syeat7.png";
import foodSyeat8 from "@/assets/food/food-syeat8.png";
import foodWeat1 from "@/assets/food/food-weat1.png";
import foodSyeat9 from "@/assets/food/food-syeat9.png";
import hobbyTravel from "@/assets/hobby-travel.jpg";
import hobbyTravel2 from "@/assets/hobby-travel-2.jpg";
import hobbyTravel3 from "@/assets/hobby-travel-3.jpg";
import hobbyTravel4 from "@/assets/hobby-travel-4.jpg";
import family1 from "@/assets/family/family1.png";
import family2 from "@/assets/family/family2.png";
import family3 from "@/assets/family/family3.png";
import family4 from "@/assets/family/family4.png";
import family5 from "@/assets/family/family5.png";
import family6 from "@/assets/family/family6.png";
import family7 from "@/assets/family/family7.png";
import family8 from "@/assets/family/family8.png";
import family9 from "@/assets/family/family9.png";
import family10 from "@/assets/family/family10.png";
import family11 from "@/assets/family/family11.png";
import family12 from "@/assets/family/family12.png";
import family13 from "@/assets/family/family13.png";
import family14 from "@/assets/family/family14.png";
import family15 from "@/assets/family/family15.png";
import family16 from "@/assets/family/family16.png";
import family17 from "@/assets/family/family17.png";
import family18 from "@/assets/family/family18.png";
import family19 from "@/assets/family/family19.png";
import family20 from "@/assets/family/family20.png";
import family21 from "@/assets/family/family21.png";
import family22 from "@/assets/family/family22.png";
import family23 from "@/assets/family/family23.png";
import family24 from "@/assets/family/family24.png";
import family25 from "@/assets/family/family25.jpg";
import family26 from "@/assets/family/family26.jpg";
import family27 from "@/assets/family/family27.jpg";
import family28 from "@/assets/family/family28.jpg";
import family29 from "@/assets/family/family29.png";
import family30 from "@/assets/family/family30.png";

const hobbies = [
  {
    title: "Fitness Freaks",
    subtitle: "Gym · Climbing · Biking",
    description: "From crushing PRs at the gym to sending routes on the wall and biking through golden trails — we push each other to be stronger every single day.",
    images: [climbing4, climbing5, climbing6, climbing7, climbing8, climbing9, climbing10, bike2, bike3],
    videos: [],
    bgClass: "hobby-bg-fitness",
    textGradient: "text-gradient-primary",
    layout: "fitness-grid" as const,
    theme: "fitness" as const,
  },
  {
    title: "Gotta Catch 'Em All",
    subtitle: "Pokémon Card Collecting",
    description: "Opening packs together, chasing rare pulls, and building our collection one holographic card at a time. The thrill never gets old.",
    images: [cardCharizard, cardGengar, cardPikachu, cardPull, cardEeveelutions, cardBinder],
    videos: [],
    bgClass: "hobby-bg-pokemon",
    textGradient: "text-gradient-pokemon",
    layout: "mosaic" as const,
    theme: "pokemon" as const,
  },
  {
    title: "Foodies For Life",
    subtitle: "We Just Love to Eat!",
    description: "From hidden gem restaurants to late-night feasts — food is our love language. Every bite is a memory, every meal an adventure.",
    images: [hobbyFood2, hobbyFood3, hobbyFood4, hobbyFood6, hobbyFood7, hobbyFood8, foodRyeat, foodRyeat1, foodRyeat2, foodRysyeat, foodSyeat1, foodSyeat2, foodSyeat3, foodRyeat3, foodRyeat4, foodRyeat5, foodRyeat6, foodSyeat4, foodSyeat5, foodRyeat7, foodRyeat8, foodSyeat42, foodSyeat52, foodSyeat7, foodSyeat8, foodWeat1, foodSyeat9],
    videos: [],
    bgClass: "hobby-bg-food",
    textGradient: "text-gradient-warm",
    layout: "food-scatter" as const,
    theme: "food" as const,
  },
  {
    title: "Adventure Awaits",
    subtitle: "Travelling the World",
    description: "Sunsets in new cities, hiking trails we'll never forget, and stamps in our passports that tell our story.",
    images: [hobbyTravel, hobbyTravel3, hobbyTravel2, hobbyTravel4],
    videos: [],
    bgClass: "hobby-bg-travel",
    textGradient: "text-gradient-cool",
    layout: "full-bleed" as const,
    theme: "travel" as const,
  },
  {
    title: "Our People",
    subtitle: "Family & Loved Ones",
    description: "The ones who raised us and the ones who cheer us on. Every family gathering, holiday, trip, or event makes this journey even sweeter.",
    images: [family1, family2, family3, family4, family5, family6, family7, family8, family9, family10, family11, family12, family13, family14, family15, family16, family17, family18, family19, family20, family21, family22, family23, family24, family25, family26, family27, family28, family29, family30],
    videos: [],
    bgClass: "hobby-bg-family",
    textGradient: "text-gradient-golden",
    layout: "family-rain" as const,
    theme: "family" as const,
  },
];

export const hobbySlides = hobbies.map((hobby, i) => {
  const Slide = () => <HobbySlide key={i} {...hobby} />;
  Slide.displayName = `Hobby_${hobby.title.replace(/\s/g, "")}`;
  return Slide;
});
