import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

const Services = dynamic(() => import("@/components/services"));
const Experience = dynamic(() => import("@/components/experience"));
const Projects = dynamic(() => import("@/components/projects"));
const CallToAction = dynamic(() => import("@/components/call-to-action"));
const Expertise = dynamic(() => import("@/components/expertise"));
const Formation = dynamic(() => import("@/components/formation"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

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
