import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full text-white"
      id="contacts"
      style={{ backgroundColor: "#0f0720" }}
    >
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "40px 20px" }}>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + legal links */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <span className="font-bold text-white" style={{ fontSize: "24px" }}>
              BigMama Network
            </span>
            <div className="flex items-center justify-center flex-wrap gap-2 mt-2">
              <Link
                href="/terms_conditions.html"
                className="hover:underline text-white"
                style={{ fontSize: "14px" }}
              >
                Terms of use
              </Link>
              <span style={{ borderLeft: "1px solid #fff", height: "14px", display: "inline-block" }} />
              <Link
                href="/privacy.html"
                className="hover:underline text-white"
                style={{ fontSize: "14px" }}
              >
                Privacy Policy
              </Link>
              <span style={{ borderLeft: "1px solid #fff", height: "14px", display: "inline-block" }} />
              <Link
                href="/cookies-policy.html"
                className="hover:underline text-white"
                style={{ fontSize: "14px" }}
              >
                Cookies Policy
              </Link>
            </div>
          </div>

          {/* Social / contact items */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
            {/* Email */}
            <div className="flex items-center" style={{ gap: "16px" }}>
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "rgba(76,151,255,0.2)",
                  borderRadius: "5px",
                }}
              >
                <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                  <rect x="1" y="1" width="26" height="20" rx="3" stroke="#4c97ff" strokeWidth="2" />
                  <path d="M1 5L14 13L27 5" stroke="#4c97ff" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white" style={{ fontSize: "24px" }}>
                  Email
                </span>
                <a
                  href="mailto:support@bigmama.network"
                  className="text-white hover:opacity-100 transition-opacity"
                  style={{ fontSize: "14px", marginTop: "5px", opacity: 0.8 }}
                >
                  support@bigmama.network
                </a>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex items-center" style={{ gap: "16px" }}>
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "rgba(76,151,255,0.2)",
                  borderRadius: "5px",
                }}
              >
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
                  <path
                    d="M1 10.5L25 1L18 21L11 14L1 10.5Z"
                    stroke="#4c97ff"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path d="M11 14L16 9" stroke="#4c97ff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white" style={{ fontSize: "24px" }}>
                  Telegram
                </span>
                <a
                  href="tg://resolve?domain=bigma_network"
                  className="text-white hover:opacity-100 transition-opacity"
                  style={{ fontSize: "14px", marginTop: "5px", opacity: 0.8 }}
                >
                  @bigma_network
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          className="text-center"
          style={{ maxWidth: "1650px", margin: "0 auto", padding: "16px 20px" }}
        >
          <span className="text-white" style={{ fontSize: "12px", opacity: 0.4 }}>
            All rights reserved by BigMama Network, 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
