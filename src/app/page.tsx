import Header from "@/components/layout/header";
import Banner from "@/components/pages/home/Banner";
import Footer from "@/components/layout/footer";
import BuildYourSkill from "@/components/pages/home/BuildYourSkill";
import Clients from "@/components/pages/home/Clients";
import GrowthSection from "@/components/pages/home/GrowthSection";
import JoinAsCreator from "@/components/pages/home/JoinAsCreator";
import LearningPaths from "@/components/pages/home/LearningPaths";
import Testimonials from "@/components/pages/home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Clients />
      <BuildYourSkill />
      <LearningPaths />
      <GrowthSection />
      <JoinAsCreator />
      <Testimonials />
      <Footer />
    </>
  );
}
