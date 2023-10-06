import { Fade } from "react-awesome-reveal";

interface MonthTitleProps {
  title: string;
}

export function MonthTitle({ title }: MonthTitleProps) {
  return (
    <Fade direction="left">
      <h1 className="font-Dancing-Script">{title}</h1>
      <div className="w-80 h-[0.75px] bg-white mt-[-1rem]" />
    </Fade>
  );
}
