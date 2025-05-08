"use client"

import { useRef, useEffect } from "react"

export default function StarsBackground() {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
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
      // Regenerate stars when resizing
      generateStars()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Generate stars
    function generateStars() {
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 2000) // Adjust density
      const stars = []

      for (let i = 0; i < starCount; i++) {
        const star = {
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
          color: getStarColor(),
        }
        stars.push(star)
      }

      // Add a few larger "special" stars
      for (let i = 0; i < 20; i++) {
        const star = {
          id: starCount + i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.5,
          speed: Math.random() * 0.02 + 0.005,
          color: getStarColor(true),
        }
        stars.push(star)
      }

      starsRef.current = stars
    }

    function getStarColor(special = false) {
      if (special) {
        // Special stars can be slightly colored
        const colors = ["#8a9cff", "#ff9c8a", "#9cff8a", "#ffffff"]
        return colors[Math.floor(Math.random() * colors.length)]
      }
      // Regular stars are white with slight variations
      const brightness = Math.floor(Math.random() * 30 + 225)
      return `rgb(${brightness}, ${brightness}, ${brightness + Math.floor(Math.random() * 30)})`
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      starsRef.current.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.opacity
        ctx.fill()

        // Move stars
        star.x -= star.speed * (canvas.width / 100)

        // Reset position when star goes off screen
        if (star.x < -10) {
          star.x = canvas.width + 10
          star.y = Math.random() * canvas.height
        }

        // Twinkle effect - slightly vary opacity
        star.opacity += Math.random() * 0.01 - 0.005
        if (star.opacity < 0.2) star.opacity = 0.2
        if (star.opacity > 1) star.opacity = 1
      })

      // Add occasional shooting stars
      if (Math.random() < 0.005) {
        createShootingStar(ctx, canvas.width, canvas.height)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    function createShootingStar(ctx, width, height) {
      let x = width
      let y = Math.random() * height * 0.6 // Upper 60% of screen
      const length = Math.random() * 80 + 100
      const angle = Math.PI / 8 + (Math.random() * Math.PI) / 8 // Angle between PI/8 and PI/4
      const speed = Math.random() * 15 + 10
      let opacity = 1

      const shootingStar = () => {
        if (opacity <= 0) return

        ctx.strokeStyle = "rgba(255, 255, 255, " + opacity + ")"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x, y)

        // Calculate end point based on angle and length
        const endX = x - Math.cos(angle) * length
        const endY = y + Math.sin(angle) * length

        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Move shooting star
        x -= speed * Math.cos(angle)
        y += speed * Math.sin(angle)

        // Fade out
        opacity -= 0.01

        if (opacity > 0) {
          requestAnimationFrame(shootingStar)
        }
      }

      shootingStar()
    }

    // Start animation
    generateStars()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" style={{ pointerEvents: "none" }} />
      {/* Add a subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
    </div>
  )
}
