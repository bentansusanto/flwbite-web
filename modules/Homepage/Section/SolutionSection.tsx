import { Calendar, Globe, MessageCircle, MousePointerClick, Rocket, Search } from 'lucide-react'
import Link from 'next/link'

const SolutionSection = () => {
  const solutions = [
    {
      icon: MousePointerClick,
      title: 'Social Media Ads',
      description:
        'Setup dan pengelolaan iklan Instagram & Facebook dengan targeting awal berbasis data dan kebutuhan klinik.',
    },
    {
      icon: Globe,
      title: 'Web System',
      description: 'Website appointment yang 24/7 bisa di booking pasien dan mudah digunakan.',
    },
    {
      icon: MessageCircle,
      title: 'Auto Confirmation',
      description:
        'Memberikan notifikasi otomatis kepada pasien melalui WhatsApp dan email setelah berhasil melakukan booking.',
    },
    {
      icon: Search,
      title: 'Hyper-Local SEO',
      description:
        'Optimasi SEO lokal untuk meningkatkan visibilitas klinik di pencarian Google dan Google Maps.',
    },
    {
      icon: Calendar,
      title: 'Real-time Booking',
      description: 'Integrasi jadwal operasional yang selalu akurat.',
    },
    {
      icon: Rocket,
      title: 'Ads Mastery',
      description: 'Scaling traffic berkualitas untuk konversi tinggi.',
    },
  ]

  return (
    <section id="solution" className="py-16 lg:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium uppercase tracking-wider mb-4">
            The Solution
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Ecosystem Of Success
          </h2>
          <p className="text-lg text-muted-foreground">
            Visualisasi alur otomatisasi yang membawa pasien dari klik iklan hingga ke pintu klinik
            Anda.
          </p>
        </div>

        {/* Solutions Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a href={'#pricing'}

            className="bg-blue-500 hover:bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all"
          >
            Bantu Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
