"use client";
import { Locale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserLocale, setUserLocale } from "../services/locale";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "./ui/resizable-navbar";

export function NavbarDemo() {
  const t = useTranslations("NavBar");
  const [currentLocale, setCurrentLocale] = useState<Locale>();

  useEffect(() => {
    const handleLocale = async () => {
      const loc = await getUserLocale();
      setCurrentLocale(loc as Locale);
    };
    handleLocale();
  }, []);

  const switchLocale = (newLocale: Locale) => {
    setUserLocale(newLocale);
    setCurrentLocale(newLocale);
  };

  const navItems = [
    {
      name: t("projects"),
      link: "#projects",
    },
    {
      name: t("technologies"),
      link: "#technologies",
    },
    {
      name: t("contact"),
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative min-w-32 flex items-center gap-4">
          <NavbarButton
            href="#"
            variant="secondary"
            onClick={() =>
              switchLocale((currentLocale == "sr" ? "en" : "sr") as Locale)
            }
          >
            {currentLocale == "sr" ? "en" : "sr"}
          </NavbarButton>
          <NavbarButton
            href="#"
            variant="primary"
            onClick={() => setShowPhone(!showPhone)}
          >
            {t("call")}
          </NavbarButton>
          {showPhone && (
            <div
              className="absolute top-10 right-0 rounded-md gap-2 flex flex-col bg-neutral-950 p-2"
              style={{
                boxShadow:
                  "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
              }}
            >
              <Link
                href="tel:067 730 3883"
                className="flex gap-1 text-white text-sm hover:text-neutral-500 duration-300"
              >
                <Image
                  src="/icons/call.svg"
                  width={20}
                  height={20}
                  alt="call"
                />
                067 730 3883
              </Link>
              <Link
                href="tel:063 347 054"
                className=" flex  gap-1 text-white text-sm hover:text-neutral-500 duration-300"
              >
                <Image
                  src="/icons/call.svg"
                  width={20}
                  height={20}
                  alt="call"
                />
                063 347 054
              </Link>
            </div>
          )}
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className=" relative flex w-full flex-col gap-4">
            <NavbarButton
              href="#"
              onClick={() => {
                setShowPhone(!showPhone);
              }}
              variant="primary"
              className="w-full"
            >
              {t("call")}
            </NavbarButton>
            {showPhone && (
              <div
                className="absolute w-full top-10 right-0 rounded-md gap-2 flex items-center z-50 justify-center bg-neutral-950 p-2"
                style={{
                  boxShadow:
                    "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
                }}
              >
                <Link
                  href="tel:067 730 3883"
                  className="flex gap-1 text-white text-sm hover:text-neutral-500 duration-300"
                >
                  <Image
                    src="/icons/call.svg"
                    width={20}
                    height={20}
                    alt="call"
                  />
                  067 730 3883
                </Link>
                <Link
                  href="tel:063 347 054"
                  className=" flex  gap-1 text-white text-sm hover:text-neutral-500 duration-300"
                >
                  <Image
                    src="/icons/call.svg"
                    width={20}
                    height={20}
                    alt="call"
                  />
                  063 347 054
                </Link>
              </div>
            )}
            <NavbarButton
              href="#"
              onClick={() =>
                switchLocale((currentLocale == "sr" ? "en" : "sr") as Locale)
              }
              variant="secondary"
              className="w-full text-white"
            >
              {currentLocale == "sr" ? "en" : "sr"}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
