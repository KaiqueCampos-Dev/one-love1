import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";
import { Fade } from "react-awesome-reveal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Hearts } from "../../components/hearts-up";

export function Abr23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Abril 2022" />

      <Fade direction="left">
        <p className="w-80 text-center">
          Em Abril vimos o show do Fred Mercury...
        </p>

        <div className="w-80 relative ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqQOED4rnW0_mJxJiFfTWlNCr9Jlkq4r-_AtWiYIGA18xrMLaTpNCzPkgbTtYJCHYo1E&usqp=CAU" />
          <div className="flex justify-between items-center absolute top-28">
            <p className="ml-4 mt-2 font-semibold">Sim, o Fred Mercury...</p>
            <img
              className="w-40 h-56 object-cover rounded-xl"
              src="/abr23/img1.jpg"
            />
          </div>

          <img
            className="w-56 h-72 object-cover rounded-xl mt-3"
            src="/abr23/gif0.gif"
          />

          <img
            className="w-36 h-56 object-cover rounded-xl absolute top-[23rem] right-0"
            src="/abr23/img0.jpg"
          />

          <img
            className="w-56 h-72 object-cover rounded-xl mt-3"
            src="/abr23/gif3.gif"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-full h-[55rem] py-14 px-4 mt-20 font-semibold bg-red-950">
          <h1 className="font-Dancing-Script leading-8">
            Algumas memórias dos nossos rolezinhos por ai. Jantares, risadas,
            tentativas de tirar "A Foto".
          </h1>

          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-red-400 relative">
              <Fade direction="up">
                <img className="w-full rounded-2xl" src="/abr23/img1.jpg" />
              </Fade>
            </div>

            <div className="w-56 p-2 z-20 rounded-2xl border border-red-600 absolute right-0 bottom-[-10rem]">
              <Fade direction="up">
                <img className="w-full rounded-2xl" src="/abr23/img3.jpg" />
              </Fade>
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl border border-red-900 absolute right-[-3rem] top-10">
              <Fade direction="up">
                <img className="w-full rounded-2xl" src="/abr23/gif4.gif" />
              </Fade>
            </div>

            <div className="w-44 p-2 z-20 rounded-2xl border border-red-600 absolute right-[-3rem] top-[32rem]">
              <Fade direction="up">
                <img className="w-full rounded-2xl" src="/abr23/img2.jpg" />
              </Fade>
            </div>

            <div className="w-40  p-2 z-20 rounded-2xl border border-red-600 absolute left-0 top-[27rem]">
              <Fade direction="up">
                <img className="w-full rounded-2xl" src="/abr23/img4.jpg" />
              </Fade>
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-screen mt-44 p-7 rounded-t-3xl bg-red-950 relative">
          <h1 className="w-full font-Dancing-Script leading-8">
            Lembra do vestido vermelho?
          </h1>

          <p className="w-full mt-4">
            Quando eu te vi com ele lembrei de quando a gente se conheceu. E
            planejou de um dia ir pra uma festa pique Thomas Shelby e Grace.
          </p>

          <p className="w-full mt-4">
            Você parecia a Grace com o vestido vermelho quando ela dança com o
            Thomy. Tava maravilhosa, até hoje é o vestido mais lindo que você já
            usou...
          </p>

          <img
            className="rounded-2xl shadow-lg mt-6"
            src="https://blog.beard.com.br/wp-content/uploads/2020/07/peaky-blinders-grace-and-tommy-shelby.jpg"
          />
        </div>
      </Fade>

      <div className="w-screen flex flex-col gap-2 mt-16">
        <div className="w-full h-2 bg-slate-200"/>
        <div className="w-full h-6 bg-slate-200"/>

        <div className="w-full h-1 mt-2 bg-slate-200"/>
      </div>

      <div className="w-screen relative overflow-hidden mt-16 flex flex-col items-center justify-center">
        <Hearts />

        <Fade direction="left">
          <h1 className="font-Dancing-Script leading-8 w-80">E tivemos, por fim, seu aniversário. A pessoa do "com quem será de 2022" estava presente em 2023 e ao seu lado. E foi uma das melhores coisas, te ver amadurecer, seguir seus sonhos, ver cada passo da sua jornada estando ali contigo, como seu companheiro de vida. Tenho muito orgulho da mulher que você se tornou, e ainda mais ser ser a MINHA mulher. Sacou minha gata?</h1>
        </Fade>

        <Fade direction="up">
          <Carousel showThumbs={false} className="mt-4">
            <img className="w-full h-[40rem] object-cover" src="/abr23/gif5.gif" />
            <img className="w-full h-[40rem] object-cover" src="/abr23/gif6.gif" />
            <img className="w-full h-[40rem] object-cover" src="/abr23/img6.jpg" />
            <img className="w-full h-[40rem] object-cover" src="/abr23/img5.jpg" />
          </Carousel>
        </Fade>
      </div>

      <Fade direction="left">
          <h1 className="font-Dancing-Script leading-8 w-80 text-center mt-9 text-5xl">Eu te amo Loirinha</h1>
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
