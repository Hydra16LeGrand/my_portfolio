"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
    return (
        <section id="contact" className="relative px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/3 size-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p
                        variants={fadeInUp}
                        className="mb-3 text-sm font-medium uppercase tracking-widest text-primary"
                    >
                        Contact
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Travaillons ensemble
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mb-10 max-w-lg text-muted-foreground"
                    >
                        Vous avez un projet ERP complexe ou une ambition IA ? Discutons de
                        comment je peux contribuer à votre vision.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="group rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                        >
                            <a href="mailto:baradjiamara17@gmail.com">
                                <Mail className="mr-2 size-4" />
                                Email
                                <ArrowUpRight className="ml-1 size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            className="group rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-8 text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/30"
                        >
                            <a
                                href="https://wa.me/2250556748529"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="mr-2 size-4" />
                                WhatsApp
                                <ArrowUpRight className="ml-1 size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="group rounded-full border-border/60 px-8 backdrop-blur-sm"
                        >
                            <a
                                href="https://www.linkedin.com/in/amara-baradji/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="mr-2 size-4" />
                                LinkedIn
                                <ArrowUpRight className="ml-1 size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </Button>
                    </motion.div>

                    {/* Decorative element */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground/50"
                    >
                        <Send className="size-3" />
                        <span>Réponse sous 24h</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
