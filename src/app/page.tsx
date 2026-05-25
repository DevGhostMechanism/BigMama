import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import RotatingProxies from "@/components/RotatingProxies";
import UseCases from "@/components/UseCases";
import WorldProxies from "@/components/WorldProxies";
import SignupDiscounts from "@/components/SignupDiscounts";
import RotatingPackages from "@/components/RotatingPackages";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://bigmama.click" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BigMama Network",
  url: "https://bigmama.click",
  logo: "https://bigmama.click/images/hero-illustration.png",
  description:
    "BigMama Network is a global proxy & traffic routing service offering premium mobile, residential, and rotating proxies from 195+ countries.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BigMama Network",
  url: "https://bigmama.click",
  description:
    "Next-generation global proxy & traffic routing service. Real LTE/4G and residential WiFi IPs, SOCKS5/HTTP/HTTPS, unlimited bandwidth.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://bigmama.click/homepage",
    "query-input": "required name=search_term_string",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BigMama Proxy Network",
  serviceType: "Proxy Service",
  provider: { "@type": "Organization", name: "BigMama Network" },
  description:
    "Premium mobile and residential proxy service with real LTE/4G IPs from 195+ countries. Private and shared proxies from $0.40/day.",
  offers: [
    {
      "@type": "Offer",
      name: "Shared Proxy",
      price: "0.40",
      priceCurrency: "USD",
      description: "Shared proxy, may be used by up to 3 customers. Per 24 hours.",
    },
    {
      "@type": "Offer",
      name: "Private Proxy",
      price: "1.00",
      priceCurrency: "USD",
      description: "Exclusively leased private proxy. Per 24 hours.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="w-50% mx-auto flex flex-col items-center">
        <Navbar />
        <Hero />
        <Features />
        <Partners />
        <RotatingProxies />
        <UseCases />
        <WorldProxies />
        <SignupDiscounts />
        <RotatingPackages />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
