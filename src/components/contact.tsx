"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulation d'envoi
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="relative px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/3 size-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
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
                        Me contacter
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mb-10 max-w-lg text-muted-foreground"
                    >
                        Une question sur Odoo, un projet d&apos;automatisation ou juste envie d&apos;échanger ?
                        Je réponds sous 24h.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
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

                    {/* Formulaire */}
                    <motion.form
                        variants={fadeInUp}
                        onSubmit={handleSubmit}
                        className="glow-border rounded-2xl border border-border/50 bg-card/50 p-6 text-left backdrop-blur-sm sm:p-8"
                    >
                        <div className="mb-6 grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="mb-2 block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={4}
                                className="w-full resize-none rounded-lg border border-border/50 bg-background/50 px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="Décrivez votre projet ou votre question..."
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    "Envoi..."
                                ) : (
                                    <>
                                        <Send className="mr-2 size-4" />
                                        Envoyer
                                    </>
                                )}
                            </Button>
                            {submitted && (
                                <span className="text-sm text-emerald-500">
                                    Message envoyé !
                                </span>
                            )}
                        </div>
                    </motion.form>

                    {/* Decorative element */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground/50"
                    >
                        <Send className="size-3" />
                        <span>Réponse sous 24h</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
