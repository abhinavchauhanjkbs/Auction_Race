import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10,000+", label: "Registered Bidders", target: 10000 },
  { value: "2,500+", label: "Assets Sold Successfully", target: 2500 },
  { value: "₹750+ Cr", label: "Total Auction Value", target: 750 },
  { value: "98%", label: "Successful Transactions", target: 98 },
];

const CountUpNumber = ({ target, suffix = "", start }: { target: number; suffix?: string; start: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 2000; // 2 seconds
    const frame = 16;
    const increment = target / (duration / frame);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, frame);

    return () => clearInterval(timer);
  }, [start, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#7a0000] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4 lg:divide-x lg:divide-white/30">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center gap-2 px-4">
              <div className="font-poppins text-2xl font-semibold leading-[150%] text-white md:text-3xl lg:text-[28px]">
                {stat.label === "Registered Bidders" && <CountUpNumber start={startCount} target={stat.target} suffix="+" />}
                {stat.label === "Assets Sold Successfully" && <CountUpNumber start={startCount} target={stat.target} suffix="+" />}
                {stat.label === "Total Auction Value" && <span>₹<CountUpNumber start={startCount} target={stat.target} suffix="+ Cr" /></span>}
                {stat.label === "Successful Transactions" && <CountUpNumber start={startCount} target={stat.target} suffix="%" />}
              </div>
              <div className="text-sm font-medium text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
