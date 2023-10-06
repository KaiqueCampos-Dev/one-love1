import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";
import { Fade } from "react-awesome-reveal";

export function Nov22() {
  return (
    <div className="w-90 flex flex-col items-center gap-4 relative pt-20">
      <MonthTitle title="Novembro 2022" />

      <Fade direction="left">
        <div className="w-80 h-[26rem] relative flex">
          <img
            className="w-60 absolute drop-shadow-md leeft-0 bottom-0 hover:z-10 hover:bottom-2"
            src="/nov22/img0.jpg"
          />
          <img
            className="w-56 absolute drop-shadow-md left-14 bottom-[-4rem] hover:z-10 hover:bottom-[-2rem]"
            src="/nov22/img2.jpg"
          />
          <img
            className="w-56 absolute drop-shadow-md left-24 bottom-[-8rem] hover:z-10 hover:bottom-[-6rem]"
            src="/nov22/img1.jpg"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-80 mt-36 pt-4 border-t-2 border-green-300">
          <p>
            Novembro foi as primeiras vezes que eu fui na sua casa, fiquei com
            seus pais e você.
          </p>

          <p className="mt-2">
            Também foi um mês que eu senti na pele e no bolso o dragãozinho que
            eu me juntei:
          </p>
        </div>

        <div className="mt-4 w-screen flex p-3 bg-green-300 relativ">
          <img className="mx-auto w-64 rounded-2xl" src="/nov22/Gif1.gif" />
          <img
            className="w-80 absolute left- bottom-[-6rem] shadow-xl"
            src="https://pngimg.com/d/sushi_PNG98814.png"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <img className="w-52 z-0 mt-28" src="/nov22/gif0.gif" />
      </Fade>

      <Fade direction="up">
        <div className="mt-20 w-screen flex flex-col p-3 pt-10 bg-yellow-200 relative">
          <p className="text-black font-bold">
            Foi nossa primeira copa juntos, mesmo o Brasil não vencendo foi uma
            das melhores que eu já vi com toda certeza. Em 2026 seremos nós,
            zikando os outros e gritando pelo Braza...
          </p>

          <img className="w-64 mt-2" src="/nov22/img4.jpeg" />
          <img className="w-64 " src="/nov22/img3.jpeg" />

          <img
            className="w-40 absolute right-8 bottom-[-2rem] shadow-xl"
            src="/nov22/world-cup.png"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-[22rem] overflow-hidden mt-32 relative">
          <img src="/nov22/img5.png" />
          <img
            className="w-48 absolute bottom-4 right-[-3rem]"
            src="https://i.pinimg.com/originals/99/a6/ad/99a6ad801bdafe742719201d4d1a7076.png"
          />
          <h1 className="w-60 p-6 leading-10">Não existe casal mais lindo que esse !!!</h1>
        </div>
      </Fade>

      <NavigateButton
        className="mt-4 w-80 z-10 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
