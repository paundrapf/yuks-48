"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="YUKS48 Logo"
            width={120}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <button onClick={() => scrollToSection("home")} className="text-gray-800 hover:text-gray-600">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-800 hover:text-gray-600">
            About
          </button>
          <button onClick={() => scrollToSection("gallery")} className="text-gray-800 hover:text-gray-600">
            Gallery
          </button>
          <button onClick={() => scrollToSection("join")} className="text-gray-800 hover:text-gray-600">
            Join Us
          </button>
          <Link href="/admin/login" className="text-gray-800 hover:text-gray-600">
            Admin
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6 text-gray-800" />
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4">
            <button onClick={() => scrollToSection("home")} className="text-gray-800 hover:text-gray-600 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-800 hover:text-gray-600 py-2">
              About
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-gray-800 hover:text-gray-600 py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection("join")} className="text-gray-800 hover:text-gray-600 py-2">
              Join Us
            </button>
            <Link href="/admin/login" className="text-gray-800 hover:text-gray-600 py-2">
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

