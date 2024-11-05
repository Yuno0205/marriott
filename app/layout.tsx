import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const proximaNova = localFont({
  src: "./fonts/ProximaNovaRegular.otf",
  variable: "--font-proxima-nova",
  weight: "400 500 600 700 800 900",
});

export const proximaSemiBold = localFont({
  src: "./fonts/ProximaNovaSemibold.otf",
  variable: "--font-proxima-nova-semi-bold",
  weight: "400 500 600 700 800 900",
});

export const proximaBold = localFont({
  src: "./fonts/ProximaNovaBold.otf",
  variable: "--font-proxima-nova-bold",
  weight: "400 500 600 700 800 900",
});

const avenir = localFont({
  src: "./fonts/AvenirLTStd-Book.otf",
  variable: "--font-avenir",
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
      <body
        className={`${proximaNova.variable} ${proximaSemiBold.variable} ${proximaBold.variable} ${avenir.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
