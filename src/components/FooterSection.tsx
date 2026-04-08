import { useState } from "react";
import logo from "@/assets/logo.png";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      toast({
        title: "Subscription Confirmed!",
        description: `Alerts sent to ${email}. Check your inbox for auction updates.`,
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-white text-[#0b2545]">
      {/* Main footer area */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-12">
        {/* Mobile: stacked, Tablet: description + alerts on top, options below, Desktop: side-by-side */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-1 md:gap-8 lg:grid-cols-1 xl:grid-cols-5 xl:gap-16 xl:items-start">
          {/* Top section for tablets: description left, alerts right */}
          <div className="md:order-first lg:order-first xl:order-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1">
              {/* Description and logo */}
              <div>
                <img src={logo} alt="Auction Race" className="h-12 sm:h-14 w-auto" />
                <p className="mt-6 max-w-[300px] text-base font-normal leading-[1.5] text-[#4a4a4a] lg:max-w-[300px] xl:max-w-[300px]">
                  Auction Race is a trusted online platform for transparent auctions, helping users discover verified assets,
                  place bids easily, and win premium deals.
                </p>
              </div>

              {/* Get Auction Alerts - right side for tablets and iPad Pro */}
              <div className="xl:hidden">
              <h4 className="text-2xl font-semibold leading-tight text-black whitespace-nowrap">Get Auction Alerts</h4>
                <div className="mt-6 flex flex-col gap-5">
                  <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-10 w-full rounded-full border border-[#d9d9d9] bg-white px-5 text-sm text-[#4a4a4a] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#7a0000]/30"
                    />
                    <button
                      type="submit"
                      className="h-10 w-full rounded-full bg-[#7a0000] px-7 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Submit
                    </button>
                  </form>

                  <p className="text-base font-normal leading-[1.5] text-[#4a4a4a] whitespace-nowrap">Get Updates exclusive deals</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 columns container - below top section for tablets, right side for desktop */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 xl:col-span-4 xl:grid-cols-4 lg:gap-12 xl:gap-16 items-start">
            <div className="order-1 md:order-none">
              <h4 className="text-2xl font-semibold leading-tight text-black">Quick Links</h4>
              <ul className="mt-6 flex flex-col gap-4 text-base font-normal leading-[1.5] text-[#4a4a4a]">
                <li>Home</li>
                <li>Live Auctions</li>
                <li>Categories</li>
                <li>How It Works</li>
                <li>Upcoming Auctions</li>
                <li>Results</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="order-2 md:order-none md:justify-self-center">
              <h4 className="text-2xl font-semibold leading-tight text-black">Categories</h4>
              <ul className="mt-6 flex flex-col gap-4 text-base font-normal leading-[1.5] text-[#4a4a4a]">
                <li>Cars</li>
                <li>Bikes</li>
                <li>Categories</li>
                <li>Properties</li>
                <li>Luxury Assets</li>
                <li>Bank Auctions</li>
                <li>No Reserve Deals</li>
              </ul>
            </div>

            <div className="order-3 col-start-1 md:order-none md:col-start-3 md:justify-self-end">
              <h4 className="text-2xl font-semibold leading-tight text-black">Support</h4>
              <ul className="mt-6 flex flex-col gap-4 text-base font-normal leading-[1.5] text-[#4a4a4a]">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Terms &amp; Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Report an Issue</li>
              </ul>
            </div>

            {/* Get Auction Alerts - only visible on desktop/laptop */}
            <div className="hidden xl:block xl:order-4">
              <h4 className="text-2xl font-semibold leading-tight text-black whitespace-nowrap">Get Auction Alerts</h4>
              <div className="mt-6 flex flex-col gap-5">
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 w-full rounded-full border border-[#d9d9d9] bg-white px-5 text-sm text-[#4a4a4a] placeholder:text-[#9b9b9b] focus:outline-none focus:ring-2 focus:ring-[#7a0000]/30"
                  />
                  <button
                    type="submit"
                    className="h-10 w-full rounded-full bg-[#7a0000] px-7 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Submit
                  </button>
                </form>

                <p className="text-base font-normal leading-[1.5] text-[#4a4a4a] whitespace-nowrap">Get Updates exclusive deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Bottom red bar */}
    <div className="bg-[#7a0000]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-center md:w-full md:justify-between md:text-left lg:gap-8">
          <p className="text-white md:text-center" style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" }}>
            © {new Date().getFullYear()} Auction Race.
            <br className="hidden md:block lg:hidden" />
            <span className="md:inline"> All Rights Reserved.</span>
          </p>
          <p className="text-white md:text-center md:flex-1" style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" }}>
            Developed by
            <br className="hidden md:block lg:hidden" />
            <span className="md:inline"> Big Brand Bucket</span>
          </p>
          <p className="text-white md:text-center" style={{ fontSize: "16px", fontFamily: "Helvetica, sans-serif", fontWeight: 400, lineHeight: "150%", letterSpacing: "0%" }}>
            Secure Online
            <br className="hidden md:block lg:hidden" />
            <span className="md:inline"> Bidding Platform.</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default FooterSection;
