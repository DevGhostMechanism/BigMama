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

const drawerNavItems = [
  { label: "Shop", href: "/homepage" },
  { label: "My Proxies", href: "/my-proxies" },
  { label: "Payments", href: "/payments" },
  { label: "FAQ", href: "/faq" },
  { label: "Logout", href: "/auth" },
];

const drawerFooterItems = [
  { label: "Terms and Conditions", href: "" },
  { label: "Privacy Policy", href: "" },
];

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pageTitle =
    navItems.find((item) => item.href === pathname)?.label ?? "BigMama";

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.email) setUserEmail(data.email);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  /* prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "54px",
          padding: "0 16px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* LEFT: hamburger (mobile) | logo (desktop) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="flex flex-col md:hidden"
            onClick={() => setDrawerOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              gap: "4px",
            }}
            aria-label="Open navigation"
          >
            <span
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#374151",
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#374151",
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#374151",
              }}
            />
          </button>

          <button
            className="hidden md:block"
            style={{
              fontWeight: 700,
              fontSize: "17px",
              color: "#111827",
              whiteSpace: "nowrap",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            BigMama Network
          </button>
        </div>

        {/* CENTER: page title (mobile) | nav (desktop) — absolutely centred */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            height: "54px",
            pointerEvents: "none",
          }}
        >
          <span
            className="md:hidden"
            style={{
              fontWeight: 600,
              fontSize: "16px",
              color: "#111827",
              pointerEvents: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {pageTitle}
          </span>

          <nav
            className="hidden md:flex"
            style={{
              alignItems: "stretch",
              height: "54px",
              pointerEvents: "auto",
            }}
          >
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
        </div>

        {/* RIGHT: balance (always) + avatar dropdown (desktop only) */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "#111827" }}>
            $0.00
          </span>

          <div
            ref={dropdownRef}
            className="hidden md:block"
            style={{ position: "relative" }}
          >
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
                <div style={{ padding: "14px 18px 10px" }}>
                  <button
                    onClick={() => {
                      router.push("/add-funds");
                      setDropdownOpen(false);
                    }}
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

                <div style={{ padding: "6px 0" }}>
                  {[
                    { label: "Referral", href: "/referral" },
                    { label: "Terms and Conditions", href: "" },
                    { label: "Privacy Policy", href: "" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        router.push(item.href);
                        setDropdownOpen(false);
                      }}
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f9fafb")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div style={{ height: "1px", backgroundColor: "#e5e7eb" }} />

                <div style={{ padding: "6px 0" }}>
                  {[
                    { label: "Change Password", href: "" },
                    { label: "Logout", href: "/auth" },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        router.push(item.href);
                        setDropdownOpen(false);
                      }}
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f9fafb")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
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

      {/* ══════════════════════════════════
          MOBILE: left slide-in drawer
      ══════════════════════════════════ */}
      {drawerOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
          }}
        >
          {/* Semi-transparent backdrop */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.45)",
            }}
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer panel */}
          <div
            style={{
              position: "relative",
              width: "72%",
              maxWidth: "300px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            {/* Close button + brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "20px 20px 16px",
              }}
            >
              <button
                onClick={() => setDrawerOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#6b7280",
                  padding: 0,
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="Close navigation"
              >
                ✕
              </button>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#111827",
                }}
              >
                BigMama
              </span>
            </div>

            {/* User info */}
            <div style={{ padding: "0 20px 24px" }}>
              {userEmail ? (
                <p
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginBottom: "6px",
                  }}
                >
                  {userEmail}
                </p>
              ) : null}
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  $0.00
                </span>
                <button
                  onClick={() => {
                    router.push("/add-funds");
                    setDrawerOpen(false);
                  }}
                  style={{
                    fontSize: "14px",
                    color: "#3b82f6",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontWeight: 500,
                  }}
                >
                  Add Funds
                </button>
              </div>
            </div>

            {/* Main nav items */}
            <div style={{ flex: 1 }}>
              {drawerNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    router.push(item.href);
                    setDrawerOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "18px 20px",
                    fontSize: "17px",
                    fontWeight: 400,
                    color: "#111827",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Footer links */}
            <div style={{ paddingBottom: "32px" }}>
              {drawerFooterItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    router.push(item.href);
                    setDrawerOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "14px 20px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#374151",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
