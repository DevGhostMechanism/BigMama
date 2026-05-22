import Image from "next/image";

type CountryRow = { price: string; countries: { name: string; flag: string }[] };
type PeriodBlock = { period: string; rows: CountryRow[] };

const unlimitedPlans: PeriodBlock[] = [
  {
    period: "Per Day",
    rows: [
      { price: "$20",  countries: [{ name: "US", flag: "/images/flag-US.svg" }, { name: "GB", flag: "/images/flag-GB.svg" }, { name: "AU", flag: "/images/flag-AU.svg" }, { name: "CA", flag: "/images/flag-CA.svg" }] },
      { price: "$16",  countries: [{ name: "Europe", flag: "/images/flag-Europe.svg" }] },
      { price: "$12",  countries: [{ name: "World wide", flag: "/images/flag-worldwide.svg" }] },
    ],
  },
  {
    period: "Per Week",
    rows: [
      { price: "$110", countries: [{ name: "US", flag: "/images/flag-US.svg" }, { name: "GB", flag: "/images/flag-GB.svg" }, { name: "AU", flag: "/images/flag-AU.svg" }, { name: "CA", flag: "/images/flag-CA.svg" }] },
      { price: "$88",  countries: [{ name: "Europe", flag: "/images/flag-Europe.svg" }] },
      { price: "$66",  countries: [{ name: "World wide", flag: "/images/flag-worldwide.svg" }] },
    ],
  },
  {
    period: "Per Month",
    rows: [
      { price: "$400", countries: [{ name: "US", flag: "/images/flag-US.svg" }, { name: "GB", flag: "/images/flag-GB.svg" }, { name: "AU", flag: "/images/flag-AU.svg" }, { name: "CA", flag: "/images/flag-CA.svg" }] },
      { price: "$300", countries: [{ name: "Europe", flag: "/images/flag-Europe.svg" }] },
      { price: "$160", countries: [{ name: "World wide", flag: "/images/flag-worldwide.svg" }] },
    ],
  },
];

const trafficPlans: PeriodBlock[] = [
  {
    period: "Week 1GB",
    rows: [
      { price: "$5/Gb",    countries: [{ name: "US", flag: "/images/flag-US.svg" }, { name: "GB", flag: "/images/flag-GB.svg" }, { name: "AU", flag: "/images/flag-AU.svg" }, { name: "CA", flag: "/images/flag-CA.svg" }] },
      { price: "$4.50/Gb", countries: [{ name: "Europe", flag: "/images/flag-Europe.svg" }] },
      { price: "$4/Gb",    countries: [{ name: "World wide", flag: "/images/flag-worldwide.svg" }] },
    ],
  },
  {
    period: "Month 10GB+",
    rows: [
      { price: "$4.50/Gb", countries: [{ name: "US", flag: "/images/flag-US.svg" }, { name: "GB", flag: "/images/flag-GB.svg" }, { name: "AU", flag: "/images/flag-AU.svg" }, { name: "CA", flag: "/images/flag-CA.svg" }] },
      { price: "$4/Gb",    countries: [{ name: "Europe", flag: "/images/flag-Europe.svg" }] },
      { price: "$3.50/Gb", countries: [{ name: "World wide", flag: "/images/flag-worldwide.svg" }] },
    ],
  },
  {
    period: "Month 50GB+",
    rows: [
      { price: "$4/Gb",    countries: [{ name: "US", flag: "/images/flag-US.svg" }, { name: "GB", flag: "/images/flag-GB.svg" }, { name: "AU", flag: "/images/flag-AU.svg" }, { name: "CA", flag: "/images/flag-CA.svg" }] },
      { price: "$3.50/Gb", countries: [{ name: "Europe", flag: "/images/flag-Europe.svg" }] },
      { price: "$3/Gb",    countries: [{ name: "World wide", flag: "/images/flag-worldwide.svg" }] },
    ],
  },
];

function PackageCard({ icon, title, plans }: { icon: string; title: string; plans: PeriodBlock[] }) {
  return (
    <div
      className="flex flex-col bg-white"
      style={{ flex: 1, border: "1px solid #dfdfdf", borderRadius: "8px" }}
    >
      {/* Header */}
      <div
        className="flex items-center"
        style={{ padding: "15px 35px", borderBottom: "1px solid #dfdfdf", fontSize: "18px" }}
      >
        <Image src={icon} alt={title} width={40} height={40} className="object-contain shrink-0" style={{ marginRight: "10px" }} />
        <span className="font-semibold text-[#0f0720]">{title}</span>
      </div>

      {/* Period blocks */}
      {plans.map((plan, i) => (
        <div
          key={i}
          className="flex items-start justify-between"
          style={{ margin: "0 35px", padding: "12px 0", borderBottom: "1px solid #dfdfdf" }}
        >
          {/* Period label */}
          <h3
            className="text-[#0f0720] font-medium shrink-0"
            style={{ fontSize: "18px", paddingTop: "12px", paddingBottom: "15px", textAlign: "left", width: "130px" }}
          >
            {plan.period}
          </h3>

          {/* Rows */}
          <div className="flex flex-col flex-1">
            {plan.rows.map((row, j) => (
              <div key={j} className="flex items-center" style={{ padding: "12px 0" }}>
                <span
                  className="font-semibold text-[#0f0720] shrink-0"
                  style={{ fontSize: "24px", width: "90px" }}
                >
                  {row.price}
                </span>
                <span className="text-[#0f0720] mx-2" style={{ opacity: 0.4 }}>-</span>
                <div className="flex items-center flex-wrap gap-1">
                  {row.countries.map((c, k) => (
                    <span key={k} className="flex items-center text-[#0f0720]" style={{ fontSize: "14px", opacity: 0.5, marginRight: "4px" }}>
                      {c.name}
                      <Image src={c.flag} alt={c.name} width={15} height={15} className="ml-1 object-contain" />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RotatingPackages() {
  return (
    <section className="bg-white" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="text-center font-bold text-[#0f0720]"
          style={{ marginBottom: "20px", fontSize: "48px" }}
        >
          Rotating Packages
        </h2>

        <div
          className="flex flex-col md:flex-row items-stretch justify-between"
          style={{ maxWidth: "1160px", margin: "15px auto 0", gap: "30px" }}
        >
          <PackageCard icon="/images/Unlimited 1 port.svg" title="Unlimited 1 port" plans={unlimitedPlans} />
          <PackageCard icon="/images/By Traffic .svg"      title="By Traffic 1 port" plans={trafficPlans} />
        </div>
      </div>
    </section>
  );
}
