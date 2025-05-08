"use client"

import { useRef, useEffect } from "react"

export default function NebulaEffect() {
  const canvasRef = useRef(null)
  const animationRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create nebula particles
    const particleCount = 100
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 100 + 50
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: getNebulaColor(),
        velocity: {
          x: (Math.random() - 0.5) * 0.05,
          y: (Math.random() - 0.5) * 0.05,
        },
      })
    }

    function getNebulaColor() {
      const colors = [
        "rgba(63, 81, 181, 0.1)", // Indigo
        "rgba(103, 58, 183, 0.1)", // Deep Purple
        "rgba(156, 39, 176, 0.1)", // Purple
        "rgba(33, 150, 243, 0.1)", // Blue
        "rgba(0, 188, 212, 0.1)", // Cyan
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebula particles
      particles.forEach((particle) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius)
        gradient.addColorStop(0, particle.color.replace("0.1", "0.3"))
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()

        // Move particles
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Wrap around edges
        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-30" style={{ pointerEvents: "none" }} />
}
