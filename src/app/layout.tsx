import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const baseUrl = "https://bigmama.click";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BigMama Network — Global Proxy & Traffic Routing Service",
    template: "%s | BigMama Network",
  },
  description:
    "BigMama Network offers premium mobile, residential & rotating proxies from 195+ countries. Real LTE/4G IPs, SOCKS5/HTTP/HTTPS support, unlimited bandwidth. From $0.40/day.",
  keywords: [
    "mobile proxies",
    "residential proxies",
    "rotating proxies",
    "proxy network",
    "SOCKS5 proxy",
    "HTTP proxy",
    "4G proxy",
    "LTE proxy",
    "private proxy",
    "shared proxy",
    "buy proxies",
    "BigMama Network",
    "proxy service",
    "residential IP",
  ],
  authors: [{ name: "BigMama Network", url: baseUrl }],
  creator: "BigMama Network",
  publisher: "BigMama Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "BigMama Network",
    title: "BigMama Network — Global Proxy & Traffic Routing Service",
    description:
      "Premium mobile & residential proxies from 195+ countries. Real LTE/4G IPs, SOCKS5/HTTP/HTTPS, unlimited bandwidth. From $0.40/day.",
    images: [
      {
        url: "/images/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "BigMama Network — Global Proxy & Traffic Routing Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BigMama Network — Global Proxy & Traffic Routing Service",
    description:
      "Premium mobile & residential proxies from 195+ countries. Real LTE/4G IPs, SOCKS5, unlimited bandwidth. From $0.40/day.",
    images: ["/images/hero-illustration.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
