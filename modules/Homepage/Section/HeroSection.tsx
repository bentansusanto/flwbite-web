'use client'
import { Gauge, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useWhatsAppRedirect } from './hooks/useWhatsAppRedirect'

const Hero = () => {
  const { openWhatsApp } = useWhatsAppRedirect({
    message:
      'Halo! Saya tertarik dengan layanan Flwbite untuk klinik saya. Bisakah Anda membantu saya?',
  })
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-100/60 to-white px-4 sm:px-6 lg:px-0">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Centered Content */}
          <div className="space-y-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse-soft" />
              <span className="text-[15px] font-medium text-blue-500">
                Klaim Slot Optimasi SEO Clinic
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto font-bold leading-tight text-foreground">
                Berhenti Kehilangan Pasien Karena{' '}
                <span className="text-gradient">Admin Telat Balas!</span>
              </h1>
              <p className="text-[15px] text-muted-foreground max-w-2xl mx-auto">
                Sistem reservasi otomatis dan strategi marketing menyeluruh untuk klinik kecantikan
                & gigi. Booking 24/7 tanpa perlu nunggu admin bangun.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href={'#pricing'}
                className="bg-blue-500 hover:bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all"
              >
                Bantu Sekarang
              </a>
            </div>

            {/* Video Presentation */}
            <div className="relative pt-8">
              <div className="relative group">
                {/* Video Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900">
                  <div className="aspect-video relative">
                    {/* Video Thumbnail with Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqp4-HK0WOG8Hn56e_9M8o-vqxopkqcVFOndMdAkJMQHRAnTqHXTwjSboWpYKewqUG4MUS4vhw_d6BPmmtuuLFDrvKpeORUtVloqX_rz12oebQhGyRFHouR7UCReV9-zWZX5XqKxNIQyPn2WsV2KPeV24Du5tGewvcu17PZtLbCrYkGEMXWX4LHxxwAelr0kvJcWFUrdaA9GUEkDxhNmRfvJw4dN0uv_wDoRmdxC49iKCOBuGpYrwPLwCBgbkUzxMzWHGVu8Aw2SER')",
                      }}
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
                      <div className="relative">
                        {/* Pulsing Ring Effect */}
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-ping" />

                        {/* Main Play Button */}
                        <div className="relative size-20 md:size-24 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                      2:30
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -left-4 bg-card rounded-2xl shadow-xl p-4 border border-border/50 animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">+100% Pasien</p>
                      <p className="text-xs text-muted-foreground">dalam 3 bulan</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border/50 animate-fade-in hidden lg:block"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <Gauge className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">24/7 Booking</p>
                      <p className="text-xs text-muted-foreground">Tanpa admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
