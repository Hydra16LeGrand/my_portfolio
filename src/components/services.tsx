"use client";

import { motion } from "framer-motion";
import { Bot, Layers, Lightbulb, Settings2, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const services = [
    {
        number: "01",
        title: "Agents IA sur mesure",
        icon: Bot,
        color: "from-violet-500 to-purple-600",
        description:
            "Un agent IA, c'est un assistant virtuel intelligent capable d'agir de manière autonome : il comprend vos demandes, analyse le contexte et exécute des tâches sans intervention humaine.",
        useCases: [
            "Agent de support client 24/7 qui répond, escalade et résout",
            "Assistant commercial qui qualifie les leads et planifie les rendez-vous",
            "Agent de veille qui surveille vos concurrents et synthétise les tendances",
            "Automatisation de rapports financiers et tableaux de bord",
        ],
    },
    {
        number: "02",
        title: "SaaS propulsé par l'IA",
        icon: Layers,
        color: "from-blue-500 to-cyan-500",
        description:
            "Conception et développement de plateformes SaaS intégrant nativement l'intelligence artificielle pour offrir une valeur ajoutée unique à vos utilisateurs.",
        useCases: [
            "Plateforme d'analyse prédictive adaptée à votre secteur",
            "Outil de génération de contenu personnalisé pour vos équipes",
            "Système de recommandation intelligent pour le e-commerce",
            "Chatbot intelligent interconnecté à vos données",
        ],
    },
    {
        number: "03",
        title: "Conseil & Stratégie IA",
        icon: Lightbulb,
        color: "from-amber-500 to-orange-500",
        description:
            "Accompagnement stratégique pour identifier les opportunités d'IA dans votre organisation, évaluer la faisabilité et définir une feuille de route concrète.",
        useCases: [
            "Audit IA : identifier où l'IA peut réduire vos coûts",
            "Choix technologiques : quel modèle, quelle infra, quel budget",
            "Formation de vos équipes aux outils et bonnes pratiques IA",
            "Veille technologique et recommandations d'adoption",
        ],
    },
    {
        number: "04",
        title: "Consultance Odoo",
        icon: Settings2,
        color: "from-emerald-500 to-green-500",
        description:
            "Expert Odoo certifié avec 5+ ans d'expérience. Déploiement, personnalisation et optimisation de votre ERP pour des processus métier fluides et scalables.",
        useCases: [
            "Déploiement Odoo complet (Comptabilité, CRM, Stock, Production, ...)",
            "Développement de modules sur mesure pour vos besoins spécifiques",
            "Migration de versions et intégration avec vos outils existants",
            "Optimisation de performance et accompagnement post-déploiement",
        ],
    },
];

export default function Services() {
    return (
        <section id="services" className="pattern-circuit relative px-6 py-24 sm:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/4 size-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-purple-500/5 blur-3xl" />
            </div>

            {/* Decorative shapes */}
            {/* Bot face */}
            <svg className="deco deco-float-2 right-[6%] top-[12%] size-10 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="8" width="16" height="12" rx="2" /><circle cx="9" cy="14" r="1.5" fill="currentColor" /><circle cx="15" cy="14" r="1.5" fill="currentColor" /><line x1="12" y1="4" x2="12" y2="8" /><circle cx="12" cy="3" r="1" fill="currentColor" /></svg>
            {/* Lightbulb */}
            <svg className="deco deco-float-3 left-[5%] top-[40%] size-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18h6M10 22h4M12 2a7 7 0 014 12.7V17a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2.3A7 7 0 0112 2z" /></svg>
            {/* Gear */}
            <svg className="deco deco-float-1 bottom-[15%] right-[10%] size-9 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>

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
                        className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Ce que je peux faire pour vous
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto max-w-2xl text-muted-foreground"
                    >
                        Des solutions concrètes, de la stratégie à l&apos;exécution — pour transformer vos idées en produits qui ont de l&apos;impact.
                    </motion.p>
                </motion.div>

                {/* Stacked full-width service cards */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-6"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={service.number}
                            variants={fadeInUp}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/80"
                        >
                            {/* Gradient accent top bar */}
                            <div className={`h-[2px] bg-gradient-to-r ${service.color} opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />

                            {/* Background glow */}
                            <div
                                className={`absolute ${i % 2 === 0 ? "-right-16" : "-left-16"} -top-16 size-64 rounded-full bg-gradient-to-br ${service.color} opacity-[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]`}
                            />

                            <div className={`relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start md:gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                                {/* Left: Number + Icon + Title + Description */}
                                <div className="flex-1">
                                    <div className="mb-4 flex items-center gap-4">
                                        {/* Big number */}
                                        <span className={`text-5xl font-black tracking-tighter bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-30 sm:text-6xl`}>
                                            {service.number}
                                        </span>
                                        <div>
                                            <div className="flex items-center gap-2.5">
                                                <div className={`flex size-9 items-center justify-center rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                                                    <service.icon className="size-4.5" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Right: Use cases */}
                                <div className="flex-1 md:max-w-md">
                                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                                        Cas d&apos;usage
                                    </p>
                                    <div className="space-y-2.5">
                                        {service.useCases.map((useCase) => (
                                            <div
                                                key={useCase}
                                                className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/30 p-3 transition-colors duration-300 hover:bg-background/60"
                                            >
                                                <CheckCircle2
                                                    className={`mt-0.5 size-4 shrink-0 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                                                    strokeWidth={2}
                                                />
                                                <span className="text-sm text-muted-foreground">{useCase}</span>
                                            </div>
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
