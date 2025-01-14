import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-xl mb-8">Let us help you discover the perfect property that matches your lifestyle and needs.</p>
        <div className="space-x-4">
          <Button variant="secondary" size="lg">Browse Properties</Button>
          <Button variant="outline" size="lg">Contact an Agent</Button>
        </div>
      </div>
    </section>
  )
}

