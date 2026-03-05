"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Briefcase, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/magnetic-button";
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

                {/* Badge disponibilité */}
                <motion.div
                    variants={fadeInUp}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-400 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                    <span className="relative flex size-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span>Disponible immédiatement &bull; Portage salarial</span>
                    <Briefcase className="size-3.5 shrink-0 sm:size-4" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={fadeInUp}
                    className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    <span className="text-white dark:text-white">Amara Baradji</span>
                    <br />
                    <span className="text-shimmer">
                        Consultant ERP Odoo &amp; IA
                    </span>
                    <br />
                    <span className="text-shimmer">
                        SaaS &bull; Automatisation &bull; Data
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    5+ ans d&apos;expérience en déploiement ERP Odoo, intégration IA et création de SaaS. Disponible immédiatement en portage salarial pour vos missions techniques ou fonctionnelles.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeInUp}
                    className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
                >
                    <MagneticButton className="w-full sm:w-auto" intensity={0.15}>
                        <Button
                            size="lg"
                            asChild
                            className="w-full group relative overflow-hidden rounded-full bg-gradient-to-r from-[#0A66C2] to-blue-500 px-6 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 sm:px-8"
                        >
                            <a
                                href="https://www.linkedin.com/in/amara-baradji"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                                <Linkedin className="size-4" />
                                Voir mon profil LinkedIn
                            </a>
                        </Button>
                    </MagneticButton>
                    <MagneticButton className="w-full sm:w-auto" intensity={0.15}>
                        <Button
                            size="lg"
                            asChild
                            variant="outline"
                            className="w-full rounded-full border-emerald-500/40 bg-emerald-500/10 px-6 text-emerald-400 backdrop-blur-sm hover:bg-emerald-500/20 hover:text-emerald-300 sm:px-8"
                        >
                            <a
                                href="https://wa.me/2250556748529"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="size-4" />
                                Me contacter sur WhatsApp
                            </a>
                        </Button>
                    </MagneticButton>
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
