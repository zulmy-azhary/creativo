import { NavItem } from "@/components/ui/nav-item";

type NavListProps = {
  title: string;
  items: { href?: string; content: string }[];
};

export const NavList: React.FC<NavListProps> = (props) => {
  const { title, items } = props;

  return (
    <div className="space-y-14">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="flex flex-col gap-y-10">
        {items.map(({ href, content }) => (
          <NavItem
            key={content}
            href={href ?? "#"}
            className="font-light tracking-tight hover:font-light md:tracking-wider text-white/50 lg:hover:text-white"
          >
            {content}
          </NavItem>
        ))}
      </ul>
    </div>
  );
};
