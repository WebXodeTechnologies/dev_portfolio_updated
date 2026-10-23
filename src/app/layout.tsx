import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScrollProvider from "@/components/motion/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://webxode.com";

const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Akash S M",
  url: SITE_URL,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, and scalable web applications.",
  image: `${SITE_URL}/images/akash-profile.jpg`,
  email: "mailto:akashvicky2012@gmail.com",
  telephone: "+91-9345336311",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Namakkal",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/akashsm-dev/",
    "https://github.com/ak220193",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Webxode Technologies",
    url: "https://webxode.com",
  },
  knowsAbout: [
    "Full Stack Development",
    "Frontend Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "SaaS Development",
    "Web Application Architecture",
    "Docker",
    "CI/CD",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Akash S M | Beyond the Interface",
      description:
        "Personal portfolio of Akash S M, Full Stack Developer and founder of Webxode Technologies.",
      inLanguage: "en-IN",
      author: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Akash S M — Full Stack Developer Portfolio",
      description:
        "Explore the projects, experience, technical skills, and engineering journey of Akash S M.",
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Akash S M | Full Stack Developer & SaaS Builder",
    template: "%s | Akash S M",
  },

  description:
    "Explore the portfolio of Akash S M, a Full Stack Developer specializing in React, Next.js, Node.js, MongoDB, SaaS products, and scalable web applications.",

  applicationName: "Akash S M Portfolio",
  authors: [
    {
      name: "Akash S M",
      url: SITE_URL,
    },
  ],
  creator: "Akash S M",
  publisher: "Akash S M",

  keywords: [
    "Akash S M",
    "Akash S M portfolio",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Frontend Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "MERN Stack Developer",
    "SaaS Development",
    "Web Application Development",
    "Scalable Web Applications",
    "Webxode Technologies",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Akash S M | Beyond the Interface",
    title: "Akash S M | Full Stack Developer & SaaS Builder",
    description:
      "Discover projects, engineering experience, and scalable digital products built by Akash S M.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akash S M | Full Stack Developer",
    description:
      "Full Stack Developer building immersive web experiences and scalable digital products.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <html lang="en-IN" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        {/* Lenis Smooth Scroll Provider Wrapper */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
