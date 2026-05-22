"use client";

import { useState } from "react";
import Header from "@/components/Header";

const faqItems = [
  {
    question: "What is mobile proxies?",
    answer: "Mobile proxies are proxies that are running on different mobile phones.",
  },
  {
    question: "Which protocol are used for connection?",
    answer: "BigMama supports HTTP, HTTPS, and SOCKS5 protocols for proxy connections.",
  },
  {
    question: "How to configure BigMama proxies?",
    answer: "You can configure BigMama proxies by using the provided host, port, username, and password in your application settings.",
  },
  {
    question: "What is a PORT NOAUTH?",
    answer: "PORT NOAUTH is a port that allows connections without authentication, typically whitelisted by IP address.",
  },
  {
    question: "Why proxy change the ip adress?",
    answer: "Proxies rotate IP addresses to provide anonymity and avoid detection or rate limiting by target websites.",
  },
  {
    question: "What means activity, uptime, new, clean params?",
    answer: "Activity indicates recent usage, uptime shows how long the proxy has been online, new marks recently added proxies, and clean indicates the proxy's blacklist status.",
  },
  {
    question: "How work refund process?",
    answer: "Refunds are processed within 3-5 business days. Contact support with your order ID to initiate a refund request.",
  },
  {
    question: "What differents between shared and private?",
    answer: "Private proxies are exclusively yours, while shared proxies are used by multiple users simultaneously at a lower cost.",
  },
  {
    question: "What about geo for mobile proxies?",
    answer: "Mobile proxies are available in multiple countries and regions. You can filter by location when purchasing.",
  },
  {
    question: "If I need proxy more then for one day?",
    answer: "You can purchase proxies for extended periods. Contact support or choose a longer subscription plan when purchasing.",
  },
  {
    question: "How clean param are calculated?",
    answer: "The clean parameter is calculated based on the number of blacklists the IP appears on, ranging from 1 (many blacklists) to 4 (clean).",
  },
  {
    question: "How offten proxies rotate on port?",
    answer: "Proxies on rotating ports change IP addresses at a configurable interval, typically every few minutes.",
  },
  {
    question: "How many ports(threads) I will get per package?",
    answer: "The number of ports depends on your package. Check the pricing page for details on each plan's port allocation.",
  },
  {
    question: "How many whitelist ips I can add per package?",
    answer: "The number of whitelisted IPs varies by package. Most packages support multiple whitelist entries.",
  },
  {
    question: "How can I get refund for port?",
    answer: "To request a refund for a port, contact our support team with your port details and reason for the refund.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      <div
        style={{
          flex: 1,
          padding: "40px 24px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "640px" }}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "18px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "#374151",
                      lineHeight: 1,
                      flexShrink: 0,
                      width: "16px",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#374151",
                    }}
                  >
                    {item.question}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      paddingLeft: "28px",
                      paddingBottom: "18px",
                      fontSize: "14px",
                      color: "#6b7280",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
