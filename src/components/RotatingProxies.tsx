import Image from "next/image";

const items = [
  {
    icon: "/images/MOBILE ROTATION.png",
    text: (
      <>
        <span style={{ color: "#1c7ed6", fontWeight: 600 }}>
          MOBILE ROTATION
        </span>{" "}
        Proxy
      </>
    ),
  },
  {
    icon: "/images/CHEAPEST.png",
    text: (
      <>
        <span style={{ color: "#ffb53b", fontWeight: 600 }}>CHEAPEST</span>{" "}
        mobile traffic - 12$/Gb
      </>
    ),
  },
  {
    icon: "/images/UNLIMITED.png",
    text: (
      <>
        <span style={{ color: "#ffb53b", fontWeight: 600 }}>UNLIMITED</span>{" "}
        mobile rotation ports
      </>
    ),
  },
  {
    icon: "/images/UP to 400 THREADS.png",
    text: (
      <>
        UP to{" "}
        <span style={{ color: "#1c7ed6", fontWeight: 600 }}>400 THREADS</span>{" "}
        per port
      </>
    ),
  },
  {
    icon: "/images/MANUEL AND AUTOMATIC.png",
    text: (
      <>
        <span style={{ color: "#1c7ed6", fontWeight: 600 }}>
          MANUAL AND AUTOMATIC
        </span>{" "}
        proxy rotation
      </>
    ),
  },
  {
    icon: "/images/100000 IPS.png",
    text: (
      <>
        <span style={{ color: "#1c7ed6", fontWeight: 600 }}>100000</span> IPS
      </>
    ),
  },
];

export default function RotatingProxies() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            border: "1px solid #dfdfdf",
            borderRadius: "10px",
            padding: "40px 0",
            maxWidth: "1550px",
            margin: "0 auto",
          }}
        >
          <h2
            className="text-center font-bold text-[#0f0720]"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              paddingBottom: "40px",
              borderBottom: "2px solid #efefef",
              margin: "0 20px 0",
            }}
          >
            Rotating Proxies
          </h2>

          <div className="flex flex-wrap" style={{ padding: "0 20px" }}>
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-start gap-3"
                style={{ padding: "40px 20px 0" }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={33}
                  height={33}
                  className="object-contain shrink-0"
                  style={{ width: "33px", height: "33px" }}
                />
                <p className="text-[#0f0720]" style={{ fontSize: "clamp(15px, 2vw, 20px)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
