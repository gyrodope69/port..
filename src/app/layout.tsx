// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Mohan Roy | AI Engineer & Agentic Systems Developer",
  description:
    "Portfolio of Rohit Mohan Roy – AI/ML engineer building production-ready AI agents, RAG systems, and automation backends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
