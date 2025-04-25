import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kwaaku Boamah-Powers' Portfolio",
  description: "Step into my interactive terminal portfolio. Explore my software engineering projects, cybersecurity experience, and tech stack—all through a command-line interface.",
  keywords: [
    "Kwaaku Boamah-Powers",
    "CLI Portfolio",
    "Terminal Website",
    "Software Engineer",
    "Full-Stack Developer",
    "Cybersecurity Analyst",
    "Next.js",
    "React.js",
    "Flutter",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Prisma",
    "Express.js",
    "Python",
    "C++",
    "JavaScript",
    "Dart",
    "Interactive Portfolio",
    "Command Line Interface"
  ],
  authors: [{ name: "Kwaaku Boamah-Powers", url: "https://boamahpowers.vercel.app/" }],
  creator: "Kwaaku Boamah-Powers",
  publisher: "Kwaaku Boamah-Powers",
  openGraph: {
    title: "CLI.me — Kwaaku Boamah-Powers' Terminal Portfolio",
    description:
      "Welcome to my interactive terminal-inspired portfolio. Type commands to discover my projects, experience, and contact info.",
    url: "https://boamahpowers.vercel.app/",
    siteName: "Kwaaku Boamah-Powers' Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kwaaku Boamah-Powers' Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwaaku Boamah-Powers' Portfolio",
    description:
      "Software engineer & cybersecurity enthusiast. Explore my projects and skills via an interactive terminal interface.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
