import carsImg from "@/assets/img-1.png";
import bikesImg from "@/assets/img-2.png";
import propertiesImg from "@/assets/img-3.png";
import luxuryImg from "@/assets/img-4.png";
import industrialImg from "@/assets/img-5.png";
import furnitureImg from "@/assets/img-6.png";
import line from "@/assets/line.png";

const categories = [
  { label: "Cars", src: carsImg },
  { label: "Bikes", src: bikesImg },
  { label: "Properties", src: propertiesImg },
  { label: "Luxury Items", src: luxuryImg },
  { label: "Industrial Equipment", src: industrialImg },
  { label: "Furniture & Home", src: furnitureImg },
];

const CategoriesSection = () => (
  <section className="bg-background py-16 overflow-hidden">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img src={line} alt="" className="h-[4px] w-24 scale-x-[-1] object-cover sm:w-32" />
          <span className="whitespace-nowrap text-[16px] sm:text-[18px] font-semibold italic leading-[120%] text-[#010101]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Browse Assets
          </span>
          <img src={line} alt="" className="h-[4px] w-24 object-cover sm:w-32" />
        </div>

        <h2
          className="text-[30px] sm:text-4xl md:text-5xl font-bold tracking-normal leading-[120%] text-black"
          style={{ fontFamily: "Helvetica, sans-serif", color: "#000000" }}
        >
          Explore Auction Categories
        </h2>

        <p className="max-w-2xl text-sm sm:text-base leading-[150%] text-foreground">
          Browse auctions across multiple categories including cars, bikes, and premium properties.
          Discover verified listings and bid on assets that match your needs.
        </p>
      </div>

      <div className="mt-10">
        {/* mobile-only (no auto-scroll) */}
        <div className="grid grid-cols-2 justify-items-center gap-4 px-4 md:hidden">
          {categories.map((category) => (
            <div key={category.label} className="flex flex-col items-center gap-4 flex-shrink-0">
              <div 
                className="relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  width: '150px',
                  height: '284px',
                  borderRadius: '127px',
                  opacity: 1
                }}
              >
                <img
                  src={category.src}
                  alt={category.label}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="text-sm sm:text-base font-semibold text-foreground text-center transition-colors duration-300 hover:text-primary">{category.label}</div>
            </div>
          ))}
        </div>

        {/* tablet/laptop-only infinite right-to-left scroll */}
        <div className="hidden md:block">
          <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="categories-marquee flex items-center gap-4 py-4">
            {[...categories, ...categories].map((category, idx) => (
              <div key={`${category.label}-${idx}`} className="flex flex-col items-center gap-4 flex-shrink-0">
                <div 
                  className="relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    width: '200px',
                    height: '379px',
                    borderRadius: '169px',
                    opacity: 1
                  }}
                >
                  <img
                    src={category.src}
                    alt={category.label}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground text-center transition-colors duration-300 hover:text-primary">{category.label}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CategoriesSection;
