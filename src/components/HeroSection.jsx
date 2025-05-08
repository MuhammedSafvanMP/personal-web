"use client"

import { useRef } from "react"
import { motion, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF, Environment } from "@react-three/drei"
import { Button } from "./ui/button"
import { RotateWords } from "./motionAnimation/RotateWords"

function Model() {
  // Note: In a real project, you'd need to provide your own 3D model
  // For this example, we're assuming a model is available
  const { scene } = useGLTF("/models/duck.glb")
  return <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />
}

export default function HeroSection({ scrollYProgress }) {
  const ref = useRef(null)
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* Comment out the Model component if you don't have a 3D model */}
          {/* <Model /> */}
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <motion.div className="container relative z-10 px-4 md:px-6 text-center" style={{ y: textY, opacity }} ref={ref}>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Hello, I'm</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Muhammed Safvan MP</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl mb-6 text-muted-foreground"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RotateWords  words={["MERN", "DJango", "Full Stack", "Frontend", "Backend"]} text="Developer" />
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        style={{ opacity }}
      >
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  )
}
