"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
    const scrollTo = (target: string) => {
        const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo?: (t: string, o?: Record<string, unknown>) => void } | undefined;
        if (lenis?.scrollTo) {
            lenis.scrollTo(target, { offset: -80 });
        } else {
            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
            {/* Mesh gradient background */}
            <div className="mesh-gradient pointer-events-none absolute inset-0" />

            {/* Animated orbs */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -25, 15, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/4 top-1/4 size-96 rounded-full bg-primary/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 20, 0],
                        y: [0, 20, -30, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 size-80 rounded-full bg-purple-500/10 blur-3xl"
                />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-4xl text-center"
            >
                {/* Avatar photo */}
                <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
                    <div className="relative">
                        {/* Gradient ring */}
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-purple-500 to-blue-500 opacity-75 blur-sm" />
                        <div className="relative size-32 overflow-hidden rounded-full border-2 border-background/50 sm:size-36">
                            <Image
                                src="/images/amara-baradji.jpg"
                                alt="Amara Baradji"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        {/* Online status dot */}
                        <div className="absolute bottom-2 right-2 size-4 rounded-full border-2 border-background bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                    </div>
                </motion.div>

                {/* Badge */}
                <motion.div
                    variants={fadeInUp}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm"
                >
                    <CircuitBoard className="size-4 text-primary" />
                    <span>Senior Tech Lead • Architecte Solution</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={fadeInUp}
                    className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    <span className="text-white dark:text-white">Amara Baradji</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                        Expert technico-fonctionnel ERP Odoo
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        Architecte IA et Data
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    Je conçois des écosystèmes ERP intelligents et des infrastructures
                    d&apos;IA haute performance.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <Button
                        size="lg"
                        onClick={() => scrollTo("#projects")}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Découvrir mes projets
                            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                        </span>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => scrollTo("#contact")}
                        className="rounded-full border-border/60 px-8 backdrop-blur-sm"
                    >
                        Me contacter
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div variants={fadeInUp} className="mt-12">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mx-auto flex size-10 items-center justify-center rounded-full border border-border/40"
                    >
                        <ArrowDown className="size-4 text-muted-foreground" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
