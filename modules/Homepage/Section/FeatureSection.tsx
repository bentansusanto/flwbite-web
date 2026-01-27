import { Check, ChevronUp, Gauge, Play, Search, TrendingUp } from 'lucide-react'

const Features = () => {
  const benefits = [
    'Website yang menjual 24/7',
    'Sistem appointment otomatis dengan payment online',
    'Dashboard analytics real-time',
    'CMS yang mudah untuk memanage website blog',
  ]

  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Preview */}
          <div className="relative lg:pl-8 animate-float">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-card rounded-3xl shadow-elevated p-6 border border-border/50">
                <div className="space-y-5">
                  {/* Header with Website Performance */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Gauge className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Website Performance</p>
                        <p className="text-xl font-bold">98/100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
                      <ChevronUp className="w-4 h-4" />
                      <span>+12</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* SEO Ranked Card */}
                    <div className="bg-orange-light rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        <Search className="w-8 h-8 text-primary/20" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">SEO Ranking</p>
                      <p className="text-2xl font-bold text-primary">#1</p>
                      <p className="text-xs text-primary font-medium">Google Page 1</p>
                      <div className="mt-2 flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                        ))}
                      </div>
                    </div>

                    {/* Increase Omset Card */}
                    <div className="bg-green-50 rounded-2xl p-4 relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        <TrendingUp className="w-8 h-8 text-green-500/20" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">Omset Naik</p>
                      <p className="text-2xl font-bold text-green-600">+127%</p>
                      <p className="text-xs text-green-600 font-medium">vs bulan lalu</p>
                      <div className="mt-2 h-1 bg-green-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium">Traffic Website</p>
                      <span className="text-xs text-primary bg-orange-500/10 px-2 py-0.5 rounded-full">
                        Live
                      </span>
                    </div>
                    <div className="h-24 flex items-end gap-2">
                      {[35, 55, 45, 70, 60, 85, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-lg transition-all duration-300"
                          style={{
                            height: `${height}%`,
                            background:
                              i === 6
                                ? 'linear-gradient(to top, hsl(var(--blue-medium)), hsl(var(--blue-medium)))'
                                : 'hsl(var(--blue-medium) / 0.2)',
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Sen</span>
                      <span>Sel</span>
                      <span>Rab</span>
                      <span>Kam</span>
                      <span>Jum</span>
                      <span>Sab</span>
                      <span className="text-primary font-medium">Min</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - SEO Ranked */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Search className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">SEO Ranked #1</p>
                    <p className="text-xs text-muted-foreground">15 keywords</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Performance */}
              <div
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-card p-4 border border-border/50"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-light rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Omset +100%</p>
                    <p className="text-xs text-muted-foreground">Bulan ini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-2 order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">
              Fitur Unggulan
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-snug">
              Bayangkan Jika Klinik Anda <span className="text-gradient">Full Booked</span> Setiap
              Hari
            </h2>
            <p className="text-lg text-muted-foreground">
              Bagaimana rasanya bangun tidur dan melihat notifikasi booking masuk terus tanpa henti?
              Dengan sistem kami, itu bukan mimpi lagi.
            </p>

            <ul className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all flex items-center gap-2">
                <Play className="w-5 h-5 " />
                Lihat Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
