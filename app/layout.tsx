import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "imgbetter - Free Image Compression",
  description: "imgbetter provides free and powerful image compression tool that reduces file size without compromising much of the quality. Compress your images effortlessly with imgbetter.",
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
