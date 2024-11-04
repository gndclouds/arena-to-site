import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "arena-to-site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.tinyfactories.space/script.js"
          data-website-id="213c5e99-1e61-4f16-8d60-04c92f66b0a2"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul>
            <li>
              <Link href="/">arena-to-site</Link>
            </li>
            <li style={{ marginLeft: "auto" }}>
              <Link href="https://github.com/gndclouds/arena-to-site">
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
