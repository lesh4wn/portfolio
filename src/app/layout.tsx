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
      {process.env.UMAMI_TRACKING_URL && (
        <script
          defer
          async
          src={process.env.UMAMI_TRACKING_URL}
          data-website-id={process.env.UMAMI_TRACKING_WEBSITE_ID}
        ></script>
      )}
      <body className={`${inter.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
