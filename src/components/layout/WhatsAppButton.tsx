import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
        <a
            href="https://wa.me/917983118393?text=Hi%2C%20Natraaj%20World%20Packers%20%26%20Movers.%20Can%20we%20discuss%20about%20relocation%20service%20offered%20by%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="
            pointer-events-auto
            flex items-center gap-3 md:gap-4 
            bg-gradient-to-r from-green-500 to-green-600 
            hover:from-green-600 hover:to-green-700 
            text-white font-semibold 
            py-3 px-5 md:py-4 md:px-8 
            rounded-full 
            shadow-2xl 
            hover:shadow-green-500/50 
            transition-all duration-300 
            hover:scale-105 
            group
            "
        >
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md group-hover:animate-pulse"
        />

        <div className="hidden md:block text-left">
          <div className="text-lg md:text-xl font-bold">WhatsApp</div>
          <div className="text-sm md:text-base opacity-90">Chat with us now!</div>
        </div>

        <span className="md:hidden text-sm font-medium">Chat</span>
      </a>
    </div>
  );
}