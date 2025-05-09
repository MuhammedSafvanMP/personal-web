import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export function RotateWords({
  text = "Developer",
  words = ["MERN", "Django", "Full Stack", "Frontend", "Backend"],
}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center justify-center mx-auto gap-1.5">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
      {text}
    </div>
  )
}
