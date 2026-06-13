import Nav               from "@/components/Nav";
import Hero              from "@/components/Hero";
import StatsStrip        from "@/components/StatsStrip";
import ProjectOverview   from "@/components/ProjectOverview";
import ProblemGoal       from "@/components/ProblemGoal";
import ScreenGallery     from "@/components/ScreenGallery";
import VisualDirection   from "@/components/VisualDirection";
import DesignSystemProof from "@/components/DesignSystemProof";
import ComponentSystem   from "@/components/ComponentSystem";
import SystemApplication from "@/components/SystemApplication";
import AccessibilityNotes from "@/components/AccessibilityNotes";
import AwardOutcome      from "@/components/AwardOutcome";
import PostAwardTimeline from "@/components/PostAwardTimeline";
import FinalCTA          from "@/components/FinalCTA";
import Footer            from "@/components/Footer";

export default function GroovetopPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <ProjectOverview />
        <ProblemGoal />
        <ScreenGallery />
        <VisualDirection />
        <DesignSystemProof />
        <ComponentSystem />
        <SystemApplication />
        <AccessibilityNotes />
        <AwardOutcome />
        <PostAwardTimeline />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
