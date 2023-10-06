import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";
import { Fade } from "react-awesome-reveal";

export function Mai23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Maio 2023" />

      <Fade direction="up">
        <div className="w-screen overflow-x-hidden-hidden flex flex-col items-center gap-4 relative">
          <h1 className="text-center font-Dancing-Script leading-8 w-80">
            Seu presente de aniversário atrasado, esse colar é totalmente sua
            cara e seu sonho. O dia em que a gente teve nosso primeiro "filho":
            Uma tartatuga chamada Belle.
          </h1>
          <div className="w-72 p-2 mt-6 mx-auto rounded-2xl border border-zinc-400">
            <img
              className="mx-auto w-full rounded-2xl"
              src="/mai23/img0.jpeg"
            />
          </div>
          <Fade
            direction="right"
            className="w-56 absolute bottom-[-4rem] right-[-3rem]"
          >
            <img src="https://static.vecteezy.com/system/resources/previews/022/245/997/original/watercolor-of-sea-turtle-turtle-swimming-underwater-in-the-ocean-generative-ai-png.png" />
          </Fade>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-80 mt-14">
          <p>
            Fizemos um rolê bem a nossa cara, esse que com certeza é um dos que
            a gente mais guarda na memória. E lembra aquele vídeo que você me
            mandou um dia - "Duas almas livres, que por livre e espontânea
            vontade escolhem estar juntas"...
          </p>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 h-72 p-2 rounded-2xl border border-red-600 relative">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/mai23/gif0.gif"
              />
            </div>

            <div className="w-56 h-72 p-2 rounded-2xl border border-red-800 absolute right-0 bottom-[-10rem]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/mai23/gif1.gif"
              />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-full py-14 px-4 mt-52 font-semibold bg-zinc-600">
          <Fade direction="left">
            <div className="w-screen flex flex-col gap-2 mb-8">
              <div className="w-full h-2 bg-yellow-300" />
              <div className="w-full h-6 bg-yellow-300" />

              <div className="w-full h-1 mt-2 bg-yellow-300" />
            </div>
          </Fade>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-yellow-400 relative">
              <img className="w-full rounded-2xl" src="/mai23/img3.jpg" />
            </div>

            <div className="w-56 p-2 z-20 h-72 rounded-2xl border border-yellow-600 absolute right-0 bottom-[-10rem]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/mai23/img2.jpg"
              />
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl border border-yellow-500 absolute right-[-3rem] top-10">
              <img className="w-full rounded-2xl" src="/mai23/img1.jpeg" />
            </div>
          </div>
        </div>
      </Fade>

      <NavigateButton
        className="mt-36 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
