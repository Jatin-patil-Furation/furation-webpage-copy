import Script from "next/script";

import "../globals.css";

export const metadata = {
  // icons: [{ rel: "icon", url: "/next.svg" }],
  title: "Furation Tech Solutions",
  description:
    "Transform your business with Furation Tech Solutions, a dynamic design and development studio offering comprehensive engineering services to startups, and empowering enterprises through digital transformation to elevate their operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="Furation Tech Solutions" property="og:title" />
        <meta
          content="Transform your business with Furation Tech Solutions, a dynamic design and development studio offering comprehensive engineering services to startups, and empowering enterprises through digital transformation to elevate their operations."
          property="og:description"
        />
        <meta content="Furation Tech Solutions" property="twitter:title" />
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
        <meta property="og:type" content="website" />
        <link rel="icon" href="./assets/newFavIcon.svg" sizes="any" />
      </head>

      <body className="">
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9E8X81ZYH4"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-9E8X81ZYH4');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
