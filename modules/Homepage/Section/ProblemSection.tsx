import { Ban, CalendarX, MessageSquareX, UserX } from 'lucide-react'

const Problems = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: 'Missed Chats',
      description:
        'Pasien potensial lari ke kompetitor karena respon admin lambat atau tidak ada jawaban saat malam hari.',
    },
    {
      icon: CalendarX,
      title: 'Double Bookings',
      description:
        'Jadwal bentrok merusak reputasi profesional klinik Anda dan membuat pasien loyal merasa tidak dihargai.',
    },
    {
      icon: Ban,
      title: 'Account Bans',
      description:
        'Terlalu bergantung pada satu platform sosial media berisiko mematikan jalur komunikasi utama bisnis Anda.',
    },
    {
      icon: UserX,
      title: 'Human Error',
      description:
        'Data pasien yang tidak tercatat rapi atau hilang saat admin resign adalah kerugian aset yang besar.',
    },
  ]

  return (
    <section id="problem" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-snug">
            Bahaya Bergantung Hanya pada Admin Manual
          </h2>
          <p className="text-lg text-muted-foreground">
            Satu detik penundaan adalah satu pasien yang lari ke kompetitor. Jangan biarkan
            operasional manual menghambat pertumbuhan omset Anda.
          </p>
        </div>

        {/* Problems Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problems
