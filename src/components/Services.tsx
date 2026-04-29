import gsap from "gsap";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Project = {
  color: string;
  src: string;
  title: string;
};

const projects: Project[] = [
  {
    color: "#0f172a",
    src: "/images/portfolio/akademicompetition.id.png",
    title: "Web Development",
  },
  {
    color: "#1e293b",
    src: "/images/portfolio/pioner-gids.jpg",
    title: "System Development",
  },
  {
    color: "#475569",
    src: "/images/portfolio/Dompet Ummat.jpg",
    title: "Data Analytics",
  },
  {
    color: "#1f2937",
    src: "/images/portfolio/itfest-2025.png",
    title: "UI/UX Design",
  },
];

const scaleAnimation = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
    x: "-50%",
    y: "-50%",
  },
  initial: { scale: 0, x: "-50%", y: "-50%" },
};

type ModalState = { active: boolean; index: number };

export function Services() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <section
      id="work"
      className="py-16 overflow-hidden bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-0">
        <div className="flex flex-col md:flex-row justify-between gap-6 px-4">
          <h2 className="text-5xl md:text-7xl tracking-tight font-bold">
            Layanan.
          </h2>
          <p className="max-w-md font-medium text-muted-foreground">
            Empat layanan inti dari studio satu pintu kami. Kami siap
            jadi partner untuk bantu mikirin strategi, eksekusi, sampai support setelah
            launching.
          </p>
        </div>
        <div className="relative flex min-h-[70vh] items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            {projects.map((project, index) => (
              <Project
                index={index}
                key={project.title}
                setModal={setModal}
                title={project.title}
              />
            ))}
          </div>
          <Modal modal={modal} projects={projects} />
        </div>
      </div>
    </section>
  );
}

type ProjectProps = {
  index: number;
  title: string;
  setModal: (s: ModalState) => void;
};

function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      className="group flex w-full cursor-pointer items-center justify-between border-border border-t px-4 md:px-16 py-10 transition-all duration-200 last:border-b hover:opacity-50"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h3 className="m-0 font-normal text-3xl md:text-5xl lg:text-6xl transition-all duration-300 group-hover:translate-x-2.5">
        {title}
      </h3>
      <p className="hidden md:block font-light transition-all duration-300 group-hover:translate-x-2.5">
        Desain & Pengembangan
      </p>
    </div>
  );
}

type ModalProps = {
  modal: ModalState;
  projects: Project[];
};

function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-30 flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-background shadow-2xl"
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project) => (
            <div
              className="flex h-full w-full items-center justify-center"
              key={project.title}
              style={{ backgroundColor: project.color }}
            >
              <img
                alt={project.title}
                className="h-full w-full object-cover"
                src={project.src}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-40 flex h-20 w-20 items-center justify-center rounded-full bg-[#455CE9] font-light text-sm text-white"
        initial="initial"
        ref={cursor}
        variants={scaleAnimation}
      />
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-40 flex h-20 w-20 items-center justify-center rounded-full bg-transparent font-light text-sm text-white"
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
      >
        View
      </motion.div>
    </>
  );
}
