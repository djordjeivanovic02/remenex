import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const t = useTranslations("Timeline");
  const data = [
    {
      title: t("first"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal  md:text-sm text-neutral-200">
            <i className="font-bold">{t("firstQuote")}</i> -{" "}
            {t("firstQuoteAuthor")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://polovni-telefoni.rs" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/polovni.png"
                  alt="Polovni Telefoni image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Polovni Telefoni
                  </span>
                </div>
              </div>
            </Link>
            <Link href="https://lomtravel.com" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/lomtravel.png"
                  alt="Lom Travel image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Lom Travel
                  </span>
                </div>
              </div>
            </Link>
            <Link href="https://haostravel.com" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/haostravel.png"
                  alt="Haos Travel image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Haos Travel
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="https://github.com/djordjeivanovic02/HelloWork/tree/master/Aplikacija/HelloWork"
              target="_blank"
            >
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/hellowork.png"
                  alt="Hello Work image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Hello Work
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: t("second"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
            <i className="font-bold">{t("secondQuote")}</i> -{" "}
            {t("secondQuoteAuthor")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://github.com/Remenex/Holaa" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/hola.png"
                  alt="Holaa image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Holaa
                  </span>
                </div>
              </div>
            </Link>

            <Link href="https://codesign.rs" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/codesign.png"
                  alt="Codesign image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Codesign.
                  </span>
                </div>
              </div>
            </Link>
            <Link href="https://github.com/lekeee/dev-score" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/devscore.png"
                  alt="Devscore image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    DevScore
                  </span>
                </div>
              </div>
            </Link>
            <Link href="https://metal-rasic-2e6d3d.webflow.io/" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/metalrasic.png"
                  alt="Metal Rasic image"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Metal Rasic
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: t("third"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            {t("thirdTitle")}
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              ✅ {t("options.first")}
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              ✅ {t("options.second")}
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              ✅ {t("options.third")}
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              ✅ {t("options.forth")}
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              ✅ {t("options.fifth")}
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              ✅ {t("options.sixth")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://planinskastaza.rs" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/planinskastaza.png"
                  alt="Planinska Staza"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Planinska Staza
                  </span>
                </div>
              </div>
            </Link>
            <Link href="https://crownstudio.webflow.io" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/crownstudio.png"
                  alt="Crown Studio"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Crown Studio
                  </span>
                </div>
              </div>
            </Link>
            <Link href="https://profa.app/" target="_blank">
              <div className="relative group h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
                <Image
                  src="/images/profa.png"
                  alt="Profa"
                  width={500}
                  height={500}
                  className="object-top h-full w-full object-cover transition-all duration-500 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-bold animate-fade-in-up">
                    Profa
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="projects" className="relative w-full overflow-clip scroll-smooth">
      <Timeline data={data} />
    </div>
  );
}
