import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { Services } from "@/components/layout/services";

function App() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center w-full mt-8 lg:mt-0">
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
