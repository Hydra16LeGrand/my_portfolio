"use client";

import { motion } from "framer-motion";
import {
    Database,
    Brain,
    Container,
    Server,
    Cpu,
    GitBranch,
    Layers,
    Workflow,
    HardDrive,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const expertiseData = [
    {
        title: "ERP & Backend",
        description:
            "Architecture et développement d'écosystèmes Odoo complexes avec optimisation des performances à grande échelle.",
        icon: Database,
        color: "from-blue-500 to-cyan-400",
        techs: [
            { name: "Odoo V15-V19", icon: Layers },
            { name: "Python", icon: Server },
            { name: "PostgreSQL Tuning", icon: HardDrive },
        ],
        span: "md:col-span-2 md:row-span-2",
    },
    {
        title: "IA Stack",
        description:
            "Déploiement et optimisation de modèles d'IA générative, du fine-tuning à l'inférence en production.",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        techs: [
            { name: "VLLM", icon: Cpu },
            { name: "Runpod", icon: Server },
            { name: "RAG Agents", icon: Workflow },
            { name: "Fine-tuning LLM", icon: GitBranch },
        ],
        span: "md:col-span-2",
    },
    {
        title: "Ops & Data",
        description:
            "Orchestration de pipelines de données et automatisation des déploiements pour des environnements critiques.",
        icon: Container,
        color: "from-emerald-500 to-teal-400",
        techs: [
            { name: "Docker", icon: Container },
            { name: "CI/CD", icon: GitBranch },
            { name: "Pipelines ETL", icon: Workflow },
        ],
        span: "md:col-span-2",
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="relative px-6 py-24 sm:py-32">
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
                        Stack Technique
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Expertise
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-4 md:grid-cols-4 md:grid-rows-2"
                >
                    {expertiseData.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={scaleIn}
                            className={`glow-border group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-card/80 ${item.span}`}
                        >
                            {/* Gradient accent */}
                            <div
                                className={`absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-2.5 text-white shadow-lg`}
                                >
                                    <item.icon className="size-5" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

                                {/* Description */}
                                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {item.techs.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <tech.icon className="size-3" />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
