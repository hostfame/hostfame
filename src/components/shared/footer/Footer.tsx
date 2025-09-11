import { footerColumns } from "@/data/footer.data";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#001466] to-[#001158] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Payment / SSL banner */}
        <div className="mx-auto max-w-7xl rounded-md shadow w-full">
          <Image
            src="/assets/ssl-commerce-all.webp"
            alt="Supported payment methods"
            width={1920}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>


        <hr className="my-6 border-white/15" />

        {/* Link columns: 2 per row on mobile */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-lg font-semibold">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((lnk) => (
                  <li key={lnk.label}>
                    <a
                      href={lnk.href}
                      className={`text-sm text-white/80 hover:text-white transition-colors ${lnk.highlight
                        ? "text-amber-300 hover:text-amber-200"
                        : ""
                        }`}
                    >
                      {lnk.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-white/15" />

        {/* Brand + socials */}
        <div className="mx-auto max-w-7xl px-6 py-6">
          {/* Row 1 */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Bigger logo */}
            <div className="relative w-[190px] h-12 sm:w-[220px] sm:h-14 sm:w-[240px] sm:h-16">
              <Image
                src="/assets/footer-logo.webp"
                alt="Hostnin"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <Link
                aria-label="Facebook"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#071B57] sm:h-8 sm:w-8"
              >
                <FaFacebookF />
              </Link>
              <Link
                aria-label="LinkedIn"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#071B57] sm:h-8 sm:w-8"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                aria-label="YouTube"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#071B57] sm:h-8 sm:w-8"
              >
                <FaYoutube />
              </Link>
              <Link
                aria-label="Instagram"
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#071B57] sm:h-8 sm:w-8"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-4 flex flex-col items-center gap-2 text-center text-xs text-white sm:text-white/80 sm:text-sm sm:flex-row sm:justify-between sm:text-left">
            <p>© 2025 Hostnin. All Rights Reserved</p>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="#" className=" hover:text-white text-nowrap">
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link href="#" className=" hover:text-white text-nowrap">
                Refund Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link href="#" className=" hover:text-white text-nowrap">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
