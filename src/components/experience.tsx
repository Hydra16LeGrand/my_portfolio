"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Bot, Workflow, Cog, Code, Globe } from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/motion";

const experiences = [
    {
        role: "Consultant Indépendant — Odoo & Automatisation",
        period: "Fév. 2026 – Présent",
        icon: Globe,
        color: "from-blue-500 to-cyan-400",
        glowColor: "shadow-blue-500/30",
        description:
            "Depuis mon départ de Progistack, j'interviens en indépendant sur des missions Odoo et automatisation. Je travaille directement avec les équipes techniques et métier, sans intermédiaire.",
        tags: ["Odoo", "Python", "N8N", "Automatisation", "IA"],
    },
    {
        role: "Head of Engineering",
        period: "Oct. 2025 – Fév. 2026 · 5 mois",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        glowColor: "shadow-purple-500/30",
        description:
            "Responsable du département technique de Progistack. J'encadrais 7 Team Leads, définissais les standards de code et d'architecture, et m'assurais que les livrables étaient à la hauteur. J'ai aussi piloté l'intégration de l'IA dans les solutions internes et clients.",
        tags: ["Leadership", "Architecture", "Odoo", "IA", "CI/CD", "Code Review"],
    },
    {
        role: "Data Engineer & AI Engineer",
        period: "Avr. 2025 – Fév. 2026 · 11 mois",
        icon: Bot,
        color: "from-violet-500 to-purple-600",
        glowColor: "shadow-violet-500/30",
        description:
            "Mise en place de pipelines ETL, déploiement de solutions d'automatisation et intégration de modèles IA dans les workflows clients. J'ai également géré l'équipe IA de Progistack (Data Scientists et AI Engineers) et défini la stratégie d'utilisation de l'IA dans les projets.",
        tags: ["Python", "ETL", "LLM", "vLLM", "LiteLLM", "Docker", "Azure AI"],
    },
    {
        role: "Chef d'Équipe — Développement Odoo",
        period: "Mai 2023 – Oct. 2025 · 2 ans 6 mois",
        icon: Workflow,
        color: "from-emerald-500 to-teal-400",
        glowColor: "shadow-emerald-500/30",
        description:
            "Management d'une équipe de 6 développeurs sur des projets Odoo. Animation des sprints Scrum, revue de code, déploiement CI/CD, et gestion de la relation technique avec les clients. J'ai aussi mis en place l'infrastructure Odoo.sh pour plusieurs projets clients.",
        tags: ["Odoo", "Scrum", "CI/CD", "Odoo.sh", "Python", "PostgreSQL"],
    },
    {
        role: "Expert Technique ERP — Odoo",
        period: "Jan. 2023 – Mai 2024",
        icon: Cog,
        color: "from-amber-500 to-orange-500",
        glowColor: "shadow-amber-500/30",
        description:
            "Développement avancé sur les modules MRP, Ventes, Achats et Stock. Résolution de problèmes de performance sur des bases PostgreSQL volumineuses pour des projets industriels multi-sites.",
        tags: ["Odoo", "MRP", "PostgreSQL", "Python", "Performance"],
    },
    {
        role: "Développeur Odoo Backend",
        period: "Juin 2022 – Jan. 2023",
        icon: Code,
        color: "from-rose-500 to-pink-500",
        glowColor: "shadow-rose-500/30",
        description:
            "Premiers projets Odoo : développement Python/XML, écriture de tests unitaires, ETL et maintenance de modules customisés. C'est ici que j'ai appris les fondamentaux de l'ORM Odoo et de PostgreSQL.",
        tags: ["Python", "XML", "PostgreSQL", "Tests unitaires", "ETL"],
    },
    {
        role: "Développeur Web — Freelance",
        period: "Nov. 2021 – Avr. 2022",
        icon: Briefcase,
        color: "from-indigo-500 to-blue-500",
        glowColor: "shadow-indigo-500/30",
        description:
            "Développement de sites e-commerce et applications web pour des clients locaux. Stack : Django, Flask, Firebase, HTML/CSS/JS, DigitalOcean.",
        tags: ["Django", "Firebase", "HTML/CSS", "DigitalOcean"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative px-6 py-24 sm:py-32">
            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-1/4 left-0 size-80 rounded-full bg-purple-500/5 blur-3xl" />
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
                        Parcours
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Expériences
                    </motion.h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line with glow */}
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:block" />
                    <div className="absolute left-0 top-0 hidden h-full w-px md:left-1/2 md:block">
                        <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-sm" />
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-10"
                    >
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role}
                                variants={slideInLeft}
                                className={`relative flex flex-col gap-6 md:flex-row ${
                                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline dot with enhanced glow */}
                                <div className="absolute left-0 top-0 hidden md:left-1/2 md:block">
                                    <div className="relative -translate-x-1/2">
                                        {/* Outer glow ring */}
                                        <div
                                            className={`absolute -inset-2 rounded-full bg-gradient-to-br ${exp.color} opacity-20 blur-md`}
                                        />
                                        {/* Inner dot */}
                                        <div
                                            className={`relative size-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg ${exp.glowColor}`}
                                        />
                                        {/* Pulsing effect */}
                                        <div
                                            className={`absolute inset-0 size-4 animate-ping rounded-full bg-gradient-to-br ${exp.color} opacity-40`}
                                        />
                                    </div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`w-full md:w-[calc(50%-2rem)] ${
                                        i % 2 === 0 ? "md:pr-6" : "md:pl-6"
                                    }`}
                                >
                                    <div className={`group rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-xl shadow-black/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:${exp.glowColor}`}>
                                        {/* Header */}
                                        <div className="mb-4 flex items-start gap-4">
                                            <div
                                                className={`rounded-xl bg-gradient-to-br ${exp.color} p-3 text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105`}
                                            >
                                                <exp.icon className="size-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold">{exp.role}</h3>
                                                <span className="text-sm text-muted-foreground">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                            {exp.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center rounded-full border border-border/50 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-background"
                                                >
                                                    {tag}
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
