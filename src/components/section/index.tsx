import { ReactNode, SelectHTMLAttributes } from "react";
import { Fade } from "react-awesome-reveal";

interface SectionProps extends SelectHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

//@ts-ignore
export function Section({ children, ...props }: SectionProps) {
  return (
    <Fade direction="up">
      <section className="w-full bg-slate-600">{children}</section>
    </Fade>
  );
}
