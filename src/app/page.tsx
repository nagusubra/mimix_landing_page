import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

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
            <div className="mb-8 flex justify-center">
              <Image
                src="/mimix_synth_heads_logo_transparent_background_png copy.png"
                alt="Mimix Synthetic Heads"
                width={200}
                height={200}
                className="w-auto h-32 md:h-40"
                priority
              />
            </div>
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

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            How Mimix Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="glass-card text-center">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${plan.price}<span className="text-lg text-gray">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray">{feature}</li>
                  ))}
                </ul>
                <Link href="#get-started" 
                  className={`block glass-button ${
                    plan.popular ? 'bg-primary text-white' : ''
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-background/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <Link href="https://instagram.com/mimixai" className="glass-button p-3">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com/mimixai" className="glass-button p-3">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/company/mimixai" className="glass-button p-3">
              <Linkedin className="w-6 h-6" />
            </Link>
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

const howItWorks = [
  {
    title: 'Define Your Audience',
    description: 'Specify your target audience demographics, interests, and behaviors.'
  },
  {
    title: 'Create Scenarios',
    description: 'Set up specific scenarios and questions for your AI personas to evaluate.'
  },
  {
    title: 'Get Insights',
    description: 'Receive detailed feedback and actionable insights within minutes.'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    features: [
      '100 AI responses/month',
      '5 AI personas',
      'Basic analytics',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: 49,
    popular: true,
    features: [
      'Unlimited AI responses',
      '20 AI personas',
      'Advanced analytics',
      'Priority support',
      'Custom scenarios'
    ]
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Unlimited everything',
      'Custom AI personas',
      'API access',
      'Dedicated support',
      'Custom integrations'
    ]
  }
]