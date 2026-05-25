"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

const navItems = [
  { label: "Shop", href: "/homepage" },
  { label: "Rotating", href: "/rotating" },
  { label: "My Proxies", href: "/my-proxies" },
  { label: "Payments", href: "/payments" },
  { label: "Downloads", href: "/downloads" },
  { label: "API", href: "/api-page" },
  { label: "FAQ", href: "/faq" },
];

function FirefoxIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="10" fill="#0060DF" />
      <circle cx="16" cy="16" r="7" fill="#00B3F4" />
      <path
        d="M16 6C10.477 6 6 10.477 6 16c0 1.635.393 3.178 1.09 4.54C8.34 12.94 12.3 9.5 16 9.5c1.8 0 3.2.6 4.1 1.4C21.5 12.1 22 13.5 22 15c0 3-2.2 5-5 5-1.5 0-2.6-.6-3.2-1.4-.5-.7-.7-1.5-.5-2.3.2-.7.7-1.3 1.4-1.6-.3-.1-.7-.1-1-.1-2.8 0-5 2.2-5 5 0 1.4.5 2.6 1.4 3.6C11.6 25 13.7 26 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6z"
        fill="#FF980E"
      />
      <path
        d="M16 6C10.477 6 6 10.477 6 16c0 2.1.65 4.05 1.76 5.66.08-.5.2-1 .38-1.5C9.3 16.5 12.3 13.5 16 13.5c.7 0 1.3.1 1.9.3C16.9 12.7 15.5 12 14 12c-1.8 0-3.3.8-4.4 2-.3-1.3-.1-2.7.6-3.8C11.6 8.1 13.7 7 16 7c3.9 0 7.2 2.4 8.6 5.8.3.8.4 1.7.4 2.5 0 1-.2 2-.6 2.8-.8 1.7-2.4 2.9-4.4 2.9-1.2 0-2.2-.5-2.9-1.2.1.4.1.8 0 1.2-.3 1-1 1.8-2 2.2.8.3 1.6.5 2.5.5 5.523 0 10-4.477 10-10S21.523 6 16 6z"
        fill="#FF3750"
        opacity="0.85"
      />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 18a9 9 0 0 1 18 0v1H5v-1z" fill="#78C257" />
      <rect x="9" y="14" width="10" height="8" rx="1" fill="#78C257" />
      <rect x="8" y="15" width="12" height="6" rx="1" fill="#78C257" />
      <circle cx="11" cy="16" r="1" fill="#fff" />
      <circle cx="17" cy="16" r="1" fill="#fff" />
      <line
        x1="10"
        y1="11"
        x2="7"
        y2="8"
        stroke="#78C257"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="11"
        x2="21"
        y2="8"
        stroke="#78C257"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="5" y="15" width="2.5" height="5" rx="1.25" fill="#78C257" />
      <rect x="20.5" y="15" width="2.5" height="5" rx="1.25" fill="#78C257" />
      <rect x="11" y="21" width="2.5" height="4" rx="1.25" fill="#78C257" />
      <rect x="14.5" y="21" width="2.5" height="4" rx="1.25" fill="#78C257" />
    </svg>
  );
}

function ChromeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" fill="white" stroke="#e5e7eb" />
      <path d="M14 14 L27 14 A13 13 0 0 0 7.5 4.25 Z" fill="#EA4335" />
      <path d="M14 14 L7.5 4.25 A13 13 0 0 0 1 14 Z" fill="#4285F4" />
      <path d="M14 14 L1 14 A13 13 0 0 0 20.5 23.75 Z" fill="#34A853" />
      <path d="M14 14 L20.5 23.75 A13 13 0 0 0 27 14 Z" fill="#FBBC05" />
      <circle cx="14" cy="14" r="6" fill="white" />
      <circle cx="14" cy="14" r="4.5" fill="#4285F4" />
    </svg>
  );
}

export default function DownloadsPage() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("Downloads");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header />

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 16px",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Downloads
        </h1>

        <p
          style={{
            maxWidth: "680px",
            fontSize: "14px",
            lineHeight: "1.7",
            color: "#374151",
            marginBottom: "32px",
            textAlign: "left",
          }}
        >
          BigMama Network Proxies application allows registered users to connect
          to proxies purchased in the market in one click. Only purchased
          proxies are displayed in the application. The application is in beta
          version and if there are any errors, write to us in Support, we will
          be happy to fix them. We are working to make the use of our proxies
          more convenient for you.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Firefox Add-on */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 28px",
              background: "linear-gradient(90deg, #0090ED 0%, #00C2FF 100%)",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "220px",
              justifyContent: "center",
            }}
          >
            <FirefoxIcon />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "10px",
                  color: "#fff",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  lineHeight: 1.2,
                }}
              >
                GET THE
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                }}
              >
                ADD-ON
              </div>
            </div>
          </button>

          {/* Android + Chrome row */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* Android */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#000",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                width: "190px",
                justifyContent: "center",
              }}
            >
              <AndroidIcon />
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#fff",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  Download for
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#fff",
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  Android
                </div>
              </div>
            </button>

            {/* Chrome Web Store */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#fff",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                cursor: "pointer",
                width: "190px",
                justifyContent: "center",
              }}
            >
              <ChromeIcon />
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#374151",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  Available in the
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#111827",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  Chrome Web Store
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
