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
      {/* Title */}
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ marginBottom: "50px" }}>
          <h2
            className="text-center font-bold text-[#0f0720]"
            style={{
              marginBottom: "0",
              fontSize: "42px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Global Internet routing
            <br />
            for your most complex use-cases
          </h2>
          <p
            className="text-center text-[#0f0720] mx-auto"
            style={{ opacity: 0.5, fontSize: "18px", marginTop: "25px" }}
          >
            With the unprecedented selection and quality of our proxy network,
            all your business needs can be covered
          </p>
        </div>
      </div>

      {/* Items grid */}
      <div style={{ maxWidth: "1550px", margin: "0 auto" }}>
        <ul className="flex flex-wrap justify-center items-center">
          {useCases.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-start"
              style={{ width: "25%", padding: "0 35px 90px 35px" }}
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
                style={{ fontSize: "18px", marginLeft: "10px" }}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom large text */}
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px" }}>
        <p
          className="text-center font-bold text-[#0f0720] uppercase"
          style={{ fontSize: "42px", fontFamily: "Poppins, sans-serif" }}
        >
          ..as well as any others
        </p>
      </div>
    </section>
  );
}
