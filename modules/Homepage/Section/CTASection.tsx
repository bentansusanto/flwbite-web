'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useWhatsAppRedirect } from "./hooks/useWhatsAppRedirect";

const CTASection = () => {
  const { openWhatsApp } = useWhatsAppRedirect({
    message:
      'Halo! Saya tertarik dengan layanan Flwbite untuk klinik saya. Bisakah Anda membantu saya?',
  })
  const benefits = [
    "Tidak perlu keahlian teknis",
    "Setup dalam 1-2 minggu",
    "Support prioritas 24/7",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-snug">
            Jangan Biarkan Kompetitor Mendahului Anda!
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Pasar terus berubah makin cepat. Setiap hari Anda menunda, calon pasien Anda
            bisa saja pergi ke klinik kompetitor yang lebih canggih.
          </p>

          {/* Benefits */}
          {/* <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="w-5 h-5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={'#pricing'}
              className="bg-white hover:bg-blue-600 text-blue-500 text-base font-bold px-8 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all"
            >
              Bantu Sekarang
            </a>
          </div>

          {/* Note */}
          <p className="mt-6 text-sm text-primary-foreground/60">
            Tidak ada biaya apapun. Konsultasi 100% gratis tanpa commitment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
