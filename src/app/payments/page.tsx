"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

function ChevronLeft() {
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
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
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
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function PaymentsPage() {
  const today = new Date();
  const currentDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const [firstDate, setFirstDate] = useState(currentDate);
  const [lastDate, setLastDate] = useState(currentDate);

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
      <div style={{ padding: "24px 28px" }}>
        {/* Title + Add Funds */}
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
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
              margin: 0,
            }}
          >
            Payments
          </h2>
          <button
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: "14px",
              color: "#3b82f6",
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
            }}
          >
            Add Funds
          </button>
        </div>

        {/* Date filters */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "28px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid #374151",
              paddingBottom: "4px",
            }}
          >
            <label
              style={{
                fontSize: "13px",
                color: "#374151",
                whiteSpace: "nowrap",
              }}
            >
              First date:
            </label>
            <input
              type="text"
              value={firstDate}
              onChange={(e) => setFirstDate(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                fontSize: "13px",
                color: "#374151",
                fontFamily: "Poppins, sans-serif",
                width: "90px",
                background: "transparent",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid #374151",
              paddingBottom: "4px",
            }}
          >
            <label
              style={{
                fontSize: "13px",
                color: "#374151",
                whiteSpace: "nowrap",
              }}
            >
              Last date:
            </label>
            <input
              type="text"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                fontSize: "13px",
                color: "#374151",
                fontFamily: "Poppins, sans-serif",
                width: "90px",
                background: "transparent",
              }}
            />
          </div>
        </div>

        {/* Table */}
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
                { label: "Date", width: "160px" },
                { label: "ID", width: "140px" },
                { label: "Type", width: "100px" },
                { label: "Memo", width: "auto" },
                { label: "Amount", width: "100px" },
                { label: "Balance", width: "90px" },
              ].map(({ label, width }) => (
                <th
                  key={label}
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: 500,
                    color: "#374151",
                    fontSize: "13px",
                    whiteSpace: "nowrap",
                    width,
                  }}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #f3f4f6" }}>
              <td style={{ padding: "13px 12px", color: "#374151", whiteSpace: "nowrap" }}>05/21/2026 3:30 PM</td>
              <td style={{ padding: "13px 12px", color: "#374151", whiteSpace: "nowrap" }}>6a0f16fd384c...</td>
              <td style={{ padding: "13px 12px", color: "#374151" }}>lease</td>
              <td style={{ padding: "13px 12px", color: "#374151" }}>
                leased proxy, leaseID: 1ZT0-8974 (IP: 172.58.123.6, country: US, agentID: 6a0f0ca4cdf15b070636de6a)
              </td>
              <td style={{ padding: "13px 12px", color: "#111827", fontWeight: 500, whiteSpace: "nowrap" }}>-$1.77</td>
              <td style={{ padding: "13px 12px", color: "#111827", fontWeight: 500, whiteSpace: "nowrap" }}>$13.18</td>
            </tr> */}
          </tbody>
        </table>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#374151" }}>1-1 of 1</span>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChevronLeft />
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
