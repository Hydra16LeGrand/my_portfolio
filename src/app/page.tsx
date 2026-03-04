import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Formation from "@/components/formation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Projects />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
