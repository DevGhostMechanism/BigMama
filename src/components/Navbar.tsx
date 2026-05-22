"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div
        className="relative flex items-center justify-center"
        style={{ padding: "0 200px", minHeight: "80px" }}
      >
        {/* Logo — absolute left */}
        <div className="absolute left-0" style={{ left: "100px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "24px",
              fontWeight: 700,
              color: "#0f0720",
              textDecoration: "none",
              lineHeight: "30px",
            }}
            className="hover:text-[#4c97ff] transition-colors"
          >
            BigMama Network
          </Link>
        </div>

        {/* Nav links — centered */}
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
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#0f0720",
                paddingBottom: "12px",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth buttons — absolute right */}
        <div
          className="absolute flex items-center"
          style={{ right: "200px", gap: "8px" }}
        >
          {/* Log in */}
          <Link
            href="/auth?tab=login"
            className="transition-all hover:text-white"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: "16px",
              minWidth: "168px",
              height: "60px",
              padding: "6px 37px 7px",
              borderRadius: "30px",
              border: "2px solid transparent",
              background: "#fff",
              color: "#0f0720",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background =
                "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)";
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

          {/* Sign up */}
          <Link
            href="/auth?tab=signup"
            className="transition-all"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: "16px",
              minWidth: "168px",
              height: "60px",
              padding: "6px 37px 7px",
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
              el.style.background =
                "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)";
              el.style.color = "#fff";
              el.style.borderColor = "transparent";
            }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
