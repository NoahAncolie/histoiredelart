import type { Metadata } from "next";
import { EB_Garamond, Inter, } from "next/font/google";
import "./globals.css";

const geistSans = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Histoire de l'Art",
  description: "Historique de l'Art en France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
