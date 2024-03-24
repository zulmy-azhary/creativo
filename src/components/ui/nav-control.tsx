import { AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar } from "@/components/layout/sidebar";
import { useToggle } from "@/context/toggle";

type NavControlProps = {
  children: React.ReactNode;
  isLaptop: boolean;
};

export const NavControl: React.FC<NavControlProps> = (props) => {
  const { children, isLaptop } = props;
  const { onClose, isOpen, setOpen } = useToggle();

  if (isLaptop) return children;

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        className="relative z-50 p-2 rounded hover:bg-black/5"
      >
        <RxHamburgerMenu className="size-6" />
      </button>
      <AnimatePresence>
        {isOpen ? <Sidebar onClose={onClose}>{children}</Sidebar> : null}
      </AnimatePresence>
    </>
  );
};
