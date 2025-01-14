import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-[70vh] flex items-center" style={{backgroundImage: "url('https://avada.website/real-estate/wp-content/uploads/sites/176/2023/09/dream-houses.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Find Your Dream Home</h1>
        <p className="text-xl text-white mb-8">Discover the perfect property in your ideal location</p>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <Input type="text" placeholder="Enter location, property type, or keywords" className="flex-grow bg-white" />
            <Button size="lg" className="md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

