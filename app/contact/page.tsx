import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0f0f0f] text-white">

        {/* Hero */}

        <section className="relative flex h-[55vh] items-center justify-center">
          <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 px-6 text-center">
            <p className="mb-4 uppercase tracking-[6px] text-[#D4AF37]">
              Contact Us
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Let's Talk
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              We'd love to hear from you. Whether you're interested in our
              products, partnership opportunities, or have any questions,
              our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}

        <section className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h2 className="mb-10 text-4xl font-bold">
                Get In Touch
              </h2>

              <div className="space-y-8">

                <div className="flex gap-5">
                  <Phone className="mt-1 h-7 w-7 text-[#D4AF37]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">
                      +20 100 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Mail className="mt-1 h-7 w-7 text-[#D4AF37]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">
                      info@foodicaplus.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <MapPin className="mt-1 h-7 w-7 text-[#D4AF37]" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-400">
                      Cairo, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Clock className="mt-1 h-7 w-7 text-[#D4AF37]" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-gray-400">
                      Saturday - Thursday
                    </p>
                    <p className="text-gray-400">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Form */}

            <form className="space-y-6 rounded-3xl bg-[#171717] p-10">

              <div>
                <label className="mb-2 block">Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-5 py-4 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="mb-2 block">Email Address</label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-5 py-4 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="mb-2 block">Subject</label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-5 py-4 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="mb-2 block">Message</label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-[#0f0f0f] px-5 py-4 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

        </section>

        {/* Google Map */}

        <section className="px-6 pb-24">

          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl">

            <iframe
              src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
            />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}