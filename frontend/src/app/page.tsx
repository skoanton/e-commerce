import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="flex gap-5 flex-col">
      <Filters></Filters>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
