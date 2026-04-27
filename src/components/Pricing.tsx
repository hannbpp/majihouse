import { motion } from "motion/react";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Lite",
    tagline: "Buat UMKM & personal brand yang baru mau go-online.",
    price: "Mulai 1.5jt",
    priceNote: "/proyek",
    features: [
      "Landing page 1–3 section",
      "Desain mobile-first",
      "Tombol WA & form kontak",
      "Setup domain + hosting",
      "Revisi 2x sampai sreg",
    ],
    cta: "Mulai Konsultasi",
    href: "https://wa.me/628987749739",
  },
  {
    name: "Bisnis",
    tagline: "Buat brand yang udah jalan dan siap scale lebih serius.",
    price: "Mulai 4jt",
    priceNote: "/proyek",
    features: [
      "Web app multi-page lengkap",
      "Admin dashboard sederhana",
      "Database + autentikasi user",
      "Integrasi WA / Email / Maps",
      "SEO dasar + Google Analytics",
      "Revisi 4x + support 1 bulan",
    ],
    cta: "Pilih Paket Ini",
    href: "https://wa.me/628987749739",
    popular: true,
  },
  {
    name: "Studio",
    tagline: "Buat startup & komunitas yang butuh sistem custom.",
    price: "Mulai 8jt",
    priceNote: "/proyek",
    features: [
      "Custom system + REST API",
      "UI/UX design system konsisten",
      "Payment gateway / booking flow",
      "Realtime data & dashboard",
      "Deploy + monitoring",
      "Support 3 bulan",
    ],
    cta: "Diskusi Proyek",
    href: "https://wa.me/628987749739",
  },
  {
    name: "Korporasi",
    tagline: "Buat enterprise & komunitas skala nasional.",
    price: "Custom",
    priceNote: "quote",
    features: [
      "Sistem informasi terintegrasi",
      "Multi-role + advanced security",
      "API & integrasi pihak ke-3",
      "Audit, training, dokumentasi",
      "Priority support 24/7",
      "Retainer maintenance bulanan",
    ],
    cta: "Hubungi Tim",
    href: "https://wa.me/628987749739",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full bg-background text-foreground py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14"
        >
          <div className="border py-1 px-4 rounded-lg text-sm mb-5">
            Investasi
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Pilih paket yang sat-set.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Kami mengutamakan transparansi, kebutuhan dan pengalaman user.
            Konsultasi pertama selalu gratis lho!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all",
                tier.popular
                  ? "border-foreground bg-foreground text-background shadow-2xl scale-[1.02]"
                  : "border-border bg-card hover:border-foreground/40"
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-foreground px-4 py-1 text-[10px] font-bold uppercase tracking-widest border border-border">
                  Terpopuler
                </span>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-bold tracking-tight">
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "text-xs mt-1.5",
                    tier.popular
                      ? "text-background/70"
                      : "text-muted-foreground"
                  )}
                >
                  {tier.tagline}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl md:text-4xl font-black tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-xs",
                      tier.popular
                        ? "text-background/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {tier.priceNote}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckIcon
                      className={cn(
                        "size-4 mt-0.5 shrink-0",
                        tier.popular
                          ? "text-background"
                          : "text-foreground/70"
                      )}
                    />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full"
                variant={tier.popular ? "secondary" : "default"}
                asChild
              >
                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
          *Belum cocok sama paket di atas? Tenang, kami juga buka diskusi
          custom kok! chat aja langsung, ntar kita racik bareng.
        </p>
      </div>
    </section>
  );
}
