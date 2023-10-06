import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Out23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Setembro 2022" />

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Só o começo de novas lembranças que virão meu amor...
      </h1>

      <Fade direction="left">
        <div className="w-screen py-14 px-4 font-semibold">
          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-purple-400 relative">
              <img className="w-full rounded-2xl" src="/out23/2.png" />
            </div>

            <div className="w-56 p-2 z-20 rounded-2xl border border-purple-400 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/out23/1.png" />
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl border border-purple-400 absolute right-[-3rem] top-10">
              <img className="w-full rounded-2xl" src="/out23/3.png" />
            </div>
          </div>
        </div>
      </Fade>

      <NavigateButton
        className="mt-56 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
