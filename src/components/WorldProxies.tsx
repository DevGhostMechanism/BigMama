import Link from "next/link";

export default function WorldProxies() {
  return (
    <section className="w-full bg-[#fcfcfc]" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 20px" }}>
        <div className="flex flex-col md:flex-row items-center">
          {/* Illustration */}
          <div
            className="w-full md:w-1/2"
            style={{
              height: "300px",
              backgroundImage: "url(/images/bg-illustration_woman.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "contain",
            }}
          />

          {/* Content */}
          <div
            className="flex flex-col justify-center items-start w-full md:w-1/2"
            style={{ paddingLeft: "0", paddingTop: "32px" }}
          >
            <h2
              className="font-bold text-[#0f0720]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.5,
                marginBottom: "0",
              }}
            >
              Proxies from whole world
            </h2>
            <p
              className="text-[#0f0720]"
              style={{ opacity: 0.7, fontSize: "0.9em", lineHeight: 1.56, marginTop: "15px" }}
            >
              Lots of proxies for any of your needs.
            </p>
            <Link
              href="/auth?tab=signup"
              className="inline-flex items-center justify-center text-white font-semibold transition-all border-2 border-[#4c97ff] hover:bg-white hover:text-[#4c97ff]"
              style={{
                background: "linear-gradient(280deg, #4c97ff 107%, #7eb4ff 0)",
                boxShadow: "-3px 3px 30px 0 rgba(76,151,255,0.3)",
                minWidth: "220px",
                height: "56px",
                borderRadius: "30px",
                fontSize: "0.9em",
                fontWeight: 600,
                padding: "10px",
                marginTop: "32px",
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
