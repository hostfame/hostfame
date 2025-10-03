"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/navbar.data";
import { getIcon } from "./Icon";
import Image from "next/image";
import { Button } from "../shared/html/Button";
import ToggleTheme from "../shared/ToggleTheme";
import Offer from "../shared/Offer";
import { useTheme } from "next-themes";

const Navbar = ({ isTransparent }: { isTransparent?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const toggleMenu = () => setIsOpen((p) => !p);

  const toggleDropdown = (label: string) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setActiveDropdown((prev) => (prev === label ? null : label));
    }
  };

  // track scroll for transparent / sticky behavior
  useEffect(() => {
    const onScroll = () =>
      setScrollY(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const textClass = `${isTransparent ? "text-white" : "text-text"}`;
  const activeClassName = `${isTransparent ? "" : "text-teal-600"}`;
  const textHoverClass = `${isTransparent ? "" : "hover:text-teal-600"}`;
  const isDark = resolvedTheme === "dark";

  // white logo in dark or transparent
  const logoSrc =
    isTransparent || isDark
      ? "/assets/hostfame-white.webp"
      : "/assets/hostfame-green.webp";

  return (
    <nav
      className={`duration-300 top-0 z-50 ${isTransparent
        ? `bg-transparent ${scrollY > 70
          ? "opacity-0 pointer-events-none"
          : "opacity-100 h-auto pointer-events-auto"
        }`
        : `bg-background sticky shadow-lg border-b border-border-light-gray ${scrollY < 70
          ? "h-0 opacity-0 pointer-events-none"
          : "opacity-100 h-auto pointer-events-auto"
        }`
        }`}
    >
      {isTransparent && <Offer />}

      <section className="max-w-7xl mx-auto px-[2%]">
        <div className="mx-auto pr-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src={logoSrc} alt="logo" width={170} height={170} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden min-[840px]:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${item.subItems.some(
                          (subItem) => subItem.href === pathname
                        )
                          ? activeClassName
                          : `${textClass} ${textHoverClass}`
                          }`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      <div
                        className={`w-[400px] absolute -left-1/2 mt-2 bg-gray-background rounded-xl shadow-2xl border border-background py-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:-translate-y-1`}
                      >
                        <div className="grid grid-cols-2 gap-1 px-4">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={`flex items-start p-3 rounded-lg hover:bg-primary-light transition-all duration-200 ease-in-out transform hover:scale-102 ${subItem.href === pathname
                                ? "text-teal-600 hover:text-white"
                                : `text-text hover:text-white`
                                }`}
                            >
                              <div className="flex-shrink-0 mr-3 mt-0.5">
                                {getIcon(subItem.icon)}
                              </div>
                              <div>
                                <div className="text-sm font-semibold">
                                  {subItem.label}
                                </div>
                                <div className="text-xs mt-0.5 text-nowrap">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${item.href === pathname
                        ? `${!isTransparent ? "text-teal-600" : "text-white"
                        }`
                        : `${textClass} ${textHoverClass}`
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Desktop Right */}
              <div className="hidden items-center justify-end gap-x-4 min-[840px]:flex">
                <ToggleTheme
                  classNameForMoonIcon={`${isTransparent ? "!text-white" : ""}`}
                  classNameForSunIcon={`${isTransparent ? "!text-white" : ""}`}
                  className={`${isTransparent ? "!border-white" : ""}`}
                />
                <Button
                  href="/dashboard"
                  size="sm"
                  className="block w-full !rounded-lg"
                  onClick={() => setIsOpen(false)}
                  variant={isTransparent ? "whiteBordered" : "bordered"}
                >
                  Dashboard
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="min-[840px]:hidden flex justify-end items-center gap-x-2">
              <ToggleTheme
                classNameForMoonIcon={`${isTransparent ? "!text-white" : ""}`}
                classNameForSunIcon={`${isTransparent ? "!text-white" : ""}`}
                className={`${isTransparent ? "!border-white" : ""}`}
              />
              <button
                onClick={toggleMenu}
                className="text-text hover:text-teal-600 p-2 transition-colors duration-200"
                aria-label="Open menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-text" />
                ) : (
                  <Menu
                    className={`h-6 w-6 ${isTransparent ? "text-white" : "text-text"}`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE: Right Drawer (same-to-same as screenshot) */}
        <div
          className={`min-[840px]:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
              }`}
          />

          {/* Drawer (opens from the RIGHT) */}
          <aside
            role="dialog"
            aria-modal="true"
            className={`
              absolute right-0 top-0 h-full w-[75%] max-w-[420px]
              bg-background shadow-2xl border-l border-border-light-gray
              transition-transform duration-300 will-change-transform
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Small green square X (top-left inside drawer) */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="h-10 w-10 bg-primary flex items-center justify-center"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className=" px-8 py-12 overflow-y-auto h-[calc(100%-56px)] space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="">
                  {item.subItems ? (
                    <>
                      {/* Section header (Hosting, Business, Help Center…) */}
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`w-full flex items-center justify-between px-2 py-3
                          text-[15px] font-semibold rounded-md
                          ${item.subItems.some((s) => s.href === pathname)
                            ? "text-teal-600"
                            : "text-text hover:text-teal-600"
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Sub-items */}
                      <div
                        className={`pl-2 mt-1 overflow-hidden transition-[max-height,opacity] duration-300
                          ${activeDropdown === item.label
                            ? "max-h-[600px] opacity-100"
                            : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="">
                          <div className="space-y-2">
                            {item.subItems.map((sub, idx) => {
                              const isActive = sub.href === pathname;
                              const isLast = idx === item.subItems.length - 1;

                              return (
                                <div className=" ">
                                  <hr className="border-gray-200" />
                                  <Link
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-start gap-3 px-5 py-2 
                                      ${isActive ? "text-teal-600 rounded-md"
                                        : "text-text hover:text-teal-600"
                                      }`}
                                  >
                                    <span className={` ${isActive ? "text-teal-600" : "text-text"}`}>
                                      {getIcon(sub.icon)}
                                    </span>

                                    <div className="flex flex-col">
                                      <span className="text-sm font-medium">{sub.label}</span>
                                      {sub.description && (
                                        <span className="text-xs opacity-80">{sub.description}</span>
                                      )}
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-2 py-3 text-[15px] font-semibold rounded-md
                        ${item.href === pathname
                          ? "text-teal-600"
                          : "text-text hover:text-teal-600"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Bottom action */}
              <div className="border-t border-border-light-gray pt-4">
                <Button
                  href="/dashboard"
                  className="w-full !rounded-lg text-text"
                  variant={"dark"}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
