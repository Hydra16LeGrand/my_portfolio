"use client";

import { motion } from "framer-motion";
import {
    Database,
    Bot,
    Workflow,
    Layers,
    Server,
    GitBranch,
    Code,
    Cpu,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const servicesData = [
    {
        number: "01",
        title: "Développement & Consulting Odoo",
        description:
            "Certifié Odoo 19, je travaille sur Odoo depuis la V14. Je développe des modules Python sur mesure, personnalise les workflows existants, effectue des migrations inter-versions et optimise les bases PostgreSQL. J'interviens aussi bien en mode projet qu'en assistance technique continue.",
        icon: Database,
        color: "from-blue-500 to-cyan-400",
        glowColor: "shadow-blue-500/20",
        useCases: [
            "Développement de modules Odoo custom (Python, XML, ORM)",
            "Migration inter-versions (V16→V17, V17→V19)",
            "Déploiement et administration Odoo.sh",
            "Paramétrage avancé : MRP, Ventes, Stocks, CRM, Comptabilité, RH",
            "Optimisation PostgreSQL et résolution de problèmes de performance",
            "Formation des équipes et documentation technique",
            "Audit et recommandations sur un système Odoo existant",
        ],
        tags: ["Python", "XML", "ORM", "PostgreSQL", "Odoo.sh", "CI/CD"],
    },
    {
        number: "02",
        title: "Automatisation des processus métier",
        description:
            "J'analyse les tâches manuelles et répétitives dans vos processus et je les automatise : synchronisation entre outils, génération de documents, notifications, traitements de données. L'objectif est simple — que vos équipes passent moins de temps sur des tâches sans valeur ajoutée.",
        icon: Workflow,
        color: "from-emerald-500 to-teal-400",
        glowColor: "shadow-emerald-500/20",
        useCases: [
            "Automatisation de workflows avec N8N",
            "Connexion entre Odoo et des services tiers via API",
            "Génération automatique de documents et rapports",
            "Intégration de services IA dans des flux existants (lecture de fichiers, classification, résumé)",
            "Synchronisation et nettoyage de données entre systèmes",
        ],
        tags: ["N8N", "API REST", "Python", "Odoo", "Docker"],
    },
    {
        number: "03",
        title: "Intégration IA dans vos outils existants",
        description:
            "J'intègre des fonctionnalités IA dans vos applications existantes : extraction de texte depuis des documents, assistants de réponse, classification automatique, synthèse vocale. J'utilise les APIs des providers (OpenAI, Gemini, Groq) ou des modèles open-source selon vos contraintes. Ce ne sont pas des projets de recherche — ce sont des fonctionnalités qui s'intègrent dans ce que vous utilisez déjà.",
        icon: Bot,
        color: "from-purple-500 to-pink-500",
        glowColor: "shadow-purple-500/20",
        useCases: [
            "Lecture et extraction de données depuis des PDF, images, factures (OCR)",
            "Assistants de réponse connectés à votre base de connaissances (RAG)",
            "Classification et tri automatique de contenus",
            "Synthèse vocale / transcription audio (Whisper)",
            "Intégration d'APIs IA dans Odoo ou d'autres applications",
        ],
        tags: ["OpenAI API", "Gemini", "LangChain", "RAG", "OCR", "Whisper", "Python"],
    },
];

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    Python: Server,
    XML: Code,
    ORM: Database,
    PostgreSQL: Database,
    "Odoo.sh": Layers,
    "CI/CD": GitBranch,
    "N8N": Workflow,
    "API REST": Server,
    Docker: Server,
    "OpenAI API": Bot,
    Gemini: Bot,
    LangChain: Cpu,
    RAG: Bot,
    OCR: Server,
    Whisper: Server,
};

export default function Expertise() {
    return (
        <section id="expertise" className="relative px-6 py-24 sm:py-32">
            {/* Background gradient */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-1/3 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 size-80 rounded-full bg-purple-500/5 blur-3xl" />
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
                        Services
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Ce que je fais
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-6"
                >
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={scaleIn}
                            className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:${service.glowColor} md:p-8`}
                        >
                            {/* Animated gradient border on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />

                            {/* Glow effect */}
                            <div
                                className={`absolute -right-20 -top-20 size-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                            />

                            <div className="relative z-10">
                                <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                                    {/* Left: Number + Icon + Title + Description */}
                                    <div className="md:w-2/5">
                                        {/* Number + Icon row */}
                                        <div className="mb-4 flex items-center gap-4">
                                            <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-4xl font-bold text-transparent opacity-50`}>
                                                {service.number}
                                            </span>
                                            <div
                                                className={`rounded-xl bg-gradient-to-br ${service.color} p-3 text-white shadow-lg shadow-black/20`}
                                            >
                                                <service.icon className="size-6" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-3 text-xl font-semibold">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Right: Use cases + Tags */}
                                    <div className="md:w-3/5">
                                        {/* Use cases */}
                                        <ul className="mb-5 space-y-2">
                                            {service.useCases.map((useCase, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-3 text-sm text-muted-foreground"
                                                >
                                                    <span className={`mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r ${service.color}`} />
                                                    {useCase}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags - pill style */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => {
                                                const Icon = techIcons[tag] || Server;
                                                return (
                                                    <span
                                                        key={tag}
                                                        className={`inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-background`}
                                                    >
                                                        <Icon className="size-3 text-primary" />
                                                        {tag}
                                                    </span>
                                                );
                                            })}
                                        </div>
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
