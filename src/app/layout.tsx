import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leshawn Phillips - Portfolio",
  description:
    "Personal portfolio website for Leshawn Phillips showcasing experience, projects, and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>"
      ></link>
      <script
        defer
        async
        src="https://analytics.leshawn.me/script.js"
        data-website-id="1254a4de-b8f7-4d9f-a2c5-44db8e0d8df0"
      ></script>
      <body className={`${inter.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
