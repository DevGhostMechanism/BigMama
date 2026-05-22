"use client";

import Header from "@/components/Header";

export default function ReferralPage() {
  const referralLink = "https://auth.bigmama.network/?invite=5KVEGQ1";

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

      <div style={{ padding: "48px 28px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: 700,
            color: "#1e3a6e",
            marginBottom: "40px",
          }}
        >
          BigMama Referral Program
        </h1>

        <div style={{ maxWidth: "720px", color: "#4b5563" }}>
          <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "14px", color: "#374151" }}>
            How to start earn with BigMama?
          </p>

          <p style={{ fontSize: "14px", marginBottom: "20px", lineHeight: "1.7" }}>
            Just invite new users with your personale referral code by the following link:{" "}
            <a
              href={referralLink}
              style={{ color: "#111827", fontWeight: 400 }}
            >
              {referralLink}
            </a>
          </p>

          <p style={{ fontSize: "14px", marginBottom: "12px" }}>
            you will receive:
          </p>

          <table style={{ borderCollapse: "collapse", marginBottom: "20px" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#374151",
                    paddingRight: "12px",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                  }}
                >
                  10%
                </td>
                <td style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6" }}>
                  of the first transaction to loading the balance of each referred user.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#374151",
                    paddingRight: "12px",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                    paddingTop: "4px",
                  }}
                >
                  5%
                </td>
                <td style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.6", paddingTop: "4px" }}>
                  from all other transactions to loading the balance of the referred user.
                </td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#4b5563" }}>
            Each time your referral user will load balance, you will receive your referral earing on
            intrenal balance. Referral earnig will be dispalayed in Payments page.
          </p>
        </div>
      </div>
    </div>
  );
}
