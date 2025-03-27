import Hero from "@/components/main/Hero.jsx";
import AboutUs from "@/components/main/AboutUs.jsx";  // Add .jsx extension
import Skills from "@/components/main/Skills.jsx";
import Encryption from "@/components/main/Encryption.jsx";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <AboutUs />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
}


