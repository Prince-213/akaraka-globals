import type { Metadata } from "next";
import Banner from "@/components/factory-homepage/Banner";
import FooterTop from "@/components/factory-homepage/FooterTop";
import HomaPageVideoSection from "@/components/factory-homepage/HomaPageVideoSection";

export const metadata: Metadata = {
  title: "Akaraka Global Resources | Industrial Chemicals",
  description: "Nigeria's trusted supplier of industrial chemicals, paints, inks, raw materials, coatings, and plastics. Imports, exports & general contracting since 2000.",
  openGraph: {
    title: "Akaraka Global Resources | Industrial Chemicals",
    description: "Leading supplier of industrial chemicals, paints, inks, raw materials and coatings in Nigeria.",
  },
};
import HomePageAboutSection from "@/components/factory-homepage/HomePageAboutSection";
import HomepageBlogSection from "@/components/factory-homepage/HomepageBlogSection";
import HomePageCounterSection from "@/components/factory-homepage/HomePageCounterSection";
import HomePageFaqSection from "@/components/factory-homepage/HomePageFaqSection";
import HomePageFeatureSection from "@/components/factory-homepage/HomePageFeatureSection";
import HomePageMapSection from "@/components/factory-homepage/HomePageMapSection";
import HomePageProcessSection from "@/components/factory-homepage/HomePageProcessSection";
import HomePageProjectSection from "@/components/factory-homepage/HomePageProjectSection";
import HomePageServiceSection from "@/components/factory-homepage/HomePageServiceSection";
import HomePageTeamSection from "@/components/factory-homepage/HomePageTeamSection";
import HomePageTestimonialSection from "@/components/factory-homepage/HomePageTestimonialSection";
import Footer1 from "@/components/footers/Footer1";


import Header1 from "@/components/header/Header1";
export default function Home() {
  return (
    <>
      <Header1 />
      <Banner />
      <HomePageAboutSection />
      <HomePageServiceSection />
      <HomePageFeatureSection name="Material" />
      <HomePageProjectSection />
      <HomePageTeamSection />
      <HomaPageVideoSection />
      <HomePageCounterSection />
      <HomePageProcessSection />
      <HomePageTestimonialSection />
      <HomePageFaqSection />
      <HomePageMapSection />
      {/* <HomepageBlogSection /> */}
      <FooterTop />
      <Footer1 />
    </>
  );
}
