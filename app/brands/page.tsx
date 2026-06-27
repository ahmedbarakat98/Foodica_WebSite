import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const brands = [
  {
    name: "Foodica",
    image: "/brands/foodica.png",
    description:
      "Premium food products manufactured with the highest quality standards.",
  },
  {
    name: "V7",
    image: "/brands/v7.png",
    description:
      "Refreshing beverages loved by customers across Egypt.",
  },
  {
    name: "Al Ameen",
    image: "/brands/alameed.png",
    description:
      "Trusted grocery products delivering exceptional taste and quality.",
  },
  {
    name: "Cola",
    image: "/brands/cola.png",
    description:
      "Soft drinks distributed through our nationwide network.",
  },
];

export default function BrandsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0f0f0f] text-white">

        {/* Hero */}

        <section className="relative flex h-[55vh] pt-20 items-center justify-center">
          <div className="absolute inset-0 bg-[url('/brands-bg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center">
            <p className="mb-3 uppercase tracking-[6px] text-[#D4AF37]">
              Our Brands
            </p>

            <h1 className="text-6xl font-bold">
              Premium Brands
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-300">
              Discover our portfolio of trusted brands delivering quality,
              innovation and excellence to customers across Egypt.
            </p>
          </div>
        </section>

        {/* Brands */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {brands.map((brand) => (
              <div
                key={brand.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717] transition hover:-translate-y-2 hover:border-[#D4AF37]"
              >
                <div className="flex h-60 items-center justify-center bg-white p-8">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={180}
                    height={180}
                    className="object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">

                  <h3 className="mb-3 text-2xl font-bold">
                    {brand.name}
                  </h3>

                  <p className="mb-6 text-gray-400">
                    {brand.description}
                  </p>

                  <button className="flex items-center gap-2 text-[#D4AF37] transition hover:gap-4">
                    Learn More
                    <ArrowRight size={18} />
                  </button>

                </div>
              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}