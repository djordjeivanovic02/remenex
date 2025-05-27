import { CustomForm } from "./components/customForm";
import Footer from "./components/footer";
import { NavbarDemo } from "./components/navbar";
import TechCarousel from "./components/slider";
import { SparklesPreview } from "./components/sparklesPreview";
import { TimelineDemo } from "./components/timeline";

// const products: {
//   id: number;
//   title: string;
//   link: string;
//   thumbnail: string;
// }[] = [
//   {
//     id: 1,
//     title: "Metal Rasic",
//     link: "https://metal-rasic-2e6d3d.webflow.io/",
//     thumbnail: "/images/metalrasic.png"
//   },
//   {
//     id: 2,
//     title: "Polovni Telefoni",
//     link: "https://polovni-telefoni.rs",
//     thumbnail: "/images/polovni_crop2.png"
//   },
//   {
//     id: 3,
//     title: "Lom Travel",
//     link: "https://lomtravel.com",
//     thumbnail: "/images/lomtravel_crop.png"
//   },
//   {
//     id: 4,
//     title: "Holaa",
//     link: "https://github.com/Remenex/Holaa",
//     thumbnail: "/images/hola_crop.png"
//   },
//   {
//     id: 5,
//     title: "Metal Rasic",
//     link: "https://metal-rasic-2e6d3d.webflow.io/",
//     thumbnail: "/images/metalrasic.png"
//   },
//   {
//     id: 6,
//     title: "Hello Work",
//     link: "https://github.com/djordjeivanovic02/HelloWork/tree/master/Aplikacija/HelloWork",
//     thumbnail: "/images/hellowork.png"
//   },

//   {
//     id: 7,
//     title: "DevScore",
//     link: "https://github.com/lekeee/dev-score",
//     thumbnail: "/images/devscore.png"
//   },
//   {
//     id: 8,
//     title: "Codesign",
//     link: "https://codesign.rs",
//     thumbnail: "/images/codesign.png"
//   },
//   {
//     id: 9,
//     title: "Crown Studio",
//     link: "https://crownstudio.webflow.io/",
//     thumbnail: "/images/crownstudio.png"
//   },
//   {
//     id: 10,
//     title: "Planinska Staza",
//     link: "https://planinskastaza.rs",
//     thumbnail: "/images/planinskastaza.png"
//   },
//   {
//     id: 11,
//     title: "Hello Work",
//     link: "https://github.com/djordjeivanovic02/HelloWork/tree/master/Aplikacija/HelloWork",
//     thumbnail: "/images/hellowork.png"
//   },

//   {
//     id: 12,
//     title: "Haos Travel",
//     link: "https://haostravel.com",
//     thumbnail: "/images/haostravel.png"
//   },
//   {
//     id: 13,
//     title: "Night Vibe",
//     link: "https://github.com/lekeee/rmas",
//     thumbnail: "/images/nightvibe.png"
//   },
// ];

export default function Home() {
  return (
    <main className="relative bg-black">
      <NavbarDemo />
      <div>
        <SparklesPreview />
      </div>
      <TimelineDemo />
      <div
        id="technologies"
        className="w-full max-w-7xl pt-40 flex flex-col items-center mx-auto"
      >
        <TechCarousel />
      </div>
      <div
        id="contact"
        className="w-full max-w-7xl py-40 flex flex-col items-center mx-auto"
      >
        <CustomForm />
      </div>
      <Footer />
    </main>
  );
}
