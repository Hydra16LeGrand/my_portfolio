"use client";

import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border/50 px-6 py-6">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Amara Baradji
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="mailto:baradjiamara17@gmail.com"
                        className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                        aria-label="Email"
                    >
                        <Mail className="size-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amara-baradji/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="size-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
