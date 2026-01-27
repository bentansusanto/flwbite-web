import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQSection = () => {
  const faqs = [
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk development website?',
      answer:
        'Waktu development website dapat bervariasi tergantung pada kompleksitas website dan jumlah fitur yang diminta. Umumnya dalam 7-21 hari kerja.',
    },
    {
      question: 'Apakah ada kontrak jangka panjang?',
      answer: 'Ya, ada peluang untuk kontrak jangka panjang, tergantung kesepakatan bersama.',
    },
    {
      question: 'Apakah website bisa di custom sesuai brand saya?',
      answer: 'Bisa banget. Website dibuat menyesuaikan warna, gaya, dan identitas bisnismu.',
    },
    {
      question: 'Apakah saya perlu menyediakan konten untuk website?',
      answer:
        'Tentu saja. Anda perlu menyediakan konten untuk website, seperti teks, gambar, video, dan informasi lainnya.',
    },
    {
      question: 'Ada support setelah website selesai?',
      answer: 'Tentu saja. Ada support ringan setelah maintenance.',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-light text-primary text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
