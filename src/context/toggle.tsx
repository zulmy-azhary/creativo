import { useMediaQuery } from "@/hooks/media-query";
import { createContext, useContext, useEffect, useState } from "react";

type ToggleCtx = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<ToggleCtx["isOpen"]>>;
  onClose: () => void;
};

const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);

export const ToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isLaptop) {
      onClose();
    }
  }, [isLaptop]);

  return (
    <ToggleContext.Provider value={{ isOpen, setOpen, onClose }}>{children}</ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
