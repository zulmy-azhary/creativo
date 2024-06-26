import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/utils/reveal";

export const CallToAction: React.FC = () => {
  return (
    <section className="flex justify-center w-full text-white bg-black">
      <div className="container flex flex-col my-24 2xl:gap-x-7 2xl:flex-row px-7 lg:px-28 xl:my-52 gap-y-7">
        <Reveal from="left" className="basis-1/6">
          <h2 className="text-xl 2xl:translate-y-8">Let&rsquo;s Collaborate</h2>
        </Reveal>
        <div className="flex flex-col gap-y-14">
          <Reveal>
            <p className="text-4xl font-medium leading-relaxed 2xl:max-w-[60rem]">
              Ready to turn your ideas into exceptional designs? Contact us today, and let's make
              something amazing together!
            </p>
          </Reveal>
          <Reveal>
            <Button variant="secondary" className="w-full py-4 text-xl md:w-fit md:px-16">
              Let&rsquo;s Talk
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
