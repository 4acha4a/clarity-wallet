import type { Metadata } from "next";
import "./globals.css";
import hitoFont from "next/font/local";
import Header from "@/components/Header/Header";

const hitoSans = hitoFont({
  src: "../fonts/HitoSans-Regular.woff2",
  variable: "--font-hito-sans",
  display: "swap",
});

const hitoMono = hitoFont({
  src: "../fonts/HitoMono-Regular.woff2",
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
        <body className="min-h-full flex flex-col mx-auto">
            <Header />
            <main className="flex min-h-screen flex-col">
                {children}
            </main>
        </body>
    </html>
  );
}
