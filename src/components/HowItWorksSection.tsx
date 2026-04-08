import workImage from "@/assets/work.png";
import line from "@/assets/line.png";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in minutes, complete KYC verification, and unlock access to all live and upcoming auctions.",
  },
  {
    title: "Browse Verified Listings",
    description:
      "Explore detailed listings with photos, documents, base price, location insights, and auction timelines.",
  },
  {
    title: "Place Your Bid",
    description:
      "Join live auctions, track real-time bids, and place competitive offers with instant bid confirmation.",
  },
  {
    title: "Win & Complete Ownership",
    description:
      "Secure the highest bid, complete payment safely, and receive full legal documentation and asset transfer.",
  },
];

const HowItWorksSection = () => (
  <section className="bg-background py-20 overflow-hidden">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-[720px] text-center">
        <div className="flex items-center justify-center gap-3">
          <img src={line} alt="" className="h-[4px] w-24 scale-x-[-1] object-cover" />
          <span
            className="text-[18px] font-semibold italic leading-[120%] tracking-normal text-[#010101]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            How It Works
          </span>
          <img src={line} alt="" className="h-[4px] w-24 object-cover" />
        </div>
        <h2
          className="mt-4 text-[48px] font-bold leading-[120%] tracking-[0%]"
          style={{ fontFamily: "Helvetica, sans-serif", fontWeight: 700, color: "#000000" }}
        >
          Simple Steps to Start Bidding
        </h2>
        <p className="mx-auto mt-2 max-w-[680px] text-[14px] leading-[150%] text-muted-foreground">
          Getting started is easy. Register, explore verified listings, place your bids in real time, and win premium assets through a transparent and secure auction process.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:gap-14">
        <div className="space-y-5 text-left">
          {steps.map(({ title, description }) => (
            <div
              key={title}
              className="space-y-1.5 border-l-[3px] border-muted-foreground/45 pl-5 transition-colors hover:border-[#7a0000]"
            >
              <h3
                className="text-[24px] font-semibold leading-[120%] text-[#010101]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[16px] font-normal leading-[150%] text-[#010101]/70"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="group relative overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={workImage}
            alt="How it works illustration"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
