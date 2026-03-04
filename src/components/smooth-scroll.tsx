"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // Skip Lenis on touch/mobile devices — native scroll is already smooth
        const isTouchDevice =
            "ontouchstart" in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Expose lenis globally for smooth scroll navigation links
        (window as unknown as Record<string, Lenis>).__lenis = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
