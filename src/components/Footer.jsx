"use client"
import { CodeXml, Github,  Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 md:py-16 bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="#home" className="text-xl font-bold">
              $
            </a>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Muhammed Safvan MP. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/MuhammedSafvanMP"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/muhammedsafvanmp7/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <CodeXml className="h-5 w-5" />
            </a>
            <a
              href="mailto:mpmuhammedsafvan@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
