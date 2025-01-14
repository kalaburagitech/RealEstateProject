import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          DreamHome
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/buy" className="text-gray-600 hover:text-primary">Buy</Link>
          <Link href="/rent" className="text-gray-600 hover:text-primary">Rent</Link>
          <Link href="/sell" className="text-gray-600 hover:text-primary">Sell</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

