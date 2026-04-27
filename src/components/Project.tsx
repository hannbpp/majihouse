import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Domain = "web" | "creative";

type Project = {
  title: string;
  domain: Domain;
  category: string;
  type: string;
  year: string;
  tech: string[];
  image: string;
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "IT FEST 2025",
    domain: "web",
    category: "Landing Page",
    type: "Event Microsite",
    year: "2025",
    tech: ["React", "Vite", "GSAP"],
    image: "/images/portfolio/itfest-2025.png",
    description:
      "Microsite event teknologi tahunan. Animasi scroll halus, timeline interaktif, dan flow registrasi yang ringan biar peserta nggak kabur.",
    highlights: [
      "Animasi GSAP custom buat hero & timeline",
      "Integrasi form pendaftaran realtime",
      "Mobile-first, load di bawah 1.5s",
    ],
  },
  {
    title: "KBMDSI 2025",
    domain: "web",
    category: "Landing Page",
    type: "Kompetisi Nasional",
    year: "2025",
    tech: ["Laravel", "Blade", "Tailwind"],
    image: "/images/portfolio/kbmdsi-2025.png",
    description:
      "Platform kompetisi mahasiswa nasional. Multi-page registrasi, panel juri, dan announcement result. Dipercaya menangani ratusan peserta dari berbagai daerah.",
    highlights: [
      "Multi-role: peserta, juri, panitia",
      "Announcement result live tanpa reload",
      "Server-rendered Blade buat SEO",
    ],
  },
  {
    title: "Marirasa Bakpao",
    domain: "web",
    category: "Landing Page",
    type: "F&B Microsite",
    year: "2024",
    tech: ["HTML/CSS", "WA API"],
    image: "/images/portfolio/marirasa.png",
    description:
      "Landing page UMKM kuliner dengan integrasi pemesanan langsung via WhatsApp. Ringan, cepat, dan ramah operator non-tech.",
    highlights: [
      "Order langsung via WA tanpa cart",
      "Galeri menu dengan harga update",
      "Optimasi load di koneksi pas-pasan",
    ],
  },
  {
    title: "IFL Chapter Malang",
    domain: "web",
    category: "CMS & Full-stack",
    type: "Community Platform",
    year: "2024",
    tech: ["Laravel", "MySQL", "Livewire"],
    image: "/images/portfolio/ifl-malang.png",
    description:
      "Platform komunitas full-fledged dengan event management, member directory, dan content hub. Backend solid pakai Laravel + MySQL.",
    highlights: [
      "Sistem keanggotaan + verifikasi",
      "Modul event RSVP & kalender",
      "CMS internal buat tim konten",
    ],
  },
  {
    title: "Karvin Badminton",
    domain: "web",
    category: "CMS & Full-stack",
    type: "Booking System",
    year: "2024",
    tech: ["Laravel", "MySQL"],
    image: "/images/portfolio/karvin-badminton.png",
    description:
      "Sistem booking lapangan badminton lengkap. Pelanggan bisa cek slot, bayar, dan dapat reminder otomatis. Operator dapet panel buat manage harian.",
    highlights: [
      "Cek slot realtime & booking online",
      "Reminder otomatis via WA/email",
      "Panel operator buat schedule harian",
    ],
  },
  {
    title: "SIPENYU Presensi",
    domain: "web",
    category: "CMS & Full-stack",
    type: "Sistem Presensi",
    year: "2024",
    tech: ["Laravel", "MySQL"],
    image: "/images/portfolio/sipenyu-presensi.jpg",
    description:
      "Sistem presensi digital untuk instansi dengan multi-role admin, supervisor, dan staff. Laporan kehadiran exportable & analytics ringkas.",
    highlights: [
      "Presensi geo-tag + foto verifikasi",
      "Laporan kehadiran exportable",
      "Multi-role: admin, supervisor, staff",
    ],
  },
  {
    title: "Akademi Competition",
    domain: "web",
    category: "E-commerce",
    type: "Payment Gateway",
    year: "2024",
    tech: ["Laravel", "Midtrans"],
    image: "/images/portfolio/akademi-competition.png",
    description:
      "Sistem pendaftaran kompetisi berbayar dengan integrasi Midtrans. Auto-generate invoice, status pembayaran realtime, dan e-ticket.",
    highlights: [
      "Integrasi Midtrans (VA, e-wallet, QRIS)",
      "Auto-invoice + e-ticket PDF",
      "Webhook status pembayaran realtime",
    ],
  },
  {
    title: "Karvin Payment",
    domain: "web",
    category: "E-commerce",
    type: "Payment Flow",
    year: "2024",
    tech: ["Midtrans", "Laravel"],
    image: "/images/portfolio/karvin-payment.png",
    description:
      "Modul pembayaran terintegrasi untuk operasional Karvin. Mendukung top-up saldo member, pembayaran booking, dan reporting transaksi.",
    highlights: [
      "Top-up saldo member otomatis",
      "Multi-channel pembayaran",
      "Reporting transaksi harian",
    ],
  },
  {
    title: "Inventory System",
    domain: "web",
    category: "Admin Dashboard",
    type: "Stok Multi-Cabang",
    year: "2024",
    tech: ["Laravel", "Livewire", "Tailwind"],
    image: "/images/portfolio/inventory-system.png",
    description:
      "Sistem stok realtime untuk usaha retail multi-cabang. Alert stok minimum, transfer antar gudang, dan laporan harian otomatis.",
    highlights: [
      "Multi-cabang & multi-gudang",
      "Realtime update tanpa reload (Livewire)",
      "Alert otomatis saat stok minimum",
    ],
  },
  {
    title: "Karvin Admin Panel",
    domain: "web",
    category: "Admin Dashboard",
    type: "Operasional UKM",
    year: "2024",
    tech: ["Laravel", "Filament", "MySQL"],
    image: "/images/portfolio/admin-panel.png",
    description:
      "Dashboard admin lengkap buat operasional unit usaha. Booking, member, finance, dan reporting — semua satu panel pakai Filament.",
    highlights: [
      "Booking lapangan + cek slot otomatis",
      "Manajemen member & saldo",
      "Laporan keuangan exportable",
    ],
  },
  {
    title: "NST Project Season 1",
    domain: "creative",
    category: "Visual for Campaign",
    type: "E-Sport Branding",
    year: "2024",
    tech: ["Photoshop", "Illustrator", "After Effects"],
    image: "/images/portfolio/nst-project.jpg",
    description:
      "Identitas visual lengkap untuk turnamen e-sport: logo, kit social media, dan motion graphic. Dipakai konsisten dari opening sampai grand final.",
    highlights: [
      "Logo & brand guideline lengkap",
      "30+ aset social media siap pakai",
      "Motion graphic intro & lower-third",
    ],
  },
  {
    title: "Farewell Kenboy",
    domain: "creative",
    category: "Social Media Design",
    type: "Campaign Visual",
    year: "2024",
    tech: ["Photoshop", "Illustrator"],
    image: "/images/portfolio/farewell-kenboy.jpg",
    description:
      "Seri visual social media buat momen perpisahan komunitas e-sport. Tone hangat, palet konsisten, dan tipografi yang pas buat storytelling.",
    highlights: [
      "Series 8+ post Instagram konsisten",
      "Story template reusable",
      "Print-ready buat thank-you card",
    ],
  },
  {
    title: "Pioner Gids",
    domain: "creative",
    category: "Social Media Design",
    type: "Branded Content",
    year: "2024",
    tech: ["Photoshop", "Illustrator"],
    image: "/images/portfolio/pioner-gids.jpg",
    description:
      "Content kit social media untuk komunitas e-sport. Mulai dari announcement match, recap result, sampai highlight player.",
    highlights: [
      "Template match-day siap edit",
      "Player card customizable",
      "Recap weekly auto-format",
    ],
  },
];

const webCategories = [
  "Semua",
  "Company Profile",
  "Landing Page",
  "Portfolio",
  "E-commerce",
  "CMS & Full-stack",
  "Personal Website",
  "Admin Dashboard",
  "UI/UX Design",
];

const creativeCategories = [
  "Semua",
  "Content Creation",
  "Brand Strategy",
  "Graphic Design",
  "Motion Graphic",
  "Photography",
  "Social Media Design",
  "Visual for Campaign",
  "Video Production",
];

const tabs: { id: Domain; label: string; sub: string }[] = [
  {
    id: "web",
    label: "Web Development",
    sub: "Website, sistem, dashboard, & UI/UX.",
  },
  {
    id: "creative",
    label: "Creative & Social Media",
    sub: "Branding, konten, motion, & campaign visual.",
  },
];

export function Project() {
  const [domain, setDomain] = useState<Domain>("web");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState<Project | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const categories = domain === "web" ? webCategories : creativeCategories;

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const gap = 24;
    track.scrollBy({
      left: (card.offsetWidth + gap) * dir,
      behavior: "smooth",
    });
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (p.domain !== domain) return false;
      const matchCat =
        activeCategory === "Semua" || p.category === activeCategory;
      const matchSearch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [domain, activeCategory, search]);

  const switchDomain = (next: Domain) => {
    setDomain(next);
    setActiveCategory("Semua");
    setSearch("");
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0, behavior: "auto" });
    requestAnimationFrame(updateScrollState);
  }, [domain, activeCategory, search]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateScrollState();
    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="project"
      className="relative w-full bg-background text-foreground py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <div className="border py-1 px-4 rounded-lg text-sm mb-5">
            Karya Kami
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Setiap proyek punya cerita.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            Dari website & sistem operasional sampai branding & social media —
            klik buat lihat detail tiap karya.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="inline-flex p-1 rounded-full border border-border bg-muted/30">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => switchDomain(t.id)}
                className={cn(
                  "relative rounded-full px-5 md:px-7 py-2.5 text-xs md:text-sm font-semibold transition-colors",
                  domain === t.id
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {domain === t.id && (
                  <motion.span
                    layoutId="domainPill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                    }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            {tabs.find((t) => t.id === domain)?.sub}
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <div className="relative w-full max-w-md mx-auto">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama proyek, tipe, atau teknologi..."
              className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${domain}-${activeCategory}-${search}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {filtered.length === 0 ? (
              <div className="text-center py-20 max-w-md mx-auto">
                <p className="text-muted-foreground mb-4">
                  Belum ada proyek di kategori ini yang ditampilkan.
                </p>
                <p className="text-sm text-muted-foreground">
                  Tapi tenang, kami terbuka buat proyek baru —{" "}
                  <a
                    href="https://wa.me/628987749739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    chat aja langsung
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="relative">
                <div
                  ref={trackRef}
                  onScroll={updateScrollState}
                  className={cn(
                    "flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:-mx-8 md:px-8",
                    "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                  )}
                >
                  {filtered.map((p, i) => (
                    <motion.button
                      key={p.title}
                      data-card
                      onClick={() => setActive(p)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: (i % 3) * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn(
                        "group relative shrink-0 snap-start text-left",
                        "w-[85%] sm:w-[60%] md:w-[calc((100%-3rem)/3)]",
                        "flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
                        "transition-all hover:border-foreground/40 hover:shadow-2xl"
                      )}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="rounded-full bg-background/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                            {p.category}
                          </span>
                          <span className="rounded-full bg-background/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                            {p.year}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 size-9 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRightIcon className="size-4 -rotate-45" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 p-5">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold tracking-tight">
                            {p.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {p.type}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {p.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6">
                  <p className="text-xs text-muted-foreground">
                    {filtered.length} proyek · geser atau pakai tombol →
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => scrollByCard(-1)}
                      disabled={!canPrev}
                      aria-label="Sebelumnya"
                      className={cn(
                        "size-11 rounded-full border flex items-center justify-center transition-all",
                        canPrev
                          ? "border-border hover:border-foreground hover:bg-foreground hover:text-background"
                          : "border-border/50 text-muted-foreground/40 cursor-not-allowed"
                      )}
                    >
                      <ArrowLeftIcon className="size-4" />
                    </button>
                    <button
                      onClick={() => scrollByCard(1)}
                      disabled={!canNext}
                      aria-label="Berikutnya"
                      className={cn(
                        "size-11 rounded-full border flex items-center justify-center transition-all",
                        canNext
                          ? "border-border hover:border-foreground hover:bg-foreground hover:text-background"
                          : "border-border/50 text-muted-foreground/40 cursor-not-allowed"
                      )}
                    >
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

type ModalProps = {
  project: Project;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Tutup detail"
          className="absolute top-4 right-4 z-10 size-9 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
        >
          <XIcon className="size-4" />
        </button>

        <div className="relative aspect-video bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              {project.category}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              {project.year}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              {project.type}
            </span>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-3 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Yang kami kerjakan
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm md:text-base">
                  <span className="text-foreground/40">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <a
                href="https://wa.me/628987749739"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mau yang serupa?
                <ExternalLinkIcon className="size-4 ms-2" />
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" onClick={onClose}>
              Tutup
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
