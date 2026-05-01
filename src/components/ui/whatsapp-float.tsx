import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const WA_NUMBER = "628987749739";
const WA_MESSAGE = "Halo MAJIHOUSE, saya ingin konsultasi project.";
const SHOW_AFTER_PX = 240;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type WhatsAppFloatProps = {
  phone?: string;
  message?: string;
  className?: string;
};

export function WhatsAppFloat({
  phone = WA_NUMBER,
  message = WA_MESSAGE,
  className,
}: WhatsAppFloatProps) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.gtag?.("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "floating_button",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={cn("fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6", className)}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp MAJIHOUSE"
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative flex items-center"
          >
            {/* Pulse rings */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping motion-reduce:hidden"
              style={{ animationDuration: "2.4s" }}
            />

            {/* Tooltip (desktop only) */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-md md:block"
                >
                  Chat dengan kami
                  <span className="absolute right-[-4px] top-1/2 size-2 -translate-y-1/2 rotate-45 border-r border-t bg-card" />
                </motion.span>
              )}
            </AnimatePresence>

            {/* Button */}
            <span
              className={cn(
                "relative flex size-13 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] ring-1 ring-black/5",
                "transition-transform duration-200 group-hover:scale-110 group-active:scale-95",
                "md:size-14"
              )}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6 fill-white md:size-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              {/* Online dot */}
              <span
                aria-hidden="true"
                className="absolute -top-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full bg-green-500 ring-2 ring-background"
              >
                <span className="size-1.5 rounded-full bg-white" />
              </span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
