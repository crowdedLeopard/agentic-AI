import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Use alias
import Footer from "@/components/Footer"; // Use alias

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Agent Insights Blog",
  description: "Exploring the world of AI agents and agentic systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12"> {/* Added vertical padding */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
