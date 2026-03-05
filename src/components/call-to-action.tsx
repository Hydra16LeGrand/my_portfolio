"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/magnetic-button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function CallToAction() {
    const scrollTo = (target: string) => {
        const lenis = (window as unknown as Record<string, unknown>).__lenis as { scrollTo?: (t: string, o?: Record<string, unknown>) => void } | undefined;
        if (lenis?.scrollTo) {
            lenis.scrollTo(target, { offset: -80 });
        } else {
            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="pattern-circuit relative px-6 py-16 sm:py-20">
            <div className="relative mx-auto max-w-4xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm sm:p-12"
                >
                    {/* Background gradient */}
                    <div className="absolute -left-20 -top-20 size-60 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative">
                        <motion.p
                            variants={fadeInUp}
                            className="mb-3 text-sm font-medium uppercase tracking-widest text-primary"
                        >
                            Intéressé ?
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl"
                        >
                            Vous avez un projet similaire ?
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="mx-auto mb-8 max-w-lg text-muted-foreground"
                        >
                            Que ce soit un déploiement ERP, une intégration IA ou un SaaS sur mesure — discutons de comment je peux vous aider.
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <MagneticButton className="w-full sm:w-auto" intensity={0.15}>
                                <Button
                                    size="lg"
                                    asChild
                                    className="w-full group rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                                >
                                    <a
                                        href="https://wa.me/2250556748529"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="mr-2 size-4" />
                                        Discutons sur WhatsApp
                                        <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </MagneticButton>
                            <MagneticButton className="w-full sm:w-auto" intensity={0.15}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full rounded-full border-border/60 px-8 backdrop-blur-sm"
                                    onClick={() => scrollTo("#contact")}
                                >
                                    Voir mes coordonnées
                                    <ArrowRight className="ml-1 size-3" />
                                </Button>
                            </MagneticButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
