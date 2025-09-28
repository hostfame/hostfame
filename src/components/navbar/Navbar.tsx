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
import { text } from "stream/consumers";
import Offer from "../shared/Offer";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";

const Navbar = ({ isTransparent }: { isTransparent?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (label: string) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };

  useEffect(() => {
    const onScroll = () =>
      setScrollY(window.scrollY || window.pageYOffset || 0);
    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const textClass = `${isTransparent ? "text-white" : "text-text"}`;
  const activeClassName = `${isTransparent ? "" : "text-teal-600"}`;
  const textHoverClass = `${isTransparent ? "" : "hover:text-teal-600"}`;
  const isDark = resolvedTheme === "dark";

  // ✅ White logo in dark mode, or when navbar is transparent
  const logoSrc =
    isTransparent || isDark
      ? "/assets/hostfame-white.webp"
      : "/assets/hostfame-green.webp";

  return (
    <nav
      className={`  duration-300    top-0 z-50 ${isTransparent
        ? ` bg-transparent ${scrollY > 70
          ? "opacity-0 pointer-events-none"
          : " opacity-100 h-auto pointer-events-auto"
        }`
        : `bg-background sticky shadow-lg border-b border-border-light-gray ${scrollY < 70
          ? "h-0 opacity-0 pointer-events-none"
          : " opacity-100 h-auto pointer-events-auto"
        }`
        }`}
    >
      {isTransparent && <Offer />}
      <section className=" max-w-7xl mx-auto  px-[2%] ">
        <div className=" mx-auto pr-4 ">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src={logoSrc} alt={"logo"} width={170} height={170} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden min-[840px]:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.subItems ? (
                    <>
                      <button
                        className={`cursor-pointer flex items-center px-3 py-2 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${item.subItems.some(
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
                        className={` w-[400px] absolute -left-1/2 mt-2 bg-gray-background rounded-xl shadow-2xl border border-background py-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:-translate-y-1`}
                      >
                        <div className={`grid grid-cols-2 gap-1 px-4`}>
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={`flex items-start p-3 rounded-lg hover:bg-primary-light transition-all duration-200 ease-in-out transform hover:scale-102 ${subItem.href === pathname
                                ? "text-teal-600 hover:text-white"
                                : `text-text hover:text-white`
                                }`}
                            >
                              <div className={`flex-shrink-0 mr-3 mt-0.5 `}>
                                {getIcon(subItem.icon)}
                              </div>
                              <div>
                                <div className={`text-sm font-semibold `}>
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
                        ? "text-teal-300"
                        : `${textClass} ${textHoverClass}`
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Dashboard Button */}
              <div className="hidden items-center justify-end gap-x-4 min-[840px]:flex">
                <ToggleTheme
                  classNameForMoonIcon={`${isTransparent ? "!text-white" : ""}`}
                  classNameForSunIcon={`${isTransparent ? "!text-white" : ""}`}
                  className={`${isTransparent ? "!border-white" : ""}`}
                />

                <Button
                  href="/dashboard"
                  size="sm"
                  className={`block w-full  `}
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
                className="cursor-pointer text-text hover:text-teal-600 p-2 transition-colors duration-200"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-text" />
                ) : (
                  <Menu
                    className={`h-6 w-6 ${isTransparent ? "text-text" : ""}`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`min-[840px]:hidden fixed inset-0 top-0 bg-background border-t border-border-light-gray overflow-y-auto transition-all duration-300 z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } `}
        >
          <section className="flex justify-end p-4">
            <RxCross2
              onClick={() => setIsOpen(false)}
              className=" text-text"
              size={20}
            />
          </section>
          <div className="px-4 pt-4 pb-20 space-y-1 h-full">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`cursor-pointer w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-md transition-colors duration-300 ${item.subItems.some(
                        (subItem) => subItem.href === pathname
                      )
                        ? "text-teal-600"
                        : "text-text hover:text-teal-600 hover:bg-primary-light"
                        }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-1 mt-1 overflow-hidden transition-all duration-300 ${activeDropdown === item.label
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-300 ${subItem.href === pathname
                            ? "text-teal-600"
                            : "text-text hover:text-teal-600 hover:bg-primary-light"
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={
                                subItem.href === pathname
                                  ? "text-teal-600"
                                  : "text-text"
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
                    className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-300 ${item.href === pathname
                      ? "text-teal-600"
                      : "text-text hover:text-teal-600 hover:bg-primary-light"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div
              className={`pt-4 mt-4  ${isTransparent ? "" : "border-t border-border-light-gray"
                }`}
            >
              <Button
                href="/dashboard"
                className={`block w-full  `}
                onClick={() => setIsOpen(false)}
                variant={isTransparent ? "whiteBordered" : "dark"}
              >
                Dashboardadsf
              </Button>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
