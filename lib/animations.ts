/**
 * Centralized Animation Configuration
 * Amane Soft Motion System
 *
 * This file defines the canonical animation tokens, variants, and presets
 * used across the entire application. All components should import from here
 * to ensure visual consistency and maintainability.
 */

import { Variants, Transition, Spring } from "framer-motion"

// ------------------------------------------------------------------
// Duration Tokens (in seconds)
// ------------------------------------------------------------------
export const durations = {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    slower: 0.8,
    dramatic: 1.2,
} as const

// ------------------------------------------------------------------
// Easing Curves (cubic-bezier definitions)
// ------------------------------------------------------------------
export const easings = {
    // Standard production ease — smooth deceleration
    easeOut: [0, 0, 0.2, 1] as const,
    // Slight overshoot for playful entrances
    easeOutBack: [0.34, 1.56, 0.64, 1] as const,
    // Strong deceleration for hero elements
    easeOutExpo: [0.16, 1, 0.3, 1] as const,
    // Symmetric ease for layout morphing
    easeInOut: [0.4, 0, 0.2, 1] as const,
    // Snappy ease for micro-interactions
    easeInOutBack: [0.68, -0.55, 0.265, 1.55] as const,
    // Linear for continuous loops
    linear: [0, 0, 1, 1] as const,
} as const

// ------------------------------------------------------------------
// Spring Presets
// ------------------------------------------------------------------
export const springs = {
    gentle: { type: "spring", stiffness: 120, damping: 20 } as Spring,
    bouncy: { type: "spring", stiffness: 300, damping: 15 } as Spring,
    snappy: { type: "spring", stiffness: 500, damping: 30 } as Spring,
    stiff: { type: "spring", stiffness: 400, damping: 35 } as Spring,
} as const

// ------------------------------------------------------------------
// Transition Presets
// ------------------------------------------------------------------
export const transitions = {
    fade: {
        duration: durations.normal,
        ease: easings.easeOut,
    } as Transition,
    slideUp: {
        duration: durations.slow,
        ease: easings.easeOutExpo,
    } as Transition,
    scale: {
        duration: durations.normal,
        ease: easings.easeOutBack,
    } as Transition,
    layout: {
        type: "spring",
        stiffness: 300,
        damping: 30,
    } as Transition,
    stagger: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
    } as Transition,
    heroStagger: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
    } as Transition,
} as const

// ------------------------------------------------------------------
// Variant Definitions
// ------------------------------------------------------------------

/**
 * Fade In Up — Primary entrance animation for sections
 */
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.easeOutExpo,
        },
    },
}

/**
 * Fade In — Simple opacity entrance
 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOut,
        },
    },
}

/**
 * Scale In — For cards, buttons, and emphasis elements
 */
export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: durations.normal,
            ease: easings.easeOutBack,
        },
    },
}

/**
 * Slide In From Left — For asymmetric layouts
 */
export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.slow,
            ease: easings.easeOutExpo,
        },
    },
}

/**
 * Slide In From Right — For asymmetric layouts
 */
export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: durations.slow,
            ease: easings.easeOutExpo,
        },
    },
}

/**
 * Stagger Container — Parent wrapper for staggered children
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transitions.stagger,
    },
}

/**
 * Hero Stagger Container — Slower, more dramatic stagger
 */
export const heroStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transitions.heroStagger,
    },
}

/**
 * Stagger Item — Child element for stagger containers
 */
export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.slow,
            ease: easings.easeOutExpo,
        },
    },
}

/**
 * Navbar Item — For staggered nav link entrances
 */
export const navItem: Variants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: durations.fast,
            ease: easings.easeOut,
        },
    },
}

// ------------------------------------------------------------------
// Page Transition Variants
// ------------------------------------------------------------------

/**
 * Page Transition — Fade + slight slide for route changes
 */
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: durations.slower,
            ease: easings.easeOutExpo,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: durations.fast,
            ease: easings.easeInOut,
        },
    },
}

/**
 * Modal Overlay — Backdrop fade
 */
export const modalOverlay: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: durations.fast },
    },
    exit: {
        opacity: 0,
        transition: { duration: durations.fast, delay: 0.1 },
    },
}

/**
 * Modal Content — Scale + fade for dialog content
 */
export const modalContent: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: durations.normal,
            ease: easings.easeOutExpo,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
            duration: durations.fast,
            ease: easings.easeInOut,
        },
    },
}

// ------------------------------------------------------------------
// GPU Optimization Utility
// ------------------------------------------------------------------

/**
 * Returns a style object that promotes the element to its own compositor layer.
 * Use sparingly — only on elements that are actively animating.
 */
export function gpuAccelerate(): React.CSSProperties {
    return {
        willChange: "transform, opacity",
        transform: "translateZ(0)",
    }
}

/**
 * Returns a style object for elements that should not trigger layout recalcs.
 */
export function paintOptimized(): React.CSSProperties {
    return {
        willChange: "opacity",
    }
}

// ------------------------------------------------------------------
// Accessibility — Reduced Motion
// ------------------------------------------------------------------

/**
 * Checks if the user prefers reduced motion.
 * Safe to call in both client and server contexts (returns false on server).
 */
export function prefersReducedMotion(): boolean {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Returns transition settings respecting reduced motion preferences.
 */
export function accessibleTransition(transition: Transition): Transition {
    if (prefersReducedMotion()) {
        return {
            ...transition,
            duration: 0,
            type: "tween",
        }
    }
    return transition
}
