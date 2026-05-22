import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-white min-h-screen flex items-center"
      style={{ paddingTop: "70px" }}
    >
      <div
        className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        style={{ maxWidth: "1650px", padding: "80px 40px" }}
      >
        {/* Right — illustration (order-2 on desktop) */}
        <div
          className="flex-1 flex justify-center items-center order-first md:order-last"
          style={{ width: "55%" }}
        >
          <Image
            src="/images/hero-illustration.png"
            alt="BigMama Proxy Network Illustration"
            width={620}
            height={520}
            priority
            className="w-full object-contain"
            style={{ maxWidth: "620px" }}
          />
        </div>

        {/* Left — text content (order-1 on desktop) */}
        <div
          className="flex flex-col justify-end order-last md:order-first"
          style={{ width: "45%" }}
        >
          {/* Heading */}
          <h1
            className="font-extrabold text-[#0f0720] whitespace-nowrap mb-4 text-left"
            style={{ fontFamily: "Poppins, sans-serif", fontSize: "80px" }}
          >
            BigMama
            <br />
            <span className="text-[#4c97ff]">Proxy</span> Network
          </h1>

          {/* Tag line */}
          <p
            className="text-[#4c97ff] font-bold uppercase mb-3 text-left"
            style={{ fontSize: "18px", letterSpacing: "0.05em" }}
          >
            teleport your traffic
          </p>

          {/* Subtitle */}
          <p
            className="text-[#0f0720] leading-relaxed mb-8 text-left"
            style={{ opacity: 0.5, maxWidth: "600px", fontSize: "30px" }}
          >
            The next-generation global proxy &amp; traffic routing service.
          </p>
          <br />

          {/* CTA button */}
          <div className="self-start mt-6">
            <Link
              href="/auth?tab=signup"
              className="inline-flex items-center justify-center text-white font-semibold transition-all border-2 border-[#4c97ff] hover:bg-white hover:text-[#4c97ff]"
              style={{
                background:
                  "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)",
                boxShadow: "-3px 3px 30px 0 rgba(76, 151, 255, 0.3)",
                minWidth: "260px",
                height: "60px",
                borderRadius: "30px",
                fontSize: "1em",
                fontWeight: 600,
                padding: "10px 40px",
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
