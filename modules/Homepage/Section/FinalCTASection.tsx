import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight } from 'lucide-react'

const FinalCTASection = () => {
  const steps = [
    { number: '1', title: 'Konsultasi Gratis', description: 'Ceritakan kebutuhan klinik Anda' },
    {
      number: '2',
      title: 'Pilih Template & Request Custom',
      description: 'Pilih template dan request perubahan jika diperlukan',
    },
    {
      number: '3',
      title: 'Pilih Paket & Launch',
      description: 'Pilih paket yang sesuai dengan kebutuhan klinik Anda',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ambil Langkah Pertama Menuju Klinik <span className="text-gradient">Sukses</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Satu langkah sederhana bisa mengubah masa depan klinik Anda selamanya. Jangan tunggu
            sampai terlambat.
          </p>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-primary-foreground flex items-center justify-center text-xl font-bold mb-3">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>

          {/* Final CTA */}
          <Button variant="hero" size="xl" className="group">
            Konsultasi Gratis Sekarang
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            Tanpa kartu kredit • Tanpa commitment • 100% gratis
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
