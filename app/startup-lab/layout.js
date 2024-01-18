import Script from "next/script";
import "../globals.css";
export const metadata = {
  title: "Startup Lab",
  description:
    "Transform your business with Furation Tech Solutions, a dynamic design and development studio offering comprehensive engineering services to startups, and empowering enterprises through digital transformation to elevate their operations.",
};

import TidioScript from "@/app/tidio";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          content="Startup Lab | Furation Tech Solutions"
          property="og:title"
        />
        <meta
          content="Transform your business with Furation Tech Solutions, a dynamic design and development studio offering comprehensive engineering services to startups, and empowering enterprises through digital transformation to elevate their operations."
          property="og:description"
        />
        <meta
          content="Startup Lab | Furation Tech Solutions"
          property="twitter:title"
        />
        <meta
          content="Transform your business with Furation Tech Solutions, a dynamic design and development studio offering comprehensive engineering services to startups, and empowering enterprises through digital transformation to elevate their operations."
          property="twitter:description"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://furation-tech-solutions-assets.s3.ap-south-1.amazonaws.com/company-logo.png"
          property="og:image"
        />
        <meta
          content="https://furation-tech-solutions-assets.s3.ap-south-1.amazonaws.com/company-logo.png"
          property="twitter:image"
        />
        <link rel="icon" href="/assets/newFavIcon.svg" sizes="any" />
      </head>
      <body className={""}>{children}</body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9E8X81ZYH4"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-9E8X81ZYH4');`}
      </Script>
      <TidioScript />
    </html>
  );
}
