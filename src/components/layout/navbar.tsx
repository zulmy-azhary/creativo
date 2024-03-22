import { NavItem } from "@/components/ui/nav-item";
import { useMediaQuery } from "@/hooks/media-query";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="container flex items-center justify-between py-10 px-7 lg:px-28">
      <a href="#" className="flex items-center gap-x-2">
        <img src="/logo.svg" alt="Creativo's Logo" />
        <span className="text-2xl font-bold tracking-wide">Creativo.</span>
      </a>
      {isLaptop ? (
        <nav className="flex items-center list-none gap-x-12">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">Portfolio</NavItem>
          <Button>Get In Touch</Button>
        </nav>
      ) : (
        <button type="button" className="p-2 rounded hover:bg-black/5">
          <RxHamburgerMenu className="size-6" />
        </button>
      )}
    </header>
  );
};
