'use client'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useWhatsAppRedirect } from './hooks/useWhatsAppRedirect'

const PricingSection = () => {
   const { openWhatsApp } = useWhatsAppRedirect({
      message:
        'Halo! Saya tertarik dengan layanan paket starter flwbite untuk klinik saya. Bisakah Anda membantu saya?',
    })
  const plan = {
    name: '💎 Managed Clinic Growth',
    price: 'Rp 1.750.000',
    period: '/bulan',
    description: 'Mulai sekarang untuk memiliki website klinik profesional tanpa ribet dan siap berkembang.',
    features: [
      'Custom website appointment template',
      'Dashboard analytics real-time',
      'SEO managed (technical & on-page)',
      'Local SEO basic (Google Maps setup)',
      'Hosting & server managed',
      'Domain klinik & SSL security',
      'Maintenance & monitoring rutin',
      'Minor update konten (1–2x / bulan)',
      'Basic ads management (setup & optimasi ringan)'
    ],
    cta: 'Bantu Sekarang',
    penting: ['Budget iklan minimum 1jt/bulan dan langsung top up di ads', 'minimal kontrak 6 bulan'],
  }

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium mb-4">
            Harga & Paket
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Investasi Cerdas, <span className="text-gradient">Bukan Biaya</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih paket yang sesuai dengan tahap pertumbuhan klinik Anda. Setiap rupiah yang Anda
            investasikan akan kembali berlipat ganda.
          </p>
        </div>

        {/* Single Pricing Card - Centered */}
        <div className="max-w-md mx-auto">
          <div className="relative p-8 rounded-2xl border transition-all duration-300 bg-white text-primary-foreground border-border/50 shadow-xl">
            {/* Popular Badge */}
            {/* <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-blue-600 text-background px-4 py-1 rounded-full text-sm font-medium">
                Recomendasi
              </span>
            </div> */}

            {/* Plan Info */}
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold mb-2 text-foreground">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-green-500/30">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="default" className="w-full" size="lg" onClick={openWhatsApp}>
              {plan.cta}
            </Button>
            {/* Note Penting */}
            <div className="mt-3 space-y-2 text-[13px] text-muted-foreground">
              {plan.penting.map((item, index) => (
                <p key={index}>
                  <span className="font-bold text-red-500">*</span> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
