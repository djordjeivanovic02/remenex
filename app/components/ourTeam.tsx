"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import TeamMemeber from "./team";

export default function OurTeam() {
  const t = useTranslations("Team");
  const members: {
    name: string;
    proffesion: string[];
    description: string;
    image: string;
  }[] = [
    {
      name: "Djordje Ivanovic",
      proffesion: ["Developer"],
      description: t("djole"),
      image: "djole.jpg",
    },
    {
      name: "Aleksa Jovanovic",
      proffesion: ["Developer"],
      description: t("leke"),
      image: "leke.jpg",
    },
    {
      name: "Mihailo Petrovic",
      proffesion: ["Designer"],
      description: t("mix"),
      image: "mix.jpg",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-6 w-full items-start justify-center flex-wrap">
      {members.map((member, index) => {
        const isBlurred = hoveredIndex !== null && hoveredIndex !== index;
        const isActive = hoveredIndex === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex flex-col items-center transition-all duration-300 ${
              isBlurred ? "blur-sm" : "blur-0 hover:scale-105"
            }`}
          >
            <TeamMemeber
              name={member.name}
              proffesion={member.proffesion}
              description={member.description}
              image={member.image}
            />

            <div
              className={`mt-2 w-[250px] text-center text-sm text-gray-700 transition-all duration-300 ${
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {member.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}
