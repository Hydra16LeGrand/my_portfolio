"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Database, Globe, Bot, ExternalLink, Server, Gauge, ChevronDown, ChevronUp } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const projects = [
    {
        title: "Odoo Remote DB Manager",
        badge: "Odoo · Python · PostgreSQL",
        status: "En production",
        description:
            "Module Odoo permettant à un intégrateur de se connecter à des bases de données Odoo.sh distantes depuis sa propre instance interne. Conçu pour centraliser la gestion des accès clients sans avoir besoin de comptes GitHub ou de partager des identifiants.",
        features: [
            "Connexion sécurisée aux BD Odoo.sh distantes depuis une BD interne",
            "Traçabilité complète des connexions par utilisateur",
            "Déconnexion automatique des sessions selon plage horaire ou durée définie",
            "Backup distant avec option d'anonymisation des données",
            "Exclusion du filestore pour alléger les sauvegardes",
            "Gestion fine des droits d'accès sans dépendance à GitHub",
        ],
        topFeatures: [
            "Connexion sécurisée aux BD Odoo.sh distantes",
            "Traçabilité complète des connexions",
            "Déconnexion automatique des sessions",
        ],
        techs: ["Python", "ORM Odoo", "PostgreSQL", "Odoo.sh", "XML"],
        icon: Database,
        color: "from-blue-500 to-cyan-400",
        glowColor: "shadow-blue-500/20",
    },
    {
        title: "Fine-tuning LLM — Dialecte Ivoirien",
        badge: "NLP · Fine-tuning · R&D",
        status: "R&D en cours",
        description:
            "Expérimentation de fine-tuning sur Llama 3 et Mistral à partir d'un dataset en bambara/français. L'idée : explorer comment adapter un LLM à des langues peu représentées dans les données d'entraînement, et gérer le catastrophic forgetting dans ce contexte.",
        features: [
            "Fine-tuning LoRA/QLoRA sur Llama 3 et Mistral",
            "Dataset curé de dialectes locaux (bambara/français)",
            "Gestion du catastrophic forgetting",
            "Déploiement via Open WebUI pour usage accessible",
        ],
        topFeatures: [
            "Fine-tuning LoRA/QLoRA sur Llama 3 et Mistral",
            "Dataset curé de dialectes locaux",
            "Gestion du catastrophic forgetting",
        ],
        techs: ["Llama 3", "Mistral", "Python", "HuggingFace", "Open WebUI"],
        icon: Globe,
        color: "from-violet-500 to-purple-600",
        glowColor: "shadow-violet-500/20",
    },
    {
        title: "Agent IA Multimodal (voix, texte, vision)",
        badge: "IA · LangChain · R&D",
        status: "R&D en cours",
        description:
            "Pipeline complet intégrant RAG, transcription vocale (Whisper), synthèse vocale et vision. Développé pour tester des cas d'usage en français local et langues africaines via HuggingFace.",
        features: [
            "Pipeline RAG pour la recherche et génération augmentée",
            "Intégration Whisper (STT) et TTS pour interactions vocales",
            "Vision multimodale pour le traitement d'images et documents",
            "Modèles hébergés et optimisés via HuggingFace",
        ],
        topFeatures: [
            "Pipeline RAG pour la recherche augmentée",
            "Intégration Whisper (STT) et TTS",
            "Vision multimodale pour traitement d'images",
        ],
        techs: ["LangChain", "RAG", "Whisper", "TTS", "Vision", "HuggingFace", "Python"],
        icon: Bot,
        color: "from-purple-500 to-pink-500",
        glowColor: "shadow-purple-500/20",
    },
];

export default function Projects() {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    return (
        <section id="projects" className="relative px-6 py-24 sm:py-32">
            {/* Background gradients */}
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
                    className="mb-6 text-center"
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
                        R&D & Projets Personnels
                    </motion.h2>
                </motion.div>

                {/* Intro */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mx-auto mb-16 max-w-2xl text-center text-sm text-muted-foreground"
                >
                    Des projets que je fais sur mon temps libre, par curiosité ou pour explorer des technologies
                    que je n&apos;utilise pas encore au quotidien. Pas de promesses, juste de l&apos;expérimentation.
                </motion.p>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={scaleIn}
                            className="group relative flex flex-col"
                        >
                            <div className={`relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 shadow-xl shadow-black/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl h-full ${project.glowColor}`}>
                                {/* Top gradient bar */}
                                <div
                                    className={`h-1 w-full bg-gradient-to-r ${project.color}`}
                                />

                                <div className="flex flex-1 flex-col p-6">
                                    {/* Header */}
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className="flex items-start gap-3">
                                            <div
                                                className={`rounded-xl bg-gradient-to-br ${project.color} p-3 text-white shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105`}
                                            >
                                                <project.icon className="size-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold leading-snug">
                                                    {project.title}
                                                </h3>
                                                <span className="text-xs text-muted-foreground">
                                                    {project.badge}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={`shrink-0 rounded-full border px-2 py-0.5 text-xs ${
                                            project.status === "En production"
                                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
                                                : "border-amber-500/30 bg-amber-500/10 text-amber-500"
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                        {project.description}
                                    </p>

                                    {/* Top Features - always visible */}
                                    <div className="mb-4 rounded-xl border border-border/30 bg-background/40 p-3">
                                        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary">
                                            <Server className="size-3" />
                                            Points clés
                                        </div>
                                        <ul className="space-y-1">
                                            {(expandedProject === project.title ? project.features : project.topFeatures).map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-2 text-xs text-muted-foreground"
                                                >
                                                    <Gauge className="mt-0.5 size-3 shrink-0 text-primary/60" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        {project.features.length > 3 && (
                                            <button
                                                onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                                                className="mt-2 flex w-full items-center justify-center gap-1 text-xs text-primary hover:underline"
                                            >
                                                {expandedProject === project.title ? (
                                                    <>Voir moins <ChevronUp className="size-3" /></>
                                                ) : (
                                                    <>Voir toutes les fonctionnalités ({project.features.length}) <ChevronDown className="size-3" /></>
                                                )}
                                            </button>
                                        )}
                                    </div>

                                    {/* Tech stack - pushed to bottom */}
                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-border/50 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-background"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
