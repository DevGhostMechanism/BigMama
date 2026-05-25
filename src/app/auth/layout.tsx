import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In / Sign Up",
  robots: { index: false, follow: false },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
