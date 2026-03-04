"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Bot, Cog } from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/motion";

const experiences = [
    {
        role: "Senior Tech Lead",
        period: "Actuel",
        icon: Users,
        color: "from-blue-500 to-cyan-400",
        description:
            "Coordination de 7 équipes agiles, garant de la qualité du code et de l'architecture technique. Mise en place de standards de développement et de revues de code systématiques.",
        highlights: [
            "Coordination de 7 équipes agiles",
            "Architecture technique & qualité du code",
            "Standards de développement",
        ],
    },
    {
        role: "Architecte Solution IA",
        period: "Précédent",
        icon: Bot,
        color: "from-purple-500 to-pink-500",
        description:
            "Automatisation des workflows métiers via LLM, vision par ordinateur et déploiement de modèles en haute performance. Conception d'architectures d'inférence optimisées.",
        highlights: [
            "Automatisation via LLM",
            "Vision par ordinateur",
            "Déploiement haute performance",
        ],
    },
    {
        role: "Expert Technique ERP",
        period: "Précédent",
        icon: Cog,
        color: "from-emerald-500 to-teal-400",
        description:
            "Migration technique complète pour des acteurs majeurs du secteur industriel et optimisation de bases de données critiques. Expertise Odoo end-to-end.",
        highlights: [
            "Migrations techniques complètes",
            "Secteur industriel majeur",
            "Optimisation BDD critiques",
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
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2 md:block" />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-12"
                    >
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.role}
                                variants={slideInLeft}
                                className={`relative flex flex-col gap-6 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 hidden md:left-1/2 md:block">
                                    <div className="relative -translate-x-1/2">
                                        <div
                                            className={`size-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}
                                        />
                                        <div
                                            className={`absolute inset-0 size-4 animate-ping rounded-full bg-gradient-to-br ${exp.color} opacity-20`}
                                        />
                                    </div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-4" : "md:pl-4"
                                        }`}
                                >
                                    <div className="glow-border group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-card/80">
                                        {/* Header */}
                                        <div className="mb-4 flex items-start gap-4">
                                            <div
                                                className={`rounded-xl bg-gradient-to-br ${exp.color} p-2.5 text-white shadow-lg`}
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

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.highlights.map((h) => (
                                                <span
                                                    key={h}
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                                                >
                                                    <Briefcase className="size-3" />
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
