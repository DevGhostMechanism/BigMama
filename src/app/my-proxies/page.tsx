"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function MyProxiesPage() {
  const [activeTab, setActiveTab] = useState<"ACTIVE PROXIES" | "HISTORY">(
    "ACTIVE PROXIES",
  );

  const proxies: never[] = [];

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

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #e5e7eb",
            padding: "0 16px",
            overflowX: "auto",
          }}
        >
          {(["ACTIVE PROXIES", "HISTORY"] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "16px 0",
                  marginRight: "28px",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#111827" : "#9ca3af",
                  background: "none",
                  border: "none",
                  borderBottom: isActive
                    ? "2px solid #3b82f6"
                    : "2px solid transparent",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Filter */}
        <div style={{ padding: "16px" }}>
          <input
            placeholder="Filter by IP address, location or ISP"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "10px 14px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              fontSize: "13px",
              color: "#374151",
              outline: "none",
              fontFamily: "Poppins, sans-serif",
            }}
          />
        </div>

        {/* Table */}
        <div style={{ flex: 1, overflow: "auto", padding: "0 16px" }}>
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
                  "IP Address",
                  "Country",
                  "Region",
                  "City",
                  "ZIP",
                  "ISP",
                  "Shared",
                  "Expire",
                  "Renew",
                ].map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "10px 12px",
                      textAlign: "left",
                      fontWeight: 500,
                      color: "#374151",
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {proxies.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    style={{
                      textAlign: "center",
                      padding: "80px 0",
                      color: "#9ca3af",
                      fontSize: "14px",
                    }}
                  >
                    No active proxies found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
