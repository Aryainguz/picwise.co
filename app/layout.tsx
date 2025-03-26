import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { buildMeta } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = (): Metadata => {
  return buildMeta({
    title: "Picwise - Free Image Compression and Conversion",
    description: "Picwise is a free image compression and conversion tool that helps you optimize images for the web.",
    ogImage: encodeURI(`https://picwise.co/api/og?title=Picwise`),
  });
};
const metadata = generateMetadata();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="application-name" content="Picwise" />
          <meta name="description" content={metadata.description ?? ""} />
          <link rel="canonical" href="https://picwise.co" />

          <meta property="og:url" content={metadata.openGraph?.url?.toString()} />
          <meta property="og:site_name" content={metadata.openGraph?.siteName} />
          <meta property="og:title" content={metadata.openGraph?.title?.toString()} />
          <meta property="og:description" content={metadata.openGraph?.description} />
          <meta property="og:locale" content={metadata.openGraph?.locale} />
          
          <meta name="twitter:title" content={metadata.twitter?.title as string} />
          <meta name="twitter:description" content={metadata.twitter?.description} />
          <meta name="twitter:creator" content={metadata.twitter?.creator} />
        </head>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
