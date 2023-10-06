import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

export function Jul23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Julho 2023" />

      <Fade direction="left">
        <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
          Julho começou com uma semana que estavamos meio pra baixo. Então um
          decidiu fazer uma surpresa para o outro sem combinar nada...
        </h1>

        <h1 className="font-Dancing-Script leading-8 w-80 mt-4">
          Você me fez o primeiro jantar a luz de velas que tivemos
        </h1>
      </Fade>

      <Fade direction="up">
        <div className="w-screen h-[47rem] mt-10 relative">
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-12"
            src="/jul23/img12.jpg"
          />
          <img
            className="w-56 h-56 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-32 top-36"
            src="/jul23/img13.jpg"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-56 top-[21rem]"
            src="/jul23/img12.jpg"
          />
          <img
            className="absolute w-56 top-[18rem] left-[-2rem]"
            src="https://static.wixstatic.com/media/d80a98_432e252277614e9589c3fe140c27e950.png/v1/fill/w_893,h_799,al_c,q_90,enc_auto/d80a98_432e252277614e9589c3fe140c27e950.png"
          />
          <img
            className="w-40 h-56 mr-4 object-cover border-2 p-1 rounded-xl border-red-600 absolute left-32 top-[32rem]"
            src="/jul23/img11.jpeg"
          />
        </div>

        <h1 className="font-Dancing-Script leading-8 w-80 mt-4">
          E eu te levei umas das flores que você mais gostava, suas Margaridas.
          Que pra mim, é a flor que mais combina com você.
        </h1>
      </Fade>

      <div className="w-screen flex flex-col gap-2 my-20">
        <div className="w-full h-2 bg-white" />
        <div className="w-full h-6 bg-white" />
        <div className="w-full h-1 mt-2 bg-white" />
      </div>

      <Fade direction="left">
        <div className="w-full py-14 px-4font-semibold bg-zinc-800 px-4">
          <h1 className="font-Dancing-Script leading-8 mt-4 text-zinc-400">
            Foi a época que estava certo você passar na sua faculdade de
            Biologia e eu pra virar garoto de programa, então fomos num rodízio
            pra comemorar. E depois tomamos um esporro por ter gasto muito dos
            seus pais hehe.
          </h1>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-black relative">
              <img className="w-full rounded-2xl" src="/jul23/img0.jpg" />
            </div>

            <div className="w-56 p-2 z-20 rounded-2xl border border-black absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/jul23/img2.jpeg" />
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl border border-black absolute right-[-3rem] top-10">
              <img className="w-full rounded-2xl" src="/jul23/img1.webp" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-80 mt-40">
          <h1 className="font-Dancing-Script leading-8 w-80 mt-6 text-center text-pink-400">
            Fomos assistir Barbie. E você tava toda linda de maquiagem e blusa
            rosa.
          </h1>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 rounded-2xl border border-pink-400 relative">
              <img className="w-full rounded-2xl" src="/jul23/img8.jpeg" />
            </div>

            <div className="w-56 p-2 rounded-2xl border border-pink-600 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/jul23/img10.jpg" />
            </div>

            <img
              className="absolute right-0 bottom-[-10rem]"
              src="https://i.imgflip.com/7tph48.png?a471000"
            />
          </div>
        </div>
      </Fade>

      <h1 className="mt-56 w-80 text-center leading-9 font-Dancing-Script">
        Hoje em dia, "Wind of Change" toca e eu não consigo não lembrar de nós
        no show do Cover do Scorpions com Feat do Marcão.
      </h1>

      <Fade direction="left">
        <div className="mt-4 w-full overflow-hidden flex gap-2">
          <img className="w-36 object-cover" src="/jul23/img3.jpg" />
          <img className="w-36 object-cover" src="/jul23/img6.jpg" />
          <img className="w-36 object-cover" src="/jul23/img5.jpg" />
        </div>
      </Fade>

      <Fade direction="right">
        <div className=" w-full overflow-hidden flex gap-2">
          <img className="w-36 object-cover" src="/jul23/img6.jpg" />
          <img className="w-36 object-cover" src="/jul23/img4.jpg" />
          <img className="w-36 object-cover" src="/jul23/img6.jpg" />
        </div>
      </Fade>

      <div className="w-screen flex flex-col gap-2 my-20">
        <div className="w-full h-2 bg-white" />
        <div className="w-full h-6 bg-white" />
        <div className="w-full h-1 mt-2 bg-white" />
      </div>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6 text-center text-zinc-500-400">
        E por fim, foi aniversário do seu gato. Não tivemos nenhum registo, mas foi muito especial pra mim te ter ali comigo esse ano.
      </h1>

      <NavigateButton
        className="mt-10 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
