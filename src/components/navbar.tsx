"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { label: "Expertise", href: "#expertise" },
    { label: "Expériences", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Formation", href: "#formation" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href: string) => {
        setMobileOpen(false);
        const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo?: (target: string, options?: Record<string, unknown>) => void } | undefined;
        if (lenis?.scrollTo) {
            lenis.scrollTo(href, { offset: -80 });
        } else {
            const el = document.querySelector(href);
            el?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass border-b border-border/50 shadow-lg shadow-black/5"
                : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo?: (target: number, options?: Record<string, unknown>) => void } | undefined;
                        if (lenis?.scrollTo) {
                            lenis.scrollTo(0);
                        } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    className="relative text-lg font-bold tracking-tight"
                >
                    <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                        AB
                    </span>
                    <span className="ml-1 text-foreground/80">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNav(link.href)}
                            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full"
                            aria-label="Changer le thème"
                        >
                            <AnimatePresence mode="wait">
                                {theme === "dark" ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Sun className="size-4" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Moon className="size-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    )}

                    {/* Mobile toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? (
                            <X className="size-4" />
                        ) : (
                            <Menu className="size-4" />
                        )}
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass border-b border-border/50 md:hidden"
                    >
                        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNav(link.href)}
                                    className="rounded-lg px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
