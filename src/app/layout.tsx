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
  metadataBase: new URL("https://amara-baradji.vercel.app"),
  title: "Amara Baradji — Consultant ERP Odoo & IA",
  description:
    "Consultant ERP Odoo & IA. 5+ ans d'expérience en déploiement ERP, intégration IA, création de SaaS et automatisation. Disponible en portage salarial.",
  keywords: [
    "Odoo",
    "ERP",
    "IA",
    "Intelligence Artificielle",
    "Python",
    "Tech Lead",
    "Consultant",
    "SaaS",
    "Portage salarial",
    "LLM",
    "RAG",
  ],
  authors: [{ name: "Amara Baradji" }],
  openGraph: {
    title: "Amara Baradji — Consultant ERP Odoo & IA",
    description:
      "5+ ans en déploiement ERP Odoo, intégration IA et création de SaaS. Disponible en portage salarial.",
    type: "website",
    siteName: "Amara Baradji Portfolio",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amara Baradji — Consultant ERP Odoo & IA",
    description:
      "5+ ans en déploiement ERP Odoo, intégration IA et création de SaaS.",
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
