import Hero from "@/components/main/Hero";
import AboutUs from "@/components/main/AboutUs";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";



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

