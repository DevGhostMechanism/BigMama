"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

function AuthForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "signup">(
    searchParams.get("tab") === "signup" ? "signup" : "login",
  );
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#c8c8c8" }}
    >
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ width: "420px" }}
      >
        {/* Header */}
        <div
          className="flex flex-col items-center"
          style={{
            backgroundColor: "#e0e0e0",
            paddingTop: "52px",
            paddingBottom: "44px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <Image
            src="/images/bigmama-logo.svg"
            loading="eager"
            alt="BigMama Proxy Network Logo"
            width={90}
            height={90}
            style={{ marginBottom: "20px" }}
          />
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#1f2937",
              letterSpacing: "0.02em",
            }}
          >
            BigMama Proxy Network
          </p>
        </div>

        {/* Tabs */}
        <div className="flex" style={{ backgroundColor: "#ffffff" }}>
          <button
            onClick={() => setTab("login")}
            style={{
              flex: 1,
              paddingTop: "18px",
              paddingBottom: "18px",
              fontSize: "14px",
              fontWeight: 500,
              color: tab === "login" ? "#3b82f6" : "#9ca3af",
              borderBottom:
                tab === "login" ? "2px solid #3b82f6" : "1px solid #e5e7eb",
              background: "none",
              cursor: "pointer",
              transition: "color 0.15s",
            }}
          >
            Log in
          </button>
          <button
            onClick={() => setTab("signup")}
            style={{
              flex: 1,
              paddingTop: "18px",
              paddingBottom: "18px",
              fontSize: "14px",
              fontWeight: 500,
              color: tab === "signup" ? "#3b82f6" : "#9ca3af",
              borderBottom:
                tab === "signup" ? "2px solid #3b82f6" : "1px solid #e5e7eb",
              background: "none",
              cursor: "pointer",
              transition: "color 0.15s",
            }}
          >
            Sign up
          </button>
        </div>

        {/* Form Body */}
        <div style={{ backgroundColor: "#ffffff", padding: "28px 32px 20px" }}>
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yours@example.com"
            style={{
              width: "100%",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              padding: "14px 16px",
              fontSize: "14px",
              outline: "none",
              marginBottom: "14px",
              color: "#374151",
              boxSizing: "border-box",
            }}
            className="placeholder:text-gray-400 focus:border-blue-400"
          />

          {/* Password */}
          <div
            style={{
              position: "relative",
              marginBottom: tab === "login" ? "16px" : "14px",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                padding: "14px 48px 14px 16px",
                fontSize: "14px",
                outline: "none",
                color: "#374151",
                boxSizing: "border-box",
              }}
              className="placeholder:text-gray-400 focus:border-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          {tab === "login" && (
            <div style={{ textAlign: "center", marginBottom: "8px" }}>
              <a
                href="#"
                style={{
                  color: "#3b82f6",
                  fontSize: "13px",
                  textDecoration: "underline",
                }}
              >
                Don&apos;t remember your password?
              </a>
            </div>
          )}

          {tab === "signup" && (
            <>
              <input
                type="text"
                defaultValue="DIRECT"
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "14px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1f2937",
                  outline: "none",
                  marginBottom: "16px",
                  boxSizing: "border-box",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  style={{
                    marginTop: "2px",
                    width: "16px",
                    height: "16px",
                    cursor: "pointer",
                    flexShrink: 0,
                    accentColor: "#3b82f6",
                  }}
                />
                <label
                  htmlFor="terms"
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    lineHeight: "1.5",
                    cursor: "pointer",
                  }}
                >
                  Before you sign up, you must accept our{" "}
                  <a href="#" style={{ color: "#3b82f6" }}>
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" style={{ color: "#3b82f6" }}>
                    Privacy Policy
                  </a>
                </label>
              </div>
            </>
          )}
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => tab === "login" && router.push("/homepage")}
          disabled={!email || !password || (tab === "signup" && !agreeTerms)}
          style={{
            width: "100%",
            padding: "26px 0",
            backgroundColor:
              !email || !password || (tab === "signup" && !agreeTerms)
                ? "#93c5fd"
                : "#3b82f6",
            color:
              !email || !password || (tab === "signup" && !agreeTerms)
                ? "rgba(255,255,255,0.6)"
                : "#ffffff",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            border: "none",
            cursor:
              !email || !password || (tab === "signup" && !agreeTerms)
                ? "not-allowed"
                : "pointer",
            transition: "background-color 0.15s",
          }}
        >
          {tab === "login" ? "LOG IN" : "SIGN UP"}
        </button>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
}
