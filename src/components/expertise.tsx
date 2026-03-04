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
    Code2,
    TestTube2,
    Globe,
    Bot,
    Mic,
    Eye,
    Zap,
    Settings,
    Link,
    BarChart2,
    RefreshCw,
    Cloud,
    Terminal,
    Package,
    Settings2,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import SpotlightCard from "@/components/spotlight-card";

const expertiseData = [
    {
        title: "ERP & Gestion d'Entreprise",
        description:
            "Je conçois et déploie des systèmes de gestion sur mesure (ERP) qui centralisent vos opérations : ventes, comptabilité, stocks, RH — le tout dans un seul outil, fiable et scalable.",
        icon: Database,
        color: "from-blue-500 to-cyan-400",
        techs: [
            { name: "Odoo V15 à V19", icon: Layers },
            { name: "Hébergement cloud (Odoo.sh)", icon: Cloud },
            { name: "Hébergement dédié", icon: Server },
            { name: "Édition Enterprise", icon: Package },
            { name: "Édition Community (open source)", icon: Package },
            { name: "Développement Python", icon: Code2 },
            { name: "Base de données PostgreSQL", icon: HardDrive },
            { name: "Interfaces web sur mesure", icon: Globe },
            { name: "Connecteurs & Intégrations tierces", icon: Link },
            { name: "Tests automatisés", icon: TestTube2 },
        ],
        span: "md:col-span-2",
    },
    {
        title: "Intelligence Artificielle",
        description:
            "J'intègre l'IA dans vos processus métiers : génération de documents, lecture automatique de fichiers, assistants intelligents — des solutions concrètes qui font gagner du temps.",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        techs: [
            { name: "Modèles IA (Gemini, OpenAI, Azure)", icon: Cpu },
            { name: "Agents IA & Chatbots", icon: Bot },
            { name: "Recherche intelligente (RAG)", icon: Zap },
            { name: "Lecture & Extraction de documents (OCR)", icon: Eye },
            { name: "Voix vers texte / Texte vers voix", icon: Mic },
            { name: "Modèles IA open source", icon: Server },
            { name: "Personnalisation de modèles (Fine-tuning)", icon: Settings },
            { name: "LangChain", icon: GitBranch },
        ],
        span: "md:col-span-2",
    },
    {
        title: "Infrastructure & Déploiement",
        description:
            "Je m'assure que vos applications sont robustes, sécurisées et disponibles en permanence : mise en production, mises à jour sans interruption, surveillance continue.",
        icon: Container,
        color: "from-emerald-500 to-teal-400",
        techs: [
            { name: "Conteneurisation (Docker)", icon: Container },
            { name: "Déploiement continu (CI/CD)", icon: RefreshCw },
            { name: "Pipelines de données", icon: Workflow },
            { name: "Base de données PostgreSQL", icon: HardDrive },
            { name: "Serveurs Linux", icon: Terminal },
            { name: "Automatisation système (n8n)", icon: GitBranch },
            { name: "Serveur web & proxy (Nginx)", icon: Globe },
        ],
        span: "md:col-span-2",
    },
    {
        title: "Automatisation Métier",
        description:
            "Je cartographie vos processus et les automatise : suppression des tâches manuelles répétitives, synchronisation entre vos outils, tableaux de bord en temps réel.",
        icon: Settings2,
        color: "from-orange-500 to-amber-400",
        techs: [
            { name: "Automatisation no-code (n8n, Make)", icon: Workflow },
            { name: "Connexion entre applications (API)", icon: Link },
            { name: "Intégrations Odoo", icon: Database },
            { name: "Tableaux de bord & Reporting", icon: BarChart2 },
            { name: "Assistants IA métier", icon: Bot },
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
                        Ce que je fais
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Mes domaines d&apos;expertise
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-4 md:grid-cols-4"
                >
                    {expertiseData.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={scaleIn}
                            className={item.span}
                        >
                            <SpotlightCard
                                className="glow-border group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
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
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
