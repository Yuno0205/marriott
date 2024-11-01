import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: "./fonts/ProximaNF.otf",
  variable: "--font-proxima-nova",
  weight: "400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Marriott",
  description: "HienPhong's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.variable}  antialiased`}>{children}</body>
    </html>
  );
}
