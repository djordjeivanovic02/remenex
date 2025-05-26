"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";

const technologies = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next", src: "/tech/next.svg" },
  { name: "PHP", src: "/tech/php.svg" },
  { name: "Docker", src: "/tech/docker.svg" },
  { name: "Figma", src: "/tech/figma.svg" },
  { name: "Flutter", src: "/tech/flutter.svg" },
  { name: "Git", src: "/tech/git.svg" },
  { name: "GitHub", src: "/tech/github.svg" },
  { name: "NGNIX", src: "/tech/ngnix.svg" },
  { name: "JavaScript", src: "/tech/js.svg" },
  { name: "Kotlin", src: "/tech/kotlin.svg" },
  { name: "Laravel", src: "/tech/laravel.svg" },
  { name: "Nest", src: "/tech/nest.svg" },
  { name: ".NET", src: "/tech/net.svg" },
  { name: "Redux", src: "/tech/redux.svg" },
  { name: "Selenium", src: "/tech/selenium.svg" },
  // Dodaj slobodno još...
];

export default function TechCarousel() {
  const t = useTranslations("Slider");
  const scrollRef = useRef<HTMLDivElement>(null);
  const duplicated = [...technologies, ...technologies, ...technologies];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let offset = 0;
    let animationFrameId: number;

    const animate = () => {
      offset -= 0.5;
      if (Math.abs(offset) >= el.scrollWidth / 3) {
        offset = 0;
      }
      el.style.transform = `translateX(${offset}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <p className="text-neutral-400 mb-4 text-xl md:text-2xl font-bold">
        {t("title")}
      </p>
      <div className="relative overflow-hidden py-6 bg-black w-full">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/5 md:w-2/5 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/5 md:w-2/5 bg-gradient-to-l from-black to-transparent" />

        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-12 md:gap-18 min-w-max"
            style={{ willChange: "transform" }}
          >
            {duplicated.map((tech, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-10 h-10 md:w-20 md:h-20"
                title={tech.name}
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill={true}
                  className="grayscale transition-all duration-300 hover:grayscale-0 active:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
