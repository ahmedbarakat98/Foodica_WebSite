import { Award, Building2, Globe2, Target, Truck, Users } from "lucide-react";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-15 flex h-[70vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/hero About.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-lg font-semibold uppercase tracking-[6px] text-[#D4AF37]">
            About Foodica Plus
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Delivering Quality
            <span className="block text-[#D4AF37]">
              Across Egypt
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Foodica Plus is one of Egypt's leading FMCG trading and
            distribution companies, delivering premium food products through
            an efficient nationwide logistics network.
          </p>
        </div>
      </section>

      {/* Company */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">

          <div>
            <span className="text-[#D4AF37] font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="mt-4 mb-6 text-4xl font-bold">
              Trusted Distribution Partner
            </h2>

            <p className="mb-6 leading-8 text-gray-400">
              Foodica Plus specializes in importing, manufacturing and
              distributing premium food brands across Egypt. Our commitment to
              quality, reliability and customer satisfaction has made us a
              trusted partner for retailers, wholesalers and international
              suppliers.
            </p>

            <p className="leading-8 text-gray-400">
              Through our nationwide distribution network, modern warehouses
              and experienced logistics team, we ensure products reach every
              governorate quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Truck className="mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-2 text-xl font-semibold">
                Fast Logistics
              </h3>
              <p className="text-gray-400">
                Nationwide delivery with an efficient transportation network.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Building2 className="mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-2 text-xl font-semibold">
                Warehousing
              </h3>
              <p className="text-gray-400">
                Modern storage facilities maintaining product quality.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Users className="mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-2 text-xl font-semibold">
                Professional Team
              </h3>
              <p className="text-gray-400">
                Experienced professionals serving customers across Egypt.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Award className="mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-2 text-xl font-semibold">
                Premium Quality
              </h3>
              <p className="text-gray-400">
                Delivering trusted brands with consistent quality standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}

      <section className="bg-[#171717] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-2xl relative border border-[#D4AF37]/20 bg-[#1f1f1f] p-10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: "url('/vision.png')",
              }}
            />
            <Target className="mb-6 h-12 w-12 text-[#D4AF37]" />

            <h3 className="mb-4 text-3xl font-bold">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-400">
              To provide premium food products through reliable logistics,
              exceptional customer service and innovative distribution
              solutions that support the growth of our partners.
            </p>
          </div>

          <div className="rounded-2xl border relative border-[#D4AF37]/20 bg-[#1f1f1f] p-10">
            <Globe2 className="mb-6 h-12 w-12 text-[#D4AF37]" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage: "url('/mission.png')",
              }}
            />

            <h3 className="mb-4 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="leading-8 text-gray-400">
              To become Egypt's most trusted FMCG distribution company by
              connecting world-class brands with customers through innovation,
              quality and operational excellence.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-4">

          {[
            {
              number: "15+",
              title: "Years Experience",
            },
            {
              number: "150+",
              title: "Employees",
            },
            {
              number: "1,500+",
              title: "Retail Outlets",
            },
            {
              number: "27",
              title: "Governorates",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 py-10 text-center"
            >
              <h3 className="text-5xl font-bold text-[#D4AF37]">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#D4AF37] py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">

          <div>
            <h2 className="text-4xl font-bold text-black">
              Let's Grow Together
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-black/80">
              Partner with Foodica Plus and experience reliable distribution,
              premium brands and nationwide coverage.
            </p>
          </div>

          <a href="/contact" className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}