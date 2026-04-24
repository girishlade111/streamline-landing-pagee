import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata, Viewport } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://amanesoft.com"),
  title: {
    default: "Amane Soft - Cutting-Edge Software Solutions for Enterprise",
    template: "%s | Amane Soft",
  },
  description:
    "Amane Soft delivers innovative, high-performance software solutions including AI-powered analytics, cloud-native architecture, enterprise security, and digital transformation services for businesses of the future.",
  keywords: [
    "Amane Soft",
    "software solutions",
    "enterprise software",
    "AI analytics",
    "machine learning",
    "cloud-native architecture",
    "digital transformation",
    "enterprise security",
    "high-performance systems",
    "SaaS",
    "business intelligence",
    "cloud services",
    "software development",
    "IT consulting",
    "technology solutions",
  ],
  authors: [{ name: "Amane Soft", url: "https://amanesoft.com" }],
  creator: "Amane Soft",
  publisher: "Amane Soft",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanesoft.com",
    siteName: "Amane Soft",
    title: "Amane Soft - Cutting-Edge Software Solutions for Enterprise",
    description:
      "Empowering businesses with AI-driven analytics, cloud-native architecture, and enterprise-grade security. Discover how Amane Soft drives digital transformation.",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Amane Soft - Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amanesoft",
    creator: "@amanesoft",
    title: "Amane Soft - Cutting-Edge Software Solutions for Enterprise",
    description:
      "Empowering businesses with AI-driven analytics, cloud-native architecture, and enterprise-grade security. Discover how Amane Soft drives digital transformation.",
    images: ["/placeholder-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  classification: "Business & Technology",
  applicationName: "Amane Soft",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  icons: {
    icon: "/placeholder-logo.svg",
    shortcut: "/placeholder-logo.png",
    apple: "/placeholder-logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/placeholder-logo.png",
    },
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amane Soft",
              url: "https://amanesoft.com",
              logo: "https://amanesoft.com/placeholder-logo.png",
              sameAs: [
                "https://github.com/amanesoft",
                "https://twitter.com/amanesoft",
                "https://linkedin.com/company/amanesoft",
              ],
              description:
                "Amane Soft delivers innovative, high-performance software solutions including AI-powered analytics, cloud-native architecture, and enterprise security.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Amane Soft",
              url: "https://amanesoft.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://amanesoft.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
