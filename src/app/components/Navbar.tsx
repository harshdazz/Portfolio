"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./nav-items";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Compact the bar once scrolled. Reads are throttled to one per frame and
  // state only changes when the boolean flips, so scrolling stays render-free.
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setIsScrolled(window.scrollY > 50);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section currently in view (replaces react-scroll's spy).
  useEffect(() => {
    if (!isHomePage || typeof IntersectionObserver === "undefined") {
      setActiveSection(null);
      return;
    }

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.to),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  const closeMenu = () => setIsMenuOpen(false);

  const renderLink = (item: (typeof NAV_ITEMS)[number], isMobile = false) => {
    const isActive = isHomePage && activeSection === item.to;
    const baseClasses = isMobile
      ? "block cursor-pointer py-3 text-lg font-semibold transition-colors duration-300 border-b border-white/5"
      : "cursor-pointer transition-colors duration-300 relative group px-2 py-1 text-sm lg:text-base font-medium";

    return (
      <Link
        key={item.to}
        href={`/#${item.to}`}
        className={`${baseClasses} ${
          isActive
            ? "text-red-500 font-bold"
            : "text-slate-300 hover:text-white"
        }`}
        onClick={isMobile ? closeMenu : undefined}
      >
        {item.label}
        {!isMobile && (
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-900 transition-all duration-300 group-hover:w-full ${
              isActive ? "w-full" : "w-0"
            }`}
          />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-4 lg:px-8">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          <span
            className={`font-extrabold tracking-tight transition-all duration-300 bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Harsh<span className="text-red-500"> Dubey</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => renderLink(item))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 md:hidden animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => renderLink(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
