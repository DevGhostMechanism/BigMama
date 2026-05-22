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

const tableColumns = [
  "Type",
  "Volume",
  "Location",
  "Rotation",
  "Connection Type",
  "Status",
  "Start time",
  "Expired",
];

export default function RotatingPage() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("Rotating");

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
     <Header/>

      {/* Body */}
      <div style={{ padding: "28px 28px" }}>
        {/* Title row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              margin: 0,
            }}
          >
            Ports
          </h2>
          <button
            style={{
              padding: "7px 18px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
          >
            NEW PORT
          </button>
        </div>

        {/* Table */}
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "4px",
            overflowX: "auto",
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
                {tableColumns.map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "11px 16px",
                      textAlign: "left",
                      fontWeight: 500,
                      color: "#374151",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                      backgroundColor: "#fff",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* No rows — empty state */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
