import { ArrowRightIcon, MessageCircleIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="mx-auto w-full max-w-5xl relative"
      >
        {/* Top Shades */}
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
        >
          <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,color-mix(in_oklch,var(--color-foreground)_8%,transparent),transparent)] contain-strict" />
        </div>

        {/* Bold Faded Side Borders */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
        >
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
          <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent)] absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
        </div>

        {/* main content */}
        <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
          {/* Inner faded guide lines */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full overflow-hidden"
          >
            <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-border to-border md:left-8" />
            <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-border to-border md:right-8" />
            <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:left-12" />
            <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-border/50 to-border/50 md:right-12" />
          </div>

          <a
            className={cn(
              "group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
              "animate-(--animate-fade-in) animate-(--animate-slide-in-from-bottom-10)"
            )}
            href="#work"
          >
            <SparklesIcon className="size-3 text-muted-foreground" />
            <span className="text-xs">Dunia udah ribet, brand kamu jangan</span>
            <span className="block h-5 border-l" />
            <ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
          </a>

          <h1 className="text-center text-4xl tracking-tight md:text-5xl lg:text-6xl text-balance">
            Ubah Mumet Jadi Aset, <br /> Dengan Sat-Set.
          </h1>

          <p className="mx-auto max-w-xl text-center text-base text-foreground/80 tracking-wide sm:text-lg md:text-xl">
            Dari Pontianak, kami bantu brand ambisius tampil
            premium dan tumbuh cepat.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2">
            <Button className="rounded-full" size="lg" variant="secondary" asChild>
              <a href="#contact">
                <MessageCircleIcon className="size-4 mr-2" />
                Mulai Konsultasi Gratis
              </a>
            </Button>
            <Button className="rounded-full" size="lg" asChild>
              <a href="#work">
                Lihat Portfolio
                <ArrowRightIcon className="size-4 ms-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <LogosSection />
    </>
  );
}

function LogosSection() {
  return (
    <section className="relative space-y-4 border-t pt-6 pb-10">
      <h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
        Dibangun dengan <span className="text-foreground">teknologi modern</span>
      </h2>
      <div className="relative z-10 mx-auto max-w-4xl">
        <LogoCloud logos={techLogos} />
      </div>
    </section>
  );
}

const techLogos = [
  { src: "https://cdn.simpleicons.org/react/000000", alt: "React" },
  { src: "https://cdn.simpleicons.org/typescript/000000", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/nextdotjs/000000", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/tailwindcss/000000", alt: "Tailwind" },
  { src: "https://cdn.simpleicons.org/nodedotjs/000000", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/vite/000000", alt: "Vite" },
  { src: "https://cdn.simpleicons.org/postgresql/000000", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/figma/000000", alt: "Figma" },
  { src: "https://cdn.simpleicons.org/laravel/000000", alt: "Laravel" },
  { src: "https://cdn.simpleicons.org/vuedotjs/000000", alt: "Vue.js" },
  { src: "/logos/adobe-ps.svg", alt: "Photoshop" },
  { src: "/logos/adobe-ai.svg", alt: "Illustrator" },
  { src: "/logos/adobe-ae.svg", alt: "After Effects" },
];
