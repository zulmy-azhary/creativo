import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Reveal } from "@/components/utils/reveal";
import { servicesData } from "@/data/services";

type AccordionItemProps<T> = React.ComponentProps<"div"> & {
  selected: T | null;
  setSelected: React.Dispatch<React.SetStateAction<AccordionItemProps<T>["selected"]>>;
  title: string;
  children: React.ReactNode;
};

const AccordionItem = <T extends string>(props: AccordionItemProps<T>) => {
  const { selected, setSelected, title, children, ...rest } = props;

  const handleTitle = (title: string) =>
    selected !== title ? setSelected(title as T) : setSelected(null);
  const isActive = selected === title;

  return (
    <div
      className="group text-start relative after:absolute after:bottom-0 after:h-[1px] after:inset-x-0 after:bg-gray-200 overflow-hidden"
      {...rest}
    >
      <div
        className={cn(
          "relative flex items-center justify-between py-8 cursor-pointer",
          isActive &&
            "after:absolute after:bottom-0 after:h-[1px] after:inset-x-0 after:bg-gray-200"
        )}
        onClick={() => handleTitle(title)}
      >
        <h1
          className={cn(
            "text-4xl tracking-tight md:tracking-wide leading-relaxed md:leading-none font-medium"
          )}
        >
          {title}
        </h1>
        <IoIosArrowDown
          className={cn("size-8 origin-center transition-transform", isActive && "rotate-180")}
        />
      </div>

      {isActive ? (
        <p className="py-6 text-[28px] font-light leading-relaxed text-white/70">{children}</p>
      ) : null}
    </div>
  );
};

export const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<(typeof servicesData)[number]["title"] | null>(null);

  return servicesData.map(({ title, description }) => (
    <Reveal key={title} className="w-full" slider sliderClassName="bg-white">
      <AccordionItem key={title} title={title} selected={selected} setSelected={setSelected}>
        {description}
      </AccordionItem>
    </Reveal>
  ));
};
