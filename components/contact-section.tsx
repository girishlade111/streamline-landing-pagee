"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Zap } from "lucide-react"
import SocialLinks from "@/components/social-links"

export default function ContactSection() {
    return (
        <section className="container space-y-16 py-24 md:py-32">
            {/* Section Header */}
            <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                    Let's Build Something Amazing
                </h2>
                <p className="mt-4 text-muted-foreground sm:text-lg">
                    Have a project in mind or want to collaborate? Reach out through any channel below.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                {/* Quick Response */}
                <div className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        I typically respond to all inquiries within 24 hours during business days.
                    </p>
                </div>

                {/* Global Reach */}
                <div className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold">Global Reach</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Available for remote collaboration and consulting worldwide.
                    </p>
                </div>

                {/* Flexible Hours */}
                <div className="group relative overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold">Flexible Hours</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Willing to accommodate different time zones for meetings and calls.
                    </p>
                </div>
            </div>

            {/* Social & Contact Hub */}
            <div className="mx-auto max-w-2xl">
                <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-background via-background to-muted/20 p-8 md:p-12">
                    {/* Decorative gradient blobs */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-[60px]" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[60px]" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h3 className="font-bold text-2xl md:text-3xl">Connect With Me</h3>
                        <p className="mt-3 max-w-md text-muted-foreground">
                            Follow my work, explore my projects, or send a direct message. I'm always open to interesting conversations.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8">
                            <SocialLinks />
                        </div>

                        {/* Direct Email CTA */}
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                            <a
                                href="mailto:admin@ladestack.in"
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                <span className="h-px w-8 bg-border" />
                                admin@ladestack.in
                                <span className="h-px w-8 bg-border" />
                            </a>
                        </div>

                        {/* Website CTA */}
                        <div className="mt-6">
                            <a
                                href="https://ladestack.in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="gap-2">
                                    Visit ladestack.in
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
