import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./components/Navbar";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen pt-25 items-center justify-center overflow-hidden bg-black px-6 text-white">

      {/* Background Glow */}
      <Navbar />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/10 blur-[180px]" />

      {/* Decorative Circles */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#C9A227]/10" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full border border-[#C9A227]/10" />

      <div className="relative z-10 max-w-3xl text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[6px] text-[#C9A227]">
          Error 404
        </p>

        <h1 className="animate-pulse text-[120px] font-extrabold leading-none text-[#C9A227] md:text-[180px]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-[#C9A227] bg-[#C9A227] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-[#C9A227]"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}