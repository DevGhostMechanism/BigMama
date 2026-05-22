import Image from "next/image";

const features = [
  { icon: "/images/one.svg", label: "Residential IPs from real devices" },
  { icon: "/images/two.svg", label: "Safe service, superb prices" },
  { icon: "/images/three.svg", label: "Cellular network IPs" },
  { icon: "/images/four.svg", label: "Top-class realtime update and search" },
  { icon: "/images/five.svg", label: "Unlimited traffic" },
  { icon: "/images/six.svg", label: "Native TCP fingerprint" },
  { icon: "/images/seven.svg", label: "Standard SOCKSv5 protocol support" },
  { icon: "/images/eight.svg", label: "Detailed metadata for each proxy" },
  { icon: "/images/nine.svg", label: "New IPs added every few minutes" },
  { icon: "/images/ten.svg", label: "Private 24/7 support" },
];

export default function Features() {
  return (
    <section
      className="bg-white"
      id="features-section"
      style={{ padding: "80px 0" }}
    >
      {/* Title */}
      <div
        style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px 0" }}
      >
        <h2
          className="text-center font-bold text-[#0f0720]"
          style={{ marginBottom: "50px", fontSize: "40px" }}
        >
          Private LTE/4G Mobile and WiFi Proxies
        </h2>
      </div>

      {/* Features grid — no horizontal padding on container to let items span wide */}
      <div style={{ maxWidth: "1550px", margin: "0 auto" }}>
        <ul className="flex flex-wrap" style={{ justifyContent: "flex-start" }}>
          {features.map((feature, index) => (
            <li
              key={index}
              style={{ width: "20%", padding: "0 35px 70px 35px" }}
              className="flex flex-col items-start justify-start"
            >
              <div className="mb-6" style={{ maxWidth: "90px" }}>
                <Image
                  src={feature.icon}
                  alt={feature.label}
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              <p
                className="text-[#0f0720] font-normal text-left"
                style={{ fontSize: "18px", lineHeight: "24px" }}
              >
                {feature.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom note */}
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px" }}>
        <p
          className="text-center text-[#0f0720] mx-auto"
          style={{ opacity: 0.5, fontSize: "18px" }}
        >
          Our proxy network is exclusive, operated and managed by ourselves,
          end-to-end. Best selection, top freshness, highest uptime and speed
          are guaranteed.
        </p>
      </div>
    </section>
  );
}
