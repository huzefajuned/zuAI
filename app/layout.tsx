import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZuAi",
  description:
    "ZuAi for evaluating International Baccalaureate (IB) coursework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
