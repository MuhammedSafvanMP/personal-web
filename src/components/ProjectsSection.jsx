"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/placeholder-project1.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder-project2.jpg",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A creative portfolio website with 3D elements and smooth animations for a digital artist.",
    image: "/placeholder-project3.jpg",
    tags: ["React", "Three.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "An AI-powered application that generates various types of content based on user prompts.",
    image: "/placeholder-project4.jpg",
    tags: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tighter">
              My Projects
            </motion.h2>
            <motion.div variants={itemVariants} className="h-1 w-20 bg-primary mx-auto"></motion.div>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is unique and solves specific problems.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="overflow-hidden h-full group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
