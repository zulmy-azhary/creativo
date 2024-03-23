import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/utils/reveal";
import { Image } from "@/components/ui/image";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col 2xl:flex-row basis-6/12 gap-7 px-7 md:px-0">
      <Reveal from="left" className="max-w-24 w-44 lg:w-full">
        <div className="h-1 bg-black rounded 2xl:translate-y-8 max-w-24 w-44 lg:w-full" />
      </Reveal>
      <div className="flex flex-col gap-y-6">
        <Reveal>
          <h1 className="text-4xl font-bold max-w-[15.25rem] md:max-w-lg md:text-5xl lg:text-6xl xl:text-7xl 2xl:max-w-[30.5rem] leading-snug xl:leading-none">
            Where Design Meets Innovation!
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="flex-1 text-2xl leading-relaxed lg:leading-relaxed lg:text-3xl text-slate-500">
            Whether you're a startup looking to establish your brand identity or an established
            business aiming to refresh your image, we've got the creative firepower to make it
            happen.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <Button className="py-4 text-xl px-14">Let&rsquo;s Talk</Button>
        </Reveal>
      </div>
    </div>
  );
};

const HeroImage: React.FC = () => {
  return (
    <Image
      src="/assets/bg-hero.svg"
      alt="Hero's Background Image"
      className="w-full min-w-fit max-w-screen-2xl md:w-fit xl:min-w-96 2xl:min-w-fit"
    />
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="container flex flex-col items-center justify-between w-full my-5 xl:flex-row gap-x-14 gap-y-14 md:px-7 lg:mb-0 xl:my-28 lg:px-28">
      <HeroContent />
      <HeroImage />
    </section>
  );
};
