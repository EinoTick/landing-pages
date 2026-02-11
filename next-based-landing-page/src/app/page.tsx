import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";
import { TextureShowcase } from "@/components/texture-showcase";
import { Philosophy } from "@/components/philosophy";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Collection />
        <TextureShowcase />
        <Philosophy />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
