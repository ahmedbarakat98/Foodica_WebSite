import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Truck,
  Warehouse,
  MapPinned,
  PackageCheck,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Fast and reliable transportation covering all governorates across Egypt.",
  },
  {
    icon: Warehouse,
    title: "Modern Warehouses",
    description:
      "Safe storage facilities maintaining product quality and freshness.",
  },
  {
    icon: PackageCheck,
    title: "Inventory Management",
    description:
      "Accurate stock control ensuring product availability at all times.",
  },
  {
    icon: MapPinned,
    title: "27 Governorates",
    description:
      "Strong distribution network reaching retailers in every region.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Efficient logistics that guarantee timely product delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Strict handling procedures to preserve product quality from warehouse to shelf.",
  },
];

export default function DistributionPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0f0f0f] text-white">

        {/* Hero */}

        <section className="relative pt-15 flex h-[70vh] items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000')",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 px-6 text-center">
            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              Distribution Network
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Delivering Across Egypt
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              Our advanced logistics network ensures reliable distribution,
              efficient inventory management and fast deliveries to retailers
              throughout Egypt.
            </p>
          </div>
        </section>

        {/* Overview */}

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <span className="font-semibold uppercase text-[#D4AF37]">
                Logistics Excellence
              </span>

              <h2 className="mt-4 mb-6 text-4xl font-bold">
                A Distribution Network You Can Trust
              </h2>

              <p className="leading-8 text-gray-400">
                Foodica Plus operates one of the most efficient distribution
                networks in Egypt, serving supermarkets, wholesalers,
                convenience stores and retail outlets with speed and accuracy.
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                Our experienced logistics team, modern fleet and warehousing
                facilities ensure every shipment arrives safely and on time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-2xl bg-[#171717] p-8 text-center">
                <h3 className="text-5xl font-bold text-[#D4AF37]">27</h3>
                <p className="mt-3 text-gray-300">
                  Governorates
                </p>
              </div>

              <div className="rounded-2xl bg-[#171717] p-8 text-center">
                <h3 className="text-5xl font-bold text-[#D4AF37]">
                  1,500+
                </h3>
                <p className="mt-3 text-gray-300">
                  Retail Outlets
                </p>
              </div>

              <div className="rounded-2xl bg-[#171717] p-8 text-center">
                <h3 className="text-5xl font-bold text-[#D4AF37]">
                  150+
                </h3>
                <p className="mt-3 text-gray-300">
                  Employees
                </p>
              </div>

              <div className="rounded-2xl bg-[#171717] p-8 text-center">
                <h3 className="text-5xl font-bold text-[#D4AF37]">
                  15+
                </h3>
                <p className="mt-3 text-gray-300">
                  Years Experience
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Services */}

        <section className="bg-[#171717] py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">
              <span className="uppercase tracking-[5px] text-[#D4AF37]">
                Our Services
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Distribution Solutions
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 transition hover:border-[#D4AF37]"
                  >
                    <Icon className="mb-6 h-10 w-10 text-[#D4AF37]" />

                    <h3 className="mb-3 text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="leading-7 text-gray-400">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="py-24">
          <div className="mx-auto max-w-5xl rounded-3xl bg-[#D4AF37] px-8 py-16 text-center">

            <h2 className="text-4xl font-bold text-black">
              Need a Reliable Distribution Partner?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-black/80">
              Join hundreds of retailers and partners who trust Foodica Plus
              for fast, secure and nationwide food distribution.
            </p>

            <button className="mt-10 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">
              Contact Our Team
            </button>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}