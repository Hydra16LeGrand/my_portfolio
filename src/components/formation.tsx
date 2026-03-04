"use client";

import { motion } from "framer-motion";
import {
    Award,
    GraduationCap,
    BookOpen,
    Download,
    FileText,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const formations = [
    {
        title: "Certifié Odoo 19 Functional",
        institution: "Odoo S.A.",
        date: "Février 2026",
        icon: Award,
        color: "from-blue-500 to-cyan-400",
        type: "Certification",
        pdf: "/certifications/certif-odoo.pdf",
    },
    {
        title: "Master en Calcul Haute Performance et IA",
        institution: "En cours",
        date: "En cours",
        icon: GraduationCap,
        color: "from-purple-500 to-pink-500",
        type: "Diplôme",
        pdf: null,
    },
    {
        title: "Licence MIAGE",
        institution: "Université",
        date: "Obtenue",
        icon: BookOpen,
        color: "from-emerald-500 to-teal-400",
        type: "Diplôme",
        pdf: null,
    },
];

const certifications = [
    {
        title: "Base du HPC",
        pdf: "/certifications/certif-hpc.pdf",
    },
    {
        title: "Innovation avec l'IA",
        pdf: "/certifications/certif-innovation-ia.pdf",
    },
    {
        title: "Data Engineering",
        pdf: "/certifications/certif-data-engineering.pdf",
    },
    {
        title: "Prompt Engineering Avancé",
        pdf: "/certifications/certif-prompt-engineering.pdf",
    },
    {
        title: "AI Agents & Future of Work",
        pdf: "/certifications/certif-ai-agents.pdf",
    },
];

export default function Formation() {
    return (
        <section id="formation" className="relative px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
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
                    className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {formations.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={scaleIn}
                            className="glow-border group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
                        >
                            {/* Gradient accent */}
                            <div
                                className={`absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                            />

                            <div className="relative z-10">
                                {/* Badge */}
                                <span className="mb-4 inline-flex rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                                    {item.type}
                                </span>

                                {/* Icon */}
                                <div
                                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-2.5 text-white shadow-lg`}
                                >
                                    <item.icon className="size-5" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-1 text-base font-semibold leading-snug">
                                    {item.title}
                                </h3>
                                <p className="mb-1 text-sm text-muted-foreground">
                                    {item.institution}
                                </p>
                                <p className="mb-3 text-xs text-muted-foreground/70">
                                    {item.date}
                                </p>

                                {/* Download link */}
                                {item.pdf && (
                                    <a
                                        href={item.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
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
                            Formations continues en IA, Data et HPC
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
                                className="group inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-4 py-2.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:text-foreground"
                            >
                                <FileText className="size-4 text-primary/60 transition-colors group-hover:text-primary" />
                                {cert.title}
                                <Download className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
