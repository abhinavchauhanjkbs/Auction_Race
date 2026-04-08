import { useRef, useEffect, useState } from "react";
import line from "@/assets/line.png";
import face from "@/assets/face.png";

const testimonials = [
  {
    quote:
      "Auction Race made the entire bidding process simple and transparent. I won a car at an amazing price. The platform is easy to use, listings are verified, and the experience felt secure and professional.",
    name: "Aman Verma",
    role: "Kawasaki Ninja Winner",
  },
  {
    quote:
      "Bidding in real time was effortless. The UI is clean, updates are fast, and the auction reminders kept me ahead of the competition.",
    name: "Sneha Rao",
    role: "Premium Bidder",
  },
  {
    quote:
      "I loved the seamless auction flow — from browsing to placing a bid. The live scoreboard is super motivating and helps you make faster decisions.",
    name: "Rajat Singh",
    role: "Repeat Buyer",
  },
];

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
      fill="#F6B73C"
    />
  </svg>
);

const TestimonialSection = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<typeof testimonials>([]);

  useEffect(() => {
    // Duplicate testimonials for continuous scrolling
    setDuplicatedTestimonials([...testimonials, ...testimonials]);
    
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 2; // faster scroll
      if (scrollPosition >= slider.scrollWidth / 2) {
        scrollPosition = 0;
      }
      slider.scrollLeft = scrollPosition;
    };

    // Start auto-scroll
    const interval = setInterval(scroll, 16);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[720px] text-left">
            <div className="flex items-center gap-3">
              <span
                className="text-[18px] font-semibold italic leading-[120%] tracking-normal text-[#010101]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Testimonial
              </span>
              <img src={line} alt="" className="h-[4px] w-24 object-cover" />
            </div>
            <h2
              className="mt-4 text-[48px] font-bold leading-[120%] tracking-[0%]"
              style={{ fontFamily: "Helvetica, sans-serif", fontWeight: 700, color: "#000000" }}
            >
              What Our Bidders Say
            </h2>
            <p className="mt-2 text-[14px] leading-[150%] text-muted-foreground">
              Real experiences from buyers who successfully won cars, bikes, and premium properties through Auction Race.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:mt-0" />
        </div>

        <div className="mt-10 relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-8">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-hidden pb-2"
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 bg-white p-8 shadow-sm"
                style={{
                  width: '500px',
                  height: '290px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '16px',
                  opacity: 1
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} />
                    ))}
                  </div>
                </div>
                <p 
                  className="mt-6 leading-relaxed text-foreground"
                  style={{ 
                    fontSize: "16px", 
                    fontFamily: "Helvetica, sans-serif", 
                    fontWeight: 400, 
                    lineHeight: "150%", 
                    letterSpacing: "0%", 
                    color: "#010101" 
                  }}
                >
                  {item.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={face} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
