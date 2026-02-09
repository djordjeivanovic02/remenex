import { CustomForm } from "./components/customForm";
import Footer from "./components/footer";
import { NavbarDemo } from "./components/navbar";
import OurTeam from "./components/ourTeam";
import TechCarousel from "./components/slider";
import { SparklesPreview } from "./components/sparklesPreview";
import { TimelineDemo } from "./components/timeline";

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* <CustomSnowfall/> */}
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
      <div id="team" className="w-full max-w-7xl pt-40 flex mx-auto">
        <OurTeam />
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
