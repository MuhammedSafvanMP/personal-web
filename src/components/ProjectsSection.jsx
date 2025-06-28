"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import hostel from "../assets/hostel.png";
import lms from "../assets/lms.png";
import e_commerce from "../assets/e-commerce.png";
import hosta from "../assets/hospital-dashboard.png";

const projects = [
  {
    id: 1,
    title: "Hostay",
    description:
      "A full-featured hostel booking dashboard with a modern UI and complete backend integration.",
    image: `${hostel}`,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Cloudinary",
    ],
    liveUrl: "https://hostel-dashboard-48qp.onrender.com/",
    // githubUrl: "#"
  },
  {
    id: 2,
    title: "Cognix LEARN",
    description:
      "A student-focused Learning Management System (LMS) optimized for mobile devices and enriched with modern UI/UX.",
    image: `${lms}`,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Framer Motion",
      "Tailwind CSS",
      "Shadcn",
      "JavaScript",
      "Google Ads",
      "Cloudinary",
    ],
    liveUrl: "https://cognixlearn.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "LUXE",
    description:
      "A complete, full-stack e-commerce application with payment integration and dynamic UI.",
    image: `${e_commerce}`,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe",
    ],
    liveUrl: "https://e-commerce-clientt.onrender.com/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Hosta",
    description:
      "A comprehensive health-related facility management dashboard built with TypeScript and a modern tech stack.",
    image: `${hosta}`,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Cloudinary",
      "TypeScript",
    ],
    liveUrl: "https://hosta-dashboard.onrender.com/",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-black/30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold tracking-tighter"
            >
              My Projects
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-primary mx-auto"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Here are some of my recent projects. Each project is unique and
              solves specific problems.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group h-full p-0 overflow-hidden">
                  {/* Image section */}
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex items-center gap-2"
                        >
                          <Rocket className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Text section */}
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
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
            <Button >
              <a href="https://github.com/MuhammedSafvanMP" target="_blank" rel="noreferrer">
                <Github className="m-auto h-4 w-4 " />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>


        
      </div>
    </section>
  );
}
