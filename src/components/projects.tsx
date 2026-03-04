"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Globe, Server, Gauge } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const projects = [
    {
        title: "Infrastructure d'Inférence Adaptative",
        category: "IA Générative • Infrastructure",
        description:
            "Optimisation dynamique des coûts et de la latence pour les modèles d'IA générative. Système d'allocation intelligente de ressources GPU en temps réel.",
        techDetails: [
            "Auto-scaling GPU basé sur la charge",
            "Routage intelligent des requêtes d'inférence",
            "Réduction de 40% des coûts d'infrastructure",
            "Latence faible en production",
        ],
        techs: ["VLLM", "Runpod", "Docker", "Python", "FastAPI"],
        icon: Zap,
        color: "from-amber-500 to-orange-500",
        gradient: "from-amber-500/10 to-orange-500/10",
    },
    {
        title: "Adaptation de LLM aux Dialectes Locaux",
        category: "NLP • Fine-tuning",
        description:
            "Fine-tuning de Llama 3 pour la compréhension d'une langue locale avec optimisation pour faible latence. Modèle adapté aux contextes linguistiques spécifiques.",
        techDetails: [
            "Fine-tuning LoRA/QLoRA sur Llama 3",
            "Dataset curé de dialectes locaux",
            "Optimisation quantification INT4/INT8",
        ],
        techs: ["Llama 3", "LoRA", "HuggingFace", "Fine-tuning"],
        icon: Globe,
        color: "from-violet-500 to-purple-600",
        gradient: "from-violet-500/10 to-purple-600/10",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 size-80 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
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
                        R&D
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Projets
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={scaleIn}
                            className="group relative"
                        >
                            <div className="glow-border relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/80">
                                {/* Top gradient bar */}
                                <div
                                    className={`h-1 w-full bg-gradient-to-r ${project.color}`}
                                />

                                <div className="p-6">
                                    {/* Header */}
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`rounded-xl bg-gradient-to-br ${project.color} p-2.5 text-white shadow-lg`}
                                            >
                                                <project.icon className="size-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold leading-snug">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs text-muted-foreground">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    {/* Technical details — always visible on mobile, hover on desktop */}
                                    <div className="mb-5 max-h-48 overflow-hidden transition-all duration-500 md:max-h-0 md:group-hover:max-h-48">
                                        <div className="rounded-xl border border-border/30 bg-background/50 p-4">
                                            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
                                                <Server className="size-3" />
                                                Détails techniques
                                            </div>
                                            <ul className="space-y-1.5">
                                                {project.techDetails.map((detail) => (
                                                    <li
                                                        key={detail}
                                                        className="flex items-start gap-2 text-xs text-muted-foreground"
                                                    >
                                                        <Gauge className="mt-0.5 size-3 shrink-0 text-primary/60" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-border/50 bg-background/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover hint — desktop only */}
                                <div className="hidden items-center justify-center gap-2 border-t border-border/30 px-6 py-3 text-xs text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100 md:flex">
                                    <ExternalLink className="size-3" />
                                    Survoler pour les détails techniques
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
