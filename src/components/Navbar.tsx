import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Home", "Live Auctions", "Categories", "How It Works", "Upcoming Auctions", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 md:px-8 lg:px-12 xl:px-16">
      <img src={logo} alt="Auction Race" className="h-10 w-auto object-contain sm:h-12" />

      <ul className="hidden items-center gap-8 xl:flex">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="hidden rounded-full border-2 border-foreground px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-black hover:bg-black hover:text-white xl:inline-block"
      >
        Explore Live Auctions
      </a>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 top-full z-30 mt-3 w-full rounded-xl border border-border bg-white p-4 shadow-lg xl:hidden">
          <ul className="flex flex-col divide-y divide-border">
            {navLinks.map((link) => (
              <li key={link} className="py-3">
                <a href="#" className="block text-base font-medium text-foreground hover:text-primary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border-2 border-foreground px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-black hover:bg-black hover:text-white"
          >
            Explore Live Auctions
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
