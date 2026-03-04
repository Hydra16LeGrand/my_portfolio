import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amara Baradji — Architecte Odoo & Expert IA",
  description:
    "Portfolio professionnel d'Amara Baradji. Architecte Expert Odoo, spécialiste IA, Tech Lead senior. Conception d'écosystèmes ERP intelligents et d'infrastructures d'IA haute performance.",
  keywords: [
    "Odoo",
    "ERP",
    "IA",
    "Intelligence Artificielle",
    "Python",
    "Tech Lead",
    "Architecture Logicielle",
    "LLM",
    "RAG",
  ],
  authors: [{ name: "Amara Baradji" }],
  openGraph: {
    title: "Amara Baradji — Architecte Odoo & Expert IA",
    description:
      "Conception d'écosystèmes ERP intelligents et d'infrastructures d'IA haute performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} overflow-x-hidden font-sans antialiased noise`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
              {children}
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
