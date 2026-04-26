import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ToolNext",
  description: "Booking tools with us becomes quick and easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.variable}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
