import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray hover:text-primary">Features</Link></li>
              <li><Link href="#pricing" className="text-gray hover:text-primary">Pricing</Link></li>
              <li><Link href="#demo" className="text-gray hover:text-primary">Demo</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray hover:text-primary">About</Link></li>
              <li><Link href="/blog" className="text-gray hover:text-primary">Blog</Link></li>
              <li><Link href="/careers" className="text-gray hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray hover:text-primary">Documentation</Link></li>
              <li><Link href="/help" className="text-gray hover:text-primary">Help Center</Link></li>
              <li><Link href="/guides" className="text-gray hover:text-primary">Guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray hover:text-primary">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray hover:text-primary">Terms</Link></li>
              <li><Link href="/security" className="text-gray hover:text-primary">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray/10 text-center text-gray">
          <p>&copy; {new Date().getFullYear()} Mimix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}