"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/magnetic-button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Open mailto with pre-filled data
        const subject = encodeURIComponent(`Contact Portfolio — ${formData.name}`);
        const body = encodeURIComponent(
            `Bonjour Amara,\n\n${formData.message}\n\n— ${formData.name}\n${formData.email}`
        );
        window.open(`mailto:baradjiamara17@gmail.com?subject=${subject}&body=${body}`, "_blank");

        setTimeout(() => {
            setStatus("sent");
            setTimeout(() => setStatus("idle"), 3000);
        }, 500);
    };

    return (
        <section id="contact" className="relative px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/3 size-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-5xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 text-center"
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
                        className="mx-auto max-w-lg text-muted-foreground"
                    >
                        Vous avez un projet ERP complexe ou une ambition IA ? Discutons de
                        comment je peux contribuer à votre vision.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-8 lg:grid-cols-[1fr_1.2fr]"
                >
                    {/* Left — Quick contact */}
                    <motion.div variants={fadeInUp} className="space-y-6">
                        <div>
                            <h3 className="mb-4 text-lg font-semibold">Contact direct</h3>
                            <p className="mb-6 text-sm text-muted-foreground">
                                N&apos;hésitez pas à me contacter directement par le canal qui vous convient le mieux.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <MagneticButton className="w-full" intensity={0.15}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full group justify-start rounded-xl bg-gradient-to-r from-primary to-purple-600 px-6 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                                >
                                    <a href="mailto:baradjiamara17@gmail.com">
                                        <Mail className="mr-3 size-4" />
                                        baradjiamara17@gmail.com
                                        <ArrowUpRight className="ml-auto size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </Button>
                            </MagneticButton>

                            <MagneticButton className="w-full" intensity={0.15}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full group justify-start rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/30"
                                >
                                    <a
                                        href="https://wa.me/2250556748529"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="mr-3 size-4" />
                                        WhatsApp
                                        <ArrowUpRight className="ml-auto size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </Button>
                            </MagneticButton>

                            <MagneticButton className="w-full" intensity={0.15}>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="w-full group justify-start rounded-xl border-border/60 px-6 backdrop-blur-sm"
                                >
                                    <a
                                        href="https://www.linkedin.com/in/amara-baradji/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="mr-3 size-4 text-[#0A66C2]" />
                                        LinkedIn
                                        <ArrowUpRight className="ml-auto size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                </Button>
                            </MagneticButton>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground/50">
                            <Send className="size-3" />
                            <span>Réponse sous 24h</span>
                        </div>
                    </motion.div>

                    {/* Right — Contact form */}
                    <motion.div variants={fadeInUp}>
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm sm:p-8"
                        >
                            <h3 className="mb-6 text-lg font-semibold">Envoyez-moi un message</h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                                        Nom complet
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Votre nom"
                                        className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="votre@email.com"
                                        className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Décrivez votre projet ou votre besoin..."
                                        className="w-full resize-none rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={status === "sending"}
                                className="mt-6 w-full rounded-xl bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                            >
                                {status === "idle" && (
                                    <>
                                        <Send className="mr-2 size-4" />
                                        Envoyer le message
                                    </>
                                )}
                                {status === "sending" && (
                                    <>
                                        <Loader2 className="mr-2 size-4 animate-spin" />
                                        Envoi...
                                    </>
                                )}
                                {status === "sent" && (
                                    <>
                                        <CheckCircle2 className="mr-2 size-4" />
                                        Client mail ouvert !
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
