"use client"

import { motion } from "framer-motion"
import { Instagram, MessageCircle, FileText, FolderOpen } from "lucide-react"

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/yuukss48?igshid=OGQ5ZDc2ODk2ZA==" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.com/invite/47sCA9JNSH" },
  { name: "Main Group", icon: FileText, href: "https://bit.ly/yukkonserangrup" },
  { name: "JKT48 Group", icon: FileText, href: "https://bit.ly/yukkonseranJKT48" },
  {
    name: "Asset Drive",
    icon: FolderOpen,
    href: "https://drive.google.com/drive/folders/1Ej3fPw7T0EUHi_5jRwkFaA_e2mk_Otfr",
  },
  {
    name: "Video Drive",
    icon: FolderOpen,
    href: "https://drive.google.com/drive/folders/1-9BA6K6ho_fwnTXfE7ujxPGXn0Jiu2QZ",
  },
  {
    name: "Photo Drive",
    icon: FolderOpen,
    href: "https://drive.google.com/drive/folders/1-xn_dgt3qsIvEdxJMshkA-XhJqisvCUV",
  },
]

const JoinUsSection = () => {
  return (
    <section id="join" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Join Us</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Connect with Us</h3>
          <p className="mb-8 text-center">
            Join our community on various platforms and stay updated with the latest news and events.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center space-x-2 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <link.icon className="h-6 w-6 text-white" />
                <span className="text-sm hidden sm:inline">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUsSection

