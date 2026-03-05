import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import CallToAction from "@/components/call-to-action";
import Formation from "@/components/formation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <CallToAction />
        <Expertise />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
