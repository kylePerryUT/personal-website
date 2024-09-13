import type { Metadata } from "next";
import {
  Permanent_Marker,
  Roboto_Condensed,
  Bungee_Inline,
} from "next/font/google";
import "./globals.css";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const bungeeInline = Bungee_Inline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee-inline",
  display: "swap",
});

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
      <body
        className={`${permanentMarker.variable} ${robotoCondensed.variable} ${bungeeInline.variable} font-permanent-marker bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
