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

export default function Home() {
  return (
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
  );
}
