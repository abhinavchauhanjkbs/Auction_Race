import { useRef } from "react";
import line from "@/assets/line.png";
import carHero from "@/assets/car.png";
import mapIcon from "@/assets/map.png";
import categoryIcon from "@/assets/category.png";
import locationImg from "@/assets/location.png";

const LiveAuctionsSection = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackItems = [...auctions, ...auctions];

  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="relative flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="whitespace-nowrap text-[18px] font-semibold italic leading-[120%] text-[#010101]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      Bid in Real Time
                    </span>
                    <img src={line} alt="" className="h-[4px] w-24 object-cover" />
                  </div>

                  <h2
                    className="font-bold tracking-normal text-foreground leading-[120%]"
                    style={{ fontSize: "48px", fontFamily: "Helvetica, sans-serif", fontWeight: 700, letterSpacing: "0%", color: "#000000" }}
                  >
                    Live Auctions
                  </h2>

                  <p className="max-w-3xl text-base leading-[150%] text-foreground">
                    Discover live auctions happening right now. Place your bids on verified cars, bikes, and properties and compete in real time to win premium assets.
                  </p>
                </div>

              </div>
            </div>

            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pb-4">
              <div ref={sliderRef} className="overflow-hidden">
                <div className="flex gap-6 live-track w-max">
                {[...trackItems, ...trackItems].map((item, idx) => (
                  <article
                    key={`${item.title}-${idx}`}
                    className="group grid gap-4 rounded-2xl bg-white shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] flex-shrink-0"
                  >
                    <div className="relative overflow-hidden rounded-2xl h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
                      <div className="absolute right-4 bottom-4 flex items-center text-white">
                        <div className="inline-flex items-center justify-end gap-1 text-center text-sm font-semibold leading-none">
                          {[
                            { label: "Days", value: item.timer.days },
                            { label: "Hrs", value: item.timer.hours },
                            { label: "Min", value: item.timer.minutes },
                            { label: "Sec", value: item.timer.seconds },
                          ].map((time) => (
                            <div key={time.label} className="flex min-w-[48px] flex-col items-center gap-0.5">
                              <span className="text-xl font-bold leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{time.value}</span>
                              <span className="text-[10px] uppercase tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{time.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 px-4 pb-5 pt-2 lg:px-2 lg:py-4">
                      <h3
                        className="text-foreground"
                        style={{
                          fontSize: "24px",
                          fontFamily: "Helvetica, sans-serif",
                          fontWeight: 400,
                          lineHeight: "150%",
                          letterSpacing: "0%",
                          color: "#010101",
                        }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex w-full items-center gap-2 text-[11px] sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <img src={locationImg} alt="Location" className="h-4 w-4" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <img src={categoryIcon} alt="" className="h-4 w-4" />
                          <span className="truncate">{item.category}</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <div className="text-xs uppercase tracking-wide text-muted-foreground">Current Bid</div>
                          <div className="text-2xl font-bold text-foreground">{item.currentBid}</div>
                        </div>
                        <button className="rounded-full bg-[#7a0000] px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-[1px]">
                          Place Bid
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const auctions = [
  {
    title: "2022 Audi A6 Premium Sedan",
    image: carHero,
    location: "Mumbai",
    category: "Car",
    currentBid: "₹28,00,000",
    timer: { days: "14", hours: "12", minutes: "25", seconds: "04" },
  },
  {
    title: "Royal Enfield Interceptor 650",
    image: carHero,
    location: "Delhi",
    category: "Bike",
    currentBid: "₹2,80,000",
    timer: { days: "14", hours: "12", minutes: "25", seconds: "04" },
  },
  {
    title: "2BHK Apartment – Whitefield",
    image: carHero,
    location: "Bangalore",
    category: "Property",
    currentBid: "₹65,00,000",
    timer: { days: "14", hours: "12", minutes: "25", seconds: "04" },
  },
];

export default LiveAuctionsSection;
