import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
              Mimix your audience.
              <br />
              Maximize your launch.
            </h1>
            <p className="text-lg md:text-xl text-gray mb-8 max-w-2xl mx-auto">
              Instantly simulate your target audience using AI personas, delivering feedback responses in minutes so you can validate ideas with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#get-started" className="glass-button bg-primary text-white hover:bg-primary/90">
                Get Started Free
              </Link>
              <Link href="#demo" className="glass-button">
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Validate ideas in minutes, not months
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: 'Instant Feedback',
    description: 'Get comprehensive feedback from AI personas in minutes instead of waiting weeks for traditional testing.'
  },
  {
    title: 'AI Personas',
    description: 'Access a diverse fleet of AI personas that accurately simulate your target audience behaviors.'
  },
  {
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with detailed analytics and actionable recommendations.'
  }
]