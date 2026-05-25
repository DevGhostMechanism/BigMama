"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Header from "@/components/Header";
import Image from "next/image";

const CHARGE = {
  id: "f296821e-e7a1-43e7-a801-07673f85ae43",
  status: "NO PAYMENTS",
  userId: "auth0|722991b311a64296b53c76502",
  email: "meetygreat@gmail.com",
  type: "BTC",
  address: "bc1qzu77y6g0xwgvrsv7jq9gznyflr5ej23r4w74n8",
  currencyAmount: "0.00007",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        fontSize: "12px",
        color: "#3b82f6",
        cursor: "pointer",
        fontFamily: "Poppins, sans-serif",
        marginLeft: "6px",
      }}
    >
      {copied ? "copied!" : "copy"}
    </button>
  );
}

function Field({
  label,
  value,
  copyable,
}: {
  label: string;
  value: string;
  copyable?: boolean;
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "2px" }}
      >
        <span style={{ fontSize: "12px", color: "#9ca3af" }}>{label}</span>
        {copyable && <CopyButton text={value} />}
      </div>
      <span
        style={{
          fontSize: "14px",
          color: "#111827",
          wordBreak: "break-all",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function ChargesPage() {
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

      <div style={{ padding: "32px 24px", maxWidth: "700px" }}>
        {/* Charge ID + status badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#111827",
              wordBreak: "break-all",
            }}
          >
            {CHARGE.id}
          </span>
          <span
            style={{
              backgroundColor: "#f97316",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              padding: "4px 12px",
              borderRadius: "999px",
              whiteSpace: "nowrap",
            }}
          >
            {CHARGE.status}
          </span>
        </div>

        {/* Fields */}
        <Field label="UserID" value={CHARGE.userId} />
        <Field label="Type" value={CHARGE.type} />
        <Field label="Address" value={CHARGE.address} copyable />

        {/* Red note */}
        <p
          style={{
            fontSize: "13px",
            color: "#ef4444",
            marginBottom: "16px",
            lineHeight: 1.5,
          }}
        >
          NOTE: while sending crypto be sure that wallet you are copy from site
          is the same that you paste.
        </p>

        <Field label="Currency amount" value={CHARGE.currencyAmount} copyable />

        {/* QR Code */}
        <div style={{ marginTop: "4px" }}>
          <Image
            src="/images/qr-code.jpeg"
            alt="Bitcoin Icon"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
