import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Technologies } from "@/components/sections/technologies";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { VideoIntro } from "@/components/sections/video-intro";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Link
        href="/#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </Link>
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Work />
        <Experience />
        <Services />
        <About />
        <VideoIntro />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
