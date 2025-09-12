"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/navbar.data";
import { getIcon } from "./Icon";
import Image from "next/image";
import { Button } from "../shared/html/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label: string) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

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

  return (
    <nav className="bg-background shadow-lg border-b border-border-light-gray sticky top-0 z-50">
      <section className=" max-w-7xl mx-auto ">
        <div className=" mx-auto px-4 ">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={"https://hostfame.com/wp-content/uploads/2024/01/H-transparent-01-e1739570608669.png.webp"}
                  alt={"logo"}
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden min-[840px]:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${
                          item.subItems.some(
                            (subItem) => subItem.href === pathname
                          )
                            ? "text-teal-600"
                            : "text-text hover:text-teal-600"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      <div
                        className={` ${
                          item.label === "Hosting" ? "w-96" : "w-56"
                        } absolute left-0 mt-2 bg-gray-background rounded-xl shadow-2xl border border-background py-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:-translate-y-1`}
                      >
                        <div
                          className={`grid ${
                            item.label === "Hosting"
                              ? "grid-cols-2"
                              : "grid-cols-1"
                          } gap-1 px-4`}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={`flex items-start p-3 rounded-lg hover:bg-primary-light transition-all duration-200 ease-in-out transform hover:scale-102 ${subItem.href === pathname
                                ? "text-teal-600 hover:text-white"
                                : "text-text hover:text-white"
                                }`}
                            >
                              <div className={`flex-shrink-0 mr-3 mt-0.5 `}>
                                {getIcon(subItem.icon)}
                              </div>
                              <div>
                                <div className={`text-sm font-semibold `}>
                                  {subItem.label}
                                </div>
                                <div className="text-xs mt-0.5">
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
                      className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${
                        item.href === pathname
                          ? "text-teal-600"
                          : "text-text hover:text-teal-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Dashboard Button */}
              <div className="hidden min-[840px]:flex">
                <Button
                  href="/dashboard"
                  size="sm"
                  className={`rounded-full ${
                    pathname === "/dashboard"
                      ? "text-teal-600"
                      : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  Dashboard
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="min-[840px]:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-teal-600 p-2 transition-colors duration-200"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`min-[840px]:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-md transition-colors duration-300 ${
                        item.subItems.some(
                          (subItem) => subItem.href === pathname
                        )
                          ? "text-teal-600"
                          : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.label
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-300 ${
                            subItem.href === pathname
                              ? "text-teal-600"
                              : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={
                                subItem.href === pathname
                                  ? "text-teal-600"
                                  : "text-teal-600"
                              }
                            >
                              {getIcon(subItem.icon)}
                            </span>
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-300 ${
                      item.href === pathname
                        ? "text-teal-600"
                        : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Button
                href="/dashboard"
                className={`block w-full ${
                  pathname === "/dashboard"
                    ? "text-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
