"use client";

import { motion } from "framer-motion";
import {
    Database,
    Server,
    Workflow,
    Bot,
    Container,
    GitBranch,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const skillsData = [
    {
        title: "Odoo & ERP",
        icon: Database,
        color: "from-blue-500 to-cyan-400",
        items: [
            "Python · ORM Odoo · XML/QWeb · PostgreSQL",
            "Odoo V14 à V19 · Odoo.sh · Migration inter-versions",
            "Modules custom · CI/CD · Tests unitaires · Sous-modules Git",
        ],
    },
    {
        title: "Automatisation & Intégration",
        icon: Workflow,
        color: "from-emerald-500 to-teal-400",
        items: [
            "N8N · API REST · Docker · CI/CD",
            "Intégrations tierces · Pipelines de données · ETL",
            "Django · Flask · FastAPI",
        ],
    },
    {
        title: "IA & Intégration API",
        icon: Bot,
        color: "from-purple-500 to-pink-500",
        items: [
            "OpenAI API · Gemini · Groq · Azure AI Foundry",
            "LangChain · RAG · OCR (Tesseract, PaddleOCR)",
            "Whisper (STT) · TTS · LLM open-source",
        ],
    },
    {
        title: "Infrastructure & DevOps",
        icon: Container,
        color: "from-amber-500 to-orange-500",
        items: [
            "Docker · Git · GitHub Actions · Linux",
            "Nginx · Serveurs dédiés · DigitalOcean",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative px-6 py-24 sm:py-32">
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
                        Stack
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Compétences
                    </motion.h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-4 sm:grid-cols-2"
                >
                    {skillsData.map((skill) => (
                        <motion.div
                            key={skill.title}
                            variants={scaleIn}
                            className="glow-border group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
                        >
                            {/* Gradient accent */}
                            <div
                                className={`absolute -right-6 -top-6 size-24 rounded-full bg-gradient-to-br ${skill.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${skill.color} p-2.5 text-white shadow-lg`}
                                >
                                    <skill.icon className="size-5" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-lg font-semibold">
                                    {skill.title}
                                </h3>

                                {/* Items */}
                                <ul className="space-y-2">
                                    {skill.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
