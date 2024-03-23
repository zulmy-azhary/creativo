import { cn } from "@/lib/utils";

type LogoProps = React.ComponentProps<"a">;

export const Logo: React.FC<LogoProps> = (props) => {
  const { className, href, ...rest } = props;

  return (
    <a
      className={cn("flex items-center gap-x-2 hover:opacity-75 transition-opacity", className)}
      href={href ?? "#"}
      {...rest}
    >
      <img src="/logo.svg" alt="Creativo's Logo" />
      <span className="text-[28px] font-semibold tracking-wide text-black">Creativo.</span>
    </a>
  );
};
