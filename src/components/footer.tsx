"use client";

import { Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border/50 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span>© {new Date().getFullYear()} Amara Baradji. Fait avec</span>
                    <Heart className="size-3 fill-primary text-primary" />
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="mailto:amara.baradji@outlook.com"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="Email"
                    >
                        <Mail className="size-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amara-baradji/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="size-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
