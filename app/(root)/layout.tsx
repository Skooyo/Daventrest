import "@/app/globals.css"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full flex gap-4">
            <div className="w-1/5 top-0 h-full">
            <Navbar />
            </div>
            <div className="w-full h-full">
              {children}
            </div>
          </div>
        </body>
      </html>
  )
}
