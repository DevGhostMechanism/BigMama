import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#fff",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <Link
        href="/"
        style={{
          fontWeight: 700,
          fontSize: "22px",
          color: "#0f0720",
          textDecoration: "none",
          marginBottom: "48px",
        }}
      >
        BigMama Network
      </Link>

      <p
        style={{
          fontSize: "clamp(80px, 15vw, 120px)",
          fontWeight: 900,
          color: "#4c97ff",
          lineHeight: 1,
          margin: 0,
        }}
      >
        404
      </p>

      <h1
        style={{
          fontSize: "clamp(20px, 4vw, 28px)",
          fontWeight: 700,
          color: "#0f0720",
          margin: "16px 0 12px",
        }}
      >
        Page not found
      </h1>

      <p
        style={{
          fontSize: "15px",
          color: "#6b7280",
          maxWidth: "380px",
          lineHeight: 1.6,
          margin: "0 0 36px",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          padding: "0 32px",
          borderRadius: "30px",
          background: "linear-gradient(280deg, #4c97ff 107%, #7eb4ff -65%)",
          color: "#fff",
          fontWeight: 600,
          fontSize: "15px",
          textDecoration: "none",
          boxShadow: "-3px 3px 30px 0 rgba(76,151,255,0.3)",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
