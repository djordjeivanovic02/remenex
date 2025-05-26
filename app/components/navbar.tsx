"use client";
import { SparklesPreview } from "./sparklesPreview";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useEffect, useState } from "react";
import { Locale, useTranslations } from "next-intl";
import { getUserLocale, setUserLocale } from "../services/locale";
import { TimelineDemo } from "./timeline";
import TechCarousel from "./slider";
import { CustomForm } from "./customForm";
import Footer from "./footer";

export function NavbarDemo() {
  const t = useTranslations("NavBar");
  const tSlider = useTranslations("Slider");
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
      link: "#features",
    },
    {
      name: t("technologies"),
      link: "#pricing",
    },
    {
      name: t("contact"),
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-black">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              onClick={() =>
                switchLocale((currentLocale == "sr" ? "en" : "sr") as Locale)
              }
            >
              {currentLocale == "sr" ? "en" : "sr"}
            </NavbarButton>
            <NavbarButton variant="primary">{t("call")}</NavbarButton>
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
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                {t("call")}
              </NavbarButton>
              <NavbarButton
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
      <SparklesPreview />
      <TimelineDemo />
      <div className="w-full max-w-7xl flex flex-col items-center mx-auto py-40">
        <TechCarousel />
      </div>
      <div className="w-full max-w-7xl flex flex-col items-center mx-auto">
        <CustomForm />
      </div>
      <Footer />
    </div>
  );
}
