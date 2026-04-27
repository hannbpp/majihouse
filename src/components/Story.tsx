import TextBlockAnimation from "@/components/ui/text-block-animation";

export function Story() {
  return (
    <section
      id="about"
      className="relative w-full bg-background text-foreground"
    >
      {/* 1. THE HOOK */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full">
          <TextBlockAnimation
            blockColor="#6366f1"
            animateOnScroll={true}
            duration={0.8}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight">
              Kami tidak cuma coding.
              <br />
              <span className="inline-block bg-foreground text-background px-3 pb-1 rounded-md mt-2">
                Kami bikin karya.
              </span>
            </h2>
          </TextBlockAnimation>
        </div>
      </div>

      {/* 2. THE PITCH */}
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-24 bg-muted/40">
        <div className="max-w-3xl w-full space-y-16">
          <TextBlockAnimation blockColor="#10b981" duration={0.7}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ini yang kami lakukan.
            </h3>
          </TextBlockAnimation>

          <TextBlockAnimation blockColor="#f59e0b" stagger={0.03}>
            <p className="text-lg md:text-2xl leading-relaxed text-foreground/80">
              Dari Pontianak, <strong>MAJIHOUSE</strong> meracik desain dan
              kode jadi karya digital yang punya jiwa. Kami partner — bukan
              vendor — buat brand Indonesia yang nggak puas dengan{" "}
              <em>"yang penting jadi"</em>. Dari kedai kopi sampai komunitas
              nasional, kami bantu bicara lewat pixel & baris kode.
            </p>
          </TextBlockAnimation>

          <div className="pl-6 border-l-2 border-indigo-500">
            <TextBlockAnimation blockColor="#8b5cf6" duration={0.6}>
              <p className="text-base md:text-lg italic text-muted-foreground">
                "Kalau brand kamu mau terasa hidup, kita ngobrol bareng yuk."
              </p>
            </TextBlockAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
