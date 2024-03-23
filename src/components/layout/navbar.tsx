import { NavItem } from "@/components/ui/nav-item";
import { useMediaQuery } from "@/hooks/media-query";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/utils/reveal";

export const Navbar: React.FC = () => {
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="container flex items-center justify-between py-10 px-7 lg:px-28">
      <Reveal from="left">
        <Logo />
      </Reveal>
      {isLaptop ? (
        <nav className="flex items-center list-none gap-x-12">
          <Reveal delay={0.25}>
            <NavItem href="#">Home</NavItem>
          </Reveal>
          <Reveal delay={0.4}>
            <NavItem href="#">About Us</NavItem>
          </Reveal>
          <Reveal delay={0.55}>
            <NavItem href="#">Portfolio</NavItem>
          </Reveal>
          <Reveal delay={0.7}>
            <Button>Get In Touch</Button>
          </Reveal>
        </nav>
      ) : (
        <button type="button" className="p-2 rounded hover:bg-black/5">
          <RxHamburgerMenu className="size-6" />
        </button>
      )}
    </header>
  );
};
