import { ReactNode } from "react";
import './styles.css';

interface TypingTextProps {
  fontFamily: "Montserrat" | "Dancing-Script";
  children: ReactNode;
}

export function TypingText({ fontFamily, children }: TypingTextProps) {
  return (
    <div className={`auto-typing text-center font-${fontFamily}`}>
      <h1>{children}</h1>
    </div>
  );
}
