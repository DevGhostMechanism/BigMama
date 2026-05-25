import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "BigMama Network REST API documentation: authentication, proxy list, lease management, autorenew, and refund endpoints for programmatic proxy access.",
  openGraph: {
    title: "API Documentation | BigMama Network",
    description:
      "BigMama Network REST API: authentication, proxy list, lease management, and more.",
    url: "https://bigmama.click/api-page",
  },
  alternates: {
    canonical: "https://bigmama.click/api-page",
  },
};

export default function ApiPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
