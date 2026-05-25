import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads — Browser Extensions & Android App",
  description:
    "Download BigMama Network proxy apps: Firefox add-on, Chrome extension, and Android app. Connect to purchased proxies in one click.",
  openGraph: {
    title: "Downloads | BigMama Network",
    description:
      "Download BigMama Network proxy apps: Firefox add-on, Chrome extension, and Android app.",
    url: "https://bigmama.click/downloads",
  },
  alternates: {
    canonical: "https://bigmama.click/downloads",
  },
};

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
