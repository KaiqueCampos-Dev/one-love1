import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Jan23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Janeiro 2023" />

      <Fade direction="up">
        <p className="w-80">
          Janeiro é um dos únicos meses que a gente não teve quase nenhuma
          memória. A gata tava em Peruíbe e no Sítio o mês todo...
        </p>

        <img src="/jan23/gif0.gif" />
      </Fade>

      <div className="w-full my-4 h-[0.5px] bg-white overflow-hidden" />

      <Fade direction="up">
        <div className="w-screen py-14 px-4 font-semibold bg-zinc-800 ">
          <h1 className="w-full text-center font-Dancing-Script">Memórias de Janeiro:</h1>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-yellow-400 relative">
              <img className="w-full rounded-2xl" src="/jan23/img0.jpg" />
            </div>

            <div className="w-56 p-2 z-20 rounded-2xl border border-yellow-600 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/jan23/img1.jpg" />
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl absolute right-[-3rem] top-10 overflow-hidden">
              <img
                className="w-full rounded-2xl"
                src="https://images.emojiterra.com/google/android-11/512px/1f90c-1f3fb.png"
              />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="right">
        <div className=" w-screen mt-44 overflow-hidden text-center">
          <h1 className="w-full mt-4 font-Dancing-Script">A foto que só fomos tirar em Setembro de 2023:</h1>

          <div className=" flex gap-2">
            <img className="w-36 object-cover" src="/jan23/img3.jpg" />
            <img className="w-36 object-cover" src="/jan23/img3.jpg" />
            <img className="w-36 object-cover" src="/jan23/img3.jpg" />
          </div>
        </div>
      </Fade>

      <div className="w-full my-4 h-[0.5px] bg-white" />

      <Fade direction="up">
        <div className="w-64 p-2 z-10 rounded-2xl border border-zinc-400 relative">
          <img className="w-full h-80 object-cover rounded-2xl" src="/jan23/img2.jpg" />
          <p className="text-center mt-4">Até hoje espero deitado por esse momento... Quando hein gatona????</p>
        </div>
      </Fade>

      <NavigateButton
        className="mt-10 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
