import ProductCard from "../components/Card";
import products from "../assets/Product";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";

function Home() {
  return (
    <>
      <Hero />
      <LatestCollection/> 

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
