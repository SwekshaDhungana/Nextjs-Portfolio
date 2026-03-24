import type { Metadata } from "next";
import { seoConfig } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}