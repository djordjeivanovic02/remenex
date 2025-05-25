import Image from "next/image";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Menu } from "./components/ui/navbar-menu";

const products: {
  id: number;
  title: string;
  link: string;
  thumbnail: string;
}[] = [
  {
    id: 1,
    title: "Metal Rasic",
    link: "https://metal-rasic-2e6d3d.webflow.io/",
    thumbnail: "/images/metalrasic.png"
  },
  {
    id: 2,
    title: "Polovni Telefoni",
    link: "https://polovni-telefoni.rs",
    thumbnail: "/images/polovni_crop2.png"
  },
  {
    id: 3,
    title: "Lom Travel",
    link: "https://lomtravel.com",
    thumbnail: "/images/lomtravel_crop.png"
  },
  {
    id: 4,
    title: "Holaa",
    link: "https://github.com/Remenex/Holaa",
    thumbnail: "/images/hola_crop.png"
  },
  {
    id: 5,
    title: "Metal Rasic",
    link: "https://metal-rasic-2e6d3d.webflow.io/",
    thumbnail: "/images/metalrasic.png"
  },
  {
    id: 6,
    title: "Hello Work",
    link: "https://github.com/djordjeivanovic02/HelloWork/tree/master/Aplikacija/HelloWork",
    thumbnail: "/images/hellowork.png"
  },
  
  {
    id: 7,
    title: "DevScore",
    link: "https://github.com/lekeee/dev-score",
    thumbnail: "/images/devscore.png"
  },
  {
    id: 8,
    title: "Codesign",
    link: "https://codesign.rs",
    thumbnail: "/images/codesign.png"
  },
  {
    id: 9,
    title: "Crown Studio",
    link: "https://crownstudio.webflow.io/",
    thumbnail: "/images/crownstudio.png"
  },
  {
    id: 10,
    title: "Planinska Staza",
    link: "https://planinskastaza.rs",
    thumbnail: "/images/planinskastaza.png"
  },
  {
    id: 11,
    title: "Hello Work",
    link: "https://github.com/djordjeivanovic02/HelloWork/tree/master/Aplikacija/HelloWork",
    thumbnail: "/images/hellowork.png"
  },
  
  {
    id: 12,
    title: "Haos Travel",
    link: "https://haostravel.com",
    thumbnail: "/images/haostravel.png"
  },
  {
    id: 13,
    title: "Night Vibe",
    link: "https://github.com/lekeee/rmas",
    thumbnail: "/images/nightvibe.png"
  },
];

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl fixed z-100 px-4">
        <Menu>
          <Image src="/images/logo.svg" width={60} height={60} alt="Remenex"/>
        </Menu>
        </div>
      <HeroParallax products={products}/>
    </div>
  );
}
