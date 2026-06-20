// about/page.tsx
import React from "react";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import HomePageAboutSection from "@/components/factory-homepage/HomePageAboutSection";
import HomeWhyChooseUsSection from "@/components/industry-homepage/HomeWhyChooseUsSection";
import HomePageFeatureSection from "@/components/factory-homepage/HomePageFeatureSection";
import HomaPageVideoSection from "@/components/factory-homepage/HomaPageVideoSection";
import HomePageCounterSection from "@/components/factory-homepage/HomePageCounterSection";
import HomePageTeamSection from "@/components/factory-homepage/HomePageTeamSection";
import HomepageBlogSection from "@/components/factory-homepage/HomepageBlogSection";
import FooterTop from "@/components/factory-homepage/FooterTop";
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Akaraka Global Resources Limited, our history, mission, and why we are a trusted industrial supplier.",
  openGraph: {
    title: "About AGRL - Akaraka Global Resources Limited",
    description: "Over 25 years of industrial supply excellence in Nigeria. Learn about our history, mission, and leadership.",
  },
};


const AboutPage: React.FC = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb title="About Us" subtitle="Over 25 Years of Industrial Supply Excellence." />
      <HomePageAboutSection pt="pt-120" />
      <HomeWhyChooseUsSection />
      <HomePageFeatureSection />
      <HomaPageVideoSection />
      <HomePageCounterSection />
      <HomePageTeamSection />
      {/* <HomepageBlogSection /> */}
      <FooterTop />
      <Footer1 />
    </>
  );
};

export default AboutPage;
