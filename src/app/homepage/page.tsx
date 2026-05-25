"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProxyRow {
  id: number;
  ip: string;
  region: string;
  stateName: string;
  city: string;
  zip: string;
  isp: string;
  cleanLevel: number;
  cleanColor: "green" | "yellow";
  shared: string;
  conn: "wifi" | "cell";
  isNew: boolean;
  price: number;
  privatePrice: number;
}

const proxyRows: ProxyRow[] = [
  {
    id: 1,
    ip: "38.108._._",
    region: "NY",
    stateName: "New York",
    city: "The Bronx",
    zip: "10452",
    isp: "ANDRENA",
    cleanLevel: 3,
    cleanColor: "yellow",
    shared: "Private",
    conn: "wifi",
    isNew: true,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 2,
    ip: "71.191._._",
    region: "DC",
    stateName: "DC",
    city: "Washington",
    zip: "20001",
    isp: "Verizon Fios",
    cleanLevel: 4,
    cleanColor: "green",
    shared: "2 of 4",
    conn: "wifi",
    isNew: false,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 3,
    ip: "72.23._._",
    region: "PA",
    stateName: "Pennsylvania",
    city: "Waterford",
    zip: "16441",
    isp: "Armstrong Cable",
    cleanLevel: 4,
    cleanColor: "yellow",
    shared: "2 of 4",
    conn: "wifi",
    isNew: false,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 4,
    ip: "216.223._._",
    region: "SC",
    stateName: "South Carolina",
    city: "Myrtle Beach",
    zip: "29579",
    isp: "Horry Telephone",
    cleanLevel: 2,
    cleanColor: "yellow",
    shared: "2 of 4",
    conn: "wifi",
    isNew: false,
    price: 0.61,
    privatePrice: 1.62,
  },
  {
    id: 5,
    ip: "67.21._._",
    region: "SC",
    stateName: "South Carolina",
    city: "Clemson",
    zip: "29631",
    isp: "Northland Cable",
    cleanLevel: 3,
    cleanColor: "yellow",
    shared: "Private",
    conn: "wifi",
    isNew: false,
    price: 0.61,
    privatePrice: 1.62,
  },
  {
    id: 6,
    ip: "153.66._._",
    region: "GA",
    stateName: "Georgia",
    city: "Atlanta",
    zip: "30308",
    isp: "NCR",
    cleanLevel: 4,
    cleanColor: "green",
    shared: "Private",
    conn: "wifi",
    isNew: true,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 7,
    ip: "98.44._._",
    region: "TX",
    stateName: "Texas",
    city: "Sugar Land",
    zip: "77479",
    isp: "Comcast Cable",
    cleanLevel: 4,
    cleanColor: "green",
    shared: "Private",
    conn: "wifi",
    isNew: true,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 8,
    ip: "64.38._._",
    region: "FL",
    stateName: "Florida",
    city: "Boca Raton",
    zip: "33431",
    isp: "Broadbandone LLC",
    cleanLevel: 4,
    cleanColor: "green",
    shared: "Private",
    conn: "wifi",
    isNew: true,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 9,
    ip: "35.139._._",
    region: "FL",
    stateName: "Florida",
    city: "Lakeland",
    zip: "33815",
    isp: "Spectrum",
    cleanLevel: 4,
    cleanColor: "green",
    shared: "Private",
    conn: "wifi",
    isNew: true,
    price: 0.66,
    privatePrice: 1.77,
  },
  {
    id: 10,
    ip: "174.110._._",
    region: "NC",
    stateName: "North Carolina",
    city: "Wilmington",
    zip: "28403",
    isp: "Spectrum",
    cleanLevel: 2,
    cleanColor: "yellow",
    shared: "3 of 4",
    conn: "wifi",
    isNew: false,
    price: 0.61,
    privatePrice: 1.62,
  },
];

const countries = [
  { code: "US", flag: "🇺🇸", name: "United States", count: "36.2k" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", count: "7.8k" },
  { code: "AE", flag: "🇦🇪", name: "United Arab Emirates", count: "5.1k" },
  { code: "CA", flag: "🇨🇦", name: "Canada", count: "2.9k" },
  { code: "IT", flag: "🇮🇹", name: "Italy", count: "592" },
  { code: "CN", flag: "🇨🇳", name: "China", count: "20" },
];

/* ── Shared helpers ── */

function formatIP(ip: string) {
  return ip.trim().replace(/_/g, "*");
}

/* Round signal dots — used on mobile */
function SignalDots({
  level,
  color,
}: {
  level: number;
  color: "green" | "yellow";
}) {
  const activeColor = color === "green" ? "#22c55e" : "#eab308";
  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            backgroundColor: i <= level ? activeColor : "#d1d5db",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

/* Square signal bars — used on desktop */
function SignalBars({
  level,
  color,
}: {
  level: number;
  color: "green" | "yellow";
}) {
  const activeColor = color === "green" ? "#22c55e" : "#eab308";
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "2px",
            backgroundColor: i <= level ? activeColor : "#d1d5db",
          }}
        />
      ))}
    </div>
  );
}

function WifiIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="#9ca3af" stroke="none" />
    </svg>
  );
}

function CellIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#374151">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

const filterCols = [
  "Region",
  "City",
  "ZIP",
  "ISP",
  "Clean",
  "Shared",
  "Conn",
  "Type",
  "New",
];

export default function Homepage() {
  const [selectedRow, setSelectedRow] = useState<ProxyRow>(proxyRows[0]);
  const [activeCountry, setActiveCountry] = useState("US");
  const [activeTab, setActiveTab] = useState<
    "Blacklists" | "IP Score" | "Speed"
  >("Blacklists");
  const [panelOpen, setPanelOpen] = useState(true);
  const [activePurchase, setActivePurchase] = useState<"Private" | "Shared">(
    "Private",
  );
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const [countryDropOpen, setCountryDropOpen] = useState(false);

  const activeCountryData = countries.find((c) => c.code === activeCountry)!;

  const router = useRouter();

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
      <Header />

      {/* ══════════════════════════════════
          MOBILE BODY  (hidden on md+)
      ══════════════════════════════════ */}
      <div
        className="md:hidden"
        style={{ flex: 1, backgroundColor: "#f3f4f6", overflowY: "auto" }}
      >
        <div style={{ padding: "12px" }}>
          {/* Country dropdown */}
          <div style={{ position: "relative", marginBottom: "12px" }}>
            <div
              onClick={() => setCountryDropOpen((o) => !o)}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "13px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ fontSize: "20px" }}>
                  {activeCountryData.flag}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#111827",
                  }}
                >
                  {activeCountryData.name}
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  transform: countryDropOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.15s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {countryDropOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                  zIndex: 20,
                  overflow: "hidden",
                }}
              >
                {countries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setActiveCountry(c.code);
                      setCountryDropOpen(false);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "#111827",
                      background: c.code === activeCountry ? "#eff6ff" : "none",
                      border: "none",
                      borderBottom: "1px solid #f3f4f6",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{c.flag}</span>
                    <span style={{ flex: 1 }}>{c.name}</span>
                    <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Proxy cards */}
          {proxyRows.map((row) => {
            const topPrice =
              row.shared === "Private"
                ? `$${row.privatePrice.toFixed(2)}`
                : `$${row.price.toFixed(2)}`;
            const bottomRight =
              row.shared === "Private"
                ? `$${row.price.toFixed(2)}`
                : row.shared;

            return (
              <div
                key={row.id}
                onClick={() => {
                  setSelectedRow(row);
                  setMobileDetailOpen(true);
                }}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                }}
              >
                {/* Line 1: IP + main price */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "3px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#111827",
                    }}
                  >
                    {formatIP(row.ip)}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#111827",
                    }}
                  >
                    {topPrice}
                  </span>
                </div>

                {/* Line 2: location + secondary info */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "7px",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>
                    {row.city}, {row.stateName} {row.zip}
                  </span>
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>
                    {bottomRight}
                  </span>
                </div>

                {/* Line 3: ISP icon + name + signal dots */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      minWidth: 0,
                    }}
                  >
                    {row.conn === "cell" ? <CellIcon /> : <WifiIcon />}
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.isp}
                    </span>
                  </div>
                  <SignalDots level={row.cleanLevel} color={row.cleanColor} />
                </div>
              </div>
            );
          })}

          {/* Show more */}
          <div style={{ textAlign: "center", padding: "16px 0 6px" }}>
            <button
              style={{
                color: "#3b82f6",
                fontSize: "15px",
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Show more
            </button>
          </div>

          {/* Filter */}
          <div style={{ textAlign: "center", padding: "6px 0 28px" }}>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#3b82f6",
                fontSize: "15px",
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <FilterIcon />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          DESKTOP BODY  (hidden on mobile)
      ══════════════════════════════════ */}
      <div className="hidden md:flex" style={{ flex: 1, overflow: "hidden" }}>
        {/* Left: Proxies */}
        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: "16px 12px 16px 12px",
            minWidth: 0,
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Proxies
          </h2>

          {/* Country filter pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "18px",
            }}
          >
            {countries.map((c) => {
              const isActive = activeCountry === c.code;
              return (
                <button
                  key={c.code}
                  onClick={() => setActiveCountry(c.code)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "5px 13px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                    border: "1px solid",
                    borderColor: isActive ? "#3b82f6" : "#d1d5db",
                    backgroundColor: isActive ? "#3b82f6" : "#fff",
                    color: isActive ? "#fff" : "#374151",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>{c.flag}</span>
                  <span>
                    {c.name} ({c.count})
                  </span>
                </button>
              );
            })}
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 13px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                border: "1px solid #d1d5db",
                backgroundColor: "#fff",
                color: "#374151",
              }}
            >
              More <span style={{ fontSize: "10px" }}>▼</span>
            </button>
          </div>

          <div
            style={{
              width: "100%",
              backgroundColor: "#ef4444",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 500,
              padding: "6px 12px",
              marginBottom: "15px",
              borderRadius: "4px",
            }}
          >
            <h3 className="font-bold text-base mb-1">ATTENTION‼</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Dear user, your account is currrently inactive. Please{" "}
              <a
                href="/add-funds"
                className="text-blue-500 hover:text-blue-200 underline"
              >
                top up
              </a>{" "}
              your account to activate it.
            </p>
            {/* <button
              className="mt-4 bg-blue-400 text-yellow-900 font-semibold px-4 py-1.5 rounded text-sm hover:bg-blue-300 transition-colors inline-flex items-center gap-1"
              onClick={() => router.push("/add-funds")}
            > */}
            <button
              className="text-blue-700 hover:text-blue-300 underline"
              onClick={() => router.push("/add-funds")}
            >
              Add funds
            </button>
          </div>

          {/* Table */}
          <div
            style={{
              overflowX: "auto",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "13px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  {[
                    "IP",
                    "Region",
                    "City",
                    "ZIP",
                    "ISP",
                    "Clean",
                    "Shared",
                    "Conn",
                    "Type",
                    "New",
                    "Price",
                  ].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: "9px 12px",
                        textAlign: "left",
                        fontWeight: 600,
                        color: "#374151",
                        fontSize: "13px",
                        whiteSpace: "nowrap",
                        backgroundColor: "#fff",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                  <th
                    style={{
                      padding: "9px 12px",
                      textAlign: "right",
                      backgroundColor: "#fff",
                    }}
                  >
                    {panelOpen ? (
                      <button
                        onClick={() => setPanelOpen(false)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "#6b7280",
                          fontSize: "16px",
                          lineHeight: 1,
                          padding: "0 2px",
                        }}
                      >
                        ✕
                      </button>
                    ) : null}
                  </th>
                </tr>
                <tr
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <td style={{ padding: "5px 8px" }}>
                    <input
                      placeholder="Any"
                      style={{
                        width: "80px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "4px",
                        padding: "4px 8px",
                        fontSize: "12px",
                        color: "#374151",
                        outline: "none",
                      }}
                    />
                  </td>
                  {filterCols.map((col) => (
                    <td key={col} style={{ padding: "5px 8px" }}>
                      <select
                        style={{
                          border: "1px solid #e5e7eb",
                          borderRadius: "4px",
                          padding: "4px 6px",
                          fontSize: "12px",
                          color: "#6b7280",
                          backgroundColor: "#fff",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        <option>Any</option>
                      </select>
                    </td>
                  ))}
                  <td style={{ padding: "5px 8px" }}>
                    <button
                      style={{
                        padding: "4px 12px",
                        border: "1px solid #3b82f6",
                        borderRadius: "4px",
                        backgroundColor: "#fff",
                        color: "#3b82f6",
                        fontSize: "12px",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Advanced
                    </button>
                  </td>
                  <td />
                </tr>
              </thead>
              <tbody>
                {proxyRows.map((row) => {
                  const isSelected = selectedRow?.id === row.id;
                  return (
                    <tr
                      key={row.id}
                      onClick={() => {
                        setSelectedRow(row);
                        setPanelOpen(true);
                        setMobileDetailOpen(true);
                      }}
                      style={{
                        backgroundColor: isSelected ? "#eff6ff" : "#fff",
                        borderBottom: "1px solid #f3f4f6",
                        cursor: "pointer",
                      }}
                    >
                      <td
                        style={{
                          padding: "9px 12px",
                          fontWeight: 500,
                          color: "#111827",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatIP(row.ip)}
                      </td>
                      <td style={{ padding: "9px 12px", color: "#374151" }}>
                        {row.region}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          color: "#374151",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.city}
                      </td>
                      <td style={{ padding: "9px 12px", color: "#374151" }}>
                        {row.zip}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          color: "#374151",
                          maxWidth: "130px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.isp}
                      </td>
                      <td style={{ padding: "9px 12px" }}>
                        <SignalBars
                          level={row.cleanLevel}
                          color={row.cleanColor}
                        />
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          color: "#374151",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.shared}
                      </td>
                      <td style={{ padding: "9px 12px", color: "#374151" }}>
                        {row.conn}
                      </td>
                      <td style={{ padding: "9px 12px" }}>
                        <MoonIcon />
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          color: row.isNew ? "#16a34a" : "#374151",
                          fontWeight: row.isNew ? 600 : 400,
                        }}
                      >
                        {row.isNew ? "Yes" : "No"}
                      </td>
                      <td
                        style={{
                          padding: "9px 12px",
                          color: "#16a34a",
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                        }}
                      >
                        ${row.price.toFixed(2)}
                      </td>
                      <td />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12px",
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>Rows per page:</span>
              <select
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                  padding: "3px 8px",
                  fontSize: "13px",
                  color: "#374151",
                  cursor: "pointer",
                }}
              >
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span>1-10 of 35767</span>
              {[
                { label: "|◀", title: "First page" },
                { label: "◀", title: "Previous page" },
                { label: "▶", title: "Next page" },
              ].map(({ label, title }) => (
                <button
                  key={label}
                  title={title}
                  style={{
                    width: "28px",
                    height: "28px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "#374151",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Detail Panel */}
        {panelOpen && selectedRow && (
          <div
            style={{
              width: "272px",
              flexShrink: 0,
              borderLeft: "1px solid #e5e7eb",
              backgroundColor: "#fff",
              overflow: "auto",
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "2px",
                letterSpacing: "0.01em",
              }}
            >
              {formatIP(selectedRow.ip)}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#374151",
                marginBottom: "14px",
              }}
            >
              {formatIP(selectedRow.ip)}
            </div>

            <div style={{ marginBottom: "14px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "3px",
                }}
              >
                <span style={{ fontSize: "18px" }}>🇺🇸</span>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#111827",
                  }}
                >
                  United States
                </span>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#374151",
                  paddingLeft: "26px",
                  lineHeight: "1.7",
                }}
              >
                {selectedRow.stateName}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#374151",
                  paddingLeft: "26px",
                  lineHeight: "1.7",
                }}
              >
                {selectedRow.city}
              </div>
            </div>

            <div
              style={{ borderTop: "1px solid #e5e7eb", marginBottom: "12px" }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "7px",
                fontSize: "13px",
              }}
            >
              <InfoIcon />
              <span style={{ color: "#6b7280" }}>Uptime:</span>
              <span style={{ color: "#111827", fontWeight: 500 }}>
                44 minutes
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "14px",
                fontSize: "13px",
              }}
            >
              <InfoIcon />
              <span style={{ color: "#6b7280" }}>Activity:</span>
              <span style={{ color: "#111827", fontWeight: 500 }}>100%</span>
            </div>

            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #e5e7eb",
                marginBottom: "14px",
              }}
            >
              {(["Blacklists", "IP Score", "Speed"] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      flex: 1,
                      padding: "7px 2px",
                      fontSize: "12px",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#3b82f6" : "#6b7280",
                      background: "none",
                      border: "none",
                      borderBottom: isActive
                        ? "2px solid #3b82f6"
                        : "2px solid transparent",
                      cursor: "pointer",
                      marginBottom: "-1px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {activeTab === "Blacklists" && (
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "8px",
                  }}
                >
                  Blacklist Records:
                </div>
                <ul style={{ paddingLeft: "18px", margin: 0 }}>
                  {["sbl.spamhaus.org", "xbl.spamhaus.org"].map((record) => (
                    <li
                      key={record}
                      style={{
                        fontSize: "13px",
                        color: "#374151",
                        marginBottom: "4px",
                        listStyleType: "disc",
                      }}
                    >
                      {record}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "IP Score" && (
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  marginBottom: "20px",
                }}
              >
                IP score data unavailable.
              </div>
            )}
            {activeTab === "Speed" && (
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  marginBottom: "20px",
                }}
              >
                Speed data unavailable.
              </div>
            )}

            <div style={{ flex: 1 }} />

            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
              <button
                onClick={() => setActivePurchase("Private")}
                style={{
                  flex: 1,
                  padding: "9px 4px",
                  borderRadius: "8px",
                  border: "1.5px solid",
                  borderColor:
                    activePurchase === "Private" ? "#3b82f6" : "#e5e7eb",
                  backgroundColor:
                    activePurchase === "Private" ? "#3b82f6" : "#fff",
                  color: activePurchase === "Private" ? "#fff" : "#374151",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Private ${selectedRow.privatePrice.toFixed(2)}
              </button>
              <button
                onClick={() => setActivePurchase("Shared")}
                style={{
                  flex: 1,
                  padding: "9px 4px",
                  borderRadius: "8px",
                  border: "1.5px solid",
                  borderColor:
                    activePurchase === "Shared" ? "#3b82f6" : "#e5e7eb",
                  backgroundColor:
                    activePurchase === "Shared" ? "#3b82f6" : "#fff",
                  color: activePurchase === "Shared" ? "#fff" : "#374151",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Shared ${selectedRow.price.toFixed(2)}
              </button>
            </div>

            <button
              onClick={() => alert("Inactive account. Please activate it.")}
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#3b82f6",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
            >
              BUY {activePurchase === "Private" ? "PRIVATE" : "SHARED"} PROXY
            </button>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════
          MOBILE: detail bottom sheet
      ══════════════════════════════════ */}
      {mobileDetailOpen && selectedRow && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
            onClick={() => setMobileDetailOpen(false)}
          />
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "16px 16px 0 0",
              padding: "20px 18px 32px",
              maxHeight: "80vh",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            <button
              onClick={() => setMobileDetailOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#6b7280",
              }}
            >
              ✕
            </button>

            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "2px",
              }}
            >
              {formatIP(selectedRow.ip)}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#374151",
                marginBottom: "6px",
              }}
            >
              {selectedRow.city}, {selectedRow.stateName} {selectedRow.zip}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "14px",
              }}
            >
              {selectedRow.isp}
            </div>

            <div
              style={{ borderTop: "1px solid #e5e7eb", marginBottom: "12px" }}
            />

            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
              <button
                onClick={() => setActivePurchase("Private")}
                style={{
                  flex: 1,
                  padding: "9px 4px",
                  borderRadius: "8px",
                  border: "1.5px solid",
                  borderColor:
                    activePurchase === "Private" ? "#3b82f6" : "#e5e7eb",
                  backgroundColor:
                    activePurchase === "Private" ? "#3b82f6" : "#fff",
                  color: activePurchase === "Private" ? "#fff" : "#374151",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Private ${selectedRow.privatePrice.toFixed(2)}
              </button>
              <button
                onClick={() => setActivePurchase("Shared")}
                style={{
                  flex: 1,
                  padding: "9px 4px",
                  borderRadius: "8px",
                  border: "1.5px solid",
                  borderColor:
                    activePurchase === "Shared" ? "#3b82f6" : "#e5e7eb",
                  backgroundColor:
                    activePurchase === "Shared" ? "#3b82f6" : "#fff",
                  color: activePurchase === "Shared" ? "#fff" : "#374151",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Shared ${selectedRow.price.toFixed(2)}
              </button>
            </div>

            <button
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#3b82f6",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.04em",
              }}
            >
              BUY {activePurchase === "Private" ? "PRIVATE" : "SHARED"} PROXY
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
