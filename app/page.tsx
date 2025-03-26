import Hero from "@/components/main/Hero";
import AboutUs from "@/components/main/AboutUs";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <AboutUs />
      </div>
    </main>
  );
}

