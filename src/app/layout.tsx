import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-permanent-marker", display: "swap" });

export const metadata: Metadata = {
  title: "Kyle Perry",
  description: "A website about me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${permanentMarker.variable} font-permanent-marker bg-primary`}>
       {children}
      </body>
    </html>
  );
}
