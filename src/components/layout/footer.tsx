import { Logo } from "@/components/ui/logo";
import { NavList } from "@/components/ui/nav-list";
import { SocialMedia } from "@/components/ui/social-media";
import { footerData } from "@/data/footer";
import { Reveal } from "@/components/utils/reveal";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center w-full text-white bg-black">
      <div className="container grid grid-cols-2 my-24 gap-y-[85px] md:grid-cols-3 xl:grid-cols-5 px-7 lg:px-28 2xl:px-52 xl:my-52">
        <div className="flex flex-col col-span-full xl:col-span-2 gap-y-6">
          <Reveal from="left">
            <Logo className="invert" />
          </Reveal>
          <Reveal from="left" delay={0.25}>
            <p className="text-lg font-light leading-loose tracking-wide text-white/50 xl:max-w-xs">
              Creativo is where your imagination and our expertise converge to create design
              solutions that elevate your brand and set you apart from the competition.
            </p>
          </Reveal>
          <Reveal from="left" delay={0.5}>
            <p className="text-2xl font-medium">hello@creativo.com</p>
          </Reveal>
          <Reveal from="left" delay={0.75}>
            <p className="text-2xl font-medium">+1-800-123 4567</p>
          </Reveal>
        </div>
        {footerData.map(({ title, items }, i) => (
          <Reveal delay={0.25 * (i + 1)} key={title}>
            <NavList title={title} items={items} />
          </Reveal>
        ))}
      </div>
      <div className="container flex flex-col items-center justify-between py-12 border-t border-gray-600 gap-y-6 md:flex-row px-7 lg:px-28 2xl:px-52 lg:py-9">
        <Reveal from="left">
          <p className="text-lg tracking-wide text-center font-extralight text-white/50 md:text-start">
            Copyright © {new Date().getFullYear()} Creativo®. All rights reserved.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <SocialMedia />
        </Reveal>
      </div>
    </footer>
  );
};
