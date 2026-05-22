import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    icon: "/images/Shared.svg",
    title: "Shared",
    amountItem: (
      <>
        <sup style={{ fontSize: "24px", fontWeight: 700 }}>$</sup>
        <span
          style={{
            fontSize: "2.1em",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
          }}
        >
          0.40
        </span>
      </>
    ),
    amountText: "per 24 hours",
    text: "May be shared by up to 3 more customers.",
    contactUs: false,
    features: [
      "SOCKS5",
      "Unlimited bandwidth",
      "Real LTE/4G and residential WiFi IPs",
      "Detailed targeting",
      "24/7 support",
    ],
  },
  {
    icon: "/images/Private.svg",
    title: "Private",
    amountItem: (
      <>
        <span style={{ fontSize: "18px", fontWeight: 600 }}>From </span>
        <sup style={{ fontSize: "24px", fontWeight: 700 }}>$</sup>
        <span
          style={{
            fontSize: "2.1em",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
          }}
        >
          1
        </span>
      </>
    ),
    amountText: "per 24 hours",
    text: "Exclusively leased to you",
    contactUs: false,
    features: [
      "SOCKS5",
      "Unlimited bandwidth",
      "Real LTE/4G and residential WiFi IPs",
      "Detailed targeting",
      "24/7 support",
    ],
  },
  {
    icon: "/images/Custom.svg",
    title: "Custom",
    amountItem: null,
    amountText: null,
    text: "Contact us for any special requests, we'll be happy to help.",
    contactUs: true,
    features: [
      "SOCKS5",
      "Unlimited bandwidth",
      "IP rotation",
      "Real LTE/4G IPs",
      "Detailed targeting",
      "IPs from desired networks",
      "Premium support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      className="bg-white"
      id="pricing-section"
      style={{ padding: "80px 0" }}
    >
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px" }}>
        {/* Title */}
        <div style={{ marginBottom: "40px", fontSize: "48px" }}>
          <h2 className="text-center font-bold text-[#0f0720]">Pricing</h2>
        </div>

        {/* Cards */}
        <div
          className="flex flex-col md:flex-row items-stretch justify-between"
          style={{ gap: "30px" }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col bg-white"
              style={{
                flex: 1,
                border: "1px solid #dfdfdf",
                borderRadius: "8px",
                minHeight: "590px",
              }}
            >
              {/* Card title row */}
              <div
                className="flex items-center justify-center"
                style={{
                  height: "72px",
                  borderBottom: "1px dashed #dfdfdf",
                  padding: "15px 0",
                }}
              >
                <Image
                  src={plan.icon}
                  alt={plan.title}
                  width={47}
                  height={35}
                  className="object-contain"
                  style={{ maxWidth: "47px", maxHeight: "35px" }}
                />
                <span
                  className="font-bold text-[#0f0720]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.2em",
                    marginLeft: "15px",
                  }}
                >
                  {plan.title}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col" style={{ padding: "0 32px 24px" }}>
                {/* Amount */}
                <div style={{ marginTop: "20px" }}>
                  <div
                    className="flex flex-col justify-center items-center"
                    style={{ minHeight: "92px" }}
                  >
                    {plan.contactUs ? (
                      <Link
                        href="#contacts"
                        className="font-bold text-[#4c97ff] hover:underline"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "24px",
                        }}
                      >
                        Contact us
                      </Link>
                    ) : (
                      <div
                        className="flex items-baseline"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {plan.amountItem}
                      </div>
                    )}
                    {plan.amountText && (
                      <span
                        className="text-[#0f0720]"
                        style={{ fontSize: "0.9em", opacity: 0.5 }}
                      >
                        {plan.amountText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description text */}
                <p
                  className="text-center text-[#0f0720]"
                  style={{
                    fontSize: "0.9em",
                    lineHeight: 1.56,
                    opacity: 0.5,
                    marginTop: "20px",
                  }}
                >
                  {plan.text}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col" style={{ marginTop: "24px" }}>
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center"
                      style={{ marginTop: i > 0 ? "16px" : 0 }}
                    >
                      {/* Bullet point */}
                      <span
                        className="relative shrink-0"
                        style={{ width: "8px", height: "8px" }}
                      >
                        <span
                          className="absolute rounded-full bg-[#4c97ff]"
                          style={{
                            width: "4px",
                            height: "4px",
                            top: "50%",
                            left: 0,
                            marginTop: "-2px",
                          }}
                        />
                      </span>
                      <span
                        className="text-[#0f0720]"
                        style={{
                          fontSize: "0.9em",
                          opacity: 0.5,
                          marginLeft: "20px",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
