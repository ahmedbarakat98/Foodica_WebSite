import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Handshake, Globe, Award, ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Foodica",
    logo: "/partners/foodica.png",
    country: "Egypt",
    description: "Premium FMCG products with trusted quality standards.",
  },
  {
    name: "V7",
    logo: "/partners/v7.png",
    country: "Egypt",
    description: "Innovative beverage brand distributed nationwide.",
  },
  {
    name: "Al Ameen",
    logo: "/partners/alameed.png",
    country: "Egypt",
    description: "Leading grocery products with exceptional quality.",
  },
  {
    name: "Cola",
    logo: "/partners/cola.png",
    country: "Egypt",
    description: "Refreshing beverages trusted by thousands of retailers.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0f0f0f] pt-10 text-white">

        {/* Hero */}

        <section className="relative flex h-[60vh] items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000')",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 px-6 text-center">
            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              Our Partners
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Strong Partnerships
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              We collaborate with leading manufacturers and international brands
              to deliver premium food products throughout Egypt.
            </p>
          </div>
        </section>

        {/* Why Partner */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-16 text-center">
            <span className="uppercase tracking-[5px] text-[#D4AF37]">
              Why Foodica Plus
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Building Long-Term Success
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <Handshake className="mx-auto mb-6 h-12 w-12 text-[#D4AF37]" />
              <h3 className="mb-3 text-2xl font-bold">
                Trusted Relationships
              </h3>
              <p className="text-gray-400">
                Long-term partnerships built on trust, transparency and mutual
                growth.
              </p>
            </div>

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <Globe className="mx-auto mb-6 h-12 w-12 text-[#D4AF37]" />
              <h3 className="mb-3 text-2xl font-bold">
                Nationwide Coverage
              </h3>
              <p className="text-gray-400">
                Delivering products to retailers across all governorates in
                Egypt.
              </p>
            </div>

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <Award className="mx-auto mb-6 h-12 w-12 text-[#D4AF37]" />
              <h3 className="mb-3 text-2xl font-bold">
                Premium Standards
              </h3>
              <p className="text-gray-400">
                Maintaining quality and operational excellence in every
                partnership.
              </p>
            </div>

          </div>
        </section>

        {/* Partners Grid */}

        <section className="bg-[#171717] py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">
              <span className="uppercase tracking-[5px] text-[#D4AF37]">
                Our Network
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Featured Partners
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group rounded-2xl border border-white/10 bg-[#0f0f0f] overflow-hidden transition hover:border-[#D4AF37]"
                >
                  <div className="flex h-52 items-center justify-center bg-white p-8">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={170}
                      height={170}
                      className="object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">

                    <span className="text-sm uppercase text-[#D4AF37]">
                      {partner.country}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {partner.name}
                    </h3>

                    <p className="mt-4 text-gray-400">
                      {partner.description}
                    </p>

                    <button className="mt-6 flex items-center gap-2 text-[#D4AF37] transition hover:gap-4">
                      Learn More
                      <ArrowRight size={18} />
                    </button>

                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#D4AF37] px-8 py-16 text-center">

            <h2 className="text-4xl font-bold text-black">
              Become Our Partner
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-black/80">
              We are always looking to build successful partnerships with
              manufacturers, suppliers and international brands.
            </p>

            <button className="mt-10 rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
              Partner With Us
            </button>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}