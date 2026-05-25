"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const CURRENCIES = ["BTC", "ETH", "USDT", "USDC"];

const CRYPTO_INFO: Record<string, { address: string; qr: string; network: string }> = {
  BTC: {
    address: "bc1qzu77y6g0xwgvrsv7jq9gznyflr5ej23r4w74n8",
    qr: "/images/qr-code.jpeg",
    network: "Bitcoin Network",
  },
  ETH: {
    address: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
    qr: "/images/ETH.jpeg",
    network: "ERC-20",
  },
  USDT: {
    address: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
    qr: "/images/USDT.jpeg",
    network: "ERC-20",
  },
  USDC: {
    address: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
    qr: "/images/USDC.jpeg",
    network: "ERC-20",
  },
};

export default function AddFundsPage() {
  const router = useRouter();
  const [currency, setCurrency] = useState("BTC");
  const [amount, setAmount] = useState("50");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleAddFunds() {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 50) {
      alert("Minimum amount is $50. Please enter a valid amount.");
      return;
    }
    setShowModal(true);
  }

  function handleCopy() {
    navigator.clipboard.writeText(CRYPTO_INFO[currency].address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const info = CRYPTO_INFO[currency];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      {/* Close button */}
      <button
        onClick={() => router.back()}
        aria-label="Close"
        style={{
          position: "fixed",
          top: "20px",
          left: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>⬅Go back</p>
      </button>

      {/* Content area */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
          padding: "120px 24px 60px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "320px" }}>
          {/* Title */}
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 16px",
              lineHeight: 1.3,
            }}
          >
            Add funds to balance
          </h1>

          {/* Intro */}
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: "0 0 16px",
              lineHeight: 1.6,
            }}
          >
            Select your preferred cryptocurrency and click &apos;Add Funds&apos;
            to view the wallet address and QR code for your payment.
          </p>

          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 8px",
            }}
          >
            Minimum amount is $50
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: "0 0 16px",
              lineHeight: 1.6,
            }}
          >
            After the crypto transaction is completed, the funds will appear on
            your balance within a few minutes.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: "0 0 24px",
              lineHeight: 1.6,
            }}
          >
            Please note that balance cannot be refunded to currency. See our{" "}
            <Link href="" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Terms and Conditions
            </Link>{" "}
            for more details.
          </p>

          {/* Currency + Amount */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
            {/* Currency select */}
            <div style={{ position: "relative", flex: 1 }}>
              <label
                style={{
                  position: "absolute",
                  top: "-9px",
                  left: "10px",
                  backgroundColor: "#fff",
                  padding: "0 4px",
                  fontSize: "11px",
                  color: "#9ca3af",
                  zIndex: 1,
                  lineHeight: 1,
                }}
              >
                Currency
              </label>
              <div
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 10px",
                  position: "relative",
                }}
              >
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#111827",
                    background: "transparent",
                    fontFamily: "Poppins, sans-serif",
                    appearance: "none",
                    width: "100%",
                    cursor: "pointer",
                    paddingRight: "20px",
                  }}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#374151"
                  style={{
                    position: "absolute",
                    right: "10px",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </div>

            {/* Amount input */}
            <div style={{ position: "relative", flex: 1 }}>
              <label
                style={{
                  position: "absolute",
                  top: "-9px",
                  left: "10px",
                  backgroundColor: "#fff",
                  padding: "0 4px",
                  fontSize: "11px",
                  color: "#9ca3af",
                  zIndex: 1,
                  lineHeight: 1,
                }}
              >
                Amount
              </label>
              <div
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 10px",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "15px", color: "#6b7280" }}>$</span>
                <input
                  type="number"
                  min={50}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
                    color: "#111827",
                    fontFamily: "Poppins, sans-serif",
                    background: "transparent",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Add Funds button */}
          <button
            onClick={handleAddFunds}
            style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#4d8ef0",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b7de0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#4d8ef0")
            }
          >
            ADD FUNDS
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "360px",
              padding: "28px 24px 24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "14px",
                right: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#6b7280",
                lineHeight: 1,
                padding: "2px 6px",
              }}
            >
              ✕
            </button>

            {/* Header */}
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 4px",
                textAlign: "center",
              }}
            >
              Send {currency}
            </h2>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                margin: "0 0 20px",
                textAlign: "center",
              }}
            >
              {info.network}
            </p>

            {/* QR Code */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "10px",
                  display: "inline-flex",
                }}
              >
                <Image
                  src={info.qr}
                  alt={`${currency} QR code`}
                  width={180}
                  height={180}
                  style={{ borderRadius: "4px", display: "block" }}
                />
              </div>
            </div>

            {/* Amount reminder */}
            <p
              style={{
                fontSize: "13px",
                color: "#374151",
                textAlign: "center",
                margin: "0 0 16px",
                fontWeight: 600,
              }}
            >
              Send ${parseFloat(amount).toFixed(2)} worth of {currency}
            </p>

            {/* Address */}
            <p
              style={{
                fontSize: "11px",
                color: "#9ca3af",
                margin: "0 0 6px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Wallet Address
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "10px 12px",
                backgroundColor: "#f9fafb",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#111827",
                  flex: 1,
                  wordBreak: "break-all",
                  fontFamily: "monospace",
                }}
              >
                {info.address}
              </span>
              <button
                onClick={handleCopy}
                style={{
                  flexShrink: 0,
                  background: copied ? "#10b981" : "#4d8ef0",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                  transition: "background 0.2s",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Warning */}
            <p
              style={{
                fontSize: "12px",
                color: "#ef4444",
                textAlign: "center",
                margin: "0",
                lineHeight: 1.5,
              }}
            >
              Only send {currency} ({info.network}) to this address.
              <br />
              Sending other assets may result in permanent loss.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
