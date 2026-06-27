import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Briefcase,
  Users,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const jobs = [
  {
    title: "Sales Representative",
    location: "Cairo",
    type: "Full Time",
  },
  {
    title: "Warehouse Supervisor",
    location: "Giza",
    type: "Full Time",
  },
  {
    title: "Logistics Coordinator",
    location: "Alexandria",
    type: "Full Time",
  },
  {
    title: "Marketing Specialist",
    location: "Cairo",
    type: "Full Time",
  },
];

export default function CareersPage() {
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
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000')",
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 px-6 text-center">
            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              Join Our Team
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Careers at Foodica Plus
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              Join a passionate team dedicated to delivering quality food
              products and building one of Egypt's strongest distribution
              networks.
            </p>
          </div>
        </section>

        {/* Why Join */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-16 text-center">
            <span className="uppercase tracking-[5px] text-[#D4AF37]">
              Why Join Us
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Grow Your Career With Us
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <Users className="mx-auto mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-3 text-xl font-bold">
                Great Team
              </h3>
              <p className="text-gray-400">
                Work alongside experienced professionals.
              </p>
            </div>

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <GraduationCap className="mx-auto mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-3 text-xl font-bold">
                Learning
              </h3>
              <p className="text-gray-400">
                Continuous training and career development.
              </p>
            </div>

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <HeartHandshake className="mx-auto mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-3 text-xl font-bold">
                Supportive Culture
              </h3>
              <p className="text-gray-400">
                A workplace built on teamwork and respect.
              </p>
            </div>

            <div className="rounded-2xl bg-[#171717] p-8 text-center">
              <Briefcase className="mx-auto mb-5 h-10 w-10 text-[#D4AF37]" />
              <h3 className="mb-3 text-xl font-bold">
                Career Growth
              </h3>
              <p className="text-gray-400">
                Opportunities to grow within the company.
              </p>
            </div>

          </div>

        </section>

        {/* Open Positions */}

        <section className="bg-[#171717] py-24">

          <div className="mx-auto max-w-6xl px-6">

            <div className="mb-12 text-center">
              <span className="uppercase tracking-[5px] text-[#D4AF37]">
                Open Positions
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                Current Vacancies
              </h2>
            </div>

            <div className="space-y-6">

              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 md:flex-row md:items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {job.location} • {job.type}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:gap-4">
                    Apply Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Hiring Process */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">
            <span className="uppercase tracking-[5px] text-[#D4AF37]">
              Recruitment Process
            </span>

            <h2 className="mt-4 mb-16 text-4xl font-bold">
              How It Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">

            {[
              "Submit Application",
              "HR Review",
              "Interview",
              "Welcome to Foodica",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl bg-[#171717] p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-xl font-bold text-black">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>

        </section>

        {/* CTA */}

        <section className="pb-24">

          <div className="mx-auto max-w-5xl rounded-3xl bg-[#D4AF37] px-8 py-16 text-center">

            <h2 className="text-4xl font-bold text-black">
              Ready to Start Your Career?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-black/80">
              Send us your CV today and become part of one of Egypt's leading
              FMCG distribution companies.
            </p>

            <button className="mt-10 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">
              careers@foodicaplus.com
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}