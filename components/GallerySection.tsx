"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface GalleryItem {
  id: number
  title: string
  description: string
  imageUrl: string
}

const GallerySection = () => {
  const [visibleImages, setVisibleImages] = useState(4)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Ngipen Bareng",
      description: "Ngipen bareng",
      imageUrl:
        "ngipen1.jpg",
    },
    {
      id: 2,
      title: "Trio Gondrong",
      description: "Trio Gondrong",
      imageUrl:
        "triogondrong.jpg",
    },
    {
      id: 3,
      title: "Trio Gondrong",
      description: "Trio Gondrong",
      imageUrl:
        "triogondrong.jpg",
    },
    {
      id: 4,
      title: "Trio Gondrong",
      description: "Trio Gondrong",
      imageUrl:
        "triogondrong.jpg",
    },
    {
      id: 5,
      title: "Trio Gondrong",
      description: "Trio Gondrong",
      imageUrl:
        "triogondrong.jpg",
    },
    {
      id: 6,
      title: "Trio Gondrong",
      description: "Trio Gondrong",
      imageUrl:
        "triogondrong.jpg",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.slice(0, visibleImages).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <CardDescription className="text-gray-300">{item.description}</CardDescription>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        {visibleImages < galleryItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleImages((prev) => Math.min(prev + 4, galleryItems.length))}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection

