import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";  // ✅ case-sensitive & clean

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A sample project with Navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
