import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { Services } from "@/components/layout/services";
import { Portfolio } from "@/components/layout/portfolio";
import { CallToAction } from "@/components/layout/cta";

function App() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center w-full mt-8 lg:mt-0">
        <Hero />
        <Services />
        <Portfolio />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
