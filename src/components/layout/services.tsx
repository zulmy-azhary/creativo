import { Accordion } from "@/components/ui/accordion";

export const Services: React.FC = () => {
  return (
    <section className="flex justify-center w-full text-white bg-black">
      <div className="container flex flex-col my-24 2xl:gap-x-7 2xl:flex-row px-7 lg:px-28 xl:my-52 gap-y-2">
        <h2 className="text-xl 2xl:translate-y-8 basis-1/6">Our Services</h2>
        <div className="w-full">
          <Accordion />
        </div>
      </div>
    </section>
  );
};
