import { WhatsappIcon } from "hugeicons-react";

const WHATSAPP_URL = "https://wa.link/0ancyj";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      title="Enviar mensaje por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:bottom-8 md:right-8"
    >
      <WhatsappIcon size={24} strokeWidth={2.2} />
    </a>
  );
}
