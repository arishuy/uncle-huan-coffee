import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Inconsolata } from "next/font/google"

const inconsolataFont = Inconsolata({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uncle Huan",
  description: "We are Uncle Huan Coffee!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inconsolataFont.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
