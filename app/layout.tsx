

import type { Metadata } from "next";
import { Mona_Sans, } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIValuate",
  description: "AI powered interview coach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern dark:bg-gray-950 dark:text-white`}
      >
        {children}

        <Toaster/>
      </body>
    </html>
  );
}
