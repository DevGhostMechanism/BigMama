import Image from "next/image";

export default function Partners() {
  return (
    <section style={{ margin: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 40px" }}>
        <h2
          className="text-center font-bold text-[#0f0720]"
          style={{ fontSize: "52px", marginBottom: "0" }}
        >
          Our Partners
        </h2>

        <div
          className="flex flex-wrap items-center justify-center"
          style={{ marginTop: "20px" }}
        >
          {/* Partner item — 15% wide, centered */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "25%", margin: "20px 5% 0" }}
          >
            <Image
              src="/images/bitbash_logo.png"
              alt="BitBash"
              width={700}
              height={700}
              className="w-full object-contain "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
