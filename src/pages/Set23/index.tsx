import { Fade } from "react-awesome-reveal";
import { MonthTitle } from "../../components/month-title";
import { NavigateButton } from "../../components/navigation-button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Set23Carousel } from "../../components/set23-carousel";

export function Set23() {
  return (
    <div className="w-screen flex flex-col items-center gap-4 relative py-20">
      <MonthTitle title="Setembro 2022" />

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Em Setembro, foi nossa primeira viagem juntos.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Peruíbe sempre foi o lugar que você mais falou com carinho, desde que a
        gente se conheceu.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        O céu estrelado, os lagos, a cachoeira, as pedras pra tirar fotos, a
        ponte, a pesca dos pítus...
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        E poder ir contigo foi uma das melhores coisas, mesmo a maior parte do
        tempo eu não parando quieto. Porque me senti tão livre, que nem dormir
        que queria.
      </h1>

      <h1 className="font-Dancing-Script leading-8 w-80 mt-6">
        Foi uma das melhores viagens que eu já fiz, e ao seu lado foi bem
        melhor. (A primeira foto no lado poderia ser contigo, mas a bonita só
        pensa em dormir)
      </h1>

      <div className="w-screen mt-20">
        <div className="mx-auto h-[75rem] border-b-2 mt-8 px-7 relative w-full overflow-hidden">
          <Fade direction="left" className="shadow-sm">
            <img
              className="w-72 h-72 object-cover rounded-[50%]"
              src="/set23/3.jpg"
            />
          </Fade>

          <Fade direction="right" className="absolute top-36 left-28 shadow-sm">
            <img
              className="w-80 h-72 object-cover rounded-[50%]"
              src="/set23/5.jpg"
            />
          </Fade>

          <Fade
            direction="left"
            className="absolute top-[22rem] left-4 shadow-sm"
          >
            <img
              className="w-64 h-64 object-cover rounded-[50%]"
              src="/set23/9.jpg"
            />
          </Fade>

          <Fade
            direction="right"
            className="absolute top-[34rem] right-4 shadow-sm"
          >
            <img
              className="w-64 h-64 object-cover rounded-[50%]"
              src="/set23/12.jpg"
            />
          </Fade>

          <Fade
            direction="left"
            className="absolute top-[47rem] left-4 shadow-sm"
          >
            <img
              className="w-80 h-80 object-cover rounded-[50%]"
              src="/set23/15.jpg"
            />
          </Fade>
        </div>
      </div>

      <Set23Carousel />

      <Fade direction="right">
        <div className="w-80 mt-14">
          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 rounded-2xl border border-green-400 relative">
              <img className="w-full rounded-2xl" src="/set23/11.jpg" />
            </div>

            <div className="w-56 p-2 rounded-2xl border border-green-600 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/set23/6.jpg" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="left">
        <div className="w-screen py-14 px-4 mt-52 font-semibold bg-sky-800">
          <div className="w-80 mt-4 flex flex-col relative">
            <div className="w-56 p-2 z-10 rounded-2xl border border-bluw-400 relative">
              <img className="w-full rounded-2xl" src="/set23/13.jpg" />
            </div>

            <div className="w-56 p-2 z-20 rounded-2xl border border-bluw-600 absolute right-0 bottom-[-10rem]">
              <img className="w-full rounded-2xl" src="/set23/2.jpg" />
            </div>

            <div className="w-44 p-2 z-0 rounded-2xl border border-bluw-900 absolute right-[-3rem] top-10">
              <img className="w-full rounded-2xl" src="/set23/8.jpg" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade direction="up">
        <div className="w-screen h-[47rem] mt-14 relative">
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-green-600 absolute left-12"
            src="/set23/1.jpg"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-green-600 absolute left-32 top-36"
            src="/set23/10.jpg"
          />
          <img
            className="w-40 h-56 object-cover border-2 p-1 rounded-xl border-green-600 absolute left-56 top-[21rem]"
            src="/set23/16.jpg"
          />
          <img
            className="absolute w-56 top-[18rem] left-[-2rem]"
            src="https://www.pngkey.com/png/full/973-9737804_green-crown-emoji-emojis-remixit-sticker-emojicrown-emoji.png"
          />
          <img
            className="w-40 h-56 mr-4 object-cover border-2 p-1 rounded-xl border-green-600 absolute left-32 top-[32rem]"
            src="/set23/24.jpg"
          />
        </div>
      </Fade>

      <div className="w-screen relative overflow-hidden mt-8 flex flex-col items-center justify-center">
        <Fade direction="left">
          <h1 className="font-Dancing-Script leading-8 w-80">
            "Amo nós, amo a gente, amo você..."
          </h1>
        </Fade>

        <Fade direction="up">
          <Carousel showThumbs={false} className="mt-8">
            <img
              className="w-full h-[40rem] object-cover"
              src="/set23/23.jpg"
            />
            <img
              className="w-full h-[40rem] object-cover"
              src="/set23/14.jpg"
            />
            <img
              className="w-full h-[40rem] object-cover"
              src="/set23/24.jpg"
            />
      
          </Carousel>
        </Fade>
      </div>

      <NavigateButton
        className="mt-10 w-80 py-3 border border-zinc-500 text-center rounded"
        text="Voltar ao calendário"
        design="simple"
        navigateTo="/Calendar"
      />
    </div>
  );
}
