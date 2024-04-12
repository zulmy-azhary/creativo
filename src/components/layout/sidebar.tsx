import { useToggle } from "@/context/toggle";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";

type SidebarProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { onClose, children } = props;
  const ref = useRef(null);
  const controls = useAnimation();
  const { isOpen } = useToggle();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      controls.start("visible");
    }

    return () => {
      document.body.removeAttribute("style");
    };
  }, [isOpen]);

  const isClosed = () => {
    onClose();
  };

  return (
    <motion.aside
      ref={ref}
      variants={sidebarVariants}
      initial="hidden"
      animate={controls}
      exit="hidden"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col w-full h-screen py-10 space-y-20 bg-black px-7"
    >
      <button
        onClick={isClosed}
        className="relative z-50 p-2 ml-auto rounded w-fit hover:bg-sky-100/10"
      >
        <RxCross1 className="text-white size-6" />
      </button>
      {children}
    </motion.aside>
  );
};

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};
