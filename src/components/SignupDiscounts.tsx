const discounts = [
  { percent: "10%", range: "$50 – $100" },
  { percent: "15%", range: "$100 – $500" },
  { percent: "20%", range: "> $500" },
];

export default function SignupDiscounts() {
  return (
    <section className="w-full bg-[#fcfcfc]" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 20px" }}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2">
            <h2
              className="font-bold text-[#0f0720]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(28px, 4vw, 45px)",
                lineHeight: 1.5,
                marginBottom: "0",
              }}
            >
              Sign-up Discounts
            </h2>
            <p
              className="text-[#0f0720]"
              style={{ opacity: 0.7, fontSize: "0.9em", lineHeight: 1.56, marginTop: "15px", maxWidth: "680px" }}
            >
              A discount of 5 to 20% is given to each registered user when the first deposit is made,
              depending on the deposit amount.
            </p>

            <div
              className="flex flex-wrap items-center"
              style={{ marginTop: "32px" }}
            >
              {discounts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  style={{ paddingRight: "40px", paddingBottom: "15px" }}
                >
                  <span
                    className="font-bold text-[#4c97ff]"
                    style={{ fontFamily: "Poppins, sans-serif", fontSize: "1.2em", lineHeight: 1.17 }}
                  >
                    {item.percent}
                  </span>
                  <span
                    className="text-[#0f0720] relative"
                    style={{
                      fontSize: "0.9em",
                      lineHeight: 1.56,
                      marginLeft: "8px",
                      paddingLeft: "12px",
                    }}
                  >
                    <span
                      className="absolute rounded-full bg-[#4c97ff]"
                      style={{ left: 0, top: "50%", marginTop: "-2px", width: "4px", height: "4px" }}
                    />
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div
            className="w-full md:w-1/2"
            style={{
              height: "300px",
              backgroundImage: "url(/images/bg-illustration_man.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
