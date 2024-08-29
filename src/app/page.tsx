import About from "@/components/about";
import Hero from "@/components/hero";
import Products from "@/components/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto p-6 md:px-[76px] md:py-[42px]">
        <About />
        <Products />
      </div>
    </main>
  );
}
