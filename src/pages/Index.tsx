import HeroCard from "@/components/wrapped/HeroCard";
import StatsSection from "@/components/wrapped/StatsSection";
import MemoryGallery from "@/components/wrapped/MemoryGallery";
import TimelineSection from "@/components/wrapped/TimelineSection";
import ClosingCard from "@/components/wrapped/ClosingCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroCard />
      <StatsSection />
      <MemoryGallery />
      <TimelineSection />
      <ClosingCard />
    </div>
  );
};

export default Index;
