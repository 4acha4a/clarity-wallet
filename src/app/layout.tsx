import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clarity Wallet",
  description: "Clarity Wallet app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mx-auto max-w-md">{children}</body>
    </html>
  );
}
