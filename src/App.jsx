"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import NebulaEffect from "./components/NebulaEffect"
import StarsBackground from "./components/StarsBackground"
import { ThemeProvider } from "./components/ThemeProvider"

export default function App() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative min-h-screen bg-transparent" ref={ref}>
        {/* Progress bar */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX: scrollYProgress }} />

        {/* Background effects */}
        <StarsBackground />
        <NebulaEffect />

        <Navbar />

        <main className="relative">
          {/* Hero Section */}
          <HeroSection scrollYProgress={scrollYProgress} />

          {/* About Section */}
          <AboutSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
