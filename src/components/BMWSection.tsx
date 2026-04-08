import { useEffect, useState } from "react";
import BMWImage from "../assets/BMW.png";
import mapIcon from "../assets/map.png";
import calendarIcon from "../assets/calendar.png";

const BMWSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 24,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-center bg-white px-4 py-10 sm:px-6 lg:px-8 overflow-hidden">
      <div className="group relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/9] lg:aspect-[57/23]">
        <img
          src={BMWImage}
          alt="2022 BMW X5 Luxury SUV"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark gradient overlay on right side for content */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/65 to-transparent" />

        {/* Title in left top corner */}
        <h3
          className="absolute left-8 top-4 z-10 text-white text-wrap sm:left-10 sm:top-5"
          style={{ 
            fontFamily: "Helvetica, sans-serif", 
            fontWeight: 700, 
            fontSize: "20px", 
            lineHeight: "120%", 
            letterSpacing: "0%" 
          }}
        >
          <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]">2022 BMW X5 Luxury SUV</span>
        </h3>

        {/* All other content on right side */}
        <div className="absolute inset-y-0 right-0 flex max-w-full flex-col justify-center gap-3 px-4 py-6 text-white sm:px-6 sm:py-8 sm:gap-4 md:max-w-[420px] md:px-7 md:py-8 lg:max-w-[520px] lg:px-12 lg:gap-6">
          <div className="max-w-[260px] space-y-2 text-left sm:max-w-[320px] sm:space-y-3 md:max-w-[360px]">
            <p className="text-white/80" style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" }}>
              A premium luxury SUV in excellent condition with verified documents, advanced features, and ready
              for competitive bidding in upcoming auction event.
            </p>
            <div className="h-px w-12 bg-white/70 sm:h-px sm:w-16" />
          </div>

          <div className="flex flex-col gap-2 text-white/85">
            <div className="flex items-center gap-2">
              <img src={mapIcon} alt="Location" className="h-4 w-4" />
              <span style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400 }}>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={calendarIcon} alt="Date" className="h-4 w-4" />
              <span style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400 }}>28 March 2026</span>
            </div>
            <button
              type="button"
              className="mt-1 inline-flex w-max items-center font-semibold text-white hover:text-white/80"
              style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400 }}
            >
              <span className="underline decoration-white/80 underline-offset-2">View Details</span>
              <span className="ml-1 text-sm leading-none">↗</span>
            </button>
          </div>

          {/* Timing in right bottom corner */}
          <div className="text-right text-white">
            <div className="flex items-end gap-1 sm:gap-2 md:gap-2">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-end gap-0.5">
                  <span className="text-lg font-semibold leading-none sm:text-xl md:text-[20px]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wide text-white/90 sm:text-[11px] md:text-[12px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMWSection;
