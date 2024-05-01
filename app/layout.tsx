import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skinstric",
  description: "Using AI to help your skin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
