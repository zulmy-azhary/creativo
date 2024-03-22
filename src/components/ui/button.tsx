import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "w-fit px-8 py-3 text-sm font-bold tracking-wider uppercase rounded-lg transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-black/90",
        secondary: "bg-white text-black hover:bg-white/90",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, className, children, ...rest } = props;

  return (
    <button className={cn(buttonVariants({ className, variant }))} {...rest}>
      {children}
    </button>
  );
};
