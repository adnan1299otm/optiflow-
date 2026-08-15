import { HeroSection } from '@/components/home/HeroSection';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { StatsSection } from '@/components/home/StatsSection';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { TechMarquee } from '@/components/home/TechMarquee';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <FeaturedProjects />
      <StatsSection />
      <ProcessTimeline />
      <TechMarquee />
      <FinalCTA />
    </>
  );
}


