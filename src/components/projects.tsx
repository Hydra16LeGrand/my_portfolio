"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Globe, Server, Gauge, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const projects = [
    {
        id: "inference",
        number: "01",
        title: "Infrastructure d'Inférence Adaptative",
        category: "IA Générative • Infrastructure",
        icon: Zap,
        color: "from-amber-500 to-orange-500",
        description:
            "Optimisation dynamique des coûts et de la latence pour les modèles d'IA générative. Système d'allocation intelligente de ressources GPU en temps réel.",
        techDetails: [
            "Auto-scaling GPU basé sur la charge",
            "Routage intelligent des requêtes d'inférence",
            "Réduction de 40% des coûts d'infrastructure",
            "Latence faible en production",
        ],
        techs: ["VLLM", "Runpod", "Docker", "Python", "FastAPI"],
    },
    {
        id: "llm-dialectes",
        number: "02",
        title: "Adaptation de LLM aux Dialectes Locaux",
        category: "NLP • Fine-tuning",
        icon: Globe,
        color: "from-violet-500 to-purple-600",
        description:
            "Fine-tuning de Llama 3 pour la compréhension d'une langue locale avec optimisation pour faible latence. Modèle adapté aux contextes linguistiques spécifiques.",
        techDetails: [
            "Fine-tuning LoRA/QLoRA sur Llama 3",
            "Dataset curé de dialectes locaux",
            "Optimisation quantification INT4/INT8",
        ],
        techs: ["Llama 3", "LoRA", "HuggingFace", "Fine-tuning"],
    },
    {
        id: "multi-agents",
        number: "03",
        title: "Système Multi-Agents IA Autonome",
        category: "Agents IA • Automatisation",
        icon: Server,
        color: "from-emerald-500 to-teal-500",
        description:
            "Architecture multi-agents où des IA spécialisées collaborent pour automatiser des workflows complexes : un agent analyse, un autre décide, un troisième exécute — le tout orchestré sans intervention humaine.",
        techDetails: [
            "Orchestration multi-agents avec N8N",
            "Agents spécialisés (recherche, analyse, rédaction)",
            "Mémoire conversationnelle et contextuelle long-terme",
            "Intégration avec outils métiers via API (CRM, Email, Slack)",
        ],
        techs: ["N8N", "Gemini", "Python", "FastAPI", "Docker"],
    },
    {
        id: "mlops",
        number: "04",
        title: "Déploiement de Modèles IA Personnalisés",
        category: "MLOps • Sur mesure client",
        icon: Gauge,
        color: "from-rose-500 to-pink-600",
        description:
            "Pipeline complet de déploiement de modèles IA fine-tunés selon les données et besoins spécifiques de chaque client — de l'entraînement à la mise en production avec monitoring continu.",
        techDetails: [
            "Fine-tuning sur données client confidentielles (on-premise)",
            "Pipeline MLOps automatisé : entraînement → évaluation → déploiement",
            "Monitoring de drift et retraining automatique",
            "API de prédiction dédiée par client avec isolation des données",
        ],
        techs: ["Python", "HuggingFace", "Docker", "FastAPI", "PostgreSQL"],
    },
];

export default function Projects() {
    const [active, setActive] = useState(0);
    const activeProject = projects[active];

    return (
        <section id="projects" className="pattern-circuit relative px-6 py-24 sm:py-32">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 size-80 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            {/* Decorative shapes */}
            {/* Terminal */}
            <svg className="deco deco-float-1 left-[6%] top-[15%] size-9 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 10l4 4-4 4M12 18h6" /></svg>
            {/* CPU chip */}
            <svg className="deco deco-float-3 right-[5%] top-[35%] size-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M9 1v5M15 1v5M9 18v5M15 18v5M1 9h5M1 15h5M18 9h5M18 15h5" /></svg>
            {/* Rocket */}
            <svg className="deco deco-float-2 left-[8%] bottom-[20%] size-7 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>

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

                {/* Interactive tabs layout */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-6 lg:grid-cols-[320px_1fr]"
                >
                    {/* Left — Tab selectors */}
                    <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-x-visible lg:pb-0">
                        {projects.map((project, i) => (
                            <button
                                key={project.id}
                                onClick={() => setActive(i)}
                                className={`group flex min-w-[200px] items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 lg:min-w-0 ${active === i
                                    ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                                    : "border-border/50 bg-card/30 hover:border-border hover:bg-card/50"
                                    }`}
                            >
                                <span
                                    className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${active === i
                                        ? "bg-gradient-to-br bg-clip-text text-transparent " + project.color
                                        : "text-muted-foreground/30"
                                        }`}
                                >
                                    {project.number}
                                </span>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <project.icon
                                            className={`size-4 shrink-0 transition-colors duration-300 ${active === i ? "text-primary" : "text-muted-foreground/50"
                                                }`}
                                        />
                                        <span
                                            className={`truncate text-sm font-semibold transition-colors duration-300 ${active === i ? "text-foreground" : "text-muted-foreground"
                                                }`}
                                        >
                                            {project.title}
                                        </span>
                                    </div>
                                    <span className={`text-xs transition-colors duration-300 ${active === i ? "text-muted-foreground" : "text-muted-foreground/40"
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>
                                <div
                                    className={`ml-auto hidden size-1.5 shrink-0 rounded-full transition-all duration-300 lg:block ${active === i
                                        ? `bg-gradient-to-br ${project.color} shadow-sm`
                                        : "bg-transparent"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Right — Detail panel */}
                    <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="relative h-full p-6 sm:p-8"
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute -right-12 -top-12 size-48 rounded-full bg-gradient-to-br ${activeProject.color} opacity-10 blur-3xl`}
                                />

                                <div className="relative">
                                    {/* Header */}
                                    <div className="mb-6 flex items-center gap-4">
                                        <div
                                            className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${activeProject.color} text-white shadow-lg`}
                                        >
                                            <activeProject.icon className="size-7" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${activeProject.color} bg-clip-text text-transparent`}>
                                                Projet {activeProject.number}
                                            </span>
                                            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                                                {activeProject.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {activeProject.description}
                                    </p>

                                    {/* Tech details */}
                                    <div className="mb-6 grid gap-3 sm:grid-cols-2">
                                        {activeProject.techDetails.map((detail, i) => (
                                            <motion.div
                                                key={detail}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                                className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/50 p-3"
                                            >
                                                <CheckCircle2
                                                    className={`mt-0.5 size-4 shrink-0 bg-gradient-to-br ${activeProject.color} bg-clip-text text-transparent`}
                                                    strokeWidth={2}
                                                />
                                                <span className="text-sm text-muted-foreground">
                                                    {detail}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-border/50 bg-background/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
