import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Aatmanirbhar | Empower Communities",
  description:
    "Project Aatmanirbhar blends ancient wisdom with modern action to build self-sufficient, thriving communities.",
  metadataBase: new URL("https://projectaatmanirbhar.org"),
  openGraph: {
    title: "Project Aatmanirbhar | Empower Communities",
    description:
      "Volunteer, donate, and explore initiatives that restore nature and uplift communities.",
    url: "https://projectaatmanirbhar.org",
    siteName: "Project Aatmanirbhar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
