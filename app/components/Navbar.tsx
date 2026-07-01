"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import foodica from "@/public/logo white.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    "About",
    "Brands",
    "Distribution",
    "Partners",
    "Careers",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-yellow-700/20 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 pb-2">
          <div>
            <Image
              src={foodica}
              alt="Foodica Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {links.map((link) => {
            const href = `/${link.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={link}
                href={href}
                className={`text-sm transition ${
                  isActive ? "text-[#C9A227]" : "text-gray-300 hover:text-[#C9A227]"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </nav>

        <button className="hidden items-center justify-center gap-8 lg:flex rounded-lg bg-[#C9A227] px-5 py-3 font-medium text-black transition hover:bg-[#d4af37]">
          Get In Touch
        </button>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-black/60 bg-black/40 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="flex flex-col p-6">
          {links.map((link) => {
            const href = `/${link.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={link}
                href={href}
                className={`py-3 transition-colors duration-300 ${
                  isActive ? "text-[#C9A227]" : "text-gray-300 hover:text-[#C9A227]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}