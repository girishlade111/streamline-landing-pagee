export {
  springTransition,
  gentleSpring,
  bouncySpring,
  slowSpring,
  tweenTransition,
  easeInOut,
  instant,
  pageTransitionConfig,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  scaleIn,
  scaleInFull,
  slideInUp,
  staggerContainer,
  staggerContainerReverse,
  viewportConfig,
  buttonHover,
  buttonTap,
  buttonVariants,
  navItemVariants,
  progressBarVariants,
  modalVariants,
  overlayVariants,
  willChangeProperties,
  hardwareAccelerate,
  performanceConfig,
  scrollRevealConfig,
  parallaxConfig,
  getAnimationPreset,
  transitionPresets,
} from "@/lib/animation/config"

export type { AnimationPreset } from "@/lib/animation/config"

export {
  AnimationWrapper,
  StaggerWrapper,
  FadeReveal,
  ScaleReveal,
  SlideReveal,
  AnimatePresenceWrapper,
  Presence,
  ReducedMotionProvider,
  useReducedMotionContext,
  motion,
  AnimatePresence,
  Variants,
  springTransition,
  viewportConfig,
  getAnimationPreset,
} from "@/components/animation/animation-wrapper"

export {
  PageTransitionProvider,
  PageTransition,
  usePageTransition,
} from "@/components/animation/page-transition"

export {
  useParallaxScroll,
  useRevealScroll,
  useProgressBar,
  ParallaxSection,
  RevealOnScroll,
  ScrollProgress,
  useScroll,
  useTransform,
  useSpring,
} from "@/components/animation/scroll-animations"

export {
  SharedElement,
  ExpandableImage,
  ImageGridItem,
  ListItem,
} from "@/components/animation/shared-element"

export { AnimatedButton } from "@/components/ui/animation/animated-button"

export {
  AnimatedNav,
  MobileNav,
  HamburgerMenu,
} from "@/components/ui/animation/animated-nav"

export { Modal, ModalOverlay } from "@/components/ui/animation/modal-overlay"

export {
  willChangeProperties,
  hardwareAcceleration,
  gpuOptimizedStyles,
  usePerformanceOptimizer,
  PerformanceWrapper,
  createOptimizedTransition,
} from "@/components/animation/performance"