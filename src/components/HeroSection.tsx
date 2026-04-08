import React from "react";
import { Search, ChevronDown } from "lucide-react";
import heroCollage from "@/assets/hero-collage.png";
import dividerBar from "@/assets/divider-bar.png";
import line from "@/assets/line.png";

const HeroSection = () => (
  <section
    className="relative overflow-hidden px-8 pb-24 pt-20 lg:px-12 xl:px-16"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="relative flex flex-col gap-12 xl:flex-row xl:items-center">
      {/* Left content */}
      <div className="relative z-10 flex-1 space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold italic text-foreground">Live Auctions</span>
          <span className="inline-block h-[4px] w-40 overflow-hidden rounded-full">
            <img src={line} alt="" className="h-full w-full object-cover" />
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl xl:text-6xl">
          Bid Fast. Win Big.
          <br />
          Own Premium Assets.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Join live auctions for cars, bikes, and prime properties. Transparent bidding, verified listings, real value deals.
        </p>

        {/* Search bar - responsive layout */}
        <div className="relative z-20 mt-8 flex w-full max-w-6xl flex-col gap-3 rounded-2xl bg-background p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-border xl:flex-row xl:items-center xl:gap-8 xl:p-0">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:flex xl:flex-row xl:items-center xl:gap-8 xl:flex-1">
            <FilterField label="Category" value="Properties" className="border-0 xl:flex-1" />
            <img src={dividerBar} alt="" className="hidden h-10 shrink-0 xl:block" />
            <FilterField label="Location" value="Select City" className="border-0 xl:flex-1" />
            <img src={dividerBar} alt="" className="hidden h-10 shrink-0 xl:block" />
            <FilterField
              label="Price Range"
              value="Rs1,00,000"
              className="border-0 col-span-2 md:col-span-1 xl:flex-1 xl:col-span-auto"
            />
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] hover:shadow-md xl:m-2 xl:w-auto xl:shrink-0 xl:px-8">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>

      {/* Right image collage */}
      <div className="flex-1 xl:flex xl:justify-end xl:w-[800px]">
        <div className="relative z-0 mx-auto max-w-xl xl:mr-0 xl:w-full xl:max-w-md">
          <img
            src={heroCollage}
            alt="Auction items collage"
            loading="eager"
            decoding="async"
            className="relative z-0 w-full rounded-[28px] object-contain xl:scale-150 xl:origin-left xl:-translate-x-48"
          />
        </div>
      </div>
    </div>
  </section>
);

const FilterField = ({ label, value, className = "" }: { label: string; value: string; className?: string }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);

  const onFieldClick = () => {
    setIsEditing(true);
    setInputValue("");
  };

  return (
    <div
      className={`flex flex-1 flex-col rounded-xl bg-white/40 px-6 py-4 lg:rounded-none lg:bg-transparent ${className}`}
      onClick={onFieldClick}
    >
      <span className="block truncate whitespace-nowrap text-xl font-bold tracking-tight text-foreground lg:text-2xl">
        {label}
      </span>
      {isEditing ? (
        <input
          type="text"
          className="mt-1 h-[20px] w-full bg-transparent text-sm leading-none text-foreground outline-none placeholder:text-muted-foreground lg:text-base whitespace-nowrap overflow-hidden"
          placeholder={value}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <span className="mt-1 flex h-[20px] items-center gap-1 whitespace-nowrap text-sm leading-none text-muted-foreground lg:text-base">
          {inputValue || value}
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
};

export default HeroSection;
