import { cn } from "@/lib/utils";

type NavItemProps = React.ComponentProps<"a"> & {
  children: React.ReactNode;
};

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <li>
      <a
        {...rest}
        href="#"
        className={cn(
          "text-lg tracking-wide text-slate-500 hover:text-black hover:font-semibold transition-colors",
          className
        )}
      >
        {children}
      </a>
    </li>
  );
};
