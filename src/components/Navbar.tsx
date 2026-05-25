"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-[100px]" style={{ minHeight: "80px" }}>
        {/* Logo — always visible */}
        <Link
          href="/"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(18px, 4vw, 24px)",
            fontWeight: 700,
            color: "#0f0720",
            textDecoration: "none",
            lineHeight: "30px",
          }}
          className="hover:text-[#4c97ff] transition-colors"
        >
          BigMama Network
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center" style={{ gap: "24px" }}>
          {[
            { label: "Features", href: "#features-section" },
            { label: "Pricing", href: "#pricing-section" },
            { label: "Contacts", href: "#contacts" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative hover:text-[#4c97ff] transition-colors
                         after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                         after:h-[2px] after:w-0 after:bg-[#4c97ff] after:transition-all hover:after:w-4"
              style={{ fontSize: "15px", fontWeight: 500, color: "#0f0720", paddingBottom: "12px" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth buttons */}
        <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
          <Link
            href="/auth?tab=login"
            className="transition-all hover:text-white"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: "15px",
              minWidth: "130px",
              height: "50px",
              padding: "6px 24px 7px",
              borderRadius: "30px",
              border: "2px solid transparent",
              background: "#fff",
              color: "#0f0720",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)";
              el.style.color = "#fff";
              el.style.borderColor = "#4c97ff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#fff";
              el.style.color = "#0f0720";
              el.style.borderColor = "transparent";
            }}
          >
            Log in
          </Link>

          <Link
            href="/auth?tab=signup"
            className="transition-all"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: "15px",
              minWidth: "130px",
              height: "50px",
              padding: "6px 24px 7px",
              borderRadius: "30px",
              border: "2px solid transparent",
              background: "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "-3px 3px 30px 0 rgba(76,151,255,0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#fff";
              el.style.color = "#4c97ff";
              el.style.borderColor = "#4c97ff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)";
              el.style.color = "#fff";
              el.style.borderColor = "transparent";
            }}
          >
            Sign up
          </Link>
        </div>

        {/* Mobile hamburger — right side */}
        <button
          className="mobile-only flex-col justify-center items-center gap-1.25 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none" }}
        >
          <span
            className="block h-0.5 bg-[#0f0720] transition-all duration-300"
            style={{ width: "24px", transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}
          />
          <span
            className="block h-0.5 bg-[#0f0720] transition-all duration-300"
            style={{ width: "24px", opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-0.5 bg-[#0f0720] transition-all duration-300"
            style={{ width: "24px", transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}
          />
        </button>

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {[
            { label: "Features", href: "#features-section" },
            { label: "Pricing", href: "#pricing-section" },
            { label: "Contacts", href: "#contacts" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: "16px", fontWeight: 500, color: "#0f0720" }}
              className="hover:text-[#4c97ff] transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link
              href="/auth?tab=login"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center font-semibold text-sm border-2 border-[#4c97ff] rounded-[30px] py-3 text-[#0f0720]"
            >
              Log in
            </Link>
            <Link
              href="/auth?tab=signup"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center font-semibold text-sm rounded-[30px] py-3 text-white"
              style={{ background: "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
