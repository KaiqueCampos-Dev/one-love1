import { Link } from "react-router-dom";
import { CalendarButton } from "../../components/calendar-button";
import { NavigateButton } from "../../components/navigation-button";
import { TypingText } from "../../components/typing-text";

import { Fade } from "react-awesome-reveal";

export function Calendar() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-56 overflow-hidden text ">
        <TypingText fontFamily="Dancing-Script">Nosso calendário</TypingText>
      </div>

      <div className="w-64 h-[0.5px] mt-[-0.5rem] bg-white" />

      <Fade className="mt-10" direction="up" delay={1500}>
        <Link to={"BeforeAll"}>
          <button className="w-80 text-center text-red-400 p-4 border border-red-400 rounded">
            O começo antes do começo...
          </button>
        </Link>

        <div className="w-80 grid grid-cols-3 gap-2">
          <CalendarButton text="Out 22" />
          <CalendarButton text="Nov 22" />
          <CalendarButton text="Dec 22" />
          <CalendarButton text="Jan 23" />
          <CalendarButton text="Fev 23" />
          <CalendarButton text="Mar 23" />
          <CalendarButton text="Abr 23" />
          <CalendarButton text="Mai 23" />
          <CalendarButton text="Jun 23" />
          <CalendarButton text="Jul 23" />
          <CalendarButton text="Ago 23" />
          <CalendarButton text="Set 23" />
          <CalendarButton text="Out 23" />
        </div>
      </Fade>

      <NavigateButton text="Voltar" />
    </div>
  );
}
