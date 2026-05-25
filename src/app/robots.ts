import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/faq", "/downloads", "/api-page"],
        disallow: [
          "/homepage",
          "/my-proxies",
          "/payments",
          "/referral",
          "/add-funds",
          "/charges",
          "/rotating",
          "/auth",
          "/api/",
        ],
      },
    ],
    sitemap: "https://bigmama.click/sitemap.xml",
  };
}
