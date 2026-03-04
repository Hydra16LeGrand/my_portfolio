"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export default function MagneticButton({
    children,
    className = "",
    intensity = 0.5,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const { height, width, left, top } = boundingRect;
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * intensity, y: middleY * intensity });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    // Seulement actif sur desktop (hover supporté)
    const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
        return <div className={`w-fit ${className}`}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`w-fit ${className}`}
        >
            {children}
        </motion.div>
    );
}
