import type { Metadata } from "next";
import "./globals.css";
import hitoFont from "next/font/local";

const hitoSans = hitoFont({
  src: "../fonts/HitoSans-Regular.woff2",
  variable: "--font-hito-sans",
  display: "swap",
});

const hitoMono = hitoFont({
  src: "../fonts/HitoSans-Regular.woff2",
  variable: "--font-hito-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clarity Wallet",
  description: "Clarity Wallet app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mx-auto max-w-md">{children}</body>
    </html>
  );
}
