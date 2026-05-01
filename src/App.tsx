import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Services } from "@/components/Services";
import { Project } from "@/components/Project";
import { Pricing } from "@/components/Pricing";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

function App() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <Header />
      <main className="grow">
        <Hero />
        <Story />
        <Services />
        <Project />
        <Pricing />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
