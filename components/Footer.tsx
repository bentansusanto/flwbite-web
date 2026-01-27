import Image from 'next/image'
import { Icons } from './icons'

const Footer = () => {
  const links = {
    Quicklink: ['Problem', 'Solution', 'Features', 'Pricing', 'FAQ'],
    Services: ['Web Appointment System', 'SEO Service', 'Ads Management'],
  }

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Image src="/images/logo-sovinens.svg" alt="Logo" width={50} height={50} />
              </div>
              <span className="text-2xl font-bold text-background">Sovinens</span>
            </a>
            <p className="text-background/60 mb-6 max-w-sm">
              Membantu klinik di Indonesia untuk tumbuh dan berkembang melalui solusi digital yang
              terintegrasi.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex text-blue-500 items-center justify-center hover:bg-white transition-colors"
              >
                <Icons.tiktok className="w-5 h-5 fill-current" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex text-blue-500 items-center justify-center hover:bg-white transition-colors"
              >
                <Icons.instagram className="w-5 h-5 stroke-current" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links)
            .slice(0, 3)
            .map(([category, items]) => (
              <div key={category}>
                <h4 className="font-semibold text-background mb-4">{category}</h4>
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-background/60 hover:text-background transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-background/40 text-sm text-center">
            © {new Date().getFullYear()} Sovinens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
