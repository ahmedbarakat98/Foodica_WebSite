import Image from "next/image";
import logo from "@/public/logo white.png";
import {
  Camera,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div id="About" className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="grid gap-12 pb-4 lg:grid-cols-5">
          {/* Logo & About */}
          <div >
            <Image
              src= {logo}
              alt="Foodica"
              width={220}
              height={80}
              className="mb-6"
            />

            <p className="text-sm leading-7 text-gray-300">
              Foodica Trading & Distribution Ltd. Co. established in 2010,
              is a leading Egyptian company in the field of importing,
              manufacturing and distributing FMCG and food products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-md  text-center font-semibold uppercase">
              Quick Links
            </h3>

            <ul className="space-y-4 text-center text-gray-300">
              <li><a href="/brands">Our Brands</a></li>
              <li><a href="/distribution">Distribution</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="mb-6 text-md text-center font-semibold uppercase">
              Our Brands
            </h3>

            <ul className="space-y-4 text-center text-gray-300">
              <li>El Ameed</li>
              <li>Nutty</li>
              <li>Bakalland</li>
              <li>Mc Sauce</li>
              <li>V7 Drinks</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-md  text-center font-semibold uppercase">
              Contact Us
            </h3>

            <div className="space-y-6 items-center justify-center text-center text-gray-300">
              
              <div className="flex items-center justify-center gap-3">
                <MapPin className="text-[#C9A227]" size={20} />
                <p>
                  5th Settlement, New Cairo, Egypt
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Phone className="text-[#C9A227]" size={20} />
                <p>+20 123 456 7890</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Mail className="text-[#C9A227]" size={20} />
                <p>info@foodica.com.eg</p>
              </div>
            </div>
          </div>

          {/* Building Image */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-gray-800">
              <Image
                src="/building.jpg"
                alt="Building"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>
              © 2025 Foodica Trading & Distribution Ltd. Co. All Rights
              Reserved.
            </p>

            <div className="flex gap-6">
              <a href="https://barakat-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A227] transition-colors duration-300">
                Created By Ahmed Barakat
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}