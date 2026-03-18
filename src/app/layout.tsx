import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import CustomCursor from "./components/CustomCursor";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harsh Dubey | Full Stack Developer & AI Developer",
  description:
    "Explore the portfolio of Harsh Dubey, a Full Stack Developer specializing in Next.js, React, Node.js, and AI integrations. Building production-grade web applications end to end.",
  keywords: [
    "Harsh Dubey",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI Developer",
    "Software Engineer",
    "React Developer",
    "MERN Stack",
  ],
  authors: [{ name: "Harsh Dubey" }],
  openGraph: {
    title: "Harsh Dubey | Personal Portfolio",
    description:
      "Full Stack Developer — Building production-grade web apps with AI-powered features.",
    url: "https://github.com/harshdazz",
    siteName: "Harsh Dubey Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Harsh Dubey Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Dubey | Full Stack Developer",
    description: "Building modern web applications with AI-powered features.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        {/* ── Nebula Dark Background ── */}
        <div
          className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {/* Aurora blob — violet, top-left */}
          <div
            className="absolute -top-[20%] -left-[10%] w-[65%] h-[65%] rounded-full bg-violet-950/40 blur-[130px]"
            style={{
              animation: "nebula-drift 28s ease-in-out infinite alternate",
            }}
          />
          {/* Aurora blob — cyan, bottom-right */}
          <div
            className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-950/30 blur-[130px]"
            style={{
              animation:
                "nebula-drift-reverse 32s ease-in-out infinite alternate",
            }}
          />
          {/* Aurora blob — purple, center-right */}
          <div
            className="absolute top-[35%] right-[5%] w-[45%] h-[45%] rounded-full bg-purple-950/25 blur-[110px]"
            style={{
              animation:
                "nebula-drift 22s ease-in-out infinite alternate-reverse",
            }}
          />
          {/* Red hint — top center, to preserve accent harmony */}
          <div
            className="absolute -top-[5%] left-[30%] w-[40%] h-[35%] rounded-full bg-red-950/20 blur-[100px]"
            style={{
              animation:
                "nebula-drift-reverse 18s ease-in-out infinite alternate",
            }}
          />
          {/* Dot matrix grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <CustomCursor />
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
