import { Link } from "react-router-dom";
import { AnchorHTMLAttributes } from "react";

interface NavigateButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  navigateTo?: string;
  design?: "simple" | "normal";
  text: string;
}

export function NavigateButton({
  navigateTo,
  text,
  design,
  ...props
}: NavigateButtonProps) {
  return (
    <Link
      to={navigateTo ? navigateTo : "/one-love"}
      className={`w-28 text-center font-semibold absolute ${
        navigateTo ? "right-10" : "left-10"
      } bottom-10 p-4 ${
        design === "simple" ? "border border-zinc-500" : "bg-red-500"
      } rounded hover:opacity-70`}
      {...props}
    >
      {text}
    </Link>
  );
}
