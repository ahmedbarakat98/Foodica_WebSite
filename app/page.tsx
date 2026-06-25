"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import bg from "../public/home bg.png";
import CountUp from "react-countup";
import egy from "../public/egy.png";
import {
  ShieldCheck,
  Truck,
  Handshake,
  TrendingUp,
  UserRound,
} from "lucide-react";
import {
  CalendarDays,
  Users,
  Store,
  MapPinned,
} from "lucide-react";
import Footer from "./components/Footer";
import Products from "./components/Products";

export default function Home() {

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      description:
        "We partner with the best brands to deliver superior quality products.",
    },
    {
      icon: Truck,
      title: "Strong Distribution",
      description:
        "Nationwide coverage with an efficient and reliable logistics network.",
    },
    {
      icon: Handshake,
      title: "Long Term Partnerships",
      description:
        "We build strong and lasting relationships with our partners and clients.",
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description:
        "Deep understanding of the Egyptian market and consumer needs.",
    },
    {
      icon: UserRound,
      title: "Dedicated Team",
      description:
        "Our experienced team is committed to your continuous success.",
    },
  ];



  return (

    <section className="relative flex-col flex min-h-screen items-center overflow-hidden bg-black">
      <Navbar />

      {/* Pattern */}


      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col">
        <Image
          src={bg}
          alt="background"
          fill
          priority
          className="object-cover -z-10"
        />

        {/* Hero Content */}
        <div className="max-w-3xl px-10 pt-30">
          <h1 className="mb-8 text-5xl font-bold leading-tight text-white md:text-5xl">
            Delivering
            <span className="block text-[#C9A227]">
              Quality Taste
            </span>
            Across Egypt
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
            Foodica Trading & Distribution is a leading Egyptian company
            specializing in importing, manufacturing and distributing
            premium FMCG and food products through a nationwide logistics
            network.
          </p>

          <button className="mb-10 flex items-center gap-2 rounded-lg bg-[#C9A227] px-8 py-4 font-semibold text-black transition hover:bg-[#d4af37]">
            Explore Brands
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-auto w-full bg-black/70 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <CalendarDays className="text-[#C9A227]" size={28} />
                <h3 className="text-4xl font-bold text-[#C9A227]">
                  <CountUp
                    end={15}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>
              </div>
              <p className="mt-2 text-lg text-white">
                Years Experience
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <Users className="text-[#C9A227]" size={28} />
                <h3 className="text-4xl font-bold text-[#C9A227]">
                  <CountUp
                    end={150}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>
              </div>
              <p className="mt-2 text-lg text-white">
                Employees
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <Store className="text-[#C9A227]" size={28} />
                <h3 className="text-4xl font-bold text-[#C9A227]">
                  <CountUp
                    end={1500}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  +
                </h3>
              </div>
              <p className="mt-2 text-lg text-white">
                Retail Outlets
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <MapPinned className="text-[#C9A227]" size={28} />
                <h3 className="text-4xl font-bold text-[#C9A227]">
                  <CountUp
                    end={27}
                    duration={4}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
              </div>
              <p className="mt-2 text-lg text-white">
                Governorates
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Products  */}
      <Products />

      {/* why choose us  */}
      <section className="relative overflow-hidden bg-black px-15 py-10">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/wheat.jpeg')",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h6 className="text-2xl font-semibold uppercase tracking-wider text-[#C9A227]">
            Why Choose Us
          </h6>
          <h3 className="pt-2 mb-10 text-3xl font-bold text-white md:text-4xl">
            Your Reliable Distribution Partner
          </h3>

          <div className="grid gap-8 md:grid-cols-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >

                  <div className="mb-2 flex justify-center">
                    <Icon
                      size={48}
                      className="text-[#C9A227]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mb-4 text-md font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="leading-8 text-sm px-2 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* last section  */}

      <section className="bg-[#faf7f1] py-20 px-15">
        <div className="mx-auto max-w-7xl px-6">

          {/* Top Section */}
          <div className="grid gap-12 lg:grid-cols-3 items-center">

            {/* Left */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                Nationwide Distribution
              </p>

              <h2 className="mb-6 text-4xl font-bold text-[#1f1f1f]">
                We Cover All of Egypt
              </h2>

              <p className="mb-8 text-gray-600 leading-8">
                Our strong logistics network ensures our products
                reach every corner of Egypt efficiently and on time.
              </p>

              <ul className="space-y-5">
                {[
                  "Wide coverage across 27 governorates",
                  "Modern fleet & logistics solutions",
                  "Serving both modern and traditional trade",
                  "Flexible and reliable delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C9A227]">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Egypt Map */}
            <div className="flex justify-center">
              <Image
                src={egy}
                alt="Egypt Map"
                className="max-h-[450px] object-contain"
              />
            </div>

            {/* Channels */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                Our Channels
              </p>

              <h2 className="mb-8 text-4xl font-bold text-[#1f1f1f]">
                Multiple Channels, One Goal
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">

                {[
                  {
                    title: "Modern Trade",
                    desc: "Hypermarkets & Supermarkets",
                    icon: "🛒",
                  },
                  {
                    title: "Traditional Trade",
                    desc: "Retail Stores & Wholesalers",
                    icon: "🏪",
                  },
                  {
                    title: "E-Commerce",
                    desc: "Online Platforms & Marketplaces",
                    icon: "🖥️",
                  },
                  {
                    title: "Food Service",
                    desc: "Hotels, Restaurants & Cafés",
                    icon: "🍽️",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white p-6 shadow-sm transition flex flex-col justify-center items-center  hover:shadow-lg"
                  >
                    <div className="mb-4 text-2xl text-[#C9A227]">
                      {item.icon}
                    </div>

                    <h3 className="mb-2 text-sm text-center font-bold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-center text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partners */}

          <div className="mt-24">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
              Our Partners
            </p>

            <h2 className="mb-10 text-4xl font-bold text-[#1f1f1f]">
              Proud to Work With
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

              {[
                "/partners/saudi.png",
                "/partners/carrefour.png",
                "/partners/spinneys.png",
                "/partners/metro.png",
                "/partners/zahran.png",
                "/partners/fathalla.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex h-28 items-center justify-center rounded-3xl bg-white p-6 shadow-sm"
                >
                  <img
                    src={logo}
                    alt="Partner"
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer  */}
      <Footer />


    </section>
  );
}
// ---------------------------------------------------------------




