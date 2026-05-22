"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Shop", href: "/homepage" },
  { label: "Rotating", href: "/rotating" },
  { label: "My Proxies", href: "/my-proxies" },
  { label: "Payments", href: "/payments" },
  { label: "Downloads", href: "/downloads" },
  { label: "API", href: "/api-page" },
  { label: "FAQ", href: "/faq" },
];


function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        height: "54px",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#fff",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "17px",
          color: "#111827",
          whiteSpace: "nowrap",
        }}
      >
        BigMama Network
      </span>

      <nav style={{ display: "flex", alignItems: "stretch", height: "54px" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              style={{
                padding: "0 14px",
                fontSize: "14px",
                fontWeight: isActive ? 500 : 400,
                color: isActive ? "#3b82f6" : "#374151",
                background: "none",
                border: "none",
                borderBottom: isActive
                  ? "2px solid #3b82f6"
                  : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "#111827" }}>
          $0.00
        </span>

        <div ref={dropdownRef} style={{ position: "relative" }}>
          <div
            onClick={() => setDropdownOpen((o) => !o)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
                minWidth: "220px",
                zIndex: 1000,
                overflow: "hidden",
              }}
            >
              {/* Email + Add Funds */}
              <div style={{ padding: "14px 18px 10px" }}>
               
                <button
                  onClick={() => { router.push("/payments"); setDropdownOpen(false); }}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#3b82f6",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  Add Funds
                </button>
              </div>

              <div style={{ height: "1px", backgroundColor: "#e5e7eb" }} />

              {/* Middle group */}
              <div style={{ padding: "6px 0" }}>
                {[
                  { label: "Referral", href: "/referral" },
                  { label: "Terms and Conditions", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { router.push(item.href); setDropdownOpen(false); }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "9px 18px",
                      fontSize: "14px",
                      color: "#111827",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div style={{ height: "1px", backgroundColor: "#e5e7eb" }} />

              {/* Bottom group */}
              <div style={{ padding: "6px 0" }}>
                {[
                  { label: "Change Password", href: "/change-password" },
                  { label: "Logout", href: "/auth" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { router.push(item.href); setDropdownOpen(false); }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "9px 18px",
                      fontSize: "14px",
                      color: "#111827",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
