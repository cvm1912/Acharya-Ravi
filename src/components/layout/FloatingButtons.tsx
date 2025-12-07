import { Phone, MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+919263218599"
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/919263218599"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};
