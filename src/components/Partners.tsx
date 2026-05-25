import Image from "next/image";

export default function Partners() {
  return (
    <section style={{ margin: "80px 0" }}>
      <div style={{ maxWidth: "1650px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          className="text-center font-bold text-[#0f0720]"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: "0" }}
        >
          Our Partners
        </h2>

        <div
          className="flex flex-wrap items-center justify-center"
          style={{ marginTop: "20px" }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3/4 sm:w-1/2 md:w-1/4"
            style={{ margin: "20px auto 0" }}
          >
            <Image
              src="/images/bitbash_logo.png"
              alt="BitBash"
              width={700}
              height={700}
              className="w-full object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
