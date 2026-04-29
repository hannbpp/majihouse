import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";

const testimonials: Testimonial[] = [
  {
    text: "Website selesai tepat waktu dengan kualitas luar biasa. Komunikasinya lancar, briefnya nyangkut, hasilnya pas banget sama vibe brand kami.",
    image: "/images/icon-testimoni/cowo1.webp",
    name: "Dimas Pratama",
    role: "Founder, Lokal Brand",
  },
  {
    text: "Penjualan naik 150% setelah platform baru launching. Tim MAJIHOUSE bukan cuma eksekusi, tapi juga mikirin user journey-nya.",
    image: "/images/icon-testimoni/cwe.jpg",
    name: "Lia Anggraini",
    role: "Owner, F&B Pontianak",
  },
  {
    text: "Profesionalisme tim sangat luar biasa. Revisi cepat, dokumentasi rapi, support setelah launch tetap responsif.",
    image: "/images/icon-testimoni/cowo3.jpg",
    name: "Sugondo Lesmana",
    role: "Ketua Komunitas",
  },
  {
    text: "Dari briefing pertama sampai go-live cuma 3 minggu. Animasi GSAP-nya bikin landing page kami beda dari kompetitor.",
    image: "/images/icon-testimoni/cwe1.jpg",
    name: "Nadia Kartika",
    role: "Marketing Lead, Startup Edu",
  },
  {
    text: "Awalnya cuma minta landing page, akhirnya sekalian sistem booking. MAJIHOUSE bantu mikirin ide yang sebelumnya nggak kepikiran.",
    image: "/images/icon-testimoni/cowo4.jpg",
    name: "Rizky Maulana",
    role: "Owner, Karvin Sport",
  },
  {
    text: "Desainnya clean, performance-nya kenceng, harganya masuk akal buat UMKM. Recommended buat siapapun yang serius bangun brand digital.",
    image: "/images/icon-testimoni/cwe3.jpg",
    name: "Vina Mahendra",
    role: "Founder, Marirasa Bakpao",
  },
  {
    text: "Tim yang ngerti konteks lokal Indonesia. Nggak terjebak template — solusinya selalu disesuaikan sama target audience kami.",
    image: "/images/icon-testimoni/cwo5.jpg",
    name: "Aditya Saputra",
    role: "CTO, IFL Malang",
  },
  {
    text: "Dashboard adminnya intuitif banget. Tim operasional kami yang awam tech jadi lebih confident pakai sistemnya sehari-hari.",
    image: "/images/icon-testimoni/cwe4.jpg",
    name: "Maya Wulandari",
    role: "Operations Manager",
  },
  {
    text: "Bayar berapa, dapat berapa — semua transparan. Setelah project kelar, support-nya tetap ada walau udah lewat masa garansi.",
    image: "/images/icon-testimoni/cowo3.jpg",
    name: "Bayu Hermawan",
    role: "Project Owner",
  },
];

export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return <EmptyTestimonial />;
  }

  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimoni</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Cerita dari klien yang udah ngerasain.
          </h2>
          <p className="text-center mt-5 opacity-75">
            Beberapa kata dari brand & komunitas yang udah jalan bareng kami.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={first} duration={15} />
          <TestimonialsColumn
            testimonials={second}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={third}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
