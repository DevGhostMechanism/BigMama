import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Find answers to common questions about BigMama Network proxies: what are mobile proxies, supported protocols (HTTP, HTTPS, SOCKS5), configuration, pricing, shared vs private, and refunds.",
  openGraph: {
    title: "FAQ — Frequently Asked Questions | BigMama Network",
    description:
      "Find answers to common questions about BigMama Network proxies, protocols, configuration, pricing, and more.",
    url: "https://bigmama.click/faq",
  },
  alternates: {
    canonical: "https://bigmama.click/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is mobile proxies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile proxies are proxies that are running on different mobile phones.",
      },
    },
    {
      "@type": "Question",
      name: "Which protocol are used for connection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BigMama supports HTTP, HTTPS, and SOCKS5 protocols for proxy connections.",
      },
    },
    {
      "@type": "Question",
      name: "How to configure BigMama proxies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can configure BigMama proxies by using the provided host, port, username, and password in your application settings.",
      },
    },
    {
      "@type": "Question",
      name: "What is a PORT NOAUTH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORT NOAUTH is a port that allows connections without authentication, typically whitelisted by IP address.",
      },
    },
    {
      "@type": "Question",
      name: "What are the differences between shared and private proxies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Private proxies are exclusively yours, while shared proxies are used by multiple users simultaneously at a lower cost.",
      },
    },
    {
      "@type": "Question",
      name: "How does the refund process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refunds are processed within 3-5 business days. Contact support with your order ID to initiate a refund request.",
      },
    },
    {
      "@type": "Question",
      name: "How often do proxies rotate on a port?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proxies on rotating ports change IP addresses at a configurable interval, typically every few minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How is the clean parameter calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The clean parameter is calculated based on the number of blacklists the IP appears on, ranging from 1 (many blacklists) to 4 (clean).",
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
