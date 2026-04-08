import bannerImg from "@/assets/banner.png";

const BannerSection = () => (
  <section className="px-0 py-10 sm:px-0 lg:px-0 bg-background">
    <div className="relative mx-auto w-full">
      <img
        src={bannerImg}
        alt="Auction race banner"
        className="h-[280px] sm:h-[320px] lg:h-[360px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-3 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-6 md:py-10 space-y-2 sm:space-y-4 text-center text-white">
          <h3 className="mx-auto text-[16px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-[110%] sm:leading-[120%] font-semibold tracking-normal text-white px-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Ready To Start Bidding Today?
          </h3>
          <p className="mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[760px] text-xs sm:text-sm md:text-base leading-tight sm:leading-relaxed text-white/90 px-2">
            Join thousands of buyers competing for premium cars,
            <br />
            bikes, and high-value properties in real-time auctions.
          </p>
          <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center justify-center px-2">
            <button className="w-full sm:w-auto rounded-full bg-[#7a0000] px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white transition hover:brightness-110">
              Create Free Account
            </button>
            <button className="w-full sm:w-auto rounded-full border border-white bg-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white transition hover:bg-white/10">
              Browse Live Auctions
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BannerSection;
