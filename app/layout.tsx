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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {" "}
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
