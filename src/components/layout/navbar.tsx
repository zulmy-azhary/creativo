import { NavItem } from "@/components/ui/nav-item";
import { useMediaQuery } from "@/hooks/media-query";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/utils/reveal";
import { NavControl } from "@/components/ui/nav-control";
import { ToggleProvider } from "@/context/toggle";

export const Navbar: React.FC = () => {
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="container flex items-center justify-between py-10 px-7 lg:px-28">
      <Reveal from="left">
        <Logo />
      </Reveal>
      <ToggleProvider>
        <NavControl isLaptop={isLaptop}>
          <nav className="flex flex-col items-center list-none lg:flex-row gap-x-12 gap-y-14">
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
              <Button variant={isLaptop ? "primary" : "secondary"}>Get In Touch</Button>
            </Reveal>
          </nav>
        </NavControl>
      </ToggleProvider>
    </header>
  );
};
