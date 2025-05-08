"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Button } from "./ui/button"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-black/30 backdrop-blur-sm ">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-10 md:grid-cols-2 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              {/* <img src="/placeholder.jpg" alt="Profile" className="object-cover w-full h-full" /> */}
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">2+ Years</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">About Me</h2>
              <div className="h-1 w-20 bg-primary mb-6"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I'm a passionate Full Stack Developer with expertise in creating beautiful, functional, and user-centered
              digital experiences. With 2+ years of experience in the field, I am always looking for new and innovative
              ways to bring my clients' visions to life.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
              <Button>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button variant="outline">
                <a href="https://drive.google.com/file/d/1yaJKaNprK_ZuCHknJMKFnbk3o0N9YY7M/view?usp=drive_link" target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
