import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amara Baradji — Consultant ERP Odoo & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 40%, #2d1b69 100%)",
                    fontFamily: "system-ui, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: "absolute",
                        top: -80,
                        right: -80,
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: -100,
                        left: -100,
                        width: 350,
                        height: 350,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
                    }}
                />

                {/* Initials badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                        marginBottom: 28,
                        fontSize: 32,
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: -1,
                    }}
                >
                    AB
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: -1,
                        marginBottom: 12,
                    }}
                >
                    Amara Baradji
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: 24,
                        fontWeight: 500,
                        background: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)",
                        backgroundClip: "text",
                        color: "transparent",
                        marginBottom: 20,
                    }}
                >
                    Consultant ERP Odoo & IA
                </div>

                {/* Tags */}
                <div
                    style={{
                        display: "flex",
                        gap: 12,
                    }}
                >
                    {["ERP Odoo", "Intelligence Artificielle", "SaaS", "Tech Lead"].map(
                        (tag) => (
                            <div
                                key={tag}
                                style={{
                                    padding: "8px 18px",
                                    borderRadius: 50,
                                    border: "1px solid rgba(139,92,246,0.3)",
                                    background: "rgba(139,92,246,0.1)",
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}
                            >
                                {tag}
                            </div>
                        )
                    )}
                </div>

                {/* Subtitle */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 40,
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 14,
                    }}
                >
                    5+ ans d&apos;expérience • Disponible en portage salarial
                </div>
            </div>
        ),
        { ...size }
    );
}
