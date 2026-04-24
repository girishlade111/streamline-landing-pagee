"use client"

import Link from "next/link"
import { Instagram, Linkedin, Github, Codepen, Mail, Globe } from "lucide-react"

const socialProfiles = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/girish_lade_/",
        icon: Instagram,
        hoverColor: "hover:text-pink-400",
        hoverBg: "hover:bg-pink-400/10",
        label: "Follow on Instagram",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/girish-lade-075bba201/",
        icon: Linkedin,
        hoverColor: "hover:text-sky-400",
        hoverBg: "hover:bg-sky-400/10",
        label: "Connect on LinkedIn",
    },
    {
        name: "GitHub",
        href: "https://github.com/girishlade111",
        icon: Github,
        hoverColor: "hover:text-neutral-100",
        hoverBg: "hover:bg-neutral-100/10",
        label: "View GitHub Profile",
    },
    {
        name: "CodePen",
        href: "https://codepen.io/Girish-Lade-the-looper",
        icon: Codepen,
        hoverColor: "hover:text-amber-400",
        hoverBg: "hover:bg-amber-400/10",
        label: "Explore CodePen",
    },
    {
        name: "Email",
        href: "mailto:admin@ladestack.in",
        icon: Mail,
        hoverColor: "hover:text-red-400",
        hoverBg: "hover:bg-red-400/10",
        label: "Send an Email",
    },
    {
        name: "Website",
        href: "https://ladestack.in",
        icon: Globe,
        hoverColor: "hover:text-emerald-400",
        hoverBg: "hover:bg-emerald-400/10",
        label: "Visit Website",
    },
]

interface SocialLinksProps {
    variant?: "default" | "compact"
    className?: string
}

export default function SocialLinks({ variant = "default", className = "" }: SocialLinksProps) {
    const isCompact = variant === "compact"

    return (
        <div
            className={`flex items-center ${isCompact ? "gap-3" : "gap-4"} ${className}`}
            role="list"
            aria-label="Social media and contact links"
        >
            {socialProfiles.map((profile) => (
                <Link
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
            group relative flex items-center justify-center rounded-xl
            border border-border/50 bg-background/50
            backdrop-blur-sm
            transition-all duration-300 ease-out
            ${isCompact ? "h-9 w-9" : "h-11 w-11"}
            ${profile.hoverColor} ${profile.hoverBg}
            hover:border-transparent hover:shadow-lg hover:shadow-black/20
            hover:-translate-y-0.5
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
          `}
                    aria-label={profile.label}
                    role="listitem"
                >
                    <profile.icon
                        className={`
              transition-transform duration-300 ease-out
              group-hover:scale-110
              ${isCompact ? "h-4 w-4" : "h-[18px] w-[18px]"}
            `}
                        strokeWidth={1.5}
                    />
                    <span className="sr-only">{profile.label}</span>
                </Link>
            ))}
        </div>
    )
}
