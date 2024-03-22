import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type AccordionItemProps<T> = React.ComponentProps<"div"> & {
  selected: T | null;
  setSelected: React.Dispatch<React.SetStateAction<T | null>>;
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
      className="group text-start relative after:absolute after:bottom-0 after:h-[1px] after:inset-x-0 after:bg-gray-200"
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
        <h1 className={cn("text-4xl tracking-tight md:tracking-wide leading-none font-medium")}>
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

const test = [
  {
    title: "Visual Branding",
    description:
      "Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience.",
  },
  {
    title: "Creative Campaign",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur illum necessitatibus, esse assumenda cumque exercitationem quibusdam itaque eveniet maiores omnis molestiae provident, placeat consequatur at.",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur est vero velit pariatur voluptas unde beatae, sint quaerat nobis nemo, illum sit molestiae? Corrupti?",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis maiores laboriosam ratione molestias ipsa facilis ducimus, esse neque est?",
  },
] as const;

export const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<(typeof test)[number]["title"] | null>(null);

  return test.map((item) => (
    <AccordionItem
      key={item.title}
      title={item.title}
      selected={selected}
      setSelected={setSelected}
    >
      {item.description}
    </AccordionItem>
  ));
};
