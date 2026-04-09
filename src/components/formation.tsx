"use client";

import { motion } from "framer-motion";
import {
    Award,
    GraduationCap,
    BookOpen,
    Download,
    FileText,
    ExternalLink,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const formations = [
    {
        title: "Certifié Odoo 19 Functional",
        institution: "Odoo S.A. — N°0001035425",
        date: "Février 2026",
        icon: Award,
        color: "from-blue-500 to-cyan-400",
        glowColor: "group-hover:shadow-blue-500/20",
        type: "Certification",
        pdf: "/certifications/certif-odoo.pdf",
    },
    {
        title: "Master HPC \u0026 IA",
        institution: "Université Virtuelle de Côte d'Ivoire",
        date: "En cours",
        icon: GraduationCap,
        color: "from-purple-500 to-pink-500",
        glowColor: "group-hover:shadow-purple-500/20",
        type: "Diplôme",
        pdf: null,
    },
    {
        title: "Licence MIAGE",
        institution: "Université Polytechnique de Bingerville",
        date: "2021",
        icon: BookOpen,
        color: "from-emerald-500 to-teal-400",
        glowColor: "group-hover:shadow-emerald-500/20",
        type: "Diplôme",
        pdf: null,
    },
];

const certifications = [
    {
        title: "Model Context Protocol (MCP)",
        institution: "Anthropic",
        color: "from-orange-400 to-amber-500",
        pdf: "/certifications/certificate-MCP.pdf",
    },
    {
        title: "Bases du Calcul Haute Performance",
        institution: "UVCI · CNCCI · DATA354",
        color: "from-cyan-400 to-blue-500",
        pdf: "/certifications/certif-hpc.pdf",
    },
    {
        title: "Data Engineering Foundations",
        institution: "LinkedIn Learning",
        color: "from-emerald-400 to-teal-500",
        pdf: "/certifications/certif-data-engineering.pdf",
    },
    {
        title: "AI Agents \u0026 Future of Work",
        institution: "LinkedIn Learning",
        color: "from-violet-400 to-purple-500",
        pdf: "/certifications/certif-ai-agents.pdf",
    },
];

export default function Formation() {
    return (
        <section id="formation" className="relative px-6 pt-24 pb-8 sm:pt-32 sm:pb-12">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-1/4 size-96 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 size-80 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl">
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
                        Parcours académique
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Formation & Certifications
                    </motion.h2>
                </motion.div>

                {/* Main formations */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-12 grid gap-4 sm:grid-cols-3"
                >
                    {formations.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={scaleIn}
                            className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/90 to-card/50 p-6 shadow-xl shadow-black/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl ${item.glowColor}`}
                        >
                            {/* Gradient accent */}
                            <div
                                className={`absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                            />

                            {/* Top gradient bar */}
                            <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${item.color} opacity-60`} />

                            <div className="relative z-10">
                                {/* Badge */}
                                <span className={`mb-4 inline-flex rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium transition-colors group-hover:border-primary/20 group-hover:bg-primary/5`}>
                                    {item.type}
                                </span>

                                {/* Icon with colored background */}
                                <div
                                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                                >
                                    <item.icon className="size-6" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 text-lg font-semibold leading-snug">
                                    {item.title}
                                </h3>
                                <p className="mb-1 text-sm text-muted-foreground">
                                    {item.institution}
                                </p>
                                <p className="mb-4 text-xs text-muted-foreground/70">
                                    {item.date}
                                </p>

                                {/* Download link - enhanced style */}
                                {item.pdf && (
                                    <a
                                        href={item.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-2 text-xs font-medium text-primary transition-all duration-200 hover:from-primary hover:to-purple-600 hover:text-white"
                                    >
                                        <Download className="size-3" />
                                        Voir le certificat
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional certifications */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div variants={fadeInUp} className="mb-6 text-center">
                        <h3 className="text-lg font-semibold">
                            Certifications complémentaires
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Certifications LinkedIn Learning et formations continues
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {certifications.map((cert) => (
                            <a
                                key={cert.title}
                                href={cert.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-border/50 bg-card/60 px-4 py-3 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/90 hover:text-foreground hover:shadow-lg hover:shadow-primary/10"
                            >
                                {/* Subtle gradient bar on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />

                                <FileText className="relative size-5 text-primary/70 transition-colors group-hover:text-primary" />
                                <span className="relative flex flex-col">
                                    <span className="font-medium">{cert.title}</span>
                                    <span className="text-xs text-muted-foreground/70">{cert.institution}</span>
                                </span>
                                <ExternalLink className="relative size-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
