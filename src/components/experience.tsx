"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Bot, Cog, Code2, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

const experiences = [
    {
        role: "Principal Tech Lead",
        company: "Abidjan, Côte d'Ivoire",
        location: "",
        period: "Oct 2025 — Fév 2026",
        type: "",
        icon: Users,
        color: "from-blue-500 to-cyan-400",
        description:
            "Pilotage technique et humain de projets Odoo et IA. Encadrement de développeurs juniors et seniors, mise en place des standards qualité, des processus de code review et des rituels agiles pour maintenir un haut niveau de livraison.",
        highlights: [
            "Encadrement technique d'équipes",
            "Mentoring développeurs",
            "Architecture Odoo & IA",
            "Code Review & CI/CD",
        ],
    },
    {
        role: "Responsable Intégration IA & Odoo",
        company: "Abidjan, Côte d'Ivoire",
        location: "",
        period: "Mai 2024 — Oct 2025",
        type: "",
        icon: Bot,
        color: "from-purple-500 to-pink-500",
        description:
            "Conception et développement de modules connectant Odoo à des services d'intelligence artificielle. Déploiement de modèles IA pour l'inférence haute performance et automatisation des workflows métiers.",
        highlights: [
            "Fonctionnalités Odoo optimisées par l'IA",
            "Déploiement modèles IA",
            "Automatisation",
            "Inférence LLM haute performance",
        ],
    },
    {
        role: "Expert Technique ERP (Odoo)",
        company: "Abidjan, Côte d'Ivoire",
        location: "",
        period: "Jan 2023 — Mai 2024",
        type: "",
        icon: Cog,
        color: "from-emerald-500 to-teal-400",
        description:
            "Développement et paramétrage avancé des modules Odoo critiques : MRP, Ventes, Achats et Stock. Résolution de problématiques de performance sur des bases PostgreSQL à fort volume dans le cadre de grands projets industriels multi-sites.",
        highlights: [
            "Modules MRP, Ventes, Achats, Stock",
            "Optimisation PostgreSQL volumineuses",
            "Grands projets industriels",
            "Migration & déploiement technique",
        ],
    },
    {
        role: "Développeur Odoo Backend",
        company: "Abidjan, Côte d'Ivoire",
        location: "",
        period: "Juin 2022 — Jan 2023",
        type: "",
        icon: TrendingUp,
        color: "from-orange-500 to-amber-400",
        description:
            "Développement backend Python/PostgreSQL sur des projets Odoo, écriture de tests unitaires et maintenance de modules customisés. Première montée en compétence sur l'écosystème Odoo et les architectures ERP.",
        highlights: [
            "Développement Python / PostgreSQL",
            "Tests unitaires & intégration",
            "Maintenance modules Odoo",
            "Migration de modules customisés",
        ],
    },
    {
        role: "Développeur Web",
        company: "Expériences précédentes",
        location: "",
        period: "Avant 2022",
        type: "",
        icon: Code2,
        color: "from-slate-500 to-slate-400",
        description:
            "Conception et développement d'applications web full-stack. Socle technique qui a construit ma rigueur sur la qualité du code, les architectures applicatives et la relation client avant la spécialisation ERP.",
        highlights: [
            "Développement full-stack",
            "Architecture applicative",
            "Relation client & specs",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative px-6 py-24 sm:py-32">
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
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
                        Parcours professionnel
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Expériences
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground"
                    >
                        4+ ans de progression — de développeur backend à Tech Lead, en passant par l&apos;intégration IA.
                    </motion.p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line — desktop only */}
                    <motion.div
                        className="absolute left-[calc(50%-1px)] top-0 hidden h-full w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent md:block"
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-10"
                    >
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={`${exp.role}-${exp.period}`}
                                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                                className={`relative flex gap-6 md:gap-0 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                    }`}
                            >
                                {/* Timeline dot — desktop only */}
                                <div className="absolute left-1/2 top-6 z-10 hidden md:block">
                                    <div className="relative -translate-x-1/2">
                                        <div
                                            className={`size-3 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-background`}
                                        />
                                    </div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                        }`}
                                >
                                    <div className="glow-border group rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:bg-card/80 sm:p-6">
                                        {/* Header */}
                                        <div className="mb-4 flex items-start gap-4">
                                            <div
                                                className={`shrink-0 rounded-xl bg-gradient-to-br ${exp.color} p-2.5 text-white shadow-lg`}
                                            >
                                                <exp.icon className="size-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-base font-semibold leading-tight sm:text-lg">
                                                    {exp.role}
                                                </h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                                    <span className="text-sm font-medium text-muted-foreground">
                                                        {exp.company}
                                                    </span>
                                                    {exp.location && (
                                                        <>
                                                            <span className="text-muted-foreground/40">·</span>
                                                            <span className="text-xs text-muted-foreground">
                                                                {exp.location}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="mt-1 flex flex-wrap items-center gap-2">
                                                    <span className="text-xs text-muted-foreground">
                                                        {exp.period}
                                                    </span>
                                                    {exp.type && (
                                                        <span className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-2 py-0.5 text-xs text-muted-foreground">
                                                            {exp.type}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.highlights.map((h) => (
                                                <span
                                                    key={h}
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                                                >
                                                    <Briefcase className="size-3 shrink-0" />
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden w-[calc(50%-2rem)] md:block" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
