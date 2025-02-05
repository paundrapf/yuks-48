"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const particles = particlesRef.current
    if (!particles) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDuration = `${Math.random() * 2 + 1}s`
      particles.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 3000)
    }

    const interval = setInterval(createParticle, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div ref={particlesRef} className="absolute inset-0" />
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20231001_020357.jpg-OPLD3YwmpSxwaO80cr24zDJaecpodv.jpeg"
            alt="YUKS48 Logo"
            width={400}
            height={133}
            priority
            className="mx-auto w-full max-w-[400px] h-auto"
          />
        </motion.div>
        <motion.p
          className="text-xl mb-8 text-gray-800 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ayo gabung komunitas kami!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-[#FF0000] hover:bg-[#CC0000] text-white"
            onClick={() => {
              const joinSection = document.getElementById("join")
              if (joinSection) {
                joinSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Join Now
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-white to-white opacity-50" />
    </section>
  )
}

export default HeroSection

