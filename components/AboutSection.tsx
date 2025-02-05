import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Star, Music } from "lucide-react"

const features = [
  {
    title: "Komunitas JKT48",
    description: "Mendukung JKT48 dengan penuh semangat dan dedikasi",
    icon: Heart,
  },
  {
    title: "Pertemuan Fans",
    description: "Mengadakan gathering dan acara bersama",
    icon: Users,
  },
  {
    title: "Theater Support",
    description: "Mendukung pertunjukan theater JKT48",
    icon: Star,
  },
  {
    title: "Event Support",
    description: "Berpartisipasi dalam berbagai event JKT48",
    icon: Music,
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">About YUKS48</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-gray-700">
          Halo! Kami adalah YUKS48, komunitas yang berdedikasi untuk mendukung JKT48. Bersama-sama kita berbagi
          kebahagiaan dan semangat untuk idol group kesayangan kita!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white hover:bg-gray-50 transition-colors duration-300 border-2 border-gray-100"
            >
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4 text-red-500" />
                <CardTitle className="text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

