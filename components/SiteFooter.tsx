"use client";

import {
  Facebook01Icon,
  InstagramIcon,
  WhatsappIcon,
} from "hugeicons-react";
import { navLinks } from "@/components/SiteHeader";
import type { SectionId } from "@/app/page";

interface SiteFooterProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export default function SiteFooter({ activeSection, onNavigate }: SiteFooterProps) {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-1">
             <h3 className="font-display text-2xl font-bold tracking-widest mb-6">Nuvemn<span className="text-[var(--accent-primary)]"> Studio</span></h3>
             <p className="font-mono text-xs text-white/40 leading-relaxed uppercase">
              Páginas web a la medida de tus necesidades<br />
               Chiclayo, Perú<br />
               EST. 2026
             </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-mono text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-6">Accesos Rápidos</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.section)}
                    className={`font-light text-sm transition-colors ${activeSection === link.section
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
             <h4 className="font-mono text-xs text-[var(--accent-primary)] uppercase tracking-widest mb-6">Conecta con nosotros</h4>
             <div className="flex gap-4">
                {[
                  // { label: "LinkedIn", href: "#", Icon: Linkedin02Icon },
                  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61585986372476", Icon: Facebook01Icon },
                  { label: "WhatsApp", href: "https://wa.me/51924391079", Icon: WhatsappIcon },
                  { label: "Instagram", href: "https://www.instagram.com/nuvemn_studio/?utm_source=ig_web_button_share_sheet", Icon: InstagramIcon },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-colors"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center">
           <p className="font-mono text-xs text-white/20 uppercase tracking-widest">
             © 2026 Nuvemn Studio. Todos los derechos reservados.
           </p>
        </div>
      </div>
    </footer>
  );
}
