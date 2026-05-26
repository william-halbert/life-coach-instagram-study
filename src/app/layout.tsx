import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Nav } from "@/lib/nav";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Coach Instagram Study",
  description: "How top life coaches make Instagram content that works.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}
