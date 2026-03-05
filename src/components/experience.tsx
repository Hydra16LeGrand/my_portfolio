"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Bot, Cog, Code2, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const experiences = [
    {
        role: "Principal Tech Lead",
        company: "Abidjan, Côte d'Ivoire",
        period: "Oct 2025 — Fév 2026",
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
        period: "Mai 2024 — Oct 2025",
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
        period: "Jan 2023 — Mai 2024",
        icon: Cog,
        color: "from-emerald-500 to-teal-400",
        description:
            "Développement et paramétrage avancé des modules Odoo critiques : MRP, Ventes, Achats et Stock. Résolution de problématiques de performance sur des bases PostgreSQL à fort volume dans le cadre de grands projets industriels multi-sites.",
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
        period: "Juin 2022 — Jan 2023",
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
        period: "Avant 2022",
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
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Decorative shapes */}
            {/* Briefcase */}
            <svg className="deco deco-float-1 right-[5%] top-[10%] size-9 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
            {/* Upward arrow */}
            <svg className="deco deco-float-2 left-[4%] bottom-[25%] size-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
            {/* Star */}
            <svg className="deco deco-float-3 right-[8%] bottom-[40%] size-7 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01z" /></svg>

            <div className="relative mx-auto max-w-4xl">
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
                        5+ ans de progression — de développeur backend à Tech Lead, en passant par l&apos;intégration IA.
                    </motion.p>
                </motion.div>

                {/* Journey cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                >
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 hidden h-full w-px sm:block">
                        <motion.div
                            className="h-full w-full bg-gradient-to-b from-primary/40 via-purple-500/30 to-transparent"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{ transformOrigin: "top" }}
                        />
                    </div>

                    <div className="space-y-4">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={`${exp.role}-${exp.period}`}
                                variants={fadeInUp}
                                className="group relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-8 z-10 hidden -translate-x-1/2 sm:block">
                                    <div className={`size-3 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ring-4 ring-background transition-all duration-300 group-hover:scale-125 group-hover:ring-2`} />
                                </div>

                                {/* Card */}
                                <div className="rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 hover:bg-card/80 sm:ml-14 sm:p-6">
                                    {/* Top row: period badge + role */}
                                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                                        {/* Period badge */}
                                        <span className={`inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r ${exp.color} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
                                            {exp.period}
                                        </span>

                                        <div className="min-w-0">
                                            {/* Role */}
                                            <div className="flex items-center gap-2.5">
                                                <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${exp.color} bg-opacity-10`}>
                                                    <exp.icon className="size-4 text-white" />
                                                </div>
                                                <h3 className="text-base font-bold leading-tight sm:text-lg">
                                                    {exp.role}
                                                </h3>
                                            </div>
                                            <p className="mt-1.5 text-xs text-muted-foreground/60">
                                                📍 {exp.company}
                                            </p>
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
                                                className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                <Briefcase className="size-3 shrink-0" />
                                                {h}
                                            </span>
                                        ))}
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
