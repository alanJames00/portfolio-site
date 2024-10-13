import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = IBM_Plex_Mono({
    weight: "400",
    subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Alan James - Portfolio",
  description: "My portfolio website, obviously",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
