import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/mimix_logo_jpg.jpg"
              alt="Mimix Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="glass-button text-sm">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}