import Image from "next/image";

const useCases = [
  { icon: "/images/Ad Verification.svg", label: "Ad Verification" },
  { icon: "/images/Price comparison.svg", label: "Price comparison" },
  { icon: "/images/Web Scraping.svg", label: "Web scraping" },
  { icon: "/images/Data Collection.svg", label: "Data collection" },
  { icon: "/images/Online ticket.svg", label: "Online tickets" },
  { icon: "/images/SEO.svg", label: "SEO" },
  { icon: "/images/content analyzing.svg", label: "Content analyzing" },
  { icon: "/images/market research.svg", label: "Market research" },
  { icon: "/images/Sales intelligence.svg", label: "Sales intelligence" },
  { icon: "/images/Brand protection.svg", label: "Brand protection" },
  { icon: "/images/Web testing.svg", label: "Web testing" },
  { icon: "/images/Social.svg", label: "Social" },
];

export default function UseCases() {
  return (
    <section className="bg-[#fcfcfc]" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginBottom: "50px" }}>
          <h2
            className="text-center font-bold text-[#0f0720]"
            style={{
              marginBottom: "0",
              fontSize: "clamp(26px, 4vw, 42px)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Global Internet routing
            <br />
            for your most complex use-cases
          </h2>
          <p
            className="text-center text-[#0f0720] mx-auto"
            style={{ opacity: 0.5, fontSize: "clamp(14px, 1.5vw, 18px)", marginTop: "25px" }}
          >
            With the unprecedented selection and quality of our proxy network,
            all your business needs can be covered
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1550px", margin: "0 auto", padding: "0 20px" }}>
        <ul className="flex flex-wrap justify-center items-center">
          {useCases.map((item, index) => (
            <li
              key={index}
              className="w-1/2 md:w-1/4 flex items-center justify-start"
              style={{ padding: "0 24px 60px 24px" }}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={40}
                height={40}
                className="object-contain shrink-0"
                style={{ maxWidth: "40px", maxHeight: "40px" }}
              />
              <span
                className="text-[#0f0720] font-medium"
                style={{ fontSize: "clamp(14px, 1.5vw, 18px)", marginLeft: "10px" }}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 20px" }}>
        <p
          className="text-center font-bold text-[#0f0720] uppercase"
          style={{ fontSize: "clamp(24px, 4vw, 42px)", fontFamily: "Poppins, sans-serif" }}
        >
          ..as well as any others
        </p>
      </div>
    </section>
  );
}
