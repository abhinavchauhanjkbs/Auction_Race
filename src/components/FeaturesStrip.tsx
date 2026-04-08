import { Fragment } from "react";
import shieldIcon from "@/assets/shield.png";
import hammerIcon from "@/assets/hammer.png";
import cardIcon from "@/assets/card.png";
import tagsIcon from "@/assets/tags.png";

const items = [
  { icon: shieldIcon, label: "Verified Listings" },
  { icon: hammerIcon, label: "Live Bidding" },
  { icon: cardIcon, label: "Secure Payments" },
  { icon: tagsIcon, label: "Premium Deals" },
];

const FeaturesStrip = () => (
  <section className="bg-[#7a0000] py-8">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 lg:flex lg:items-center">
      {items.map((item, idx) => (
        <Fragment key={item.label}>
          <div className="group flex flex-1 flex-col items-center gap-3 text-white transition-transform duration-300 hover:-translate-y-1">
            <img
              src={item.icon}
              alt=""
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="text-[24px] font-semibold leading-tight text-center transition-colors duration-300 group-hover:text-white">
              {item.label}
            </div>
          </div>
          {idx < items.length - 1 && (
            <div
              className="mx-10 hidden h-16 w-px flex-none bg-gradient-to-b from-transparent via-white/45 to-transparent lg:block"
              aria-hidden="true"
            />
          )}
        </Fragment>
      ))}
    </div>
  </section>
);

export default FeaturesStrip;
