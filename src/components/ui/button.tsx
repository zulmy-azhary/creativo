import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button">;

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        "w-fit px-8 py-3 text-sm font-bold tracking-wider text-white uppercase bg-black rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
};
