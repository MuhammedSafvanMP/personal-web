"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Card, CardContent } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
      { name: "Redux Toolkit", level: 65 },

    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 }
    ],
  },
  {
    id: "design",
    name: "Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Notion", level: 80 },
      { name: "Jira/Trello", level: 60 },
      { name: "Swager", level: 85 },
    ],
  },
  {
    id: "other",
    name: "Other",
    skills: [
      { name: "Git & Git Hub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 85 },
      { name: "Render", level: 85 },
      { name: "Postman", level: 75 },

    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 md:py-32  flex justify-center items-center">
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
              My Skills
            </motion.h2>
            <motion.div variants={itemVariants} className="h-1 w-20 bg-primary mx-auto"></motion.div>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a range of technologies in the web development world, from front-end to back-end and
              design.
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className={"cursor-pointer"}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.skills.map((skill, index) => (
                      <Card key={skill.name} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">{skill.name}</h3>
                            <Badge variant="outline">{skill.level}%</Badge>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 * index }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
