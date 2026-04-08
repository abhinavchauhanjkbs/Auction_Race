import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CategoriesSection from "@/components/CategoriesSection";
import LiveAuctionsSection from "@/components/LiveAuctionsSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import HowItWorksSection from "@/components/HowItWorksSection";
import BMWSection from "@/components/BMWSection";
import TestimonialSection from "@/components/TestimonialSection";
import BannerSection from "@/components/BannerSection";
import FooterSection from "@/components/FooterSection";
import line from "@/assets/line.png";
import AssetPreloader from "@/components/AssetPreloader";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AssetPreloader />
    <TopBar />
    <Navbar />
    <HeroSection />
    <StatsSection />
    <CategoriesSection />
    <LiveAuctionsSection />
    <FeaturesStrip />
    <HowItWorksSection />
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={line} alt="" className="h-[4px] w-24 scale-x-[-1] object-cover" />
            <span
              className="text-[18px] font-semibold italic leading-[120%] tracking-normal text-[#010101]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Browse Assets
            </span>
            <img src={line} alt="" className="h-[4px] w-24 object-cover" />
          </div>
          <h2
            className="mt-4 text-[48px] font-bold leading-[120%] tracking-[0%]"
            style={{ fontFamily: "Helvetica, sans-serif", fontWeight: 700, color: "#000000" }}
          >
            Upcoming Auctions
          </h2>
          <p className="mx-auto mt-2 max-w-[680px] text-[14px] leading-[150%] text-muted-foreground">
            Plan your bids in advance for verified vehicles and premium properties scheduled for upcoming live
            auctions.
          </p>
        </div>
      </div>
    </section>
    <BMWSection />
    <TestimonialSection />
    <BannerSection />
    <FooterSection />
  </div>
);

export default Index;
