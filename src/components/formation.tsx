"use client";

import { motion } from "framer-motion";
import {
    Award,
    GraduationCap,
    BookOpen,
    Download,
    FileText,
    Cpu,
    BarChart2,
    Zap,
    Bot,
    Database,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import SpotlightCard from "@/components/spotlight-card";

const certifications = [
    {
        title: "Certifié Odoo 19 Functional",
        issuer: "Odoo S.A.",
        date: "Février 2026",
        icon: Award,
        color: "from-blue-500 to-cyan-400",
        pdf: "/certifications/certif-odoo.pdf",
    },
    {
        title: "Bases du Calcul Haute Performance",
        issuer: "Formation continue",
        date: null,
        icon: Cpu,
        color: "from-violet-500 to-purple-600",
        pdf: "/certifications/certif-hpc.pdf",
    },
    {
        title: "Innovation avec l'IA",
        issuer: "LinkedIn Learning",
        date: null,
        icon: Bot,
        color: "from-pink-500 to-rose-500",
        pdf: "/certifications/certif-innovation-ia.pdf",
    },
    {
        title: "Data Engineering Foundations",
        issuer: "LinkedIn Learning",
        date: null,
        icon: Database,
        color: "from-emerald-500 to-teal-400",
        pdf: "/certifications/certif-data-engineering.pdf",
    },
    {
        title: "Prompt Engineering Avancé",
        issuer: "Formation continue",
        date: null,
        icon: Zap,
        color: "from-amber-500 to-orange-500",
        pdf: "/certifications/certif-prompt-engineering.pdf",
    },
    {
        title: "AI Agents & Future of Work",
        issuer: "LinkedIn Learning",
        date: null,
        icon: BarChart2,
        color: "from-sky-500 to-blue-600",
        pdf: "/certifications/certif-ai-agents.pdf",
    },
];

const diplomes = [
    {
        title: "Master en Calcul Haute Performance et IA",
        institution: "Université Virtuelle de Côte d'Ivoire",
        icon: GraduationCap,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Licence Informatique et Gestion (MIAGE)",
        institution: "Univ. Polytechnique Bingerville",
        icon: BookOpen,
        color: "from-emerald-500 to-teal-400",
    },
];

export default function Formation() {
    return (
        <section id="formation" className="relative px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                {/* Decorative shapes */}
                {/* Graduation cap */}
                <svg className="deco deco-float-1 right-[5%] top-[8%] size-9 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10l-10-5L2 10l10 5 10-5zM6 12v5c0 2 3 3 6 3s6-1 6-3v-5" /></svg>
                {/* Book */}
                <svg className="deco deco-float-2 left-[4%] top-[30%] size-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                {/* Certificate/ribbon */}
                <svg className="deco deco-float-3 right-[8%] bottom-[15%] size-7 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
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

                {/* ── Certifications ── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16"
                >
                    <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3">
                        <Award className="size-5 text-primary" />
                        <h3 className="text-xl font-semibold">Certifications</h3>
                        <div className="h-px w-16 bg-border/50 sm:w-24" />
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.title}
                                variants={scaleIn}
                            >
                                <SpotlightCard
                                    className="glow-border group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
                                >
                                    {/* Gradient accent */}
                                    <div
                                        className={`absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br ${cert.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                                    />

                                    <div className="relative z-10 flex h-full flex-col">
                                        {/* Icon */}
                                        <div
                                            className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${cert.color} p-2.5 text-white shadow-lg`}
                                        >
                                            <cert.icon className="size-5" />
                                        </div>

                                        {/* Content */}
                                        <h4 className="mb-1 text-sm font-semibold leading-snug">
                                            {cert.title}
                                        </h4>
                                        <p className="mb-1 text-xs text-muted-foreground">
                                            {cert.issuer}
                                        </p>
                                        {cert.date && (
                                            <p className="mb-3 text-xs text-muted-foreground/60">
                                                {cert.date}
                                            </p>
                                        )}

                                        {/* Spacer */}
                                        <div className="mt-auto pt-3">
                                            <a
                                                href={cert.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                                            >
                                                <Download className="size-3" />
                                                Voir le certificat
                                            </a>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Diplômes ── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3">
                        <GraduationCap className="size-5 text-primary" />
                        <h3 className="text-xl font-semibold">Diplômes</h3>
                        <div className="h-px w-16 bg-border/50 sm:w-24" />
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {diplomes.map((diplome) => (
                            <motion.div
                                key={diplome.title}
                                variants={scaleIn}
                                className="glow-border group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
                            >
                                {/* Gradient accent */}
                                <div
                                    className={`absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br ${diplome.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                                />

                                <div className="relative z-10 flex items-start gap-4">
                                    <div
                                        className={`shrink-0 rounded-xl bg-gradient-to-br ${diplome.color} p-2.5 text-white shadow-lg`}
                                    >
                                        <diplome.icon className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold leading-snug">
                                            {diplome.title}
                                        </h4>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {diplome.institution}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
